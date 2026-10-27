/** Vérifications de données et de diffusion : aucun original n'est modifié. */
import assert from 'node:assert/strict';
import { readFile, stat, realpath, open } from 'node:fs/promises';
import path from 'node:path';

const root = process.cwd();
const catalog = JSON.parse(
  await readFile('src/content/generated/resources.json', 'utf8'),
);
const registry = JSON.parse(await readFile('.cache/ressources/registry.json', 'utf8'));
const summary = JSON.parse(
  await readFile('src/content/generated/resource-summary.json', 'utf8'),
);
assert.equal(new Set(catalog.map((item) => item.id)).size, catalog.length);
assert.equal(
  new Set(Object.values(registry).map((item) => item.sha256)).size,
  catalog.length,
);
assert.equal(summary.uniqueResources, catalog.length);
for (const resource of catalog) {
  const entry = registry[resource.id];
  assert(entry, `Fichier non enregistré : ${resource.id}`);
  const file = await realpath(entry.path);
  assert(
    ['ressources-locales', '.cache/ressources/extraits'].some((dir) =>
      file.startsWith(path.join(root, dir) + path.sep),
    ),
  );
  assert.equal(
    (await stat(file)).size,
    resource.bytes,
    `Taille modifiée : ${resource.name}`,
  );
  if (resource.thumbnail)
    assert((await stat(path.join(root, 'public', resource.thumbnail))).isFile());
  assert(resource.themes.length > 0);
}
console.log(
  `${catalog.length} ressources uniques : fichiers, tailles, thèmes et aperçus vérifiés.`,
);

if (process.argv.includes('--http')) {
  const base = 'http://127.0.0.1:3000';
  for (const url of [
    '/',
    '/ressources',
    '/parcours/but-geii',
    '/parcours/ecole-ingenieurs',
    '/realisations',
    '/charte-graphique',
  ]) {
    const response = await fetch(base + url);
    assert.equal(response.status, 200, url);
    await response.text();
  }
  const video = catalog.find((item) => item.kind === 'video');
  assert(video);
  const response = await fetch(`${base}/api/ressources/${video.id}`, {
    headers: { Range: 'bytes=0-1023' },
  });
  assert.equal(response.status, 206);
  assert.equal(response.headers.get('content-length'), '1024');
  assert.equal(response.headers.get('content-range'), `bytes 0-1023/${video.bytes}`);
  const actual = Buffer.from(await response.arrayBuffer());
  const handle = await open(registry[video.id].path, 'r');
  const expected = Buffer.alloc(1024);
  await handle.read(expected, 0, 1024, 0);
  await handle.close();
  assert.deepEqual(
    actual,
    expected,
    'Les octets vidéo doivent correspondre à l’original.',
  );
  const invalid = await fetch(`${base}/api/ressources/${video.id}`, {
    headers: { Range: `bytes=${video.bytes + 10}-` },
  });
  assert.equal(invalid.status, 416);
  const missing = await fetch(`${base}/api/ressources/000000000000000000000000`);
  assert.equal(missing.status, 404);
  const html = catalog.find((item) => item.extension === 'html');
  if (html) {
    const download = await fetch(`${base}/api/ressources/${html.id}`);
    assert(download.headers.get('content-disposition').startsWith('attachment;'));
    assert.equal(download.headers.get('content-type'), 'application/octet-stream');
    await download.arrayBuffer();
  }
  console.log(
    'Pages, streaming vidéo partiel, octets originaux, plages invalides, 404 et téléchargement HTML vérifiés.',
  );
}
