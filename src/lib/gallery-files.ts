import 'server-only';
import { readdir, realpath, stat } from 'node:fs/promises';
import path from 'node:path';
import organisation from '../../contenus/organisation.json';

// Ce dossier est la sélection éditoriale : aucun manifeste ne la repeuple.
const root = process.cwd();
const blocks: Record<string, string> = organisation;
const folders = ['images', 'videos', 'documents', 'audio'];
function galleryPath(block: string) {
  const relative = Object.hasOwn(blocks, block) ? blocks[block] : null;
  return relative && !relative.startsWith('a-trier/')
    ? path.join(root, 'contenus', relative, 'ressources')
    : null;
}
export async function resolveGalleryFile(key: string, block = 'labaa') {
  const gallery = galleryPath(block);
  if (!gallery) return null;
  const parts = key.split('/');
  if (
    parts.length !== 2 ||
    !folders.includes(parts[0]) ||
    !parts[1] ||
    parts[1].startsWith('.') ||
    /[\\\x00]/.test(key)
  )
    return null;
  try {
    let resolved = await realpath(path.join(gallery, ...parts));
    // Le fichier .ready n’est créé qu’après validation complète de la copie Web.
    // L’original doit toujours exister : retirer sa sélection retire aussi la vidéo.
    if (parts[0] === 'videos') {
      const optimized = path.join(gallery, 'videos-web', parts[1]);
      try {
        await stat(`${optimized}.ready`);
        const candidate = await realpath(optimized);
        if (candidate.startsWith(gallery + path.sep)) resolved = candidate;
      } catch {
        /* Une nouvelle vidéo reste lisible dans son format original. */
      }
    }
    // Les liens existants pointent vers les originaux ou les archives extraites.
    // Un lien vers un fichier extérieur (configuration système, secrets…) est refusé.
    if (
      ![
        gallery,
        path.join(root, 'ressources-locales'),
        path.join(root, '.cache/ressources/extraits'),
      ].some((base) => resolved.startsWith(base + path.sep))
    )
      return null;
    const info = await stat(resolved);
    if (!info.isFile()) return null;
    return { resolved, size: info.size, name: parts[1], modified: info.mtimeMs };
  } catch {
    return null;
  }
}
export async function listGallery(block = 'labaa') {
  const gallery = galleryPath(block);
  if (!gallery) return null;
  const items = [];
  const seen = new Set<string>();
  for (const folder of folders) {
    const names = await readdir(path.join(gallery, folder)).catch(() => [] as string[]);
    for (const name of names.sort((a, b) => a.localeCompare(b, 'fr'))) {
      const key = `${folder}/${name}`;
      const file = await resolveGalleryFile(key, block);
      if (!file || seen.has(file.resolved)) continue;
      seen.add(file.resolved);
      const extension = path.extname(name).toLowerCase();
      const kind = /\.(png|jpe?g|webp|gif|avif)$/.test(extension)
        ? 'image'
        : /\.(mp4|webm|mov)$/.test(extension)
          ? 'video'
          : /\.(mp3|wav|ogg|flac|m4a)$/.test(extension)
            ? 'audio'
            : 'document';
      items.push({
        key,
        name: name.replace(/^[a-f0-9]{8}--/, ''),
        kind,
        bytes: file.size,
        url: `/api/galerie?bloc=${encodeURIComponent(block)}&file=${encodeURIComponent(key)}&v=${file.modified}`,
      });
    }
  }
  return items;
}
