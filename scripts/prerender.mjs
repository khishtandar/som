// Runs after `vite build` and `vite build --ssr`: renders the app to HTML and
// injects it into dist/index.html, then removes the temporary server bundle.
import { readFileSync, writeFileSync, rmSync } from 'node:fs';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { resolve } from 'node:path';

const root = fileURLToPath(new URL('..', import.meta.url));
const htmlPath = resolve(root, 'dist/index.html');
const ssrDir = resolve(root, 'dist-ssr');

const { render } = await import(pathToFileURL(resolve(ssrDir, 'entry-server.js')).href);
const html = readFileSync(htmlPath, 'utf-8');
const placeholder = '<div id="root"></div>';

if (!html.includes(placeholder)) {
  throw new Error(`prerender: ${placeholder} not found in dist/index.html`);
}

writeFileSync(htmlPath, html.replace(placeholder, `<div id="root">${render()}</div>`));
rmSync(ssrDir, { recursive: true, force: true });
console.log('prerender: dist/index.html now contains the rendered page');
