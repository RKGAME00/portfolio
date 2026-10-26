import type { Metadata } from 'next';
import { Button } from '@/components/ui/Button';
import { profile } from '@/content/profile';
export const metadata: Metadata = { title: 'CV' };
export default function CvPage() {
  return (
    <div className="container page-content">
      <header className="page-heading">
        <p className="eyebrow">Mon profil en un document</p>
        <h1>
          Électronique &<br />
          <span>systèmes embarqués.</span>
        </h1>
        <p>
          Titulaire d’un BUT GEII, je recherche un emploi de technicien en électronique ou
          systèmes embarqués, en bureau d’études, essais ou production.
        </p>
        <div className="button-group">
          <Button href={profile.cv} download>
            Télécharger mon CV · PDF
          </Button>
          <Button href="/contact" variant="secondary">
            Me contacter
          </Button>
        </div>
      </header>
      <div className="document-note">
        <strong>Une précision sur mon parcours</strong>
        <p>
          J’ai commencé une formation en école d’ingénieurs avant de l’interrompre faute
          d’alternance. Le PDF fourni indique encore « poursuite non engagée » ; cette
          formulation sera actualisée. Le parcours présenté sur ce site tient compte de
          cette précision.
        </p>
      </div>
      <iframe
        className="cv-preview"
        src={profile.cv}
        title="CV de Céleste Koloussa — document PDF de trois pages"
      />
      <p className="document-fallback">
        Si votre navigateur n’affiche pas le document,{' '}
        <a href={profile.cv}>ouvrez le PDF directement</a>.
      </p>
    </div>
  );
}
