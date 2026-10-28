'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { ImageLightbox } from '@/components/ui/ImageLightbox';
type Item = { key: string; name: string; kind: string; bytes: number; url: string };
/** Seules 24 vignettes sont montées au départ ; aucune vidéo ne se lance seule. */
export function FolderGallery({ block = 'labaa' }: { block?: string }) {
  const [items, setItems] = useState<Item[]>([]);
  const [state, setState] = useState('loading');
  const [query, setQuery] = useState('');
  const [kind, setKind] = useState('');
  const [limit, setLimit] = useState(24);
  useEffect(() => {
    const controller = new AbortController();
    fetch(`/api/galerie?bloc=${encodeURIComponent(block)}`, {
      cache: 'no-store',
      signal: controller.signal,
    })
      .then((response) => {
        if (!response.ok) throw new Error();
        return response.json();
      })
      .then((data) => {
        setItems(data);
        setState('ready');
      })
      .catch((error) => {
        if (error.name !== 'AbortError') setState('error');
      });
    return () => controller.abort();
  }, [block]);
  const normalize = (text: string) =>
    text
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .toLowerCase();
  const filtered = items.filter(
    (item) =>
      (!kind || item.kind === kind) && normalize(item.name).includes(normalize(query)),
  );
  return (
    <section
      className="resource-section folder-gallery"
      aria-labelledby={`gallery-heading-${block}`}
    >
      <p className="eyebrow">Pour aller plus loin</p>
      <h2 id={`gallery-heading-${block}`}>Les travaux, en images et en documents.</h2>
      <p>Photographies, essais et documents complémentaires du projet.</p>
      {state === 'loading' && <p role="status">Chargement des ressources…</p>}
      {state === 'error' && (
        <p role="alert">
          Les ressources n’ont pas pu être chargées. Actualisez la page pour réessayer.
        </p>
      )}
      {state === 'ready' && (
        <>
          <div className="resource-controls">
            <label>
              Rechercher
              <input
                type="search"
                value={query}
                onChange={(event) => {
                  setQuery(event.target.value);
                  setLimit(24);
                }}
                placeholder="Nom du fichier…"
              />
            </label>
            <label>
              Format
              <select
                value={kind}
                onChange={(event) => {
                  setKind(event.target.value);
                  setLimit(24);
                }}
              >
                <option value="">Tous les formats</option>
                <option value="image">Images</option>
                <option value="video">Vidéos</option>
                <option value="audio">Audio</option>
                <option value="document">Documents et fichiers</option>
              </select>
            </label>
          </div>
          <p aria-live="polite">
            {filtered.length} ressources · {Math.min(limit, filtered.length)} affichées
          </p>
          <div className="folder-gallery-grid">
            {filtered.slice(0, limit).map((item) => (
              <article key={item.key}>
                {item.kind === 'image' && (
                  <ImageLightbox src={item.url} title={item.name.replace(/\.[^.]+$/, '')}>
                    <Image
                      width={640}
                      height={420}
                      sizes="(max-width: 600px) 100vw, 360px"
                      src={item.url}
                      alt={item.name}
                      loading="lazy"
                      decoding="async"
                    />
                    <strong className="gallery-image-title">
                      {item.name.replace(/\.[^.]+$/, '')}
                    </strong>
                  </ImageLightbox>
                )}
                {item.kind === 'video' && (
                  <video
                    controls
                    playsInline
                    preload="none"
                    aria-label={item.name}
                    src={item.url}
                  />
                )}
                {item.kind === 'audio' && (
                  <audio controls preload="none" aria-label={item.name} src={item.url} />
                )}
                {item.kind !== 'image' && (
                  <a href={item.url} className="gallery-image-title">
                    {item.name.replace(/\.[^.]+$/, '')} ↗
                  </a>
                )}
              </article>
            ))}
          </div>
          {filtered.length === 0 && <p>Aucune ressource pour cette sélection.</p>}
          {limit < filtered.length && (
            <button
              className="button button--secondary"
              onClick={() => setLimit((value) => value + 24)}
            >
              Afficher davantage
            </button>
          )}
        </>
      )}
    </section>
  );
}
