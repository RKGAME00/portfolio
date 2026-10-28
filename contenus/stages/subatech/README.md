# subatech

Ce dossier rassemble le contenu du bloc **subatech**.

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

## Complément SUBATECH — 28 octobre 2026

La page reprend le rapport annoté par Olivier et les sources du projet X2 Monitor. Les images ajoutées sont nommées `courbe-x2-monitor`, `interface-x2-monitor`, `maquette-interface`, `schema-trois-photons`, `schema-detecteur`, `schema-imagerie`, `gestion-enregistrement`, `selection-fichiers`, `liste-fichiers`, ainsi que les exercices préparatoires Qt et le logo du laboratoire.

Les figures extraites du rapport éditable et du PDF sont conservées sous `ressources-locales/stage laboratoire subatec/extraits-rapport-portfolio/`. Leur provenance figure dans `sources-editoriales.json`. Les schémas scientifiques illustrent le contexte XEMIS2 et ne sont pas présentés comme des conceptions personnelles.

Le dossier complet ajouté (16 123 fichiers) reste accessible par `a-trier/dossier-stage-complet`. Il contient notamment les différentes sauvegardes de X2 Monitor, le cahier des charges, les exercices, les bibliothèques et les dossiers de travail. Les documents administratifs personnels et les ressources tierces sans lien direct avec la mission ne sont pas ajoutés à la galerie.

Corrections éditoriales issues des annotations : distinguer sérialisation et compression ; parler d’acquisition périodique et de représentation glissante plutôt que de temps réel garanti ; créditer les bibliothèques et le widget fournis par Olivier Lemaire ; ne pas présenter la superposition de courbes ni la validation continue 24 h/24 comme des résultats achevés.
