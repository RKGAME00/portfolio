import Image from 'next/image';
import { ArrowDown, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { profile } from '@/content/profile';
export function Hero() {
  return (
    <section className="hero container" aria-labelledby="hero-title">
      <div className="hero-copy">
        <p className="availability">
          <span /> À la recherche d’un emploi de technicien
        </p>
        <h1 id="hero-title">
          Comprendre.
          <br />
          Concevoir.
          <br />
          <span>Faire fonctionner.</span>
        </h1>
        <p className="hero-description">
          Je suis <strong>Céleste Koloussa.</strong> De la carte électronique au logiciel,
          je construis des solutions concrètes en électronique et systèmes embarqués.
        </p>
        <div className="button-group">
          <Button href="/realisations">Explorer mes réalisations</Button>
          <Button href="/cv" variant="secondary">
            Mon CV
          </Button>
        </div>
        <div className="hero-location">
          <MapPin size={15} aria-hidden="true" />
          {profile.location}
          <span className="dot-separator">·</span>BUT GEII
        </div>
      </div>
      <div className="hero-visual">
        <div className="hero-photo">
          <Image
            src="/images/hero.webp"
            alt="Électronique de l’installation expérimentale photographiée pendant mon stage au laboratoire SUBATECH"
            fill
            sizes="(max-width: 800px) 100vw, 45vw"
            priority
          />
          <span className="photo-index">SUR LE TERRAIN / 01</span>
          <div className="photo-caption">
            <span>
              Au croisement du matériel
              <br />
              et du logiciel.
            </span>
            <span>
              SUBATECH
              <br />
              Nantes, 2024
            </span>
          </div>
        </div>
        <div className="hero-note">
          <span className="note-square">↗</span>
          <div>
            <strong>Observer. Mesurer. Tester.</strong>
            <span>Une approche concrète, du besoin au prototype.</span>
          </div>
        </div>
      </div>
      <a className="hero-scroll" href="#realisations">
        <ArrowDown size={14} aria-hidden="true" /> Découvrir mon travail
      </a>
    </section>
  );
}
