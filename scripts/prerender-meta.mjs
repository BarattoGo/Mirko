import fs from 'node:fs';
import path from 'node:path';
import { PAGE_SEO, SITE } from '../src/data.js';

const distDir = path.resolve('dist');
const template = fs.readFileSync(path.join(distDir, 'index.html'), 'utf8');

const escapeHtml = (str) =>
  str
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');

const injectMeta = (html, meta) => {
  const cleanPath = meta.path === '/' ? '/' : meta.path.replace(/\/+$/, '');
  const fullUrl = `${SITE.url}${cleanPath}`;
  const imgPath = meta.image || '/logo.jpg';
  const fullImg = imgPath.startsWith('http') ? imgPath : `${SITE.url}${imgPath}`;
  const robots = meta.noindex ? 'noindex, follow' : 'index, follow';
  const t = escapeHtml(meta.title);
  const d = escapeHtml(meta.description);

  return html
    .replace(/<title>[\s\S]*?<\/title>/, `<title>${t}</title>`)
    .replace(
      /<meta\s+name="description"\s+content="[^"]*"\s*\/>/,
      `<meta name="description" content="${d}" />`
    )
    .replace(
      /<meta\s+name="robots"\s+content="[^"]*"\s*\/>/,
      `<meta name="robots" content="${robots}" />`
    )
    .replace(
      /<link\s+rel="canonical"\s+href="[^"]*"\s*\/>/,
      `<link rel="canonical" href="${fullUrl}" />`
    )
    .replace(
      /<meta\s+property="og:title"\s+content="[^"]*"\s*\/>/,
      `<meta property="og:title" content="${t}" />`
    )
    .replace(
      /<meta\s+property="og:description"[\s\S]*?\/>/,
      `<meta property="og:description" content="${d}" />`
    )
    .replace(
      /<meta\s+property="og:url"\s+content="[^"]*"\s*\/>/,
      `<meta property="og:url" content="${fullUrl}" />`
    )
    .replace(
      /<meta\s+property="og:image"\s+content="[^"]*"\s*\/>/,
      `<meta property="og:image" content="${fullImg}" />`
    )
    .replace(
      /<meta\s+name="twitter:title"\s+content="[^"]*"\s*\/>/,
      `<meta name="twitter:title" content="${t}" />`
    )
    .replace(
      /<meta\s+name="twitter:description"[\s\S]*?\/>/,
      `<meta name="twitter:description" content="${d}" />`
    )
    .replace(
      /<meta\s+name="twitter:image"\s+content="[^"]*"\s*\/>/,
      `<meta name="twitter:image" content="${fullImg}" />`
    );
};

const routes = [
  PAGE_SEO.menu,
  PAGE_SEO.gintoneria,
  PAGE_SEO.privacy,
  PAGE_SEO.cookie,
  PAGE_SEO.terms,
];

for (const route of routes) {
  const relDir = route.path.replace(/^\/+/, '');
  const outDir = path.join(distDir, relDir);
  fs.mkdirSync(outDir, { recursive: true });
  fs.writeFileSync(path.join(outDir, 'index.html'), injectMeta(template, route), 'utf8');
}

fs.writeFileSync(path.join(distDir, '404.html'), injectMeta(template, PAGE_SEO.notFound), 'utf8');
console.log(`✓ Generated static SEO HTML for ${routes.length} routes + 404.html`);
