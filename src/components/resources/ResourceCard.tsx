import Link from 'next/link';
import { FileText, FileCode2, Archive, Play, Music2, ArrowUpRight } from 'lucide-react';
import { formatBytes, type Resource } from '@/lib/resource-types';

export function ResourceCard({ resource }: { resource: Resource }) {
  const Icon =
    resource.kind === 'source'
      ? FileCode2
      : resource.kind === 'archive'
        ? Archive
        : resource.kind === 'audio'
          ? Music2
          : FileText;
  return (
    <article className="resource-card">
      <Link href={`/ressources/${resource.id}`}>
        <div className={`resource-preview resource-preview--${resource.kind}`}>
          {resource.thumbnail ? (
            <img
              src={resource.thumbnail}
              alt={`${resource.theme} — ${resource.name}`}
              loading="lazy"
              width="600"
              height="420"
            />
          ) : (
            <Icon size={38} strokeWidth={1.25} aria-hidden="true" />
          )}
          {resource.kind === 'video' && (
            <span className="resource-play">
              <Play size={20} aria-hidden="true" />
            </span>
          )}
          <span className="resource-format">
            {resource.extension.toUpperCase() || 'FICHIER'}
          </span>
        </div>
        <div className="resource-card-content">
          <p className="project-context">{resource.theme}</p>
          <h3>{resource.name}</h3>
          <p className="resource-role">{resource.role}</p>
          <div className="resource-card-footer">
            <span>{formatBytes(resource.bytes)}</span>
            <ArrowUpRight size={16} aria-hidden="true" />
          </div>
        </div>
      </Link>
    </article>
  );
}
