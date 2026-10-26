import type { Metadata } from 'next';
import { skills } from '@/content/skills';
import { Button } from '@/components/ui/Button';
export const metadata: Metadata = { title: 'Compétences' };
export default function SkillsPage() {
  return (
    <div className="container page-content">
      <header className="page-heading">
        <p className="eyebrow">Des compétences reliées à des réalisations</p>
        <h1>
          Le matériel.
          <br />
          Le logiciel.
          <br />
          <span>Et le lien entre les deux.</span>
        </h1>
        <p>
          Je développe ces compétences au fil des projets. Chaque domaine mène à un
          exemple de travail, plutôt qu’à une note de maîtrise arbitraire.
        </p>
      </header>
      <div className="skill-details">
        {skills.map((skill) => (
          <section key={skill.number}>
            <span className="eyebrow">{skill.number}</span>
            <div>
              <h2>{skill.title}</h2>
              <p>{skill.text}</p>
              <div className="tags">
                {skill.tools.map((tool) => (
                  <span key={tool}>{tool}</span>
                ))}
              </div>
            </div>
            <Button href={`/realisations/${skill.project}`} variant="text">
              Voir en pratique
            </Button>
          </section>
        ))}
      </div>
      <div className="prose">
        <h2>Documenter et travailler ensemble</h2>
        <p>
          Rapports techniques, diagnostic documenté, essais, répartition des tâches et
          échanges au FabLab font partie de ma pratique. J’utilise principalement Linux et
          je rédige mes rapports en LaTeX.
        </p>
        <h2>Langues</h2>
        <p>
          Français : langue maternelle. Anglais : B1, avec lecture de documentation
          technique, présentations préparées et réponses à des questions simples.
        </p>
      </div>
    </div>
  );
}
