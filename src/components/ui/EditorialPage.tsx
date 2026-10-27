import Image from 'next/image';
import Link from 'next/link';
import type { EditorialPage as PageContent } from '@/content/pages';
import { projects } from '@/content/projects';
import { ProjectCard } from '@/components/projects/ProjectCard';
import { ResourceSection } from '@/components/resources/ResourceSection';
import { pageResourceThemes } from '@/content/resource-links';
/** Présentation partagée des pages de parcours : mêmes repères, mêmes espacements. */
export function EditorialPage({ page }: { page: PageContent }) {
  const related = projects.filter((project) => page.projectSlugs?.includes(project.slug));
  return (
    <article className="container page-content">
      <Link href="/" className="back-link">
        ← Accueil
      </Link>
      <header className="page-heading">
        <p className="eyebrow">{page.eyebrow}</p>
        <h1>{page.title}</h1>
        <p>{page.intro}</p>
      </header>
      {page.image && (
        <div className="editorial-image">
          <Image
            src={page.image}
            alt={page.alt ?? ''}
            fill
            sizes="(max-width: 800px) 100vw, 1100px"
            priority
          />
        </div>
      )}
      <div className="prose">
        {page.sections.map((section) => (
          <section key={section.title}>
            <h2>{section.title}</h2>
            <p>{section.text}</p>
          </section>
        ))}
      </div>
      {page.links && (
        <div className="link-panels">
          {page.links.map((link) => (
            <Link key={link.href} href={link.href}>
              <h2>{link.title} ↗</h2>
              <p>{link.text}</p>
            </Link>
          ))}
        </div>
      )}
      {related.length > 0 && (
        <section className="related-projects">
          <p className="eyebrow">Pour aller plus loin</p>
          <h2>Les réalisations en détail.</h2>
          <div className="project-grid">
            {related.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </section>
      )}
      <ResourceSection themes={pageResourceThemes[page.path] ?? []} />
    </article>
  );
}
