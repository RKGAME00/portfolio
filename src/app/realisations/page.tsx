import type { Metadata } from 'next';
import { ProjectExplorer } from '@/components/projects/ProjectExplorer';
export const metadata: Metadata = { title: 'Réalisations' };
export default function ProjectsPage() {
  return (
    <div className="container page-content">
      <header className="page-heading">
        <p className="eyebrow">Du besoin à la réalisation</p>
        <h1>
          Ce que j’ai construit.
          <br />
          <span>Et ce que j’en ai appris.</span>
        </h1>
        <p>
          Stages, projets universitaires et expérimentations personnelles. Pour chaque
          réalisation : le contexte, mon rôle et la démarche.
        </p>
      </header>
      <ProjectExplorer />
    </div>
  );
}
