import fs from 'node:fs/promises';
import path from 'node:path';
import { createRequire } from 'node:module';
import { fileURLToPath } from 'node:url';

const scriptDirectory = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.resolve(scriptDirectory, '..');
const sourcePath = path.join(projectRoot, 'calque SVG', 'airmail-postcard-template.webp');
const outputPath = path.join(projectRoot, 'public', 'images', 'laos', 'pakse-airmail-envelope.webp');

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

const prepareEnvelope = async () => {
  const { data, info } = await sharp(sourcePath)
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });

  const { width, height, channels } = info;
  const output = Buffer.from(data);
  const [backgroundRed, backgroundGreen, backgroundBlue] = sampleCornerBackground(data, width, height, channels);

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

  /*
   * Protect the complete paper interior. The narrow ring around this protected
   * rectangle contains the pencil/airmail edge and the exterior white canvas.
   * A flood fill from the image edges can therefore remove only the connected
   * outside background, even if the hand-drawn line has a tiny natural gap.
   */
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

  /* Remove any isolated compression noise outside the detected envelope box. */
  for (let y = 0; y < height; y += 1) {
    for (let x = 0; x < width; x += 1) {
      if (x >= left && x <= right && y >= top && y <= bottom) continue;
      output[(y * width + x) * channels + 3] = 0;
    }
  }

  await fs.mkdir(path.dirname(outputPath), { recursive: true });
  await sharp(output, { raw: { width, height, channels } })
    .webp({ lossless: true, alphaQuality: 100 })
    .toFile(outputPath);

  console.log(`Prepared Pakse envelope (${width}×${height}); preserved bounds ${left},${top}–${right},${bottom}.`);
};

prepareEnvelope().catch((error) => {
  console.error('Unable to prepare the Pakse envelope asset.');
  console.error(error);
  process.exitCode = 1;
});
