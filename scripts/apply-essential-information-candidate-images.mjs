import { readFile, writeFile } from 'node:fs/promises';

const PLACE_IMAGES_FILE = 'src/data/place-images.generated.json';
const ESSENTIAL_IMAGES_FILE = 'src/data/essential-information-image-candidates.json';

const [placeImagesRaw, essentialImagesRaw] = await Promise.all([
  readFile(PLACE_IMAGES_FILE, 'utf8'),
  readFile(ESSENTIAL_IMAGES_FILE, 'utf8')
]);

const placeImages = JSON.parse(placeImagesRaw);
const essentialImages = JSON.parse(essentialImagesRaw);
const essentialBySlug = new Map(essentialImages.map((item) => [item.slug, item]));

const merged = placeImages
  .filter((item) => !essentialBySlug.has(item.slug))
  .concat(essentialImages);

await writeFile(PLACE_IMAGES_FILE, `${JSON.stringify(merged, null, 2)}\n`);

console.log(`Applied ${essentialImages.length} Essential Information image candidates.`);
