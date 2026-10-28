import Image from 'next/image';
import { ImageLightbox } from '@/components/ui/ImageLightbox';
import { FolderGallery } from '@/components/resources/FolderGallery';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { projects } from '@/content/projects';
import { Button } from '@/components/ui/Button';
export function generateStaticParams() {
  return projects.map(({ slug }) => ({ slug }));
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  return {
    title: project?.draft
      ? project.slug === 'modelisation-3d'
        ? 'Projets de modélisation 3D'
        : 'Projets de lycée'
      : (project?.title ?? 'Réalisation introuvable'),
    description: project?.summary,
  };
}
export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  if (!project) notFound();
  if (project.draft)
    return (
      <article className="container page-content">
        <Link className="back-link" href="/realisations">
          ← Stages et projets
        </Link>
        <header className="page-heading">
          <p className="eyebrow">{project.context}</p>
          <h1>
            {project.slug === 'modelisation-3d'
              ? 'Projets de modélisation 3D'
              : project.slug === 'robotique-lycee'
                ? 'Robotique au lycée'
                : 'Projet STI2D'}
          </h1>
          <p>
            Cet espace présentera les projets, leurs objectifs et ma contribution. Le
            contenu sera ajouté prochainement.
          </p>
        </header>
        <Button href="/realisations" variant="secondary">
          Découvrir mes stages et mes projets
        </Button>
      </article>
    );
  return (
    <article className="container page-content">
      <Link className="back-link" href="/realisations">
        ← Toutes les réalisations
      </Link>
      <header className="page-heading">
        <p className="eyebrow">{project.context}</p>
        <h1>{project.title}</h1>
        <p>{project.summary}</p>
        {project.report && (
          <p>
            <a
              className="button button--secondary"
              href={`/api/ressources/${project.report.id}`}
            >
              {project.report.label} ↗
            </a>
          </p>
        )}
        <div className="tags">
          {project.tags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
      </header>
      <div
        className={`detail-image ${project.imageFit === 'contain' ? 'detail-image--contain' : ''}`}
      >
        <Image
          src={project.image}
          alt={project.alt}
          fill
          sizes="(max-width: 800px) 100vw, 1100px"
          priority
        />
      </div>
      {project.imageCaption && <p className="image-caption">{project.imageCaption}</p>}
      <div className="article-layout">
        <aside className="article-aside">
          <p className="eyebrow">Repères</p>
          <dl>
            <dt>Contexte</dt>
            <dd>{project.category}</dd>
            <dt>Période</dt>
            <dd>{project.period}</dd>
          </dl>
          <Link href={project.relatedPath}>{project.relatedLabel} ↗</Link>
          <nav aria-label="Sommaire de la réalisation" className="project-toc">
            {project.sections.map((section, index) => (
              <a key={section.title} href={`#section-${index + 1}`}>
                {section.title}
              </a>
            ))}
          </nav>
        </aside>
        <div className="article-body">
          {project.sections.map((section, index) => (
            <section key={section.title} id={`section-${index + 1}`}>
              <h2>{section.title}</h2>
              <p>{section.text}</p>
              {section.links?.map((link) => (
                <p key={link.href}>
                  <a href={link.href}>{link.label} ↗</a>
                </p>
              ))}
              {section.figures && (
                <div
                  className={`report-figures ${section.layout === 'mosaic' ? 'report-figures--mosaic' : ''}`}
                >
                  {section.figures.map((figure) => (
                    <figure key={figure.src}>
                      <ImageLightbox src={figure.src} title={figure.caption}>
                        <Image
                          src={figure.src}
                          alt={figure.alt}
                          width={figure.width}
                          height={figure.height}
                          sizes="(max-width: 800px) 100vw, 720px"
                        />
                      </ImageLightbox>
                      <figcaption>{figure.caption}</figcaption>
                    </figure>
                  ))}
                </div>
              )}
            </section>
          ))}
          <Button href="/contact" variant="secondary">
            Échanger sur ce projet
          </Button>
        </div>
      </div>
      <FolderGallery block={project.resourceBlock ?? project.slug} />
    </article>
  );
}
