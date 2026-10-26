import type { NextConfig } from 'next';

// Les archives et les documents de travail ne sont jamais servis par Next.js.
// Seules les copies sélectionnées dans public/ sont accessibles aux visiteurs.
const nextConfig: NextConfig = {
  poweredByHeader: false,
  // L'aperçu doit rester fidèle au site, sans bouton flottant de développement.
  devIndicators: false,
};
export default nextConfig;
