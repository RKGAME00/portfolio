import type { NextConfig } from 'next';

// Les médias originaux sont lus à la demande par l'API, pas incorporés au build.
const nextConfig: NextConfig = {
  poweredByHeader: false,
  // L'aperçu doit rester fidèle au site, sans bouton flottant de développement.
  devIndicators: false,
  // Éviter d'embarquer des dizaines de milliers de fichiers de travail dans les
  // traces de déploiement. En production, ce stockage devra être monté séparément.
  outputFileTracingExcludes: {
    '/*': [
      './ressources-locales/**/*',
      './archives/**/*',
      './.cache/**/*',
      './docs/**/*',
    ],
  },
  experimental: {
    webpackMemoryOptimizations: true,
    // Deux workers suffisent ici ; multiplier les processus augmente la RAM.
    cpus: 2,
  },
};
export default nextConfig;
