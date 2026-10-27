'use client';
import { useState } from 'react';
import { Search } from 'lucide-react';
import { resourceKinds, type Resource, type ResourceKind } from '@/lib/resource-types';
import { ResourceCard } from './ResourceCard';

/** Afficher un lot à la fois évite de créer des centaines de lecteurs vidéo.
 * Les filtres s'appliquent toujours au catalogue entier, pas à la page visible. */
export function ResourceBrowser({
  items,
  initialTheme = '',
}: {
  items: Resource[];
  initialTheme?: string;
}) {
  const [theme, setTheme] = useState(initialTheme);
  const [kind, setKind] = useState('');
  const [query, setQuery] = useState('');
  const [limit, setLimit] = useState(24);
  const normalize = (value: string) =>
    value
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .toLowerCase();
  const themes = [...new Set(items.flatMap((item) => item.themes))].sort((a, b) =>
    a.localeCompare(b, 'fr'),
  );
  const visible = items.filter(
    (item) =>
      (!theme || item.themes.includes(theme)) &&
      (!kind || item.kind === kind) &&
      normalize(`${item.name} ${item.themes.join(' ')} ${item.excerpt}`).includes(
        normalize(query),
      ),
  );
  const reset = () => {
    setTheme('');
    setKind('');
    setQuery('');
    setLimit(24);
  };
  return (
    <>
      <div className="resource-controls">
        <label>
          Parcours ou projet
          <select
            value={theme}
            onChange={(event) => {
              setTheme(event.target.value);
              setLimit(24);
            }}
          >
            <option value="">Tous les thèmes</option>
            {themes.map((value) => (
              <option key={value}>{value}</option>
            ))}
          </select>
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
            {Object.entries(resourceKinds).map(([value, label]) => (
              <option value={value} key={value}>
                {label}
              </option>
            ))}
          </select>
        </label>
        <label className="resource-search">
          Rechercher
          <div className="search-field">
            <Search size={17} aria-hidden="true" />
            <input
              type="search"
              placeholder="Rapport, STM32, vidéo…"
              value={query}
              onChange={(event) => {
                setQuery(event.target.value);
                setLimit(24);
              }}
            />
          </div>
        </label>
      </div>
      <div className="resource-results">
        <p aria-live="polite">
          {visible.length} ressource{visible.length > 1 ? 's' : ''} ·{' '}
          {Math.min(limit, visible.length)} affichée
          {Math.min(limit, visible.length) > 1 ? 's' : ''}
        </p>
        <button className="button button--text" onClick={reset}>
          Réinitialiser
        </button>
      </div>
      <div className="resource-grid">
        {visible.slice(0, limit).map((resource) => (
          <ResourceCard resource={resource} key={resource.id} />
        ))}
      </div>
      {visible.length === 0 && (
        <div className="empty-state">
          <h2>Aucun fichier pour cette recherche.</h2>
          <button className="button button--secondary" onClick={reset}>
            Revoir toutes les ressources
          </button>
        </div>
      )}
      {limit < visible.length && (
        <div className="resource-load">
          <button
            className="button button--secondary"
            onClick={() => setLimit(limit + 24)}
          >
            Afficher les 24 ressources suivantes
          </button>
        </div>
      )}
    </>
  );
}
