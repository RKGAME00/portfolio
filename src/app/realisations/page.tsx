import type { Metadata } from 'next';
import { ProjectSections } from '@/components/projects/ProjectSections';
export const metadata: Metadata = { title: 'Stages et projets' };
export default function ProjectsPage() {
  return (
    <>
      <header className="container page-heading page-content">
        <p className="eyebrow">Mon travail, par projet</p>
        <h1>Stages et projets</h1>
        <p>
          Retrouvez mes expériences professionnelles, mes projets de BUT et les espaces
          consacrés à la robotique, au lycée et à la modélisation 3D.
        </p>
      </header>
      <ProjectSections />
    </>
  );
}
