import fs from 'node:fs/promises';
import path from 'node:path';
import { createRequire } from 'node:module';
import { fileURLToPath } from 'node:url';

const scriptDirectory = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.resolve(scriptDirectory, '..');
const sourcePath = path.join(projectRoot, 'calque SVG', 'airmail-postcard-template.webp');
const outputPath = path.join(projectRoot, 'public', 'images', 'laos', 'pakse-airmail-envelope.webp');
const metricsPath = path.join(projectRoot, 'src', 'styles', 'pakse-envelope-metrics.css');

/*
 * Astro already installs Sharp as an optional dependency. Resolve it from
 * Astro's own package location so this script does not add another package or
 * alter the lockfile.
 */
const projectRequire = createRequire(import.meta.url);
const astroPackagePath = projectRequire.resolve('astro/package.json');
const astroRequire = createRequire(astroPackagePath);
const sharpModule = astroRequire('sharp');
const sharp = sharpModule.default ?? sharpModule;

const clamp = (value, minimum, maximum) => Math.min(maximum, Math.max(minimum, value));

const median = (values) => {
  const sorted = [...values].sort((a, b) => a - b);
  const middle = Math.floor(sorted.length / 2);
  return sorted.length % 2 ? sorted[middle] : Math.round((sorted[middle - 1] + sorted[middle]) / 2);
};

const sampleCornerBackground = (pixels, width, height, channels) => {
  const sampleSize = Math.max(6, Math.round(Math.min(width, height) * 0.012));
  const red = [];
  const green = [];
  const blue = [];
  const corners = [
    [0, 0],
    [width - sampleSize, 0],
    [0, height - sampleSize],
    [width - sampleSize, height - sampleSize]
  ];

  for (const [startX, startY] of corners) {
    for (let y = startY; y < startY + sampleSize; y += 1) {
      for (let x = startX; x < startX + sampleSize; x += 1) {
        const offset = (y * width + x) * channels;
        red.push(pixels[offset]);
        green.push(pixels[offset + 1]);
        blue.push(pixels[offset + 2]);
      }
    }
  }

  return [median(red), median(green), median(blue)];
};

const findSustainedEdge = (scores, minimumInk, fromStart) => {
  const direction = fromStart ? 1 : -1;
  let index = fromStart ? 0 : scores.length - 1;

  while (index >= 0 && index < scores.length) {
    let matches = 0;
    for (let lookAhead = 0; lookAhead < 5; lookAhead += 1) {
      const candidate = index + lookAhead * direction;
      if (candidate >= 0 && candidate < scores.length && scores[candidate] >= minimumInk) {
        matches += 1;
      }
    }
    if (matches >= 2) return index;
    index += direction;
  }

  return fromStart ? 0 : scores.length - 1;
};

const detectAddressRuleStart = (pixels, width, height, channels, background) => {
  const [backgroundRed, backgroundGreen, backgroundBlue] = background;
  const searchLeft = Math.round(width * 0.46);
  const searchRight = Math.round(width * 0.95);
  const searchTop = Math.round(height * 0.32);
  const searchBottom = Math.round(height * 0.86);
  const maximumGap = Math.max(6, Math.round(width * 0.006));

  const resemblesPencil = (offset) => {
    const red = pixels[offset];
    const green = pixels[offset + 1];
    const blue = pixels[offset + 2];
    const darkest = Math.min(red, green, blue);
    const lightest = Math.max(red, green, blue);
    const spread = lightest - darkest;
    const distance = Math.hypot(
      red - backgroundRed,
      green - backgroundGreen,
      blue - backgroundBlue
    );

    return darkest < 236 && spread < 52 && distance > 18;
  };

  const candidates = [];

  for (let y = searchTop; y <= searchBottom; y += 1) {
    const hits = [];

    for (let x = searchLeft; x <= searchRight; x += 1) {
      let found = false;
      for (let bandY = Math.max(searchTop, y - 2); bandY <= Math.min(searchBottom, y + 2); bandY += 1) {
        if (resemblesPencil((bandY * width + x) * channels)) {
          found = true;
          break;
        }
      }
      if (found) hits.push(x);
    }

    if (hits.length < 20) continue;

    let bestStart = hits[0];
    let bestEnd = hits[0];
    let bestHits = 1;
    let runStart = hits[0];
    let runHits = 1;

    for (let index = 1; index < hits.length; index += 1) {
      if (hits[index] - hits[index - 1] <= maximumGap) {
        runHits += 1;
      } else {
        const runEnd = hits[index - 1];
        if (runEnd - runStart > bestEnd - bestStart) {
          bestStart = runStart;
          bestEnd = runEnd;
          bestHits = runHits;
        }
        runStart = hits[index];
        runHits = 1;
      }
    }

    const finalEnd = hits[hits.length - 1];
    if (finalEnd - runStart > bestEnd - bestStart) {
      bestStart = runStart;
      bestEnd = finalEnd;
      bestHits = runHits;
    }

    const length = bestEnd - bestStart + 1;
    const density = bestHits / length;
    if (length < width * 0.18 || density < 0.12) continue;

    candidates.push({
      y,
      start: bestStart,
      end: bestEnd,
      length,
      density,
      score: length * density
    });
  }

  const clusters = [];
  for (const candidate of candidates) {
    const previous = clusters.at(-1);
    if (!previous || candidate.y - previous.lastY > 8) {
      clusters.push({ lastY: candidate.y, best: candidate });
      continue;
    }

    previous.lastY = candidate.y;
    if (candidate.score > previous.best.score) previous.best = candidate;
  }

  const rows = clusters
    .map((cluster) => cluster.best)
    .filter((candidate) => candidate.start > width * 0.45 && candidate.end > width * 0.7)
    .sort((a, b) => a.y - b.y);

  let selected = [];
  let bestSequenceScore = Number.NEGATIVE_INFINITY;

  for (let index = 0; index <= rows.length - 4; index += 1) {
    const sequence = rows.slice(index, index + 4);
    const gaps = [
      sequence[1].y - sequence[0].y,
      sequence[2].y - sequence[1].y,
      sequence[3].y - sequence[2].y
    ];
    const averageGap = gaps.reduce((sum, gap) => sum + gap, 0) / gaps.length;
    if (averageGap < height * 0.035 || averageGap > height * 0.16) continue;

    const gapVariation = Math.max(...gaps) - Math.min(...gaps);
    const startSpread = Math.max(...sequence.map((row) => row.start)) - Math.min(...sequence.map((row) => row.start));
    const sequenceScore = sequence.reduce((sum, row) => sum + row.score, 0)
      - gapVariation * 18
      - startSpread * 10;

    if (sequenceScore > bestSequenceScore) {
      bestSequenceScore = sequenceScore;
      selected = sequence;
    }
  }

  if (selected.length !== 4) {
    selected = [...rows]
      .sort((a, b) => b.score - a.score)
      .slice(0, 4)
      .sort((a, b) => a.y - b.y);
  }

  if (!selected.length) {
    console.warn('Unable to detect the address rules; using the safe 55% fallback.');
    return { start: Math.round(width * 0.55), rows: [] };
  }

  return {
    start: median(selected.map((row) => row.start)),
    rows: selected
  };
};

const writeEnvelopeMetrics = async (ruleStart, width, rows) => {
  const percentage = (ruleStart / width) * 100;
  const rowComment = rows.length
    ? rows.map((row) => `${row.start},${row.y}`).join(' | ')
    : 'fallback';

  const css = `/* Generated from calque SVG/airmail-postcard-template.webp before Astro builds.\n   Detected address-rule starts (x,y): ${rowComment}. */\n#main-content .pakse-page .city-postcard {\n  --pakse-envelope-rule-start: ${percentage.toFixed(5)}%;\n}\n`;

  await fs.mkdir(path.dirname(metricsPath), { recursive: true });
  await fs.writeFile(metricsPath, css, 'utf8');
};

const prepareEnvelope = async () => {
  const { data, info } = await sharp(sourcePath)
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });

  const { width, height, channels } = info;
  const output = Buffer.from(data);
  const background = sampleCornerBackground(data, width, height, channels);
  const [backgroundRed, backgroundGreen, backgroundBlue] = background;

  const isInk = (offset) => {
    const red = data[offset];
    const green = data[offset + 1];
    const blue = data[offset + 2];
    const darkest = Math.min(red, green, blue);
    const lightest = Math.max(red, green, blue);
    return darkest < 238 || lightest - darkest > 16;
  };

  const rowScores = new Uint32Array(height);
  const columnScores = new Uint32Array(width);

  for (let y = 0; y < height; y += 1) {
    for (let x = 0; x < width; x += 1) {
      const offset = (y * width + x) * channels;
      if (!isInk(offset)) continue;
      rowScores[y] += 1;
      columnScores[x] += 1;
    }
  }

  const minimumRowInk = Math.max(18, Math.round(width * 0.018));
  const minimumColumnInk = Math.max(14, Math.round(height * 0.018));
  const padding = 2;

  const left = clamp(findSustainedEdge(columnScores, minimumColumnInk, true) - padding, 0, width - 1);
  const right = clamp(findSustainedEdge(columnScores, minimumColumnInk, false) + padding, 0, width - 1);
  const top = clamp(findSustainedEdge(rowScores, minimumRowInk, true) - padding, 0, height - 1);
  const bottom = clamp(findSustainedEdge(rowScores, minimumRowInk, false) + padding, 0, height - 1);

  if (right - left < width * 0.78 || bottom - top < height * 0.78) {
    throw new Error(`Envelope edge detection returned an unsafe box: ${left},${top}–${right},${bottom}`);
  }

  const guard = Math.max(4, Math.round(Math.min(width, height) * 0.006));
  const protectedLeft = left + guard;
  const protectedRight = right - guard;
  const protectedTop = top + guard;
  const protectedBottom = bottom - guard;
  const pixelCount = width * height;
  const visited = new Uint8Array(pixelCount);
  const queue = new Int32Array(pixelCount);
  let queueStart = 0;
  let queueEnd = 0;

  const isProtectedInterior = (x, y) => (
    x >= protectedLeft && x <= protectedRight && y >= protectedTop && y <= protectedBottom
  );

  const resemblesExterior = (pixelIndex) => {
    const offset = pixelIndex * channels;
    const red = data[offset];
    const green = data[offset + 1];
    const blue = data[offset + 2];
    const alpha = data[offset + 3];
    if (alpha === 0) return true;

    const darkest = Math.min(red, green, blue);
    const lightest = Math.max(red, green, blue);
    const colourSpread = lightest - darkest;
    const colourDistance = Math.hypot(
      red - backgroundRed,
      green - backgroundGreen,
      blue - backgroundBlue
    );

    return darkest > 205 && colourSpread < 34 && colourDistance < 72;
  };

  const enqueue = (x, y) => {
    if (x < 0 || x >= width || y < 0 || y >= height || isProtectedInterior(x, y)) return;
    const pixelIndex = y * width + x;
    if (visited[pixelIndex] || !resemblesExterior(pixelIndex)) return;
    visited[pixelIndex] = 1;
    queue[queueEnd] = pixelIndex;
    queueEnd += 1;
  };

  for (let x = 0; x < width; x += 1) {
    enqueue(x, 0);
    enqueue(x, height - 1);
  }
  for (let y = 1; y < height - 1; y += 1) {
    enqueue(0, y);
    enqueue(width - 1, y);
  }

  while (queueStart < queueEnd) {
    const pixelIndex = queue[queueStart];
    queueStart += 1;
    const x = pixelIndex % width;
    const y = Math.floor(pixelIndex / width);
    const offset = pixelIndex * channels;
    output[offset + 3] = 0;

    enqueue(x - 1, y);
    enqueue(x + 1, y);
    enqueue(x, y - 1);
    enqueue(x, y + 1);
  }

  for (let y = 0; y < height; y += 1) {
    for (let x = 0; x < width; x += 1) {
      if (x >= left && x <= right && y >= top && y <= bottom) continue;
      output[(y * width + x) * channels + 3] = 0;
    }
  }

  const addressRules = detectAddressRuleStart(data, width, height, channels, background);

  await fs.mkdir(path.dirname(outputPath), { recursive: true });
  await sharp(output, { raw: { width, height, channels } })
    .webp({ lossless: true, alphaQuality: 100 })
    .toFile(outputPath);
  await writeEnvelopeMetrics(addressRules.start, width, addressRules.rows);

  console.log(`Prepared Pakse envelope (${width}×${height}); preserved bounds ${left},${top}–${right},${bottom}.`);
  console.log(`Aligned Pakse text to address-rule x=${addressRules.start}px.`);
};

prepareEnvelope().catch((error) => {
  console.error('Unable to prepare the Pakse envelope asset.');
  console.error(error);
  process.exitCode = 1;
});
