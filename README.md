# BioCare Solución Logística — Landing

Landing de BioCare Solución Logística (recolección y transporte de muestras clínicas y medicamentos en Querétaro y el Bajío).
Astro (salida estática) + Tailwind CSS 4. Contenido: `BioCare Solución Logística — Textos web y SEO (landing).docx`, transcrito palabra por palabra en `src/data/content.ts`.

## Comandos

| Comando | Qué hace |
|---|---|
| `npm install` | Instala dependencias |
| `npm run dev` | Servidor local en `http://localhost:4321` |
| `npm run build` | Genera el sitio estático en `dist/` |
| `npm run preview` | Sirve `dist/` |
| `npm run images` | Regenera fotos AVIF/WebP y logotipos WebP desde los originales |
| `node scripts/validate-site.mjs` | Valida H1 único, enlaces/anclas internas, JSON-LD y que FAQPage = FAQ visible |

## Variables de entorno

| Variable | Uso |
|---|---|
| `PUBLIC_FORM_ENDPOINT` | URL que recibe el POST del formulario (FormData, responde 2xx). En GitHub: *Settings → Secrets and variables → Actions → Variables*. Sin ella, el formulario muestra el mensaje de error con la alternativa de WhatsApp. |
| `SITE` | Dominio canónico (por defecto `https://biocare.com.mx`). |
| `BASE_PATH` | Subruta de publicación (GitHub Pages la define sola; en el dominio definitivo, `/`). |

## Estructura

- `src/data/content.ts` — todos los textos del documento; `src/data/schema.ts` — JSON-LD (FAQPage se genera de las mismas preguntas visibles).
- `src/pages/` — `index.astro` (landing), `aviso-de-privacidad.astro` (provisional, noindex), `404.astro`.
- `public/` — favicons, `site.webmanifest`, `robots.txt`, `sitemap.xml`, `og/biocare-og-1200x630.jpg`, fotos en `img/`, logotipos en `brand/`.
- `docs/lighthouse/` — últimos reportes de Lighthouse (móvil y escritorio).

## Publicación

`.github/workflows/deploy-pages.yml` compila y publica en GitHub Pages en cada push a `main` o `claude/**`.
