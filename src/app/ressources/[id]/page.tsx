import { notFound } from 'next/navigation';
import Link from 'next/link';
import { readFile } from 'node:fs/promises';
import type { Metadata } from 'next';
import { resources, formatBytes } from '@/lib/resources';
import { resolveResourceFile } from '@/lib/resource-files';
export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';
export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  return { title: resources.find((r) => r.id === id)?.name ?? 'Ressource introuvable' };
}
export default async function ResourcePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const item = resources.find((r) => r.id === id);
  if (!item) notFound();
  const url = `/api/ressources/${id}`;
  let source = '';
  if (item.kind === 'source' && item.bytes < 2 * 1024 * 1024) {
    const file = await resolveResourceFile(id);
    if (file) source = (await readFile(file.resolved, 'utf8')).slice(0, 24000);
  }
  return (
    <article className="container page-content">
      <Link
        href={`/ressources?theme=${encodeURIComponent(item.theme)}`}
        className="back-link"
      >
        ← {item.theme}
      </Link>
      <header className="resource-heading">
        <p className="eyebrow">{item.role}</p>
        <h1>{item.name}</h1>
        <p>
          {item.extension.toUpperCase()} · {formatBytes(item.bytes)}
        </p>
        <a className="button button--primary" href={`${url}?download=1`}>
          Télécharger le fichier ↗
        </a>
      </header>
      {item.kind === 'image' && (
        <img
          className="resource-full-image"
          src={item.extension === 'heic' ? (item.thumbnail ?? url) : url}
          alt={`${item.theme} — ${item.name}`}
        />
      )}
      {item.kind === 'video' && (
        <>
          <video
            className="resource-video"
            controls
            preload="metadata"
            poster={item.thumbnail ?? undefined}
            playsInline
          >
            <source src={url} />
            Votre navigateur ne prend pas en charge cette vidéo.
          </video>
          <p className="document-fallback">
            La vidéo est chargée à la demande. Si le format n’est pas pris en charge,
            téléchargez le fichier.
          </p>
        </>
      )}
      {item.kind === 'audio' && (
        <audio controls preload="metadata" src={url}>
          Télécharger le fichier audio pour l’écouter.
        </audio>
      )}
      {item.extension === 'pdf' && (
        <>
          <iframe title={item.name} src={url} className="cv-preview" />
          <p className="document-fallback">
            <a href={url}>Ouvrir le PDF directement</a>
          </p>
        </>
      )}
      {item.kind === 'document' && item.extension !== 'pdf' && (
        <section className="document-note">
          <h2>Aperçu du document</h2>
          <p>
            {item.excerpt ||
              'Ce format se consulte dans son application d’origine. Le fichier est disponible au téléchargement.'}
          </p>
        </section>
      )}
      {source && (
        <section className="source-preview">
          <h2>Extrait du fichier</h2>
          <pre>
            <code>{source}</code>
          </pre>
          {item.bytes > 24000 && (
            <p>
              Extrait limité pour la lecture ; le téléchargement contient le fichier
              complet.
            </p>
          )}
        </section>
      )}
      {item.kind === 'archive' && (
        <div className="document-note">
          <h2>Archive de travail</h2>
          <p>
            Le fichier ZIP conserve son organisation d’origine. Les documents et médias
            extraits sont également consultables dans la bibliothèque lorsqu’ils sont pris
            en charge.
          </p>
        </div>
      )}
      <div className="tags resource-theme-links">
        {item.themes.map((theme) => (
          <Link href={`/ressources?theme=${encodeURIComponent(theme)}`} key={theme}>
            {theme} ↗
          </Link>
        ))}
      </div>
    </article>
  );
}
