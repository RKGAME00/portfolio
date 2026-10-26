import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowUpRight, Cpu, CircuitBoard, Music2, Mail, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { ProjectCard } from '@/components/projects/ProjectCard';
import { projects } from '@/content/projects';
export const metadata: Metadata = { title: 'Charte graphique' };
const colors = [
  ['Encre', '#172E2B', 'ink'],
  ['Vert profond', '#245B50', 'accent'],
  ['Papier', '#F7F8F4', 'paper'],
  ['Sauge', '#E8EEE8', 'sage'],
  ['Terre cuite', '#B45937', 'clay'],
];
/** Catalogue vivant : les exemples emploient les vrais composants du site.
 * Une modification de Button ou ProjectCard se voit donc également ici.
 */
export default function DesignPage() {
  return (
    <div className="container page-content design-system">
      <header className="page-heading">
        <p className="eyebrow">Le langage visuel du portfolio</p>
        <h1>
          Clair dans la forme.
          <br />
          <span>Concret dans le fond.</span>
        </h1>
        <p>
          Une charte sobre, inspirée de l’atelier et du carnet de projet. Les mêmes
          composants servent sur toutes les pages.
        </p>
      </header>
      <nav className="design-nav" aria-label="Sections de la charte">
        <a href="#palette">Palette</a>
        <a href="#typographie">Typographie</a>
        <a href="#actions">Actions</a>
        <a href="#composants">Composants</a>
        <a href="#regles">Mise en page</a>
      </nav>
      <section id="palette" className="design-section">
        <p className="eyebrow">01 / Couleurs</p>
        <h2>Du contraste, sans dureté.</h2>
        <div className="swatch-grid">
          {colors.map(([name, hex, token]) => (
            <div key={name}>
              <div className={`swatch swatch--${token}`} />
              <strong>{name}</strong>
              <code>{hex}</code>
            </div>
          ))}
        </div>
      </section>
      <section id="typographie" className="design-section">
        <p className="eyebrow">02 / Typographie</p>
        <h2>Manrope. Lisible, précise, accueillante.</h2>
        <div className="type-sample">
          <span className="eyebrow">Titre principal</span>
          <div className="sample-display">Comprendre. Concevoir.</div>
        </div>
        <div className="type-sample">
          <span className="eyebrow">Titre de section</span>
          <h2>Des idées mises à l’épreuve.</h2>
        </div>
        <div className="type-sample">
          <span className="eyebrow">Texte courant</span>
          <p>
            Du schéma aux essais, je relie le matériel et le logiciel pour construire des
            solutions concrètes.
          </p>
        </div>
        <p>
          Une police hébergée localement, une largeur de lecture limitée et une hiérarchie
          qui reste claire sur téléphone.
        </p>
      </section>
      <section id="actions" className="design-section">
        <p className="eyebrow">03 / Boutons et navigation</p>
        <h2>Chaque action a son niveau.</h2>
        <div className="button-group">
          <Button href="/realisations">Action principale</Button>
          <Button href="/cv" variant="secondary">
            Action secondaire
          </Button>
          <Button href="/parcours" variant="text">
            Lien de découverte
          </Button>
          <button className="button button--primary" disabled>
            Indisponible
          </button>
        </div>
        <p>
          Survol discret, focus clavier visible, hauteur confortable et libellé explicite.
        </p>
        <div className="tags">
          <span>Électronique</span>
          <span>C++</span>
          <span>Projet universitaire</span>
        </div>
        <p className="availability">
          <span /> Recherche d’un emploi de technicien
        </p>
      </section>
      <section id="composants" className="design-section">
        <p className="eyebrow">04 / Composants</p>
        <h2>Des repères réutilisables.</h2>
        <div className="design-components">
          <ProjectCard project={projects[0]} />
          <div>
            <h3>Iconographie</h3>
            <div className="icon-samples">
              <CircuitBoard aria-label="Électronique" />
              <Cpu aria-label="Embarqué" />
              <Music2 aria-label="Musique" />
              <Mail aria-label="Contact" />
              <MapPin aria-label="Localisation" />
              <ArrowUpRight aria-label="Ouvrir" />
            </div>
            <h3>Champs et filtres</h3>
            <Link className="inline-link" href="/realisations">
              Tester la recherche et les filtres ↗
            </Link>
            <div className="document-note">
              <strong>Information contextuelle</strong>
              <p>Un message court, placé à côté du contenu concerné.</p>
            </div>
            <h3>Photographies</h3>
            <p>
              Des images de vrais projets, avec des légendes et des descriptions
              alternatives. Les originaux restent conservés à part.
            </p>
          </div>
        </div>
      </section>
      <section id="regles" className="design-section">
        <p className="eyebrow">05 / Rythme et accessibilité</p>
        <h2>Une lecture naturelle, de haut en bas.</h2>
        <div className="link-panels">
          <div>
            <h3>Structure</h3>
            <p>
              Présentation → preuves → compétences → parcours → passions → contact.
              Largeur maximale de 1 200 px, grille adaptable et espaces réguliers.
            </p>
          </div>
          <div>
            <h3>Mouvement</h3>
            <p>
              Apparitions légères au défilement et survols brefs. Aucun contenu masqué
              sans JavaScript ; animations désactivées si les mouvements sont réduits.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
