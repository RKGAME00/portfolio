import { createReadStream } from 'node:fs';
import { Readable } from 'node:stream';
import { resolveResourceFile } from '@/lib/resource-files';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';
const mimeTypes: Record<string, string> = {
  pdf: 'application/pdf',
  mp4: 'video/mp4',
  webm: 'video/webm',
  mov: 'video/quicktime',
  mp3: 'audio/mpeg',
  wav: 'audio/wav',
  flac: 'audio/flac',
  ogg: 'audio/ogg',
  m4a: 'audio/mp4',
  jpg: 'image/jpeg',
  jpeg: 'image/jpeg',
  png: 'image/png',
  webp: 'image/webp',
  gif: 'image/gif',
};
/** Streaming avec Range : le navigateur peut avancer dans une vidéo de plusieurs Go
 * sans charger le fichier en mémoire. Les originaux restent à leur emplacement. */
export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  const { id } = await params;
  const file = await resolveResourceFile(id);
  if (!file) return new Response('Ressource introuvable', { status: 404 });
  const extension = file.name.split('.').pop()?.toLowerCase() ?? '';
  const contentType = mimeTypes[extension] ?? 'application/octet-stream';
  const download = new URL(request.url).searchParams.has('download');
  const headers = new Headers({
    'Content-Type': contentType,
    'Accept-Ranges': 'bytes',
    'X-Content-Type-Options': 'nosniff',
    'Cache-Control': 'private, max-age=3600',
    'Content-Disposition': `${download || !mimeTypes[extension] ? 'attachment' : 'inline'}; filename*=UTF-8''${encodeURIComponent(file.name).replace(/'/g, '%27')}`,
  });
  const range = request.headers.get('range');
  let start = 0;
  let end = file.size - 1;
  if (range) {
    const match = /^bytes=(\d*)-(\d*)$/.exec(range);
    if (!match || (!match[1] && !match[2]))
      return new Response(null, {
        status: 416,
        headers: { 'Content-Range': `bytes */${file.size}` },
      });
    start = match[1] ? Number(match[1]) : Math.max(0, file.size - Number(match[2]));
    end = match[1] && match[2] ? Math.min(Number(match[2]), end) : end;
    if (
      !Number.isSafeInteger(start) ||
      !Number.isSafeInteger(end) ||
      start > end ||
      start >= file.size
    )
      return new Response(null, {
        status: 416,
        headers: { 'Content-Range': `bytes */${file.size}` },
      });
    headers.set('Content-Range', `bytes ${start}-${end}/${file.size}`);
  }
  if (file.size === 0) {
    headers.set('Content-Length', '0');
    return new Response(null, { headers });
  }
  headers.set('Content-Length', String(end - start + 1));
  const stream = createReadStream(file.resolved, { start, end });
  return new Response(Readable.toWeb(stream) as ReadableStream<Uint8Array>, {
    status: range ? 206 : 200,
    headers,
  });
}
