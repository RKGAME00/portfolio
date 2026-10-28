# mentions-legales

Ce dossier rassemble le contenu du bloc **mentions-legales**.

- `texte.json` : récit du projet et illustrations intégrées (s’il existe).
- `page.json` : présentation de la formation ou de la rubrique (s’il existe).
- `images-web/` : illustrations optimisées choisies pour la couverture et le récit.
- `ressources/images/`, `videos/`, `documents/`, `audio/` : sélection de médias complémentaires.
- `a-trier/` : sources techniques, archives et éléments mis de côté. Pas affichés dans la galerie du projet.
- `inventaire-local.json` et `ressources.json` : inventaires techniques conservés, ne pas modifier pour trier les images.

## Trier sans coder

Dans une fiche projet publiée, ajouter un fichier à `ressources/images/`, puis actualiser la page, suffit à l’afficher. Même principe pour les vidéos et documents. Pour masquer un fichier sans le supprimer, le déplacer vers `a-trier/images/` (ou `a-trier/videos/`, etc.). Conserver la même profondeur de dossiers, car les accès existants sont des liens relatifs vers les originaux.

Les espaces en préparation (lycée et modélisation 3D) n’affichent pas encore leurs médias. Ils sont prêts pour le tri et la rédaction futurs.

Les illustrations du récit et les couvertures sont sélectionnées explicitement dans le JSON : leur changement exige une compilation. `public/images/` contient les accès techniques utilisés par le navigateur ; ce n’est pas un deuxième dossier à trier.

Les originaux sont conservés dans `ressources-locales/` à la racine du dépôt. Les anciens textes et réglages sont dans `archives/reorganisation-2026-10-27-structure/`.
