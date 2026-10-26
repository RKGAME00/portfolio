import type { Metadata } from 'next';
import '@fontsource-variable/manrope';
import '@/styles/index.css';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';

export const metadata: Metadata = {
  title: {
    default: 'Céleste Koloussa — Électronique & systèmes embarqués',
    template: '%s — Céleste Koloussa',
  },
  description:
    'Découvrez mes réalisations en électronique, systèmes embarqués et robotique : stages chez LABAA et SUBATECH, projets et parcours BUT GEII.',
};
/** Le layout ne porte que la structure partagée, jamais le contenu d'une page. */
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr">
      <body id="top">
        <a className="skip-link" href="#main">
          Aller au contenu
        </a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
