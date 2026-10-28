# Réorganisation par blocs — 27 octobre 2026

Point d’entrée : `contenus/README.md`.

- LABAA : une fiche de stage complète, structurée suivant le rapport PDF local
  (introduction, entreprise/architecture, missions, compétences, bilan).
- SUBATECH : une fiche XEMIS2, sans deuxième page de stage concurrente.
- Expérimentations personnelles : cartographie, domotique et maintenance réunies.
- Photo de piano déplacée dans le bloc musique ; pas de réutilisation comme
  illustration de maintenance ou de domotique.
- 13 réalisations uniques, au lieu des 20 fiches fragmentées.
- 11 anciennes URL redirigées vers les pages regroupées.

## Organisation des fichiers

Les textes JSON sont lus directement dans chaque bloc. Les ressources locales
sont accessibles par 3 443 liens symboliques classés ; les originaux n’ont pas
bougé. Les 13 images web ont leur fichier dans le bloc propriétaire et un lien
compatible avec leur ancienne URL dans `public/images/`.

Les anciennes sources sont archivées dans `archives/reorganisation-2026-10-27/`.
Un fichier affiché comme supprimé par Git peut correspondre à ce déplacement :
le fichier existe dans l’archive. Aucun nettoyage destructif n’a été réalisé.

## Contrôles réalisés

- `npm run build` : succès, TypeScript compris ; pic de 794 Mio selon systemd.
- `node scripts/check-blocks.mjs` : 13 fiches, 3 443 identifiants attribués une
  seule fois et 3 443 liens locaux valides.
- `node scripts/check-site.mjs` : 30 routes pré-rendues, 548 accès partiels aux
  images/vidéos/PDF, pages de détail des cinq types présents.
- `node scripts/check-resources.mjs --http` : tailles, aperçus, streaming partiel,
  comparaison d’octets vidéo, plage invalide, ressource inconnue et téléchargement HTML.
- 11 redirections HTTP et 13 images web déplacées : succès.
- 39 655 originaux : mêmes chemins et mêmes tailles que l’inventaire initial.
- Inspection dans le navigateur du sommaire LABAA, des textes, du chargement
  de l’image et de la liste des 13 réalisations (une seule entrée par stage).

Le fond de l’accueil reste celui de la version précédente, comme prévu pour
cette étape. L’aperçu compilé est servi sur http://127.0.0.1:3000/.
