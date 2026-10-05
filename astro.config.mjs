// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// SITE: dominio canónico (biocare.com.mx). BASE_PATH: subruta de publicación
// (p. ej. /biocare-logistica en GitHub Pages; "/" en el dominio definitivo).
export default defineConfig({
  site: process.env.SITE ?? 'https://biocare.com.mx',
  base: process.env.BASE_PATH ?? '/',
  output: 'static',
  trailingSlash: 'ignore',
  build: { format: 'directory', inlineStylesheets: 'always' },
  compressHTML: true,
  vite: { plugins: [tailwindcss()] },
});
