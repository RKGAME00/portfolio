import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFile, readdir, lstat, cp, mkdtemp } from 'node:fs/promises';
import path from 'node:path';
import os from 'node:os';

const root = process.cwd();
const assets = JSON.parse(await readFile('scripts/public-assets.json'));
test('public ne contient aucun lien et les copies correspondent aux sources', async () => {
  async function inspect(directory) {
    for (const name of await readdir(directory)) {
      const file = path.join(directory, name);
      const info = await lstat(file);
      assert.equal(info.isSymbolicLink(), false, file);
      if (info.isDirectory()) await inspect(file);
    }
  }
  await inspect(path.join(root, 'public'));
  for (const [dest, source] of Object.entries(assets)) {
    assert.deepEqual(await readFile(dest), await readFile(source), dest);
  }
});
test('les médias peuvent être empaquetés puis recopiés sur un cache existant', async () => {
  // Conserver le dossier temporaire : pas de suppression des fichiers du projet.
  const output = await mkdtemp(path.join(os.tmpdir(), 'portfolio-public-'));
  for (let pass = 0; pass < 2; pass++) {
    await cp(path.join(root, 'public/images'), path.join(output, 'images'), { recursive: true });
  }
  assert.deepEqual(await readFile(path.join(output, 'images/balises.webp')), await readFile('public/images/balises.webp'));
});
