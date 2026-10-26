import type { Metadata } from 'next';
import { Mail, MapPin, ArrowUpRight } from 'lucide-react';
import { profile } from '@/content/profile';
export const metadata: Metadata = { title: 'Contact' };
export default function ContactPage() {
  return (
    <div className="container page-content contact-page">
      <header className="page-heading">
        <p className="eyebrow">Faisons connaissance</p>
        <h1>
          Un besoin technique ?<br />
          <span>Parlons-en.</span>
        </h1>
        <p>
          Je recherche un emploi de technicien en électronique ou systèmes embarqués. Je
          suis ouvert aux échanges autour de la conception, des essais, de la maintenance
          et de la production.
        </p>
      </header>
      <div className="contact-options">
        <a href={`mailto:${profile.email}`}>
          <Mail aria-hidden="true" />
          <div>
            <span>Écrivez-moi</span>
            <strong>{profile.email}</strong>
          </div>
          <ArrowUpRight aria-hidden="true" />
        </a>
        <a href={profile.linkedin}>
          <span className="linkedin-mark" aria-hidden="true">
            in
          </span>
          <div>
            <span>Retrouvons-nous sur</span>
            <strong>LinkedIn</strong>
          </div>
          <ArrowUpRight aria-hidden="true" />
        </a>
        <div>
          <MapPin aria-hidden="true" />
          <div>
            <span>Localisation</span>
            <strong>{profile.location}</strong>
            <p>Permis B · Véhiculé</p>
          </div>
        </div>
      </div>
    </div>
  );
}
