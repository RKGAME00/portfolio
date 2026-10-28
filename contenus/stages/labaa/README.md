# labaa

Ce dossier rassemble le contenu du bloc **labaa**.

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

### Ajustements du 28 octobre 2026

- Mobilité professionnelle : toute la France (identité partagée et accueil).
- Les images `splash.jpg` et `téléchargement.png` sont conservées dans `a-trier/images-retirees/`, hors galerie.
- L’environnement de travail est une mosaïque de huit photos dans `texte.json` (`layout: "mosaic"`). Cliquer ouvre la photographie dans la page.
- Le certificat nominatif Innovation Team Member est présenté près du début du récit. Source de contexte : https://www.directeur-innovation.com/evenement/candidatez-aux-trophees-innovation-team-best-practices-2025/ (consultée le 28 octobre 2026). Le certificat local atteste l’appartenance de Céleste à l’équipe OTO primée ; ce n’est pas un prix individuel.
- Les vidéos originales 4K HEVC restent dans `ressources/videos`. `python3 scripts/prepare-labaa-videos.py` prépare des copies H.264/AAC 720p dans `ressources/videos-web` et valide leur durée et leur décodage intégral avant de créer un marqueur `.ready`. La galerie sert automatiquement ces copies via HTTP Range. Le MP4 Fast Start permet une lecture progressive ; ce n’est pas encore du streaming adaptatif HLS/DASH à plusieurs qualités. Retirer une vidéo de `videos` la retire de la galerie, même si sa copie Web existe.
- Une conversion interrompue ne sera pas servie sans marqueur : déplacer sa copie incomplète dans `a-trier` puis relancer le script. Aucun original n’est écrasé.
