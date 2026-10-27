# Se repérer dans le premier jet

## Démarrer

Depuis la racine du dépôt, avec Node.js 20.9 ou plus récent :

```sh
npm ci
npm run dev
```

Le serveur Next.js affiche son adresse locale, normalement `http://127.0.0.1:3000`.
Laisser le terminal ouvert ; utiliser Ctrl+C pour l'arrêter. Les commandes Astro de l'ancien projet concernent uniquement `archives/astro-2026-10-26/`.

```sh
npm run typecheck
npm run build
npm run start
```

`start` sert une compilation de production créée par `build`. Le verrou `package-lock.json` fixe les versions installées.

## Organisation

```text
src/
  app/                       Routes Next.js, titres et composition des pages
    page.tsx                 Ordre des sections de l'accueil
    layout.tsx               En-tête, pied de page, langue et styles partagés
    realisations/            Catalogue et fiches dynamiques
    parcours/                Frise et liens vers les étapes
    competences/             Domaines reliés aux réalisations
    cv/                      Présentation et consultation du CV
    contact/                 Coordonnées et liens
    charte-graphique/         Catalogue visuel des composants
    [...slug]/               Pages éditoriales explicitement déclarées
  components/
    home/                    Un fichier pour chaque section de l'accueil
    layout/                  Header et Footer
    projects/                Cartes et catalogue avec recherche/filtres
    ui/                      Bouton, titre de section, animation, page éditoriale
  content/
    profile.ts               Identité et menu
    projects.ts              Réalisations : contenu partagé entre les pages
    journey.ts               Étapes du parcours
    skills.ts                Domaines de compétences
    pages.ts                 Pages éditoriales du parcours et des passions
  styles/
    index.css                Imports uniquement
    base/                    Palette, remise à zéro, typographie, grille
    components/              Boutons, navigation, cartes, champs, pied de page
    sections/                Accueil, compétences, parcours, passions, etc.
public/
  images/                    Copies WebP sélectionnées, sans métadonnées EXIF
  documents/                 Copie du CV proposé au téléchargement
docs/                        Sources de travail, plan et documentation
ressources-locales/          Originaux conservés et exclus de Git
archives/                    Ancien projet conservé
```

## Où intervenir ?

| Modification | Fichier ou dossier |
| --- | --- |
| Couleurs, largeur générale | `src/styles/base/tokens.css` |
| Apparence d'un bouton | `src/styles/components/buttons.css` |
| Introduction de l'accueil | `src/components/home/Hero.tsx` |
| Ordre des sections d'accueil | `src/app/page.tsx` |
| Ajouter ou corriger une réalisation | `src/content/projects.ts` |
| Modifier une page de formation | `src/content/pages.ts` |
| Menu, email, lien LinkedIn | `src/content/profile.ts` |
| Styles d'une section | Fichier correspondant dans `src/styles/sections/` |
| Origine d'une photographie | `docs/sources-medias.json` |

Les commentaires expliquent les responsabilités et les choix non évidents. Le code est formaté avec Prettier pour garder une indentation et des retours à la ligne réguliers.

## Fonctionnement actuel

Les pages éditoriales sont pré-rendues à partir de données TypeScript locales ; la bibliothèque et les fichiers sont servis à la demande. La recherche et les filtres fonctionnent dans le navigateur. L'en-tête mobile et les animations sont les autres composants interactifs. Aucun appel à une base de données n'est nécessaire pour consulter ce premier jet.

Le composant `ProjectCard` est partagé par l'accueil, le catalogue, les pages de parcours et la charte graphique. Les pages éditoriales utilisent un même modèle, pour conserver la même hiérarchie visuelle. La route `[...slug]` ne rend que les pages présentes dans `pages.ts` ; une adresse inconnue retourne une page 404.

Les animations ne masquent aucun texte en l'absence de JavaScript et respectent la réduction des mouvements. Les polices sont hébergées localement. Le formulaire de recherche ne transmet aucune donnée à un service externe.

## État et limites du premier jet

- Accueil, parcours, stages, association, compétences, passions, vingt fiches de réalisation, CV, contact et charte graphique réalisés.
- Recherche par texte et filtrage par contexte utilisables.
- Originaux inchangés ; copies WebP, aperçus de ressources et copie du CV dans `public/`.
- Payload, PostgreSQL, comptes privés, brouillons et édition sans code ne sont pas encore intégrés. Les fichiers `content/` préparent cette séparation, sans constituer déjà un CMS.
- L'espace musique est éditorial pour le moment : pas de morceau fourni/sélectionné, donc pas de faux lecteur ni de piste de démonstration.
- Le CV original reste inchangé, avec une note visible sur sa formulation concernant l'école d'ingénieurs.
- Mentions légales et hébergement à finaliser avant publication ; cette version reste locale.
- Aucune publication distante ni modification de l'historique Git.

## Vérifications réalisées

Compilation de production et vérification TypeScript ; inspection visuelle de l'accueil, d'une fiche de réalisation et de la charte dans le navigateur. Combinaison du filtre Stage et de la recherche Qt vérifiée : seule la réalisation SUBATECH reste affichée.

Les styles incluent des adaptations pour petits écrans. Une inspection visuelle sur téléphone reste à effectuer ; elle n'est pas déduite de la seule présence de media queries.

## Prochaine tranche

Recueillir le retour sur le premier jet, puis raccorder les collections et blocs à Payload/PostgreSQL. Conserver les mêmes composants publics et remplacer les accès aux données locales par une couche de lecture du CMS. Mettre en place ensuite la prévisualisation, les règles de publication, le stockage persistant des médias et les sauvegardes.

La pédagogie détaillée reste prévue après la validation de la version complète.


## Bibliothèque complète et version du 27 octobre 2026

L’accueil met la recherche d’un emploi de technicien au premier plan, avec une
photographie locale de carte électronique en fond. Les pages de parcours et de
réalisation offrent maintenant tout leur ensemble de ressources, filtrable et
chargé par lots de 24. Les originaux ne sont ni déplacés ni supprimés.

Le catalogue contient 3 443 ressources uniques : 361 images, 45 vidéos,
241 documents, 2 655 fichiers de travail et 141 archives. 5 800 occurrences
identiques sont réunies par empreinte SHA-256. Les ressources partagées gardent
plusieurs thèmes. Il ne s’agit pas d’un dédoublonnage visuel de photos similaires.

L’inventaire couvre 39 655 fichiers locaux et 15 895 entrées d’archives ZIP.
Les dépendances, sorties de compilation et certains documents administratifs
ne sont pas des cartes individuelles de la bibliothèque. Les archives originales
restent disponibles localement ; leur contenu devra être revu avant publication.

Pour actualiser l’index après l’ajout de ressources :

```sh
python3 scripts/index-resources.py
node scripts/check-resources.mjs
```

Le script utilise Python/Pillow, ffmpeg et pdftotext. Il écrit le catalogue dans
`src/content/generated`, les aperçus dans `public/ressources-apercus` et un registre
privé dans `.cache/ressources`. Ce registre et les originaux doivent rester
accessibles au serveur ; un déploiement distant nécessitera un stockage persistant.

Le détail des contenus intégrés depuis Portfolio.md figure dans
`docs/couverture-portfolio.md`. Le contenu reste modifiable dans les fichiers de
`src/content/` ; le CMS n’est pas encore intégré.

## Compilation et mémoire

`npm run build` utilise un groupe systemd isolé, plafonné à 4 Gio, avec Webpack et
deux workers. La compilation validée après correction le 26 octobre a duré
22 secondes avec un pic de 850,4 Mio indiqué par systemd, contre plus de 7 Gio
pour les processus interrompus. Ne pas lancer `next build` directement ni cumuler
serveur de développement et compilation. Le lanceur requiert Linux/systemd.
