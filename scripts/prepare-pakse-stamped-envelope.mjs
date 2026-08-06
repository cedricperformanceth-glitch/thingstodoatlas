import fs from 'node:fs/promises';
import path from 'node:path';
import { createRequire } from 'node:module';
import { fileURLToPath } from 'node:url';

const scriptDirectory = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.resolve(scriptDirectory, '..');
const envelopePath = path.join(projectRoot, 'public', 'images', 'laos', 'pakse-airmail-envelope.webp');
const stampedEnvelopeConfigs = [
  {
    cityName: 'Pakse',
    stampPath: path.join(projectRoot, 'public', 'images', 'timbre-laos', 'timbre-pakse.webp'),
    outputPath: path.join(projectRoot, 'public', 'images', 'laos', 'pakse-airmail-envelope-stamped-v3.webp')
  },
  {
    cityName: 'Tad Lo',
    stampPath: path.join(projectRoot, 'public', 'images', 'timbre-laos', 'timbre-tad-lo.webp'),
    outputPath: path.join(projectRoot, 'public', 'images', 'laos', 'tad-lo-airmail-envelope-stamped-v1.webp')
  },
  {
    cityName: 'Thakhek',
    stampPath: path.join(projectRoot, 'public', 'images', 'timbre-laos', 'timbre-thakhek.webp'),
    outputPath: path.join(projectRoot, 'public', 'images', 'laos', 'thakhek-airmail-envelope-stamped-v1.webp')
  },
  {
    cityName: 'Don Det',
    stampPath: path.join(projectRoot, 'public', 'images', 'timbre-laos', 'timbre-don-det.webp'),
    outputPath: path.join(projectRoot, 'public', 'images', 'laos', 'don-det-airmail-envelope-stamped-v1.webp')
  }
];

const projectRequire = createRequire(import.meta.url);
const astroPackagePath = projectRequire.resolve('astro/package.json');
const astroRequire = createRequire(astroPackagePath);
const sharpModule = astroRequire('sharp');
const sharp = sharpModule.default ?? sharpModule;

const groupPeaks = (scores, threshold, offset) => {
  const groups = [];
  let start = -1;
  let weighted = 0;
  let total = 0;

  for (let index = 0; index <= scores.length; index += 1) {
    const score = index < scores.length ? scores[index] : 0;
    if (score >= threshold) {
      if (start === -1) start = index;
      weighted += index * score;
      total += score;
      continue;
    }

    if (start !== -1 && total > 0) {
      groups.push({
        start: start + offset,
        end: index - 1 + offset,
        center: Math.round(weighted / total) + offset,
        strength: total
      });
    }

    start = -1;
    weighted = 0;
    total = 0;
  }

  return groups;
};

const choosePair = (groups, minimumGap, maximumGap) => {
  let best = null;

  for (let first = 0; first < groups.length; first += 1) {
    for (let second = first + 1; second < groups.length; second += 1) {
      const gap = groups[second].center - groups[first].center;
      if (gap < minimumGap || gap > maximumGap) continue;

      const score = groups[first].strength + groups[second].strength + gap * 12;
      if (!best || score > best.score) {
        best = {
          start: groups[first].center,
          end: groups[second].center,
          score
        };
      }
    }
  }

  return best;
};

const detectStampBox = async () => {
  const { data, info } = await sharp(envelopePath)
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });

  const { width, height, channels } = info;
  const region = {
    left: Math.round(width * 0.70),
    right: Math.round(width * 0.955),
    top: Math.round(height * 0.045),
    bottom: Math.round(height * 0.38)
  };

  const columnScores = new Uint32Array(region.right - region.left + 1);
  const rowScores = new Uint32Array(region.bottom - region.top + 1);

  for (let y = region.top; y <= region.bottom; y += 1) {
    for (let x = region.left; x <= region.right; x += 1) {
      const offset = (y * width + x) * channels;
      const red = data[offset];
      const green = data[offset + 1];
      const blue = data[offset + 2];
      const alpha = data[offset + 3];
      const darkest = Math.min(red, green, blue);
      const lightest = Math.max(red, green, blue);
      const neutralInk = alpha > 30 && darkest < 205 && lightest - darkest < 34;
      if (!neutralInk) continue;
      columnScores[x - region.left] += 1;
      rowScores[y - region.top] += 1;
    }
  }

  const maxColumn = Math.max(...columnScores);
  const maxRow = Math.max(...rowScores);
  const verticalGroups = groupPeaks(columnScores, Math.max(6, Math.round(maxColumn * 0.32)), region.left);
  const horizontalGroups = groupPeaks(rowScores, Math.max(6, Math.round(maxRow * 0.32)), region.top);

  const verticalPair = choosePair(
    verticalGroups,
    Math.round(width * 0.075),
    Math.round(width * 0.18)
  );
  const horizontalPair = choosePair(
    horizontalGroups,
    Math.round(height * 0.12),
    Math.round(height * 0.29)
  );

  if (verticalPair && horizontalPair) {
    return {
      left: verticalPair.start,
      top: horizontalPair.start,
      width: verticalPair.end - verticalPair.start,
      height: horizontalPair.end - horizontalPair.start,
      canvasWidth: width,
      canvasHeight: height,
      detected: true
    };
  }

  return {
    left: Math.round(width * 0.814),
    top: Math.round(height * 0.105),
    width: Math.round(width * 0.118),
    height: Math.round(height * 0.225),
    canvasWidth: width,
    canvasHeight: height,
    detected: false
  };
};

const prepareStampedEnvelopes = async () => {
  await fs.access(envelopePath);
  const box = await detectStampBox();

  for (const config of stampedEnvelopeConfigs) {
    await fs.access(config.stampPath);

    const padding = Math.max(3, Math.round(Math.min(box.width, box.height) * 0.055));
    const availableWidth = Math.max(1, box.width - padding * 2);
    const availableHeight = Math.max(1, box.height - padding * 2);

    const { data: trimmedStamp, info: trimmedInfo } = await sharp(config.stampPath)
      .ensureAlpha()
      .trim({ background: { r: 0, g: 0, b: 0, alpha: 0 }, threshold: 8 })
      .toBuffer({ resolveWithObject: true });

    const fittedScale = Math.min(
      availableWidth / trimmedInfo.width,
      availableHeight / trimmedInfo.height
    );
    const maximumScale = Math.min(
      box.width / trimmedInfo.width,
      box.height / trimmedInfo.height
    );
    const baseScale = Math.min(fittedScale * 1.11, maximumScale);
    const scale = baseScale * 1.015;
    const renderedWidth = Math.max(1, Math.round(trimmedInfo.width * scale));
    const renderedHeight = Math.max(1, Math.round(trimmedInfo.height * scale));

    const fittedStamp = await sharp(trimmedStamp)
      .resize(renderedWidth, renderedHeight, { fit: 'fill' })
      .webp({ lossless: true, alphaQuality: 100 })
      .toBuffer();

    const left = Math.round(box.left + (box.width - renderedWidth) / 2);
    const centeredTop = Math.round(box.top + (box.height - renderedHeight) / 2);
    const verticalOffset = Math.round(box.height * 0.04);
    const fittedTop = Math.min(
      centeredTop + verticalOffset,
      box.top + box.height - renderedHeight
    );
    const top = fittedTop + 23;

    await sharp(envelopePath)
      .composite([{ input: fittedStamp, left, top }])
      .webp({ lossless: true, alphaQuality: 100 })
      .toFile(config.outputPath);

    console.log(
      `Prepared ${config.cityName} stamped envelope (${box.canvasWidth}×${box.canvasHeight}); ` +
      `${box.detected ? 'detected' : 'fallback'} box ${box.left},${box.top} ${box.width}×${box.height}; ` +
      `stamp ${renderedWidth}×${renderedHeight} at ${left},${top}.`
    );
  }
};

prepareStampedEnvelopes().catch((error) => {
  console.error('Unable to prepare the stamped city envelopes.');
  console.error(error);
  process.exitCode = 1;
});