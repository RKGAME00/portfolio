import Image from 'next/image';
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
    title: project?.title ?? 'Réalisation introuvable',
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
  return (
    <article className="container page-content">
      <Link className="back-link" href="/realisations">
        ← Toutes les réalisations
      </Link>
      <header className="page-heading">
        <p className="eyebrow">{project.context}</p>
        <h1>{project.title}</h1>
        <p>{project.summary}</p>
        <div className="tags">
          {project.tags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
      </header>
      <div className="detail-image">
        <Image
          src={project.image}
          alt={project.alt}
          fill
          sizes="(max-width: 800px) 100vw, 1100px"
          priority
        />
      </div>
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
        </aside>
        <div className="article-body">
          {project.sections.map((section) => (
            <section key={section.title}>
              <h2>{section.title}</h2>
              <p>{section.text}</p>
            </section>
          ))}
          <Button href="/contact" variant="secondary">
            Échanger sur ce projet
          </Button>
        </div>
      </div>
    </article>
  );
}
