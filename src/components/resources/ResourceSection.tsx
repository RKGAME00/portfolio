import Link from 'next/link';
import { findResources } from '@/lib/resources';
import { ResourceBrowser } from './ResourceBrowser';
import { resources } from '@/lib/resources';

/** Chaque page sélectionne ses thèmes, pas une copie de ses fichiers. */
export function ResourceSection({
  themes,
  ids,
  title = 'Les travaux, en images et en documents.',
}: {
  themes: string[];
  ids?: string[];
  title?: string;
}) {
  const selectedIds = ids ? new Set(ids) : null;
  const found = selectedIds ? resources.filter((item) => selectedIds.has(item.id)) : findResources(themes);
  if (!found.length) return null;
  return (
    <section className="resource-section">
      <div className="section-heading">
        <div>
          <p className="eyebrow">Photos, essais et pièces de travail</p>
          <h2>{title}</h2>
        </div>
        <span>{found.length} ressources</span>
      </div>
      {/* Tout le thème est disponible, mais seules 24 cartes sont montées à la fois. */}
      <ResourceBrowser items={found} />
      <div className="resource-theme-links">
        {themes.map((theme) => (
          <Link
            className="button button--secondary"
            href={`/ressources?theme=${encodeURIComponent(theme)}`}
            key={theme}
          >
            {theme} ↗
          </Link>
        ))}
      </div>
    </section>
  );
}
