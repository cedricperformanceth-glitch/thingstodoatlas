import { readFile } from 'node:fs/promises';

const ATLAS_FILE = process.env.ATLAS_FILE || 'src/data/atlas.ts';
const OUTPUT_FILE = process.env.PLACE_IMAGES_FILE || 'src/data/place-images.generated.json';

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

const source = await readFile(ATLAS_FILE, 'utf8');
const categories = extractArrayObjects(source, 'categories')
  .map((block) => ({ slug: field(block, 'slug'), name: field(block, 'name') }))
  .filter((item) => item.slug);
const places = extractArrayObjects(source, 'places')
  .map((block) => ({
    slug: field(block, 'slug'),
    name: field(block, 'name'),
    category: field(block, 'category'),
    city: field(block, 'city'),
    country: field(block, 'country')
  }))
  .filter((item) => item.slug && item.category && item.city && item.country);
const images = JSON.parse(await readFile(OUTPUT_FILE, 'utf8'));
if (!Array.isArray(images)) throw new Error(`${OUTPUT_FILE} must contain a JSON array.`);

const duplicateSlugs = places
  .map((place) => place.slug)
  .filter((slug, index, all) => all.indexOf(slug) !== index);
const imageBySlug = new Map(images.map((item) => [item.slug, item]));
const missing = places.filter((place) => {
  const image = imageBySlug.get(place.slug);
  return !image || image.status !== 'approved' || !image.selectedImage;
});
const orphanImages = images.filter((item) => item?.slug && !places.some((place) => place.slug === item.slug));

const cityKeys = [...new Set(places.map((place) => `${place.country}|||${place.city}`))].sort();
for (const key of cityKeys) {
  const [country, city] = key.split('|||');
  console.log(`\n${city}, ${country}`);
  for (const category of categories) {
    const categoryPlaces = places.filter((place) => place.city === city && place.country === country && place.category === category.slug);
    const covered = categoryPlaces.filter((place) => {
      const image = imageBySlug.get(place.slug);
      return image?.status === 'approved' && Boolean(image.selectedImage);
    }).length;
    const state = categoryPlaces.length === 0 ? 'ready · no places yet' : `${covered}/${categoryPlaces.length} covered`;
    console.log(`- ${category.slug}: ${state}`);
  }
}

console.log(`\nSummary: ${places.length} places, ${images.length} image records, ${missing.length} missing, ${duplicateSlugs.length} duplicate slugs, ${orphanImages.length} orphan image records.`);

if (duplicateSlugs.length) console.error(`Duplicate place slugs: ${[...new Set(duplicateSlugs)].join(', ')}`);
if (missing.length) console.error(`Places without an approved image: ${missing.map((place) => place.slug).join(', ')}`);
if (duplicateSlugs.length || missing.length) process.exitCode = 1;
