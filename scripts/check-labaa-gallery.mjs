/** Vérifie le dossier vivant sans supprimer de fichier : les fixtures sont archivées. */
import assert from 'node:assert/strict';
import {copyFile, mkdir, rename, symlink} from 'node:fs/promises';
import path from 'node:path';
const base = 'http://127.0.0.1:3000';
const stamp = Date.now();
const name = `verification-${stamp}.webp`;
const folder = 'contenus/stages/labaa/ressources/images';
const archive = `.cache/verification/galerie-${stamp}`;
await mkdir(archive, {recursive:true});
const list = async () => {
 const response = await fetch(`${base}/api/galerie-labaa`);
 assert.equal(response.status,200);
 assert.equal(response.headers.get('cache-control'),'no-store');
 return response.json();
};
const original = await list();
const fixtures = [];
try {
 await copyFile('contenus/stages/labaa/images-web/labaa-fauteuil.webp',path.join(folder,name));
 fixtures.push(name);
 const added = (await list()).find(item => item.name === name);
 assert(added,'Un nouveau fichier doit apparaître sans compilation');
 const response = await fetch(base+added.url,{headers:{Range:'bytes=0-15'}});
 assert.equal(response.status,206);
 assert.equal((await response.arrayBuffer()).byteLength,16);
 const thumbnail = await fetch(`${base}/_next/image?url=${encodeURIComponent(added.url)}&w=640&q=75`);
 assert.equal(thumbnail.status,200,'La vignette optimisée doit être accessible');
 assert(thumbnail.headers.get('content-type').startsWith('image/'));
 await thumbnail.arrayBuffer();
 assert.equal((await fetch(base+added.url,{headers:{Range:'bytes=999999999-'}})).status,416);
 const unsafe = `verification-${stamp}-externe.webp`;
 await symlink('/etc/hosts',path.join(folder,unsafe)); fixtures.push(unsafe);
 assert(!(await list()).some(item => item.name === unsafe),'Un lien externe doit être refusé');
 assert.equal((await fetch(`${base}/api/galerie-labaa?file=${encodeURIComponent('images/'+unsafe)}`)).status,404);
 for (const key of ['../texte.json','images/../texte.json','images/.secret','images/..']) {
  assert.equal((await fetch(`${base}/api/galerie-labaa?file=${encodeURIComponent(key)}`)).status,404);
 }
 await rename(path.join(folder,name),path.join(archive,name)); fixtures.splice(fixtures.indexOf(name),1);
 assert(!(await list()).some(item => item.name === name),'Le retrait doit être visible sans compilation');
 assert.equal((await fetch(base+added.url)).status,404);
 assert.equal((await list()).length,original.length);
 console.log(`${original.length} ressources : ajout, retrait, streaming Range et confinement vérifiés. Fixtures archivées dans ${archive}.`);
} finally {
 for (const item of fixtures) await rename(path.join(folder,item),path.join(archive,item));
}
