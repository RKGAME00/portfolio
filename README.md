# Portfolio de Céleste Koloussa

Objectif : présenter une candidature de **technicien en électronique et systèmes embarqués**, puis enrichir le portfolio au fil des expériences.

## Où travailler ?

| Dossier | Rôle |
|---|---|
| **[contenus/](contenus/README.md)** | Textes et médias organisés par stage, formation et projet. Commencer ici pour trier. |
| `src/` | Code du site : pages, composants, styles, lecture des médias. |
| `public/` | Adresses publiques des illustrations sélectionnées et documents. Ne pas y trier les originaux. |
| `docs/` | Références : Portfolio.md, CV, lettre et documentation du projet. |
| `ressources-locales/` | Réserve originale intacte, ignorée par Git. |
| `archives/` | Versions précédentes et sauvegardes, conservées sans suppression. |
| `scripts/` | Compilation protégée et contrôles du site. |

`.next/`, `.cache/` et `node_modules/` sont des dossiers techniques. Les fichiers de configuration restent à la racine pour Next.js, TypeScript et npm.

## Accueil et rubriques

L’accueil présente la recherche d’emploi, les stages LABAA/SUBATECH, les cinq projets de BUT, l’association robotique, la formation, les espaces lycée et 3D, les compétences et le contact.

- Composer l’accueil : `src/app/page.tsx`.
- Choisir les projets mis en avant : `src/components/projects/ProjectSections.tsx`.
- Modifier un projet : son `texte.json` sous `contenus/`.
- Modifier une formation : son `page.json` sous `contenus/formations/`.
- Modifier le CSS : `src/styles/`, séparé par composant et section.

Les galeries lisent les dossiers `ressources/` des projets à chaque actualisation. Les illustrations du récit restent des choix éditoriaux dans le JSON. Les liens symboliques de `public/images/` évitent les copies : ils sont entretenus par le code, pas par le tri quotidien.

## Exécuter le site localement

Node.js exécute Next.js ; React décrit les interfaces et TypeScript organise le code.

- `npm run dev` : développement avec actualisation automatique.
- `npm run build` : compilation protégée par des limites mémoire sous Linux/systemd.
- `npm run start` : servir la version compilée sur `http://127.0.0.1:3000`.
- `npm run typecheck` : contrôle TypeScript.
- `node scripts/check-blocks.mjs` : cohérence des projets et fichiers.

Ne pas lancer plusieurs serveurs ou une compilation en parallèle de l’aperçu. Voir `docs/developpement.md` pour les limites mémoire. Le stockage local doit accompagner le serveur : le dépôt seul ne contient pas les ressources lourdes. La mise en ligne nécessite une configuration adaptée ; le script de build actuel utilise systemd.

## Conservation

Aucun original n’est supprimé. Les sources techniques et paquets sont dans `a-trier/` au sein de chaque bloc. Les états précédents sont conservés dans `archives/reorganisation-2026-10-27-structure/`. Les textes précédents des espaces lycée et 3D y sont sauvegardés ; ces espaces sont volontairement en préparation sur le site.
