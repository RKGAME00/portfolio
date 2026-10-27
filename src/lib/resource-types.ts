/** Types et libellés partagés avec le navigateur, sans importer le catalogue. */
export type ResourceKind =
  'image' | 'video' | 'audio' | 'document' | 'source' | 'archive';
export type Resource = {
  id: string;
  name: string;
  kind: ResourceKind;
  extension: string;
  bytes: number;
  theme: string;
  themes: string[];
  role: string;
  thumbnail: string | null;
  copies: number;
  excerpt: string;
};
export const resourceKinds: Record<ResourceKind, string> = {
  image: 'Images',
  video: 'Vidéos',
  audio: 'Audio',
  document: 'Documents',
  source: 'Code & fichiers',
  archive: 'Archives',
};
export function formatBytes(bytes: number) {
  if (bytes < 1024) return `${bytes} o`;
  if (bytes < 1024 ** 2) return `${(bytes / 1024).toFixed(0)} Ko`;
  if (bytes < 1024 ** 3) return `${(bytes / 1024 ** 2).toFixed(1)} Mo`;
  return `${(bytes / 1024 ** 3).toFixed(1)} Go`;
}
