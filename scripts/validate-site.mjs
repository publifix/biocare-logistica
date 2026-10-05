// Validaciones del build: un solo H1, enlaces/recursos internos, anclas, JSON-LD y FAQ visible = FAQPage.
import { readFileSync, existsSync, readdirSync, statSync } from 'node:fs';
import { join } from 'node:path';

const DIST = 'dist';
const BASE = (process.env.BASE_PATH ?? '/').replace(/\/?$/, '/');
const pages = [];
const walk = (d) => readdirSync(d).forEach((f) => {
  const p = join(d, f);
  statSync(p).isDirectory() ? walk(p) : p.endsWith('.html') && pages.push(p);
});
walk(DIST);

let errors = 0;
const fail = (m) => { errors++; console.log('✗', m); };
const strip = (s) => s.replace(/<[^>]+>/g, '').replace(/&amp;/g, '&').replace(/&#39;/g, "'").replace(/&quot;/g, '"').replace(/\s+/g, ' ').trim();

for (const page of pages) {
  const html = readFileSync(page, 'utf8');
  const h1 = (html.match(/<h1[\s>]/g) || []).length;
  h1 === 1 ? console.log(`✓ ${page}: 1 H1`) : fail(`${page}: ${h1} H1`);

  const ids = new Set([...html.matchAll(/\sid="([^"]+)"/g)].map((m) => m[1]));
  const refs = [...html.matchAll(/\s(?:href|src)="([^"]+)"/g), ...[...html.matchAll(/\ssrcset="([^"]+)"/g)].flatMap((m) => m[1].split(',').map((x) => [null, x.trim().split(' ')[0]]))].map((m) => m[1]);
  for (const ref of refs) {
    if (/^(https?:|mailto:|tel:|data:)/.test(ref)) continue;
    if (ref.startsWith('#')) { if (ref !== '#' && !ids.has(ref.slice(1))) fail(`${page}: ancla rota ${ref}`); continue; }
    const [path, hash] = ref.split('#');
    if (!path.startsWith(BASE)) { fail(`${page}: ruta fuera de base ${ref}`); continue; }
    const rel = path.slice(BASE.length);
    const target = join(DIST, rel, rel === '' || rel.endsWith('/') ? 'index.html' : '');
    if (!existsSync(target)) fail(`${page}: recurso roto ${ref}`);
    else if (hash && target.endsWith('index.html')) {
      const tIds = new Set([...readFileSync(target, 'utf8').matchAll(/\sid="([^"]+)"/g)].map((m) => m[1]));
      if (!tIds.has(hash)) fail(`${page}: ancla rota ${ref}`);
    }
  }

  const visible = strip(html.replace(/<script[\s\S]*?<\/script>/g, '').replace(/<head[\s\S]*?<\/head>/g, ''));
  if (/\[VALIDAR|\[X\]/.test(visible)) fail(`${page}: quedan marcadores [VALIDAR]/[X] visibles`);

  for (const m of html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)) {
    let data;
    try { data = JSON.parse(m[1]); console.log(`✓ ${page}: JSON-LD válido (${data['@graph'].map((n) => n['@type']).join(', ')})`); }
    catch (e) { fail(`${page}: JSON-LD inválido ${e.message}`); continue; }
    const faqNode = data['@graph'].find((n) => n['@type'] === 'FAQPage');
    if (faqNode) {
      const qs = [...html.matchAll(/<details[\s\S]*?<h3[^>]*>([\s\S]*?)<\/h3>[\s\S]*?<\/summary>\s*<p[^>]*>([\s\S]*?)<\/p>/g)].map((x) => [strip(x[1]), strip(x[2])]);
      const ld = faqNode.mainEntity.map((q) => [q.name, q.acceptedAnswer.text]);
      JSON.stringify(qs) === JSON.stringify(ld)
        ? console.log(`✓ FAQPage coincide con las ${qs.length} preguntas visibles`)
        : fail('FAQPage no coincide con el FAQ visible');
    }
  }
}
console.log(errors ? `\n${errors} error(es)` : '\nSin errores');
process.exit(errors ? 1 : 0);
