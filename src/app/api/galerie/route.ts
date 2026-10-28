import { listGallery, resolveGalleryFile } from '@/lib/gallery-files';
import { streamFile } from '@/lib/stream-file';
export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';
/** Relire le dossier à chaque requête rend les ajouts/retraits visibles sans build. */
export async function GET(request: Request) {
  const search = new URL(request.url).searchParams;
  const block = search.get('bloc') ?? 'labaa';
  const key = search.get('file');
  if (key !== null) {
    const file = await resolveGalleryFile(key, block);
    return file
      ? streamFile(request, file, true)
      : new Response('Fichier introuvable', { status: 404 });
  }
  const items = await listGallery(block);
  return items
    ? Response.json(items, { headers: { 'Cache-Control': 'no-store' } })
    : new Response('Galerie introuvable', { status: 404 });
}
