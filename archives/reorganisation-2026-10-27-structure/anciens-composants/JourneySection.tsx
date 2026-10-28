import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { journey } from '@/content/journey';
export function JourneySection() {
  return (
    <section className="journey-section">
      <div className="container journey-layout">
        <div>
          <p className="eyebrow">03 / Un parcours qui se construit</p>
          <h2>
            Apprendre en faisant.
            <br />
            <span>Avancer ensemble.</span>
          </h2>
          <p>
            De mes premiers robots au laboratoire, chaque expérience m’a appris à relier
            les connaissances au terrain.
          </p>
          <Link className="light-link" href="/parcours">
            Explorer mon parcours <ArrowUpRight size={17} aria-hidden="true" />
          </Link>
        </div>
        <div className="journey-list">
          {journey.map((item) => (
            <Link href={item.href} key={item.period} className="journey-row">
              <span className="journey-period">{item.period}</span>
              <div>
                <h3>{item.title}</h3>
                <p>{item.subtitle}</p>
              </div>
              <ArrowUpRight size={18} aria-hidden="true" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
