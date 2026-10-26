import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { pages } from '@/content/pages';
import { EditorialPage } from '@/components/ui/EditorialPage';
/** Cette route sert uniquement les pages déclarées. Toute autre URL retourne 404. */
export function generateStaticParams() {
  return pages.map((page) => ({ slug: page.path.split('/') }));
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const page = pages.find((item) => item.path === slug.join('/'));
  return { title: page?.title ?? 'Page introuvable', description: page?.intro };
}
export default async function ContentPage({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}) {
  const { slug } = await params;
  const page = pages.find((item) => item.path === slug.join('/'));
  if (!page) notFound();
  return <EditorialPage page={page} />;
}
