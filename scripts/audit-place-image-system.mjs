import { readFile } from 'node:fs/promises';
import { discoverPlaces } from './place-data-discovery.mjs';

const OUTPUT_FILE = process.env.PLACE_IMAGES_FILE || 'src/data/place-images.generated.json';
const STANDARD_CATEGORIES = [
  'restaurants',
  'cafes',
  'accommodation',
  'scooter-rental',
  'bolaven-loop',
  'waterfalls',
  'things-to-do',
  'gyms-fitness',
  'markets-shopping',
  'essential-information'
];

const discovery = await discoverPlaces();
const places = discovery.places;
const images = JSON.parse(await readFile(OUTPUT_FILE, 'utf8'));
if (!Array.isArray(images)) throw new Error(`${OUTPUT_FILE} must contain a JSON array.`);

const imageBySlug = new Map(images.filter((item) => item?.slug).map((item) => [item.slug, item]));
const missing = places.filter((place) => {
  const image = imageBySlug.get(place.slug);
  return !image || image.status !== 'approved' || !image.selectedImage;
});
const orphanImages = images.filter((item) => item?.slug && !places.some((place) => place.slug === item.slug));
const categories = [...new Set([...STANDARD_CATEGORIES, ...places.map((place) => place.category)])];
const cityKeys = [...new Set(places.map((place) => `${place.country}|||${place.city}`))].sort();

for (const key of cityKeys) {
  const [country, city] = key.split('|||');
  console.log(`\n${city}, ${country}`);
  for (const category of categories) {
    const categoryPlaces = places.filter((place) =>
      place.city === city && place.country === country && place.category === category
    );
    const covered = categoryPlaces.filter((place) => {
      const image = imageBySlug.get(place.slug);
      return image?.status === 'approved' && Boolean(image.selectedImage);
    }).length;
    const state = categoryPlaces.length === 0 ? 'ready · no places yet' : `${covered}/${categoryPlaces.length} covered`;
    console.log(`- ${category}: ${state}`);
  }
}

console.log(`\nStandard-system summary: ${places.length} places across ${cityKeys.length} cities, ${missing.length} missing images.`);
console.log(`Discovery scanned ${discovery.files.length} files and excluded ${discovery.excluded.length} Sigiriya/Adam's Peak records.`);
console.log(`Image store: ${images.length} records, including ${orphanImages.length} records not attached to a standard-system place.`);

if (discovery.excluded.length) {
  const excludedSystems = [...new Set(discovery.excluded.map((place) => `${place.city || place.name}, ${place.country || 'unknown country'}`))];
  console.log(`Special systems left untouched: ${excludedSystems.join(' · ')}`);
}

if (missing.length) {
  console.error('Places without an approved image:');
  for (const place of missing) {
    console.error(`- ${place.slug} · ${place.city}, ${place.country} · ${place.sourceFile}`);
  }
  process.exitCode = 1;
}
