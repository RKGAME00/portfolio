import Image from 'next/image';
import Link from 'next/link';

/** Sélection explicitement vérifiée : photographies de cartes dans les originaux. */
const cards = [
  {
    image: '/images/passage-niveau.webp',
    title: 'Concevoir une carte',
    text: 'Schéma, routage, assemblage et détection infrarouge.',
    slug: 'passage-a-niveau',
    alt: 'Circuit imprimé assemblé du détecteur infrarouge',
  },
  {
    image: '/images/robot.webp',
    title: 'Relier capteurs et logiciel',
    text: 'ESP32, ultrasons et liaison série sur le robot universitaire.',
    slug: 'robot-ultrasons',
    alt: 'Carte ESP32 et écran du montage de détection ultrasonore',
  },
  {
    image: '/images/solaire.webp',
    title: 'Explorer la conversion d’énergie',
    text: 'Cartes et composants du projet de conversion solaire.',
    slug: 'conversion-solaire',
    alt: 'Carte électronique du projet solaire',
  },
];
export function ElectronicsShowcase() {
  return (
    <section
      className="electronics-showcase container"
      aria-labelledby="electronics-title"
    >
      <div className="section-heading">
        <div>
          <p className="eyebrow">Électronique · Du concret avant les mots</p>
          <h2 id="electronics-title">Des cartes. Des essais. Du travail.</h2>
        </div>
        <Link href="/realisations">Tous les projets ↗</Link>
      </div>
      <div className="electronics-grid">
        {cards.map((card) => (
          <Link
            className="electronics-card"
            href={`/realisations/${card.slug}`}
            key={card.slug}
          >
            <div className="electronics-image">
              <Image
                src={card.image}
                alt={card.alt}
                fill
                sizes="(max-width: 700px) 100vw, 33vw"
              />
            </div>
            <h3>{card.title} ↗</h3>
            <p>{card.text}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
