import { readFile, writeFile } from 'node:fs/promises';

const PLACE_IMAGES_FILE = 'src/data/place-images.generated.json';
const GYM_IMAGES_FILE = 'src/data/gym-image-candidates.json';

const [placeImagesRaw, gymImagesRaw] = await Promise.all([
  readFile(PLACE_IMAGES_FILE, 'utf8'),
  readFile(GYM_IMAGES_FILE, 'utf8')
]);

const placeImages = JSON.parse(placeImagesRaw);
const gymImages = JSON.parse(gymImagesRaw);
const gymBySlug = new Map(gymImages.map((item) => [item.slug, item]));

const merged = placeImages
  .filter((item) => !gymBySlug.has(item.slug))
  .concat(gymImages);

await writeFile(PLACE_IMAGES_FILE, `${JSON.stringify(merged, null, 2)}\n`);

console.log(`Applied ${gymImages.length} gym image candidates.`);
