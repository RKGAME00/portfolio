/** Cohérence des blocs et de leurs liens locaux, sans modifier les originaux. */
import { readFile, readdir, realpath, stat } from 'node:fs/promises';
import assert from 'node:assert/strict';
import path from 'node:path';
const root = process.cwd();
const catalog = JSON.parse(
  await readFile('src/content/generated/resources.json', 'utf8'),
);
const registry = JSON.parse(await readFile('.cache/ressources/registry.json', 'utf8'));
const ids = new Set(catalog.map((r) => r.id));
const seen = new Set();
const slugs = new Set();
let links = 0;
const organisation = JSON.parse(await readFile('contenus/organisation.json','utf8'));
for (const [block, relative] of Object.entries(organisation)) {
  const dir = path.join('contenus', relative);
  const files = await readdir(dir);
  if (files.includes('texte.json')) {
    const project = JSON.parse(await readFile(path.join(dir, 'texte.json'), 'utf8'));
    assert(!slugs.has(project.slug), `Projet dupliqué : ${project.slug}`);
    slugs.add(project.slug);
    assert((await stat(path.join('public', project.image))).isFile(), project.image);
    if (project.report) assert(ids.has(project.report.id));
  }
  if (files.includes('ressources.json')) {
    const data = JSON.parse(await readFile(path.join(dir, 'ressources.json'), 'utf8'));
    for (const id of data.ids) {
      assert(ids.has(id), `Ressource inconnue : ${id}`);
      assert(!seen.has(id), `Deux propriétaires pour ${id}`);
      seen.add(id);
    }
  }
  if (files.includes('inventaire-local.json')) {
    const entries = JSON.parse(
      await readFile(path.join(dir, 'inventaire-local.json'), 'utf8'),
    );
    for (const item of entries) {
      // Retirer un lien LABAA de la galerie est une sélection éditoriale valide.
      if (item.lien.startsWith('ressources/') && !(await stat(path.join(dir, item.lien)).catch(() => null))) continue;
      assert.equal(
        await realpath(path.join(dir, item.lien)),
        await realpath(registry[item.id].path),
      );
      links++;
    }
  }
}
assert.equal(
  seen.size,
  catalog.length,
  'Des ressources ont été perdues pendant la réorganisation.',
);
assert.equal([...slugs].filter((s) => s.includes('labaa')).length, 1);
assert.equal([...slugs].filter((s) => s.includes('subatech')).length, 1);
assert(!slugs.has('domotique'));
console.log(
  `${slugs.size} fiches uniques, ${seen.size} ressources réparties sans doublons, ${links} liens locaux valides.`,
);
