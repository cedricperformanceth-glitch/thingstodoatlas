import { access, readFile, writeFile } from 'node:fs/promises';
import { constants } from 'node:fs';
import { URL, URLSearchParams } from 'node:url';

const ATLAS_FILE = process.env.ATLAS_FILE || 'src/data/atlas.ts';
const OUTPUT_FILE = process.env.PLACE_IMAGES_FILE || 'src/data/place-images.generated.json';
const REQUEST_TIMEOUT_MS = Number(process.env.IMAGE_REQUEST_TIMEOUT_MS || 12_000);
const SOURCE_TYPES = [
  'user-supplied',
  'official-site',
  'facebook',
  'instagram',
  'wikimedia',
  'tripadvisor',
  'wanderlog',
  'restaurant-guru',
  'booking',
  'public-directory',
  'atlas-fallback',
  'category-fallback',
  'none'
];

const CATEGORY_TERMS = {
  restaurants: ['restaurant', 'food', 'dining'],
  cafes: ['cafe', 'coffee shop', 'bakery'],
  accommodation: ['hotel', 'guesthouse', 'hostel', 'accommodation'],
  guesthouses: ['guesthouse', 'hostel', 'hotel', 'accommodation'],
  'scooter-rental': ['scooter rental', 'motorbike rental', 'bike rental'],
  'bolaven-loop': ['travel route', 'road trip', 'Bolaven Plateau'],
  waterfalls: ['waterfall', 'natural attraction'],
  'things-to-do': ['attraction', 'activity', 'landmark'],
  'gyms-fitness': ['gym', 'fitness centre', 'sports club'],
  'markets-shopping': ['market', 'shopping', 'mall', 'supermarket'],
  'essential-information': ['office', 'hospital', 'clinic', 'public service']
};

const CATEGORY_FALLBACKS = {
  restaurants: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1200&q=84',
  cafes: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1200&q=84',
  accommodation: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=84',
  guesthouses: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=84',
  'scooter-rental': 'https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&w=1200&q=84',
  'bolaven-loop': 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=84',
  waterfalls: 'https://images.unsplash.com/photo-1433086966358-54859d0ed716?auto=format&fit=crop&w=1200&q=84',
  'things-to-do': 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=84',
  'gyms-fitness': 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1200&q=84',
  'markets-shopping': 'https://images.unsplash.com/photo-1488459716781-31db52582fe9?auto=format&fit=crop&w=1200&q=84',
  'essential-information': 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=84'
};

const argv = process.argv.slice(2);
const args = new Set(argv);
const option = (name) => {
  const prefix = `${name}=`;
  const match = argv.find((arg) => arg.startsWith(prefix));
  return match ? match.slice(prefix.length).trim() || null : null;
};

const targetCategory = option('--category');
const targetCity = option('--city');
const targetCountry = option('--country');
const targetSlug = option('--slug');
const refresh = args.has('--refresh');
const refreshGeneric = args.has('--refresh-generic');

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const fetchText = async (url) => {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), REQUEST_TIMEOUT_MS);
  try {
    const response = await fetch(url, {
      headers: {
        'user-agent': 'ThingsToDoAtlas editorial image research/3.0 (+https://thingstodoatlas.com)'
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

const extractArrayObjects = (source, exportName) => {
  const declaration = source.indexOf(`export const ${exportName}`);
  if (declaration < 0) return [];
  const arrayStart = source.indexOf('[', declaration);
  if (arrayStart < 0) return [];

  const objects = [];
  let squareDepth = 1;
  let braceDepth = 0;
  let objectStart = -1;
  let quote = null;
  let escaped = false;

  for (let index = arrayStart + 1; index < source.length; index += 1) {
    const char = source[index];

    if (quote) {
      if (escaped) escaped = false;
      else if (char === '\\') escaped = true;
      else if (char === quote) quote = null;
      continue;
    }

    if (char === '"' || char === "'" || char === '`') {
      quote = char;
      continue;
    }

    if (char === '[') squareDepth += 1;
    if (char === ']') {
      squareDepth -= 1;
      if (squareDepth === 0) break;
    }

    if (char === '{') {
      if (braceDepth === 0 && squareDepth === 1) objectStart = index;
      braceDepth += 1;
    } else if (char === '}') {
      braceDepth -= 1;
      if (braceDepth === 0 && objectStart >= 0) {
        objects.push(source.slice(objectStart, index + 1));
        objectStart = -1;
      }
    }
  }

  return objects;
};

const readPlaces = (source) => extractArrayObjects(source, 'places')
  .map((block) => ({
    slug: field(block, 'slug'),
    name: field(block, 'name'),
    category: field(block, 'category'),
    city: field(block, 'city'),
    country: field(block, 'country'),
    subcategory: field(block, 'subcategory'),
    cuisine: field(block, 'cuisine'),
    image: field(block, 'image'),
    mapsUrl: field(block, 'mapsUrl')
  }))
  .filter((place) => place.slug && place.name && place.category && place.city && place.country);

const normalize = (value = '') => value
  .normalize('NFD')
  .replace(/[\u0300-\u036f]/g, '')
  .replace(/[’‘`´]/g, "'")
  .replace(/[^a-z0-9]+/gi, ' ')
  .trim()
  .toLowerCase();

const sameValue = (left, right) => normalize(left || '') === normalize(right || '');

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
  /^https?:/i.test(url) &&
  !/(?:favicon|sprite|logo|avatar|icon|placeholder|google\.png|transparent|tracking|pixel)/i.test(url);

const metaImage = (html, pageUrl) => {
  const patterns = [
    /<meta[^>]+property=["']og:image(?::secure_url)?["'][^>]+content=["']([^"']+)["']/i,
    /<meta[^>]+content=["']([^"']+)["'][^>]+property=["']og:image(?::secure_url)?["']/i,
    /<meta[^>]+name=["']twitter:image(?::src)?["'][^>]+content=["']([^"']+)["']/i,
    /<meta[^>]+content=["']([^"']+)["'][^>]+name=["']twitter:image(?::src)?["']/i,
    /<link[^>]+rel=["']image_src["'][^>]+href=["']([^"']+)["']/i,
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
  const haystack = normalize(`${resultTitle} ${html.slice(0, 300_000)}`);
  const nameTokens = normalize(place.name).split(' ').filter((token) => token.length > 2);
  const tokenMatches = nameTokens.filter((token) => haystack.includes(token)).length;
  const requiredMatches = Math.max(1, Math.ceil(nameTokens.length * 0.6));
  const locationMatches = haystack.includes(normalize(place.city)) || haystack.includes(normalize(place.country));
  return tokenMatches >= requiredMatches && locationMatches;
};

const sourceTypeForUrl = (url) => {
  if (/facebook\.com/i.test(url)) return 'facebook';
  if (/instagram\.com/i.test(url)) return 'instagram';
  if (/wanderlog\.com/i.test(url)) return 'wanderlog';
  if (/tripadvisor\./i.test(url)) return 'tripadvisor';
  if (/restaurantguru\.com/i.test(url)) return 'restaurant-guru';
  if (/booking\.com|agoda\.com|hotels\.com|hostelworld\.com/i.test(url)) return 'booking';
  if (/cybo\.com|mapstr\.com|wongnai\.com|trip\.com|ctrip\.com|localgymsandfitness\.com|beautynailhairsalons\.com/i.test(url)) return 'public-directory';
  return 'official-site';
};

const confidenceForSource = (sourceType) => ({
  'official-site': 0.92,
  facebook: 0.88,
  instagram: 0.86,
  wikimedia: 0.84,
  booking: 0.8,
  tripadvisor: 0.78,
  wanderlog: 0.78,
  'restaurant-guru': 0.72,
  'public-directory': 0.66,
  'atlas-fallback': 0.35,
  'category-fallback': 0.2,
  none: 0
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
    imageIsGeneric: false,
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
    const detectedType = sourceTypeForUrl(result.url);
    const sourceType = expectedType || detectedType;
    if (expectedType === 'official-site' && detectedType !== 'official-site') continue;

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
      imageIsGeneric: false,
      note: `Public image matched to ${place.name}; source page retained for editorial review.`
    };
  }
  return null;
};

const categoryDescriptor = (place) => [
  place.subcategory,
  place.cuisine,
  ...(CATEGORY_TERMS[place.category] || [place.category])
].filter(Boolean).join(' ');

const searchesForPlace = (place) => {
  const exact = `"${place.name}" "${place.city}" ${place.country}`;
  const descriptor = categoryDescriptor(place);
  const searches = [
    [exact + ' official website', 'official-site'],
    [exact + ' site:facebook.com', 'facebook'],
    [exact + ' site:instagram.com', 'instagram'],
    [exact + ' site:wanderlog.com/place/details', 'wanderlog'],
    [exact + ' site:tripadvisor.com', 'tripadvisor']
  ];

  if (place.category === 'accommodation' || place.category === 'guesthouses') {
    searches.push([exact + ' site:booking.com', 'booking']);
    searches.push([exact + ' site:hostelworld.com', 'booking']);
  }
  if (place.category === 'restaurants' || place.category === 'cafes') {
    searches.push([exact + ' site:restaurantguru.com', 'restaurant-guru']);
  }

  searches.push([`${exact} ${descriptor} photo`, null]);
  searches.push([`${exact} ${descriptor}`, null]);
  return searches;
};

const fallbackCandidate = (place) => {
  if (isUsableImage(place.image)) {
    return {
      selectedImage: place.image,
      sourcePage: place.mapsUrl || null,
      sourceType: 'atlas-fallback',
      sourceName: place.name,
      author: null,
      license: null,
      confidence: confidenceForSource('atlas-fallback'),
      status: 'approved',
      imageIsGeneric: true,
      note: 'No exact public image was found; retained the image already configured on the place record.'
    };
  }

  const selectedImage = CATEGORY_FALLBACKS[place.category] || CATEGORY_FALLBACKS['things-to-do'];
  return {
    selectedImage,
    sourcePage: null,
    sourceType: 'category-fallback',
    sourceName: place.category,
    author: null,
    license: null,
    confidence: confidenceForSource('category-fallback'),
    status: 'approved',
    imageIsGeneric: true,
    note: 'No exact public image was found; used the category fallback so the card is never blank.'
  };
};

const findCandidate = async (place) => {
  for (const [query, sourceType] of searchesForPlace(place)) {
    const candidate = await candidateFromSearch(place, query, sourceType);
    if (candidate) return candidate;
    await sleep(250);
  }

  try {
    const wikimedia = await findWikimedia(place);
    if (wikimedia) return wikimedia;
  } catch {}

  return fallbackCandidate(place);
};

let existing = [];
try {
  await access(OUTPUT_FILE, constants.F_OK);
  existing = JSON.parse(await readFile(OUTPUT_FILE, 'utf8'));
  if (!Array.isArray(existing)) throw new Error(`${OUTPUT_FILE} must contain a JSON array.`);
} catch (error) {
  if (error?.code !== 'ENOENT') console.warn(`Could not reuse ${OUTPUT_FILE}: ${error.message}`);
  existing = [];
}

const previous = new Map(existing.map((item) => [item.slug, item]));
const allPlaces = readPlaces(await readFile(ATLAS_FILE, 'utf8'));
const targetPlaces = allPlaces.filter((place) =>
  (!targetCategory || sameValue(place.category, targetCategory)) &&
  (!targetCity || sameValue(place.city, targetCity)) &&
  (!targetCountry || sameValue(place.country, targetCountry)) &&
  (!targetSlug || sameValue(place.slug, targetSlug))
);
const targetSlugs = new Set(targetPlaces.map((place) => place.slug));
const researched = [];

for (const [index, place] of targetPlaces.entries()) {
  const old = previous.get(place.slug);
  const preserveUserPhoto = old?.status === 'approved' && old?.sourceType === 'user-supplied';
  const preserveApproved = old?.status === 'approved' && (!refreshGeneric || old?.imageIsGeneric !== true);
  const preserveReview = old?.status === 'needs-review' && !refresh;
  const result = preserveUserPhoto || (!refresh && preserveApproved) || preserveReview
    ? old
    : await findCandidate(place);

  researched.push({
    slug: place.slug,
    placeName: place.name,
    category: place.category,
    city: place.city,
    country: place.country,
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
    imageIsGeneric: Boolean(result?.imageIsGeneric),
    note: result?.note || null
  });

  const latest = researched.at(-1);
  console.log(`[${index + 1}/${targetPlaces.length}] ${place.city} · ${place.category} · ${place.name}: ${latest.status} (${latest.sourceType})`);
}

const researchedBySlug = new Map(researched.map((item) => [item.slug, item]));
const merged = existing
  .filter((item) => !targetSlugs.has(item.slug))
  .concat(targetPlaces.map((place) => researchedBySlug.get(place.slug)))
  .sort((left, right) => String(left.slug).localeCompare(String(right.slug)));

await writeFile(OUTPUT_FILE, `${JSON.stringify(merged, null, 2)}\n`);
console.log(`Wrote ${researched.length} place image records to ${OUTPUT_FILE}.`);
console.log(JSON.stringify(researched.reduce((summary, item) => {
  summary[item.status] = (summary[item.status] || 0) + 1;
  return summary;
}, {}), null, 2));
