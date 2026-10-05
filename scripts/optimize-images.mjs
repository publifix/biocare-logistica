// Genera las imágenes del sitio (AVIF + WebP, dos anchos) con los nombres de archivo
// definidos en "Textos web y SEO". Uso: npm run images
import sharp from 'sharp';
import { writeFile } from 'node:fs/promises';

const photos = [
  ['biocare-hero-image.jpg', 'transporte-muestras-biologicas-queretaro-biocare'],
  ['biocare-web-image-5.jpg', 'ruta-programada-recoleccion-muestras'],
  ['biocare-web-image-4.jpg', 'moto-recoleccion-muestras-clinicas'],
  ['biocare-web-image3.jpg', 'mensajero-hielera-temperatura-controlada'],
  ['biocare-web-image-1.jpg', 'entrega-muestras-laboratorio-clinico'],
  ['biocare-web-image-6.jpg', 'personal-biocare-solucion-logistica'],
];

const WIDTHS = [640, 960, 1280];
const manifest = {};

for (const [src, name] of photos) {
  const meta = await sharp(src).metadata();
  const sizes = [];
  for (const w of WIDTHS) {
    const width = Math.min(w, meta.width);
    const height = Math.round((meta.height / meta.width) * width);
    const suffix = w === WIDTHS.at(-1) ? '' : `-${w}`;
    const base = sharp(src).resize({ width });
    await base.clone().avif({ quality: 52, effort: 6 }).toFile(`public/img/${name}${suffix}.avif`);
    await base.clone().webp({ quality: 74 }).toFile(`public/img/${name}${suffix}.webp`);
    sizes.push({ file: `${name}${suffix}`, width, height });
  }
  manifest[name] = sizes;
}

await writeFile('src/data/images.json', JSON.stringify(manifest, null, 2) + '\n');
console.log('Imágenes generadas:', Object.keys(manifest).length);

// Logotipos para el header/footer (WebP 1x y 2x); el PNG se conserva para JSON-LD.
for (const color of ['verde', 'blanco']) {
  const src = `public/brand/biocare-logo-${color}.png`;
  for (const w of [200, 400]) {
    await sharp(src).resize({ width: w }).webp({ quality: 90 }).toFile(`public/brand/biocare-logo-${color}-${w}.webp`);
  }
}
