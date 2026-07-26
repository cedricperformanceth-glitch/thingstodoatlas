import { access, readFile, writeFile } from 'node:fs/promises';
import { constants } from 'node:fs';
import { URLSearchParams } from 'node:url';

const ATLAS_FILE = 'src/data/atlas.ts';
const OUTPUT_FILE = 'src/data/restaurant-images.generated.json';
const REQUEST_TIMEOUT_MS = 9000;
const SOURCE_TYPES = ['official-site', 'facebook', 'instagram', 'wikimedia', 'unsplash', 'pexels', 'generic', 'none'];

const fetchText = async (url) => {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), REQUEST_TIMEOUT_MS);
  try {
    const response = await fetch(url, {
      headers: { 'user-agent': 'ThingsToDoAtlas editorial image research/1.0' },
      signal: controller.signal
    });
    if (!response.ok) throw new Error('HTTP ' + response.status);
    return await response.text();
  } finally {
    clearTimeout(timer);
  }
};

const field = (block, name) => {
  const match = block.match(new RegExp(name + ':\\s*[\'"]([^\'"]+)[\'"]'));
  return match ? match[1] : null;
};

const readRestaurants = (source) => source.split('\n  {\n')
  .filter((block) => block.includes("category: 'restaurants'"))
  .map((block) => ({
    slug: field(block, 'slug'),
    name: field(block, 'name'),
    city: field(block, 'city'),
    country: field(block, 'country')
  }));

const searchWeb = async (restaurant) => {
  const query = restaurant.name + ' ' + restaurant.city + ' ' + restaurant.country + ' official';
  const html = await fetchText('https://html.duckduckgo.com/html/?' + new URLSearchParams({ q: query }));
  return [...html.matchAll(/<a rel="nofollow" class="result__a" href="([^"]+)">([\s\S]*?)<\/a>/g)].slice(0, 8).map((match) => ({
    url: match[1],
    title: match[2].replace(/<[^>]+>/g, '')
  }));
};

const metaImage = (html) => {
  const patterns = [
    /<meta[^>]+property=["']og:image["'][^>]+content=["']([^"']+)["']/i,
    /<meta[^>]+name=["']twitter:image["'][^>]+content=["']([^"']+)["']/i,
    /<meta[^>]+content=["']([^"']+)["'][^>]+property=["']og:image["']/i
  ];
  for (const pattern of patterns) {
    const match = html.match(pattern);
    if (match?.[1]) return match[1];
  }
  return null;
};

const pageMatches = (html, restaurant) => {
  const text = html.toLowerCase();
  return text.includes(restaurant.name.toLowerCase()) &&
    text.includes(restaurant.city.toLowerCase()) &&
    text.includes(restaurant.country.toLowerCase());
};

const findWikimedia = async (restaurant) => {
  const query = encodeURIComponent(restaurant.name + ' ' + restaurant.city + ' ' + restaurant.country);
  const endpoint = 'https://commons.wikimedia.org/w/api.php?action=query&generator=search&gsrsearch=' + query + '&gsrnamespace=6&gsrlimit=5&prop=imageinfo&iiprop=url|extmetadata&format=json&origin=*';
  const data = JSON.parse(await fetchText(endpoint));
  const pages = Object.values(data.query?.pages || {});
  const match = pages.find((page) => page.imageinfo?.[0]?.url && /pak se|pak xe|laos/i.test(page.title || ''));
  if (!match) return null;
  const info = match.imageinfo[0];
  const metadata = info.extmetadata || {};
  const license = metadata.LicenseShortName?.value || null;
  if (!license || !/CC|Public domain|PD/i.test(license)) return null;
  return {
    selectedImage: info.url,
    sourcePage: 'https://commons.wikimedia.org/wiki/' + encodeURIComponent(match.title.replace(/ /g, '_')),
    sourceType: 'wikimedia',
    sourceName: match.title,
    author: metadata.Artist?.value || null,
    license,
    confidence: 0.8,
    status: 'approved',
    note: 'Wikimedia image matched with a reusable license.'
  };
};

const findCandidate = async (restaurant) => {
  let results;
  try {
    results = await searchWeb(restaurant);
  } catch (error) {
    return { selectedImage: null, sourcePage: null, sourceType: 'none', confidence: 0, status: 'none', note: 'Search unavailable: ' + error.message };
  }
  for (const result of results) {
    let html;
    try { html = await fetchText(result.url); } catch { continue; }
    if (!pageMatches(html, restaurant)) continue;
    const image = metaImage(html);
    if (!image) continue;
    let sourceType = 'official-site';
    if (/facebook\.com/i.test(result.url)) sourceType = 'facebook';
        if (/instagram\.com/i.test(result.url)) sourceType = 'instagram';
    return {
      selectedImage: image,
      sourcePage: result.url,
      sourceType,
      sourceName: restaurant.name,
      author: null,
      license: null,
      confidence: 0.65,
      status: 'needs-review',
      note: 'Image found, but reuse rights are not clear enough for automatic approval.'
    };
  }
  try {
    const wikimedia = await findWikimedia(restaurant);
    if (wikimedia) return wikimedia;
  } catch {}
  return { selectedImage: null, sourcePage: null, sourceType: 'none', confidence: 0, status: 'none', note: 'No reliable reusable public image found.' };
};

let existing = [];
try {
  await access(OUTPUT_FILE, constants.F_OK);
  existing = JSON.parse(await readFile(OUTPUT_FILE, 'utf8'));
} catch {}
const previous = new Map(existing.map((item) => [item.slug, item]));
const restaurants = readRestaurants(await readFile(ATLAS_FILE, 'utf8'));
const results = [];
for (const restaurant of restaurants) {
  const old = previous.get(restaurant.slug);
  const result = old?.status === 'approved' || old?.status === 'needs-review' ? old : await findCandidate(restaurant);
  results.push({
    slug: restaurant.slug,
    restaurantName: restaurant.name,
    selectedImage: result.selectedImage || null,
    sourcePage: result.sourcePage || null,
    sourceType: SOURCE_TYPES.includes(result.sourceType) ? result.sourceType : 'none',
    sourceName: result.sourceName || null,
    author: result.author || null,
    license: result.license || null,
    confidence: result.confidence || 0,
    status: result.status || 'none',
    imageSourceUrl: result.selectedImage || null,
    imageSourceType: result.sourceType || 'none',
    imageAuthor: result.author || null,
    imageLicense: result.license || null,
    imageIsGeneric: ['unsplash', 'pexels', 'generic'].includes(result.sourceType),
    note: result.note || null
  });
}
await writeFile(OUTPUT_FILE, JSON.stringify(results, null, 2) + '\n');
console.log('Wrote ' + results.length + ' restaurant image research records to ' + OUTPUT_FILE);
console.log(JSON.stringify(results.reduce((summary, item) => {
  summary[item.status] = (summary[item.status] || 0) + 1;
  return summary;
}, {}), null, 2));