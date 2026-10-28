import Image from 'next/image';
import Link from 'next/link';
import { ArrowDown, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { profile } from '@/content/profile';

/** Une photo personnelle en fond ; le voile CSS maintient le contraste du texte. */
export function Hero() {
  return (
    <section className="hero-cover" aria-labelledby="hero-title">
      <Image
        className="hero-background"
        src="/images/passage-niveau.webp"
        alt=""
        fill
        sizes="100vw"
        priority
      />
      <div className="hero-shade" />
      <div className="hero container">
        <div className="hero-copy">
          <p className="availability">
            <span /> À la recherche d’un emploi · Mobile dans toute la France
          </p>
          <p className="hero-name">Céleste Koloussa · Diplômé du BUT GEII</p>
          <h1 id="hero-title">
            Votre prochain
            <br />
            <span>technicien.</span>
          </h1>
          <p className="hero-description">
            <strong>Électronique & systèmes embarqués.</strong>
            <br />
            Concevoir une carte, diagnostiquer un défaut, programmer et tester. Je
            recherche un poste en bureau d’études, essais, maintenance ou production.
          </p>
          <div className="button-group">
            <Button href="/contact">Échanger sur une opportunité</Button>
            <Button href="/cv" variant="secondary">
              Consulter mon CV
            </Button>
          </div>
          <div className="hero-location">
            <MapPin size={16} aria-hidden="true" />
            {profile.location} · Permis B · Véhiculé
          </div>
        </div>
        <Link href="/realisations/passage-a-niveau" className="hero-evidence">
          <span className="eyebrow">Du schéma à la carte</span>
          <strong>Du circuit imprimé au signal détecté.</strong>
          <span>Mon capteur infrarouge de passage à niveau. Voir le projet ↗</span>
        </Link>
        <a className="hero-scroll" href="#realisations">
          <ArrowDown size={15} aria-hidden="true" /> Découvrir mes réalisations
        </a>
      </div>
    </section>
  );
}
