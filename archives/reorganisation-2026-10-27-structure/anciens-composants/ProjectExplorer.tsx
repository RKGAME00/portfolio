'use client';
import { useState } from 'react';
import { Search } from 'lucide-react';
import { projects } from '@/content/projects';
import { ProjectCard } from './ProjectCard';
const categories = ['Tout voir', 'Stage', 'Formation', 'Personnel'] as const;
/** Les filtres agissent sur le même jeu de données que les pages de détail. */
export function ProjectExplorer() {
  const [category, setCategory] = useState<string>('Tout voir');
  const [query, setQuery] = useState('');
  const normalize = (text: string) =>
    text
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .toLowerCase();
  const visible = projects.filter(
    (project) =>
      (category === 'Tout voir' || project.category === category) &&
      normalize(
        `${project.title} ${project.context} ${project.tags.join(' ')} ${project.summary}`,
      ).includes(normalize(query)),
  );
  return (
    <>
      <div className="project-toolbar">
        <div className="filter-group" aria-label="Filtrer les réalisations">
          {categories.map((item) => (
            <button
              key={item}
              type="button"
              className="filter-button"
              aria-pressed={category === item}
              onClick={() => setCategory(item)}
            >
              {item}
            </button>
          ))}
        </div>
        <label className="search-field">
          <Search size={18} aria-hidden="true" />
          <span className="sr-only">Rechercher une réalisation ou une technologie</span>
          <input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Projet, technologie…"
            type="search"
          />
        </label>
      </div>
      <p className="result-count" aria-live="polite">
        {visible.length} réalisation{visible.length > 1 ? 's' : ''}
      </p>
      <div className="project-grid">
        {visible.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
      {visible.length === 0 && (
        <div className="empty-state">
          <h2>Aucune réalisation pour cette recherche.</h2>
          <p>Essayez un autre terme ou consultez tous les projets.</p>
          <button
            className="button button--secondary"
            onClick={() => {
              setQuery('');
              setCategory('Tout voir');
            }}
          >
            Réinitialiser les filtres
          </button>
        </div>
      )}
    </>
  );
}
