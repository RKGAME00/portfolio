import 'server-only';
import { readFile, realpath, stat } from 'node:fs/promises';
import path from 'node:path';

// Ce module ne doit jamais être importé depuis un composant client.
// Le navigateur demande un identifiant, jamais un chemin de fichier arbitraire.
export async function resolveResourceFile(id: string) {
  if (!/^[a-f0-9]{24}$/.test(id)) return null;
  try {
    const root = process.cwd();
    const registry = JSON.parse(
      await readFile(path.join(root, '.cache/ressources/registry.json'), 'utf8'),
    ) as Record<string, { path: string; name: string; kind: string }>;
    const entry = registry[id];
    if (!entry) return null;
    const resolved = await realpath(path.join(root, entry.path));
    const allowed = ['ressources-locales', '.cache/ressources/extraits'].some((folder) =>
      resolved.startsWith(path.join(root, folder) + path.sep),
    );
    if (!allowed) return null;
    const info = await stat(resolved);
    if (!info.isFile()) return null;
    return { ...entry, resolved, size: info.size };
  } catch {
    return null;
  }
}
