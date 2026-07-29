import { readFile, readdir } from 'node:fs/promises';
import path from 'node:path';

const DEFAULT_SOURCE_ROOTS = ['src/data', 'src/pages'];
const SUPPORTED_EXTENSIONS = new Set(['.ts', '.tsx', '.js', '.mjs', '.astro']);
const IGNORED_FILENAMES = new Set(['place-images.generated.json']);
const EXCLUDED_SYSTEM_PATTERNS = [
  /(^|[^a-z])sigiriya([^a-z]|$)/,
  /(^|[^a-z])siriguya([^a-z]|$)/,
  /(^|[^a-z])adams?[-_ ]?peak([^a-z]|$)/,
  /(^|[^a-z])sri[-_ ]?pada([^a-z]|$)/
];
const SOURCE_DEFAULTS = [
  {
    pattern: /(^|[\\/])tadLoPlaces\.ts$/,
    city: 'Tad Lo',
    country: 'Laos',
    excludedSlugs: new Set(['fandee-island'])
  }
];

const normalize = (value = '') => value
  .normalize('NFD')
  .replace(/[\u0300-\u036f]/g, '')
  .replace(/[’‘`´]/g, "'")
  .replace(/[^a-z0-9]+/gi, ' ')
  .trim()
  .toLowerCase();

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

const defaultsForFile = (file) => SOURCE_DEFAULTS.find(({ pattern }) => pattern.test(file)) ?? {};

const walk = async (root) => {
  let entries;
  try {
    entries = await readdir(root, { withFileTypes: true });
  } catch (error) {
    if (error?.code === 'ENOENT') return [];
    throw error;
  }

  const files = [];
  for (const entry of entries) {
    const absolute = path.join(root, entry.name);
    if (entry.isDirectory()) {
      if (['node_modules', 'dist', '.astro', '.git'].includes(entry.name)) continue;
      files.push(...await walk(absolute));
      continue;
    }
    if (!entry.isFile()) continue;
    if (IGNORED_FILENAMES.has(entry.name) || entry.name.endsWith('-image-candidates.json')) continue;
    if (SUPPORTED_EXTENSIONS.has(path.extname(entry.name))) files.push(absolute);
  }
  return files;
};

const extractObjectBlocks = (source) => {
  const blocks = [];
  const starts = [];
  let quote = null;
  let escaped = false;
  let lineComment = false;
  let blockComment = false;

  for (let index = 0; index < source.length; index += 1) {
    const char = source[index];
    const next = source[index + 1];

    if (lineComment) {
      if (char === '\n') lineComment = false;
      continue;
    }
    if (blockComment) {
      if (char === '*' && next === '/') {
        blockComment = false;
        index += 1;
      }
      continue;
    }
    if (quote) {
      if (escaped) escaped = false;
      else if (char === '\\') escaped = true;
      else if (char === quote) quote = null;
      continue;
    }
    if (char === '/' && next === '/') {
      lineComment = true;
      index += 1;
      continue;
    }
    if (char === '/' && next === '*') {
      blockComment = true;
      index += 1;
      continue;
    }
    if (char === '"' || char === "'" || char === '`') {
      quote = char;
      continue;
    }
    if (char === '{') starts.push(index);
    if (char === '}' && starts.length) {
      const start = starts.pop();
      blocks.push(source.slice(start, index + 1));
    }
  }

  return blocks.sort((left, right) => left.length - right.length);
};

const isExcludedSystem = (place) => {
  const values = [place.slug, place.name, place.city, place.sourceFile]
    .filter(Boolean)
    .map((value) => normalize(String(value)));
  return values.some((value) => EXCLUDED_SYSTEM_PATTERNS.some((pattern) => pattern.test(` ${value} `)));
};

const parsePlacesFromFile = async (file) => {
  const source = await readFile(file, 'utf8');
  const defaults = defaultsForFile(file);
  const bySlug = new Map();

  for (const block of extractObjectBlocks(source)) {
    const place = {
      slug: field(block, 'slug'),
      name: field(block, 'name'),
      category: field(block, 'category'),
      city: field(block, 'city') ?? defaults.city ?? null,
      country: field(block, 'country') ?? defaults.country ?? null,
      subcategory: field(block, 'subcategory'),
      cuisine: field(block, 'cuisine'),
      image: field(block, 'image'),
      mapsUrl: field(block, 'mapsUrl'),
      sourceFile: file
    };

    if (defaults.excludedSlugs?.has(place.slug)) continue;
    if (!place.slug || !place.name || !place.category || !place.city || !place.country) continue;
    if (!bySlug.has(place.slug)) bySlug.set(place.slug, place);
  }

  return [...bySlug.values()];
};

export const discoverPlaces = async ({ roots } = {}) => {
  const sourceRoots = roots || (process.env.PLACE_SOURCE_ROOTS
    ? process.env.PLACE_SOURCE_ROOTS.split(',').map((item) => item.trim()).filter(Boolean)
    : DEFAULT_SOURCE_ROOTS);

  const files = (await Promise.all(sourceRoots.map((root) => walk(root))))
    .flat()
    .sort();
  const discovered = (await Promise.all(files.map((file) => parsePlacesFromFile(file)))).flat();
  const bySlug = new Map();
  const excluded = [];

  for (const place of discovered) {
    if (isExcludedSystem(place)) {
      excluded.push(place);
      continue;
    }
    const current = bySlug.get(place.slug);
    if (current && JSON.stringify(current) !== JSON.stringify(place)) {
      throw new Error(`Duplicate place slug ${place.slug} found in ${current.sourceFile} and ${place.sourceFile}.`);
    }
    bySlug.set(place.slug, place);
  }

  return {
    places: [...bySlug.values()].sort((left, right) => left.slug.localeCompare(right.slug)),
    excluded,
    files
  };
};

const serializeValue = (value) => value == null ? 'null' : JSON.stringify(value);

export const finderSourceForPlaces = (places) => `export const places = [\n${places.map((place) => `  {\n    slug: ${serializeValue(place.slug)},\n    name: ${serializeValue(place.name)},\n    category: ${serializeValue(place.category)},\n    city: ${serializeValue(place.city)},\n    country: ${serializeValue(place.country)},\n    subcategory: ${serializeValue(place.subcategory)},\n    cuisine: ${serializeValue(place.cuisine)},\n    image: ${serializeValue(place.image)},\n    mapsUrl: ${serializeValue(place.mapsUrl)}\n  }`).join(',\n')}\n];\n`;
