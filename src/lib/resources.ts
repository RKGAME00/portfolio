import catalog from '@/content/generated/resources.json';
import type { Resource } from './resource-types';
import { blockResources } from '../../contenus';
export type { Resource, ResourceKind } from './resource-types';
export { formatBytes, resourceKinds } from './resource-types';

/** Catalogue unique des ressources, chargé côté serveur. */
// Les médias viennent avant les fichiers techniques dans toutes les galeries.
// Le tri est stable : il ne modifie ni les originaux ni le manifeste de dédoublonnage.
const order = { image: 0, video: 1, audio: 2, document: 3, source: 4, archive: 5 };
const boardIds = new Set(['b932db254e1bc3e2962b82be', '5559968adb6cc802f2b1fe18']);
const selectedIds = new Set(Object.values(blockResources).flat());
export const resources = (catalog as Resource[]).filter((item) => selectedIds.has(item.id)).sort(
  (a, b) =>
    (boardIds.has(a.id) ? -1 : order[a.kind]) - (boardIds.has(b.id) ? -1 : order[b.kind]),
);
export function findResources(themes: string[]) {
  return resources.filter((resource) =>
    resource.themes.some((theme) => themes.includes(theme)),
  );
}
