import { readFile, lstat, copyFile, realpath } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

// Les sources restent rangées par projet ; public contient des copies portables.
// Aucun lien symbolique n’est transmis au copieur de fichiers de Vercel.
const root = fileURLToPath(new URL('../', import.meta.url));
const assets = JSON.parse(
  await readFile(new URL('./public-assets.json', import.meta.url)),
);
for (const [destination, source] of Object.entries(assets)) {
  const src = path.resolve(root, source);
  const dest = path.resolve(root, destination);
  if (
    !src.startsWith(path.join(root, 'contenus') + path.sep) ||
    !dest.startsWith(path.join(root, 'public') + path.sep)
  ) {
    throw new Error(`Chemin de média non autorisé : ${destination}`);
  }
  const info = await lstat(dest).catch((error) => {
    if (error.code === 'ENOENT') return null;
    throw error;
  });
  if (info?.isSymbolicLink())
    throw new Error(`Lien symbolique interdit dans public : ${destination}`);
  if ((await realpath(src)) === dest)
    throw new Error(`Source et copie identiques : ${destination}`);
  await copyFile(src, dest);
}
console.log(`${Object.keys(assets).length} médias publics synchronisés.`);
