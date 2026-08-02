/**
 * Turn raw brand logo downloads into the trimmed, transparent, compressed
 * icons the landing strip renders.
 *
 *   1. drop originals into public/logos/raw/  (png | jpg | webp | svg)
 *   2. node scripts/build-logos.mjs
 *   3. optimized files land in public/logos/
 *
 * Raster sources get a near-white background knocked out to transparency,
 * are trimmed to their ink, scaled to a 64px tall band (2x the 32px display
 * height, for retina), and written as palette PNGs. SVG sources are already
 * resolution-independent, so they are copied through untouched.
 */

import { readdir, mkdir, copyFile, writeFile } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const RAW = path.join(process.cwd(), "public", "logos", "raw");
const OUT = path.join(process.cwd(), "public", "logos");

// Pixels at or above this on every channel are treated as background. Set low
// enough to catch the light-grey squares of a baked-in transparency
// checkerboard (#e7e7e7), which is how most logo thumbnails come off a search
// result. Paired with the neutrality test below, so brand colour is safe.
const WHITE = 222;
const TARGET_HEIGHT = 64;

async function knockOutBackground(file) {
  const img = sharp(file).ensureAlpha();
  const { data, info } = await img
    .raw()
    .toBuffer({ resolveWithObject: true });

  for (let i = 0; i < data.length; i += 4) {
    const [r, g, b, a] = [data[i], data[i + 1], data[i + 2], data[i + 3]];
    if (a === 0) continue;
    // Near-white and near-neutral: background, not ink. The neutrality check
    // keeps pale brand tints (a light blue cloud, say) from being erased.
    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);
    if (min >= WHITE && max - min <= 8) data[i + 3] = 0;
  }

  return sharp(data, {
    raw: { width: info.width, height: info.height, channels: 4 },
  });
}

async function main() {
  let files;
  try {
    files = await readdir(RAW);
  } catch {
    console.error(`No raw folder yet. Create ${RAW} and drop the logos in.`);
    process.exit(1);
  }

  await mkdir(OUT, { recursive: true });
  const report = [];

  for (const file of files) {
    const ext = path.extname(file).toLowerCase();
    const name = path.basename(file, ext).toLowerCase().replace(/\s+/g, "-");
    const src = path.join(RAW, file);

    if (ext === ".svg") {
      await copyFile(src, path.join(OUT, `${name}.svg`));
      report.push(`${name}.svg  (copied)`);
      continue;
    }

    if (![".png", ".jpg", ".jpeg", ".webp"].includes(ext)) continue;

    const cleaned = await knockOutBackground(src);
    const out = path.join(OUT, `${name}.png`);
    const { size } = await cleaned
      .trim({ threshold: 1 })
      .resize({ height: TARGET_HEIGHT, fit: "inside", withoutEnlargement: false })
      .png({ palette: true, quality: 90, compressionLevel: 9, effort: 10 })
      .toFile(out);

    report.push(`${name}.png  (${(size / 1024).toFixed(1)} kB)`);
  }

  // Record what's available so the strip can render logos and fall back to a
  // wordmark for anything still missing.
  await writeFile(
    path.join(OUT, "manifest.json"),
    JSON.stringify(
      (await readdir(OUT)).filter((f) => /\.(svg|png)$/i.test(f)),
      null,
      2
    ) + "\n"
  );

  console.log(report.join("\n") || "Nothing to process.");
}

main();
