/** Vérifie le site compilé et tous les médias par petits blocs, sans charger les vidéos. */
import { readFile } from 'node:fs/promises';
import assert from 'node:assert/strict';
const base = 'http://127.0.0.1:3000';
const manifest = JSON.parse(await readFile('.next/prerender-manifest.json', 'utf8'));
const routes = Object.keys(manifest.routes).filter((url) => !url.startsWith('/_'));
for (const url of routes) {
  const response = await fetch(base + url);
  assert.equal(response.status, 200, url);
  await response.arrayBuffer();
}
const catalog = JSON.parse(
  await readFile('src/content/generated/resources.json', 'utf8'),
);
const media = catalog.filter(
  (item) => ['image', 'video'].includes(item.kind) || item.extension === 'pdf',
);
for (const item of media) {
  const response = await fetch(`${base}/api/ressources/${item.id}`, {
    headers: { Range: 'bytes=0-15' },
  });
  assert.equal(response.status, 206, item.name);
  assert.equal(
    (await response.arrayBuffer()).byteLength,
    Math.min(16, item.bytes),
    item.name,
  );
}
for (const kind of ['image', 'video', 'document', 'source', 'archive']) {
  const item = catalog.find((item) => item.kind === kind);
  const response = await fetch(`${base}/ressources/${item.id}`);
  assert.equal(response.status, 200, `Détail ${kind}`);
  await response.text();
}
console.log(
  `${routes.length} routes pré-rendues, ${media.length} images/vidéos/PDF et les 5 types de pages de ressources vérifiés.`,
);
