/** Contrôle HTTP des blocs après réorganisation : aucun chemin libre ni fichier de réserve exposé. */
import {readFile} from 'node:fs/promises';
import assert from 'node:assert/strict';
const base='http://127.0.0.1:3000';
const map=JSON.parse(await readFile('contenus/organisation.json','utf8'));
let count=0;
for(const [block,folder] of Object.entries(map)) {
 const response=await fetch(`${base}/api/galerie?bloc=${encodeURIComponent(block)}`);
 if(folder.startsWith('a-trier/')) {assert.equal(response.status,404);continue;}
 assert.equal(response.status,200,block);
 const items=await response.json();
 assert(items.every(item=>!item.key.startsWith('sources/')&&!item.key.startsWith('archives/')),block);
 if(items.length) {
  const media=await fetch(base+items[0].url,{headers:{Range:'bytes=0-15'}});
  assert.equal(media.status,206,block);await media.arrayBuffer();
 }
 count++;
}
for(const block of ['../../docs','__proto__','inexistant']) assert.equal((await fetch(`${base}/api/galerie?bloc=${encodeURIComponent(block)}`)).status,404);
const home=await (await fetch(base)).text();
assert(home.includes('Mes stages'));assert(home.includes('Mes projets de BUT GEII'));
assert(!home.includes('electronics-showcase'));assert(!home.includes('resource-overview'));
for(const slug of ['modelisation-3d','robotique-lycee','projet-sti2d']) {
 const html=await (await fetch(`${base}/realisations/${slug}`)).text();
 assert(html.includes('Le contenu sera ajouté prochainement.'));
}
console.log(`${count} galeries vérifiées ; réserves exclues ; accueil et espaces à compléter conformes.`);
