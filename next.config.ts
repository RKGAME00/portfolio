import type { NextConfig } from 'next';

// Les médias originaux sont lus à la demande par l'API, pas incorporés au build.
const nextConfig: NextConfig = {
  poweredByHeader: false,
  images: {
    // La galerie utilise une URL locale versionnée par la date du fichier.
    // Seul cet endpoint accepte des paramètres pour ses vignettes.
    localPatterns: [
      { pathname: '**', search: '' },
      { pathname: '/api/galerie-labaa' },
      { pathname: '/api/galerie' },
    ],
  },
  // L'aperçu doit rester fidèle au site, sans bouton flottant de développement.
  devIndicators: false,
  // Garder les anciens liens utilisables après le regroupement des missions.
  async redirects() {
    return [
      ...[
        'regulation-cartes',
        'sav-cartes',
        'organisation-firmware',
        'commande-decoupe',
        'outil-programmation-oto',
      ].map((slug) => ({
        source: `/realisations/${slug}`,
        destination: '/realisations/labaa-electronique',
        permanent: false,
      })),
      ...['domotique', 'maintenance-personnelle', 'robot-cartographie'].map((slug) => ({
        source: `/realisations/${slug}`,
        destination: '/realisations/projets-personnels',
        permanent: false,
      })),
      {
        source: '/experiences/labaa',
        destination: '/realisations/labaa-electronique',
        permanent: false,
      },
      {
        source: '/experiences/subatech',
        destination: '/realisations/subatech-xemis2',
        permanent: false,
      },
      {
        source: '/passions/projets-personnels',
        destination: '/realisations/projets-personnels',
        permanent: false,
      },
    ];
  },
  // Éviter d'embarquer des dizaines de milliers de fichiers de travail dans les
  // traces de déploiement. En production, ce stockage devra être monté séparément.
  outputFileTracingExcludes: {
    '/*': [
      './ressources-locales/**/*',
      './archives/**/*',
      './.cache/**/*',
      './docs/**/*',
      './contenus/**/ressources/**/*',
      './contenus/**/originaux/**/*',
    ],
  },
  experimental: {
    webpackMemoryOptimizations: true,
    // Deux workers suffisent ici ; multiplier les processus augmente la RAM.
    cpus: 2,
  },
};
export default nextConfig;
