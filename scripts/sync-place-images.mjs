import { access, mkdtemp, readFile, readdir, rm, writeFile } from 'node:fs/promises';
import { constants } from 'node:fs';
import { spawn } from 'node:child_process';
import { tmpdir } from 'node:os';
import path from 'node:path';
import { discoverPlaces, finderSourceForPlaces } from './place-data-discovery.mjs';

const DATA_DIR = process.env.PLACE_DATA_DIR || 'src/data';
const OUTPUT_FILE = process.env.PLACE_IMAGES_FILE || path.join(DATA_DIR, 'place-images.generated.json');
const FINDER_FILE = 'scripts/find-place-images.mjs';

const readJsonArray = async (file) => {
  const parsed = JSON.parse(await readFile(file, 'utf8'));
  if (!Array.isArray(parsed)) throw new Error(`${file} must contain a JSON array.`);
  return parsed;
};

const imageQuality = (item) => {
  if (!item || item.status !== 'approved' || !item.selectedImage) return 0;
  if (item.sourceType === 'user-supplied') return 100;
  if (item.imageIsGeneric === false) return 50;
  if (item.imageIsGeneric === true) return 10;
  return 25;
};

let existing = [];
try {
  await access(OUTPUT_FILE, constants.F_OK);
  existing = await readJsonArray(OUTPUT_FILE);
} catch (error) {
  if (error?.code !== 'ENOENT') throw error;
}

const candidateFiles = (await readdir(DATA_DIR, { withFileTypes: true }))
  .filter((entry) => entry.isFile() && entry.name.endsWith('-image-candidates.json'))
  .map((entry) => path.join(DATA_DIR, entry.name))
  .sort();

const bySlug = new Map(existing.filter((item) => item?.slug).map((item) => [item.slug, item]));
let applied = 0;
let preserved = 0;

for (const file of candidateFiles) {
  const candidates = await readJsonArray(file);
  for (const candidate of candidates) {
    if (!candidate?.slug) throw new Error(`${file} contains a candidate without a slug.`);
    const current = bySlug.get(candidate.slug);
    if (imageQuality(current) > imageQuality(candidate)) {
      preserved += 1;
      continue;
    }
    bySlug.set(candidate.slug, candidate);
    applied += 1;
  }
}

const merged = [...bySlug.values()].sort((left, right) => String(left.slug).localeCompare(String(right.slug)));
await writeFile(OUTPUT_FILE, `${JSON.stringify(merged, null, 2)}\n`);
console.log(`Merged ${applied} candidate records from ${candidateFiles.length} candidate files; preserved ${preserved} stronger existing matches.`);

const discovery = await discoverPlaces();
if (!discovery.places.length) throw new Error('No standard place records were discovered in src/data or src/pages.');

const cities = [...new Set(discovery.places.map((place) => `${place.city}, ${place.country}`))].sort();
console.log(`Discovered ${discovery.places.length} standard places across ${cities.length} cities from ${discovery.files.length} source files.`);
console.log(`Cities: ${cities.join(' · ')}`);
if (discovery.excluded.length) {
  console.log(`Excluded ${discovery.excluded.length} records managed by the Sigiriya or Adam's Peak systems.`);
}

const temporaryDirectory = await mkdtemp(path.join(tmpdir(), 'things-to-do-atlas-images-'));
const temporaryAtlas = path.join(temporaryDirectory, 'all-standard-places.ts');
await writeFile(temporaryAtlas, finderSourceForPlaces(discovery.places));

const exitCode = await new Promise((resolve, reject) => {
  const child = spawn(process.execPath, [FINDER_FILE, ...process.argv.slice(2)], {
    stdio: 'inherit',
    env: {
      ...process.env,
      ATLAS_FILE: temporaryAtlas,
      PLACE_IMAGES_FILE: OUTPUT_FILE
    }
  });
  child.once('error', reject);
  child.once('exit', (code, signal) => {
    if (signal) reject(new Error(`Image finder stopped by signal ${signal}.`));
    else resolve(code ?? 1);
  });
});

await rm(temporaryDirectory, { recursive: true, force: true });
if (exitCode !== 0) process.exitCode = exitCode;
