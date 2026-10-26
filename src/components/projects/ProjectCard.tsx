import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import type { Project } from '@/content/projects';
export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="project-card">
      <Link href={`/realisations/${project.slug}`} className="project-card-link">
        <div className="project-card-image">
          <Image
            src={project.image}
            alt={project.alt}
            fill
            sizes="(max-width: 700px) 100vw, (max-width: 1000px) 50vw, 33vw"
          />
          <span className="image-label">{project.category}</span>
          <span className="card-arrow">
            <ArrowUpRight size={20} aria-hidden="true" />
          </span>
        </div>
        <div className="project-card-content">
          <p className="project-context">{project.context}</p>
          <h3>{project.title}</h3>
          <p>{project.summary}</p>
          <div className="tags">
            {project.tags.map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>
        </div>
      </Link>
    </article>
  );
}
