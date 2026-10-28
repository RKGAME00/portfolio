import type { Metadata } from 'next';
import { ResourceBrowser } from '@/components/resources/ResourceBrowser';
import { resources } from '@/lib/resources';
export const metadata: Metadata = {
  title: 'Ressources et travaux',
  description:
    'Photographies, vidéos, rapports, schémas et fichiers de travail classés par projet et par étape du parcours.',
};
export default async function ResourcesPage({
  searchParams,
}: {
  searchParams: Promise<{ theme?: string }>;
}) {
  const { theme } = await searchParams;
  return (
    <div className="container page-content">
      <header className="page-heading">
        <p className="eyebrow">Explorer les traces du travail</p>
        <h1>
          Les projets se racontent.
          <br />
          <span>Les réalisations se montrent.</span>
        </h1>
        <p>
          Photos d’atelier, vidéos d’essais, rapports et schémas. Retrouvez les
          pièces par projet, par formation ou par format.
        </p>
      </header>
      <ResourceBrowser items={resources} initialTheme={theme} key={theme ?? 'all'} />
    </div>
  );
}
