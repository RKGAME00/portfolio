# Cadrage initial — 26 octobre 2026

Actualisation : voir `feuille-de-route.md` pour le plan détaillé, les nouveaux CV/lettre et la précision de Céleste confirmant un début effectif de formation en école d'ingénieurs, interrompu faute d'alternance. Le présent cadrage conserve l'état initial de l'analyse.

## Objectif exprimé

Présenter l'ensemble des compétences de Céleste aux recruteurs et autres visiteurs, avec un outil qui permette d'ajouter facilement des réalisations, compétences, stages, missions, emplois et formations. Pouvoir enrichir les fiches avec du texte, des images, des fichiers audio et des vidéos, et créer de nouveaux espaces au fil du parcours.

Le besoin comprend une présentation publique et une gestion de contenu pratique pour son auteur. Le framework, une éventuelle base de données, l'interface d'administration et le stockage des médias restent à définir. Aucun choix technique n'a été arrêté pendant cette préparation.

## Base documentaire

`Portfolio.md` est le dossier de référence complet, conservé sans réécriture. Il distingue les faits déclarés, les CV sources, les propositions rédactionnelles et les points à confirmer. Cette distinction doit être maintenue lors de la rédaction du site.

Les grands ensembles identifiés sont :

- Formation STI2D puis BUT GEII ; statut du projet EPF/ESTI à confirmer.
- SUBATECH / XEMIS2 : premières bases d'une application C++/Qt d'acquisition, affichage et enregistrement de données.
- LABAA : diagnostic électronique, régulation, SAV, outil de programmation Raspberry Pi/Python/PlatformIO, travail sur le firmware et une machine de découpe.
- Association robotique : vice-présidence, coordination collective, cartes, firmware, compétitions et entraide au FabLab.
- Projets universitaires : robot à balises, supercondensateurs, passage à niveau et robot F1Tenth avec détection ultrasonore complémentaire.
- Projets personnels : domotique, robot de cartographie en cours, maintenance électronique.
- Audio, sonorisation live, composition, piano, fabrication et modélisation.

Les résultats chiffrés, niveaux de maîtrise, contributions personnelles et statuts ne doivent pas être extrapolés. Les questions ouvertes sont détaillées dans la section 18 du dossier de référence.

## État de l'ancien site

Projet Astro avec CSS et composants Astro, sans base de données ni interface de gestion identifiée dans sa configuration. Pages présentes : accueil, CV, projets, formations et contact ; plusieurs pages sont encore des ébauches. Le manifeste déclare Astro `^7.0.6` et Node `>=22.12.0`.

Le contenu de l'accueil mentionne une formation ingénieur et une recherche d'alternance. Le dossier de référence plus récent décrit une recherche d'emploi de technicien et un projet d'école contrarié par l'absence d'alternance : le statut exact devra être confirmé avant publication. Les affirmations de l'ancien site ne sont donc pas automatiquement reprises.

## Ressources mises de côté

Ancien dossier `port folio`, environ 18 Gio sur disque lors de l'inventaire :

| Sous-dossier conservé | Volume approximatif |
| --- | ---: |
| `GitHub` | 675 Mio |
| `Nouveau dossier` | 88 Kio |
| `element portfolio` | 2,2 Gio |
| `epf` | 36 Mio |
| `img` | 12 Gio |
| `portfolio_save` | 99 Mio |
| `stage` | 3 Gio |
| `stm` | 230 Mio |

Ces ressources comprennent des médias, des documents et du code, dont des dépôts imbriqués et des fichiers de compilation. L'arborescence a été inventoriée ; chaque média, document et programme n'a pas fait l'objet d'une lecture individuelle. Aucun tri interne, dédoublonnage ou suppression n'a été effectué.

## Pistes à préciser ensuite

Définir le parcours de consultation des recruteurs et le parcours d'ajout d'une réalisation. Une première structure de contenu pourrait relier expériences, projets, compétences et médias, avec un état brouillon/publié et des sources. Cette structure est une proposition à discuter, pas une architecture déjà retenue.

Le choix du framework et du stockage viendra après clarification des besoins d'édition, d'hébergement et de gestion des médias.
