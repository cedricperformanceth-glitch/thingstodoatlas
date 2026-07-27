import { readFile, writeFile } from 'node:fs/promises';

const PLACE_IMAGES_FILE = 'src/data/place-images.generated.json';
const MARKET_IMAGES_FILE = 'src/data/markets-shopping-image-candidates.json';

const [placeImagesRaw, marketImagesRaw] = await Promise.all([
  readFile(PLACE_IMAGES_FILE, 'utf8'),
  readFile(MARKET_IMAGES_FILE, 'utf8')
]);

const placeImages = JSON.parse(placeImagesRaw);
const marketImages = JSON.parse(marketImagesRaw);
const marketBySlug = new Map(marketImages.map((item) => [item.slug, item]));

const merged = placeImages
  .filter((item) => !marketBySlug.has(item.slug))
  .concat(marketImages);

await writeFile(PLACE_IMAGES_FILE, `${JSON.stringify(merged, null, 2)}\n`);

console.log(`Applied ${marketImages.length} markets and shopping image candidates.`);
