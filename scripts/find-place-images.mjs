import { access, readFile, writeFile } from 'node:fs/promises';
import { constants } from 'node:fs';
import { URL, URLSearchParams } from 'node:url';

const ATLAS_FILE = 'src/data/atlas.ts';
const OUTPUT_FILE = 'src/data/place-images.generated.json';
const REQUEST_TIMEOUT_MS = 12_000;
const SOURCE_TYPES = [
  'user-supplied',
  'official-site',
  'facebook',
  'instagram',
  'wikimedia',
  'tripadvisor',
  'wanderlog',
  'restaurant-guru',
  'public-directory',
  'none'
];

const args = new Set(process.argv.slice(2));
const categoryArg = process.argv.find((arg) => arg.startsWith('--category='));
const targetCategory = categoryArg?.split('=').slice(1).join('=') || null;
const refresh = args.has('--refresh');

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const fetchText = async (url) => {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), REQUEST_TIMEOUT_MS);
  try {
    const response = await fetch(url, {
      headers: {
        'user-agent': 'ThingsToDoAtlas editorial image research/2.0 (+https://thingstodoatlas.com)'
      },
      redirect: 'follow',
      signal: controller.signal
    });
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    return await response.text();
  } finally {
    clearTimeout(timer);
  }
};

const decodeHtml = (value = '') => value
  .replaceAll('&amp;', '&')
  .replaceAll('&quot;', '"')
  .replaceAll('&#39;', "'")
  .replaceAll('&lt;', '<')
  .replaceAll('&gt;', '>');

const unescapeString = (value = '') => value
  .replace(/\\(['"\\])/g, '$1')
  .replace(/\\n/g, '\n')
  .trim();

const field = (block, name) => {
  const doubleQuoted = block.match(new RegExp(`${name}:\\s*"((?:\\\\.|[^"\\\\])*)"`));
  if (doubleQuoted) return unescapeString(doubleQuoted[1]);
  const singleQuoted = block.match(new RegExp(`${name}:\\s*'((?:\\\\.|[^'\\\\])*)'`));
  return singleQuoted ? unescapeString(singleQuoted[1]) : null;
};

const readPlaces = (source) => source
  .split('\n  {\n')
  .filter((block) => block.includes("category: '"))
  .map((block) => ({
    slug: field(block, 'slug'),
    name: field(block, 'name'),
    category: field(block, 'category'),
    city: field(block, 'city'),
    country: field(block, 'country'),
    subcategory: field(block, 'subcategory'),
    cuisine: field(block, 'cuisine')
  }))
  .filter((place) => place.slug && place.name && place.category && place.city && place.country);

const normalize = (value = '') => value
  .normalize('NFD')
  .replace(/[\u0300-\u036f]/g, '')
  .replace(/[’‘`´]/g, "'")
  .replace(/[^a-z0-9]+/gi, ' ')
  .trim()
  .toLowerCase();

const decodeSearchUrl = (href) => {
  try {
    const absolute = href.startsWith('//') ? `https:${href}` : href;
    const parsed = new URL(absolute);
    const redirected = parsed.searchParams.get('uddg');
    return redirected ? decodeURIComponent(redirected) : parsed.href;
  } catch {
    return null;
  }
};

const searchWeb = async (query) => {
  const html = await fetchText(`https://html.duckduckgo.com/html/?${new URLSearchParams({ q: query })}`);
  return [...html.matchAll(/<a[^>]+class="result__a"[^>]+href="([^"]+)"[^>]*>([\s\S]*?)<\/a>/g)]
    .slice(0, 10)
    .map((match) => ({
      url: decodeSearchUrl(decodeHtml(match[1])),
      title: decodeHtml(match[2].replace(/<[^>]+>/g, ' ')).replace(/\s+/g, ' ').trim()
    }))
    .filter((result) => result.url);
};

const resolveImageUrl = (image, pageUrl) => {
  if (!image || /^data:/i.test(image)) return null;
  try {
    return new URL(decodeHtml(image), pageUrl).href;
  } catch {
    return null;
  }
};

const isUsableImage = (url) => Boolean(url) &&
  !/(?:favicon|sprite|logo|avatar|icon|placeholder|google\.png|transparent)/i.test(url);

const metaImage = (html, pageUrl) => {
  const patterns = [
    /<meta[^>]+property=["']og:image(?::secure_url)?["'][^>]+content=["']([^"']+)["']/i,
    /<meta[^>]+content=["']([^"']+)["'][^>]+property=["']og:image(?::secure_url)?["']/i,
    /<meta[^>]+name=["']twitter:image(?::src)?["'][^>]+content=["']([^"']+)["']/i,
    /<meta[^>]+content=["']([^"']+)["'][^>]+name=["']twitter:image(?::src)?["']/i,
    /["']image["']\s*:\s*["']([^"']+)["']/i
  ];
  for (const pattern of patterns) {
    const match = html.match(pattern);
    const resolved = resolveImageUrl(match?.[1], pageUrl);
    if (isUsableImage(resolved)) return resolved;
  }
  return null;
};

const pageMatches = (html, resultTitle, place) => {
  const haystack = normalize(`${resultTitle} ${html.slice(0, 250_000)}`);
  const nameTokens = normalize(place.name).split(' ').filter((token) => token.length > 2);
  const tokenMatches = nameTokens.filter((token) => haystack.includes(token)).length;
  const requiredMatches = Math.max(1, Math.ceil(nameTokens.length * 0.6));
  return tokenMatches >= requiredMatches && haystack.includes(normalize(place.city));
};

const sourceTypeForUrl = (url) => {
  if (/facebook\.com/i.test(url)) return 'facebook';
  if (/instagram\.com/i.test(url)) return 'instagram';
  if (/wanderlog\.com/i.test(url)) return 'wanderlog';
  if (/tripadvisor\./i.test(url)) return 'tripadvisor';
  if (/restaurantguru\.com/i.test(url)) return 'restaurant-guru';
  return 'official-site';
};

const confidenceForSource = (sourceType) => ({
  'official-site': 0.92,
  facebook: 0.88,
  instagram: 0.86,
  wikimedia: 0.84,
  tripadvisor: 0.78,
  wanderlog: 0.78,
  'restaurant-guru': 0.72,
  'public-directory': 0.66
}[sourceType] || 0.6);

const findWikimedia = async (place) => {
  const query = encodeURIComponent(`${place.name} ${place.city} ${place.country}`);
  const endpoint = `https://commons.wikimedia.org/w/api.php?action=query&generator=search&gsrsearch=${query}&gsrnamespace=6&gsrlimit=8&prop=imageinfo&iiprop=url|extmetadata&format=json&origin=*`;
  const data = JSON.parse(await fetchText(endpoint));
  const pages = Object.values(data.query?.pages || {});
  const placeName = normalize(place.name);
  const match = pages.find((page) => {
    const title = normalize(page.title || '');
    return page.imageinfo?.[0]?.url && (title.includes(placeName) || placeName.includes(title.replace(/^file /, '')));
  });
  if (!match) return null;
  const info = match.imageinfo[0];
  const metadata = info.extmetadata || {};
  const license = metadata.LicenseShortName?.value || null;
  if (!license || !/CC|Public domain|PD/i.test(license)) return null;
  return {
    selectedImage: info.url,
    sourcePage: `https://commons.wikimedia.org/wiki/${encodeURIComponent(match.title.replace(/ /g, '_'))}`,
    sourceType: 'wikimedia',
    sourceName: match.title,
    author: metadata.Artist?.value || null,
    license,
    confidence: confidenceForSource('wikimedia'),
    status: 'approved',
    note: 'Wikimedia image matched with a reusable licence.'
  };
};

const candidateFromSearch = async (place, query, expectedType = null) => {
  let results;
  try {
    results = await searchWeb(query);
  } catch {
    return null;
  }

  for (const result of results) {
    const sourceType = expectedType || sourceTypeForUrl(result.url);
    if (expectedType === 'official-site' && /facebook\.com|instagram\.com|wanderlog\.com|tripadvisor\.|restaurantguru\.com/i.test(result.url)) continue;

    let html;
    try {
      html = await fetchText(result.url);
    } catch {
      continue;
    }
    if (!pageMatches(html, result.title, place)) continue;
    const image = metaImage(html, result.url);
    if (!image) continue;

    return {
      selectedImage: image,
      sourcePage: result.url,
      sourceType,
      sourceName: place.name,
      author: null,
      license: null,
      confidence: confidenceForSource(sourceType),
      status: 'approved',
      note: `Public image matched to ${place.name}; source page retained for editorial review.`
    };
  }
  return null;
};

const findCandidate = async (place) => {
  const exact = `"${place.name}" ${place.city} ${place.country}`;
  const searches = [
    [exact + ' official restaurant', 'official-site'],
    [exact + ' site:facebook.com', 'facebook'],
    [exact + ' site:instagram.com', 'instagram'],
    [exact + ' site:wanderlog.com/place/details', 'wanderlog'],
    [exact + ' site:tripadvisor.com', 'tripadvisor'],
    [exact + ' site:restaurantguru.com', 'restaurant-guru'],
    [exact + ' restaurant photo', null]
  ];

  for (const [query, sourceType] of searches) {
    const candidate = await candidateFromSearch(place, query, sourceType);
    if (candidate) return candidate;
    await sleep(300);
  }

  try {
    const wikimedia = await findWikimedia(place);
    if (wikimedia) return wikimedia;
  } catch {}

  return {
    selectedImage: null,
    sourcePage: null,
    sourceType: 'none',
    confidence: 0,
    status: 'none',
    note: 'No sufficiently reliable public image was found in this research pass.'
  };
};

let existing = [];
try {
  await access(OUTPUT_FILE, constants.F_OK);
  existing = JSON.parse(await readFile(OUTPUT_FILE, 'utf8'));
} catch {}

const previous = new Map(existing.map((item) => [item.slug, item]));
const allPlaces = readPlaces(await readFile(ATLAS_FILE, 'utf8'));
const targetPlaces = targetCategory
  ? allPlaces.filter((place) => place.category === targetCategory)
  : allPlaces;
const targetSlugs = new Set(targetPlaces.map((place) => place.slug));
const researched = [];

for (const [index, place] of targetPlaces.entries()) {
  const old = previous.get(place.slug);
  const preserveUserPhoto = old?.status === 'approved' && old?.sourceType === 'user-supplied';
  const preserveExisting = !refresh && (old?.status === 'approved' || old?.status === 'needs-review');
  const result = preserveUserPhoto || preserveExisting ? old : await findCandidate(place);

  researched.push({
    slug: place.slug,
    placeName: place.name,
    category: place.category,
    selectedImage: result?.selectedImage || null,
    sourcePage: result?.sourcePage || null,
    sourceType: SOURCE_TYPES.includes(result?.sourceType) ? result.sourceType : 'public-directory',
    sourceName: result?.sourceName || null,
    author: result?.author || null,
    license: result?.license || null,
    confidence: result?.confidence || 0,
    status: result?.status || 'none',
    imageSourceUrl: result?.selectedImage || null,
    imageSourceType: result?.sourceType || 'none',
    imageAuthor: result?.author || null,
    imageLicense: result?.license || null,
    imageIsGeneric: false,
    note: result?.note || null
  });

  console.log(`[${index + 1}/${targetPlaces.length}] ${place.name}: ${researched.at(-1).status} (${researched.at(-1).sourceType})`);
}

const researchedBySlug = new Map(researched.map((item) => [item.slug, item]));
const merged = existing
  .filter((item) => !targetSlugs.has(item.slug))
  .concat(targetPlaces.map((place) => researchedBySlug.get(place.slug)));

await writeFile(OUTPUT_FILE, `${JSON.stringify(merged, null, 2)}\n`);
console.log(`Wrote ${researched.length} researched ${targetCategory || 'place'} records to ${OUTPUT_FILE}.`);
console.log(JSON.stringify(researched.reduce((summary, item) => {
  summary[item.status] = (summary[item.status] || 0) + 1;
  return summary;
}, {}), null, 2));
