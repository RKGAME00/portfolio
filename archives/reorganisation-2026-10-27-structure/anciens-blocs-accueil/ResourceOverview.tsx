import Link from 'next/link';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Button } from '@/components/ui/Button';
import { resources } from '@/lib/resources';

const hubs = [
  {
    title: 'BUT GEII',
    path: 'parcours/but-geii',
    text: 'Robotique, électronique, programmation et projets universitaires.',
  },
  {
    title: 'Stages & terrain',
    path: 'experiences',
    text: 'LABAA et SUBATECH : rapports, cartes, outils et essais.',
  },
  {
    title: 'Lycée · STI2D',
    path: 'parcours/lycee-sti2d',
    text: 'Les premiers robots, les prototypes et les démonstrations.',
  },
  {
    title: 'École d’ingénieurs',
    path: 'parcours/ecole-ingenieurs',
    text: 'Comptes rendus de TP, STM32, UART, DMA et sources.',
  },
  {
    title: 'Association robotique',
    path: 'parcours/association-robotique',
    text: 'Les robots, les essais et les compétitions à Cachan.',
  },
  {
    title: 'Projets personnels',
    path: 'passions/projets-personnels',
    text: 'Montages, expérimentations et vidéos de mes projets.',
  },
];
export function ResourceOverview() {
  const images = resources.filter((r) => r.kind === 'image').length;
  const videos = resources.filter((r) => r.kind === 'video').length;
  const docs = resources.filter((r) => r.kind === 'document').length;
  return (
    <section className="container resource-overview">
      <SectionHeading
        eyebrow="Voir le travail derrière les compétences"
        title="Des réalisations, et leurs preuves."
      >
        <Button href="/ressources" variant="text">
          Explorer toutes les ressources
        </Button>
      </SectionHeading>
      <p className="resource-home-count">
        {images} images, {videos} vidéos et {docs} documents, accompagnés des sources et
        fichiers de travail.
      </p>
      <div className="resource-hubs">
        {hubs.map((hub) => (
          <Link href={`/${hub.path}`} className="resource-hub" key={hub.title}>
            <h3>{hub.title} ↗</h3>
            <p>{hub.text}</p>
            <span>Découvrir les travaux</span>
          </Link>
        ))}
      </div>
    </section>
  );
}
