# Portfolio de Céleste Koloussa

Premier jet local réalisé avec **Next.js, React et TypeScript**. Accueil, réalisations filtrables, parcours, compétences, passions, CV, contact et charte graphique.

## Voir le site

```sh
npm ci
npm run dev
```

Ouvrir l'adresse affichée par Next.js, normalement **http://127.0.0.1:3000**.

- Accueil : `/`
- Réalisations : `/realisations`
- Charte graphique : `/charte-graphique`

```sh
npm run typecheck
npm run build
npm run start
```

## Se repérer

- `src/app/` : routes et composition des pages.
- `src/components/` : composants partagés, avec un fichier par section de l'accueil.
- `src/content/` : textes et données, séparés de l'affichage.
- `src/styles/base/` : palette, typographie et grilles.
- `src/styles/components/` : boutons, en-tête, cartes, champs et pied de page.
- `src/styles/sections/` : styles propres à chaque section.
- `public/` : seules les copies de médias sélectionnées sont exposées.

Le guide [docs/developpement.md](docs/developpement.md) détaille les fichiers à modifier, les choix, les vérifications et les limites de cette version.

## Documents et conservation

- [Dossier de référence](docs/Portfolio.md) : parcours et expériences, conservés intégralement.
- [Feuille de route](docs/feuille-de-route.md) : architecture du contenu et étapes de réalisation.
- [Cadrage initial](docs/cadrage.md).
- `docs/CV/` et `docs/lettre_motiv/` : PDF et LaTeX fournis, inchangés.
- `docs/sources-medias.json` : provenance des copies d'images utilisées.
- `ressources-locales/` : ressources réorganisées par Céleste (BUT, école, LABAA, projets personnels, lycée…), ignorées par Git.
- `archives/astro-2026-10-26/` : ancien site Astro, dépendances, cache, configurations et sauvegarde conservés.
- `archives/inventaire-local-2026-10-26.json` : inventaire historique du rangement initial ; il précède la réorganisation manuelle des ressources.

Aucun original n'a été supprimé. L'historique Git est conservé. Les sources LaTeX et la lettre ne sont pas copiées dans le dossier public.

## Prochaine étape

Le premier jet public utilise des données locales. **Payload CMS et PostgreSQL ne sont pas encore intégrés** : l'édition sans code, les brouillons et la médiathèque administrable constituent la prochaine tranche. L'espace musique attend la sélection des véritables morceaux. La mise en ligne et la pédagogie viendront ensuite selon la feuille de route.
