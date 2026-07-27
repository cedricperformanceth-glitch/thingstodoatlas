import { readFile, writeFile } from 'node:fs/promises';

const PLACE_IMAGES_FILE = 'src/data/place-images.generated.json';
const ACCOMMODATION_IMAGES_FILE = 'src/data/accommodation-image-candidates.json';

const [placeImagesRaw, accommodationImagesRaw] = await Promise.all([
  readFile(PLACE_IMAGES_FILE, 'utf8'),
  readFile(ACCOMMODATION_IMAGES_FILE, 'utf8')
]);

const placeImages = JSON.parse(placeImagesRaw);
const accommodationImages = JSON.parse(accommodationImagesRaw);
const accommodationBySlug = new Map(accommodationImages.map((item) => [item.slug, item]));

const merged = placeImages
  .filter((item) => !accommodationBySlug.has(item.slug))
  .concat(accommodationImages);

await writeFile(PLACE_IMAGES_FILE, `${JSON.stringify(merged, null, 2)}\n`);

console.log(`Applied ${accommodationImages.length} accommodation image candidates.`);
