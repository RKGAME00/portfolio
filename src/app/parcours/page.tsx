import Link from 'next/link';
import type { Metadata } from 'next';
import { journey } from '@/content/journey';
export const metadata: Metadata = { title: 'Mon parcours' };
export default function JourneyPage() {
  return (
    <div className="container page-content">
      <header className="page-heading">
        <p className="eyebrow">Formation, expériences et engagement</p>
        <h1>
          Un parcours.
          <br />
          <span>Plusieurs façons d’apprendre.</span>
        </h1>
        <p>
          Des projets au lycée aux expériences en entreprise et en laboratoire, un fil
          conducteur : comprendre les systèmes et apprendre en les réalisant.
        </p>
      </header>
      <div className="timeline">
        {journey.map((item) => (
          <article key={item.period}>
            <span className="eyebrow">{item.period}</span>
            <div>
              <p className="project-context">{item.subtitle}</p>
              <h2>{item.title}</h2>
              <p>{item.text}</p>
              <Link className="inline-link" href={item.href}>
                Découvrir cette étape ↗
              </Link>
            </div>
          </article>
        ))}
      </div>
      <div className="link-panels">
        <Link href="/experiences">
          <h2>Les expériences professionnelles ↗</h2>
          <p>LABAA et SUBATECH : deux contextes, des réalisations concrètes.</p>
        </Link>
        <Link href="/parcours/association-robotique">
          <h2>Construire en équipe ↗</h2>
          <p>Association robotique, compétitions et FabLab.</p>
        </Link>
      </div>
    </div>
  );
}
