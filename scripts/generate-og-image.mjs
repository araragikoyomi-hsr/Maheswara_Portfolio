/**
 * Generates the Open Graph / social preview image at public/og-image.png.
 *
 * Run with `npm run og-image` after changing the profile data. The output is
 * committed, so this only needs to run when the wording changes — it is not
 * part of the production build.
 */
import { mkdir, writeFile } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const here = dirname(fileURLToPath(import.meta.url));
const outputPath = resolve(here, '../public/og-image.png');

const WIDTH = 1200;
const HEIGHT = 630;

const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${WIDTH}" height="${HEIGHT}" viewBox="0 0 ${WIDTH} ${HEIGHT}">
  <defs>
    <radialGradient id="glow" cx="18%" cy="12%" r="70%">
      <stop offset="0%" stop-color="#64ffda" stop-opacity="0.16" />
      <stop offset="100%" stop-color="#64ffda" stop-opacity="0" />
    </radialGradient>
    <pattern id="grid" width="48" height="48" patternUnits="userSpaceOnUse">
      <path d="M48 0H0V48" fill="none" stroke="#233554" stroke-width="1" />
    </pattern>
  </defs>

  <rect width="${WIDTH}" height="${HEIGHT}" fill="#0a192f" />
  <rect width="${WIDTH}" height="${HEIGHT}" fill="url(#grid)" opacity="0.55" />
  <rect width="${WIDTH}" height="${HEIGHT}" fill="url(#glow)" />
  <rect x="0" y="0" width="12" height="${HEIGHT}" fill="#64ffda" />

  <text x="96" y="150" font-family="Consolas, 'Courier New', monospace" font-size="22" letter-spacing="6" fill="#64ffda">
    MOBILE FRONTEND ENGINEER
  </text>

  <text x="96" y="270" font-family="'Segoe UI', Arial, sans-serif" font-size="76" font-weight="700" fill="#ccd6f6">
    Maheswara Akilla
  </text>

  <text x="96" y="348" font-family="'Segoe UI', Arial, sans-serif" font-size="34" font-weight="500" fill="#a8b2d1">
    I build mobile products that work offline.
  </text>

  <text x="96" y="440" font-family="Consolas, 'Courier New', monospace" font-size="26" fill="#8892b0">
    React Native · Expo · TypeScript
  </text>

  <line x1="96" y1="500" x2="1104" y2="500" stroke="#233554" stroke-width="2" />

  <text x="96" y="556" font-family="Consolas, 'Courier New', monospace" font-size="22" fill="#8892b0">
    Payments · invoices · banking
  </text>

  <text x="1104" y="556" text-anchor="end" font-family="Consolas, 'Courier New', monospace" font-size="22" fill="#64ffda">
    maheswara-portfolio.vercel.app
  </text>
</svg>`;

await mkdir(dirname(outputPath), { recursive: true });
const png = await sharp(Buffer.from(svg)).png({ compressionLevel: 9 }).toBuffer();
await writeFile(outputPath, png);

console.log(
  `Wrote ${outputPath} (${WIDTH}x${HEIGHT}, ${(png.length / 1024).toFixed(1)} KB)`,
);
