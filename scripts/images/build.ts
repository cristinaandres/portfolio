// Crops every figure and cover declared in the content module out of her slides
// (assets/slides/), recompresses it to WebP under public/images/work/<slug>/, does the
// same for the activity images (assets/activities/ → public/images/activities/), and
// records every size in content/image-manifest.json so pages give next/image real dimensions.
// Deterministic: same slides and crops in, same files out. Run with `npm run images`.
import { mkdir, writeFile } from 'node:fs/promises';
import sharp from 'sharp';
import { activities, animalCrossingLogo, type ActivityImage } from '../../content/activities.ts';
import { projects } from '../../content/projects/index.ts';
import type { Figure } from '../../content/types.ts';

const SLIDES_DIR = 'assets/slides';
const ACTIVITIES_DIR = 'assets/activities';
const OUT_DIR = 'public/images/work';
const MAX_WIDTH = 1600;
const QUALITY = 66;

const manifest: Record<string, { width: number; height: number }> = {};

async function build(slug: string, figure: Figure) {
  const src = `${SLIDES_DIR}/${figure.slide}`;
  const { width = 0, height = 0 } = await sharp(src).metadata();
  let image = sharp(src);
  if (figure.crop) {
    const [x, y, w, h] = figure.crop;
    const left = Math.round(x * width);
    const top = Math.round(y * height);
    image = image.extract({
      left,
      top,
      width: Math.min(Math.round(w * width), width - left),
      height: Math.min(Math.round(h * height), height - top),
    });
  }
  const out = `${OUT_DIR}/${slug}/${figure.id}.webp`;
  const info = await image
    .resize({ width: MAX_WIDTH, withoutEnlargement: true })
    .webp({ quality: QUALITY, effort: 6 })
    .toFile(out);
  manifest[`/images/work/${slug}/${figure.id}.webp`] = { width: info.width, height: info.height };
  return info.size;
}

async function buildActivityImage(image: ActivityImage) {
  const info = await sharp(`${ACTIVITIES_DIR}/${image.source}`)
    .resize({ width: image.maxWidth ?? MAX_WIDTH, withoutEnlargement: true })
    .webp({ quality: QUALITY + 10, effort: 6, alphaQuality: 90 })
    .toFile(`public/images/activities/${image.id}.webp`);
  manifest[`/images/activities/${image.id}.webp`] = { width: info.width, height: info.height };
  return info.size;
}

let total = 0;
for (const project of projects) {
  await mkdir(`${OUT_DIR}/${project.slug}`, { recursive: true });
  const figures = [project.cover, ...project.sections.flatMap((s) => s.figures)];
  const ids = new Set<string>();
  for (const figure of figures) {
    if (ids.has(figure.id)) throw new Error(`${project.slug}: duplicate figure id "${figure.id}"`);
    ids.add(figure.id);
    total += await build(project.slug, figure);
  }
}

await mkdir('public/images/activities', { recursive: true });
const activityImages = [
  animalCrossingLogo,
  ...activities.flatMap((a) => [a.card, a.backdrop, ...a.images]),
];
for (const image of activityImages) total += await buildActivityImage(image);

const sorted = Object.fromEntries(Object.entries(manifest).sort(([a], [b]) => a.localeCompare(b)));
await writeFile('content/image-manifest.json', JSON.stringify(sorted, null, 2) + '\n');
console.log(`${Object.keys(sorted).length} images, ${(total / 1e6).toFixed(1)} MB`);
