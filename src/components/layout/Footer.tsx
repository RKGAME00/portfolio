import Link from 'next/link';
import { profile } from '@/content/profile';
export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-top">
        <Link href="/" className="footer-name">
          Céleste Koloussa<span>Électronique, embarqué & curiosité.</span>
        </Link>
        <div>
          <a href={`mailto:${profile.email}`}>Échanger par email ↗</a>
          <a href={profile.linkedin}>LinkedIn ↗</a>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>© 2026 Céleste Koloussa</span>
        <div>
          <Link href="/charte-graphique">Charte graphique</Link>
          <Link href="/mentions-legales">Mentions légales</Link>
          <Link href="/confidentialite">Confidentialité</Link>
          <a href="#top">Retour en haut ↑</a>
        </div>
      </div>
    </footer>
  );
}
