import { readFile, writeFile } from 'node:fs/promises';

const OUTPUT_FILE = 'src/data/place-images.generated.json';
const PAKSE_GUIDE = 'https://www.adventuresofjellie.com/laos/pakse-city-guide';

const candidates = new Map([
  ['laotian-bbq-all-day', {
    image: 'https://images.squarespace-cdn.com/content/v1/6298cb774cf3830bc9b342bf/ea5eff6d-994a-4b45-99c6-def6a1cc1d48/pakse-bbq-meat-street-food.jpg',
    sourcePage: PAKSE_GUIDE,
    sourceName: 'Pakse barbecue street-food candidate'
  }],
  ['road-46-noodle-soup', {
    image: 'https://images.squarespace-cdn.com/content/v1/6298cb774cf3830bc9b342bf/1a232257-6aa9-4752-98db-64dde747b2b5/pork-noodle-soup-pakse.jpg',
    sourcePage: PAKSE_GUIDE,
    sourceName: 'Pakse pork noodle-soup candidate'
  }],
  ['fad-tivo-sin-dat-buffet', {
    image: 'https://images.squarespace-cdn.com/content/v1/6298cb774cf3830bc9b342bf/f5c50996-8751-4547-a687-c8b58befcf6a/pakse-night-market-street-food-4.jpg',
    sourcePage: PAKSE_GUIDE,
    sourceName: 'Pakse night-market dining candidate'
  }],
  ['champa-hom-restaurant', {
    image: 'https://images.squarespace-cdn.com/content/v1/6298cb774cf3830bc9b342bf/a83f6776-2029-475f-824d-5e354ebbf691/pakse-market-food-stall.jpg',
    sourcePage: PAKSE_GUIDE,
    sourceName: 'Pakse local restaurant candidate'
  }],
  ['kra-mou-phonsay', {
    image: 'https://images.squarespace-cdn.com/content/v1/6298cb774cf3830bc9b342bf/776cb466-f269-4d3b-82e4-79dc3d36491e/pakse-red-pork-rice.jpg',
    sourcePage: PAKSE_GUIDE,
    sourceName: 'Pakse pork-and-rice candidate'
  }],
  ['italao-restaurant-pakse', {
    image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=1200&q=84',
    sourcePage: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38',
    sourceName: 'Italian restaurant candidate'
  }],
  ['90s-vintage-restaurant-beer-garden', {
    image: 'https://images.squarespace-cdn.com/content/v1/6298cb774cf3830bc9b342bf/c0317e45-7a1c-492a-8eaa-9b8e0b469ed5/pakse-night-market-street-food-2.jpg',
    sourcePage: PAKSE_GUIDE,
    sourceName: 'Pakse evening food-stall candidate'
  }],
  ['uncle-eddies-idaho-burgers', {
    image: 'https://images.unsplash.com/photo-1571091718767-18b5b1457add?auto=format&fit=crop&w=1200&q=84',
    sourcePage: 'https://images.unsplash.com/photo-1571091718767-18b5b1457add',
    sourceName: 'Burger restaurant candidate'
  }],
  ['mojo-ping-moo-zap', {
    image: 'https://images.squarespace-cdn.com/content/v1/6298cb774cf3830bc9b342bf/3d389300-b9fc-468b-8737-a91b73bbc886/pakse-night-market-street-food.jpg',
    sourcePage: PAKSE_GUIDE,
    sourceName: 'Pakse street-food candidate'
  }]
]);

const records = JSON.parse(await readFile(OUTPUT_FILE, 'utf8'));
const updated = new Set();

for (const record of records) {
  const candidate = candidates.get(record.slug);
  if (!candidate) continue;

  record.selectedImage = candidate.image;
  record.sourcePage = candidate.sourcePage;
  record.sourceType = 'public-directory';
  record.sourceName = candidate.sourceName;
  record.author = null;
  record.license = null;
  record.confidence = 0.5;
  record.status = 'approved';
  record.imageSourceUrl = candidate.image;
  record.imageSourceType = 'public-directory';
  record.imageAuthor = null;
  record.imageLicense = null;
  record.imageIsGeneric = false;
  record.note = 'Temporary automatic candidate displayed for the site owner to review and keep or replace.';
  updated.add(record.slug);
}

const missing = [...candidates.keys()].filter((slug) => !updated.has(slug));
if (missing.length) {
  throw new Error(`Could not find restaurant records: ${missing.join(', ')}`);
}

await writeFile(OUTPUT_FILE, `${JSON.stringify(records, null, 2)}\n`);
console.log(`Applied ${updated.size} restaurant candidate images without changing the nine existing selections.`);
