import Link from 'next/link';
import { projects } from '@/content/projects';
import { ProjectCard } from '@/components/projects/ProjectCard';

const groups = [
  {
    id: 'stages',
    title: 'Mes stages',
    text: 'Deux expériences pour mettre mes compétences au service d’un produit et d’une équipe.',
    slugs: ['labaa-electronique', 'subatech-xemis2'],
  },
  {
    id: 'projets-but',
    title: 'Mes projets de BUT GEII',
    text: 'Électronique, capteurs, programmation et énergie : chaque projet a son propre espace.',
    slugs: [
      'passage-a-niveau',
      'robot-balises',
      'robot-ultrasons',
      'supercondensateurs',
      'tour-hanoi',
    ],
  },
];
const projectNames: Record<string, string> = {
  'passage-a-niveau': 'Passage à niveau',
  'robot-balises': 'Robot à balises',
  'robot-ultrasons': 'Robot à ultrasons',
  supercondensateurs: 'Supercondensateurs',
  'tour-hanoi': 'Tour de Hanoï',
};
/** Une sélection explicite évite de mélanger stages, cours et projets personnels. */
export function ProjectSections() {
  return (
    <div className="container" id="realisations">
      {groups.map((group) => (
        <section className="section" id={group.id} key={group.id}>
          <p className="eyebrow">
            {group.id === 'stages'
              ? 'Expériences professionnelles'
              : 'Formation · 2022–2025'}
          </p>
          <h2>{group.title}</h2>
          <p>{group.text}</p>
          {group.id === 'projets-but' && (
            <p>
              <Link className="button button--text" href="/parcours/but-geii">
                Comprendre ma formation et mon parcours ESE ↗
              </Link>
            </p>
          )}
          <div
            className={`project-grid ${group.id === 'stages' ? 'project-grid--stages' : ''}`}
          >
            {group.slugs.map((slug) => {
              const project = projects.find((p) => p.slug === slug);
              return project ? (
                <ProjectCard
                  key={slug}
                  project={
                    projectNames[slug]
                      ? { ...project, title: projectNames[slug] }
                      : project
                  }
                />
              ) : null;
            })}
          </div>
        </section>
      ))}
      <section className="section" aria-labelledby="other-spaces-title">
        <p className="eyebrow">Formation, engagement et conception</p>
        <h2 id="other-spaces-title">Explorer mon parcours et mes projets</h2>
        <div className="link-panels">
          <Link href="/parcours/association-robotique">
            <h3>Association robotique ↗</h3>
            <p>
              Des projets collectifs, la coordination de l’équipe et les échanges au
              FabLab.
            </p>
          </Link>
          <Link href="/parcours/but-geii">
            <h3>Formation · BUT GEII ↗</h3>
            <p>
              Ce que j’ai appris, avec le parcours Électronique et systèmes embarqués dès
              la deuxième année.
            </p>
          </Link>
          <Link href="/parcours/lycee-sti2d">
            <h3>Lycée · Bac STI2D ↗</h3>
            <p>
              Mes premières bases techniques. Un espace dédié aux projets du lycée, à
              compléter.
            </p>
          </Link>
          <Link href="/realisations/modelisation-3d">
            <h3>Projets de modélisation 3D ↗</h3>
            <p>Un espace dédié aux pièces et aux conceptions 3D, à compléter.</p>
          </Link>
        </div>
      </section>
    </div>
  );
}
