import { resolveResourceFile } from '@/lib/resource-files';
import { streamFile } from '@/lib/stream-file';
export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';
export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  const { id } = await params;
  const file = await resolveResourceFile(id);
  return file
    ? streamFile(request, file)
    : new Response('Ressource introuvable', { status: 404 });
}
