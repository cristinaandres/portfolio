// Writes a downscaled copy of a slide with a 5 % grid, to read crop fractions off it.
// Usage: node scripts/images/preview-grid.mjs <slide> <out.jpg> [width]
import sharp from 'sharp';

const [, , src, out, width = '1600'] = process.argv;
const resized = await sharp(src)
  .resize({ width: Number(width) })
  .toBuffer({ resolveWithObject: true });
const { width: w, height: h } = resized.info;

let svg = `<svg width="${w}" height="${h}" xmlns="http://www.w3.org/2000/svg">`;
for (let i = 1; i < 20; i++) {
  const x = (w * i) / 20;
  const y = (h * i) / 20;
  const stroke = i % 2 ? 'rgba(255,0,0,.35)' : 'rgba(255,0,0,.85)';
  svg += `<line x1="${x}" y1="0" x2="${x}" y2="${h}" stroke="${stroke}"/><line x1="0" y1="${y}" x2="${w}" y2="${y}" stroke="${stroke}"/>`;
  if (i % 2 === 0) {
    svg += `<text x="${x + 2}" y="14" font-size="13" fill="red">${i * 5}</text><text x="2" y="${y - 2}" font-size="13" fill="red">${i * 5}</text>`;
  }
}
svg += '</svg>';

await sharp(resized.data)
  .composite([{ input: Buffer.from(svg) }])
  .jpeg({ quality: 70 })
  .toFile(out);
