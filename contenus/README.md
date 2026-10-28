# Les contenus du portfolio — commencer ici

Chaque projet dispose d’un seul dossier de travail. L’arborescence suit les rubriques du site.

```text
contenus/
├── stages/
│   ├── labaa/
│   └── subatech/
├── formations/
│   ├── but-geii/
│   │   ├── page.json              ← présentation de la formation et du parcours ESE
│   │   └── projets/
│   │       ├── passage-a-niveau/
│   │       ├── robot-balises/
│   │       ├── robot-ultrasons/
│   │       ├── supercondensateurs/
│   │       ├── tour-hanoi/
│   │       └── conversion-solaire/ ← conservé, hors sélection de l’accueil
│   ├── lycee-sti2d/               ← présentation et espaces à compléter
│   │   └── projets/
│   │       ├── robotique-lycee/
│   │       └── projet-sti2d/
│   └── ecole-ingenieurs/
├── engagements/association-robotique/
├── projets/
│   ├── modelisation-3d/          ← espace à compléter
│   └── personnels/
├── passions/musique/
├── pages/                       ← expériences, mentions légales et confidentialité
└── a-trier/archives-portfolio/   ← anciens éléments non retenus
```

## Dans un projet

| Besoin | Emplacement |
|---|---|
| Modifier le récit | `texte.json` |
| Modifier une présentation de formation | `page.json` |
| Trier les images de galerie | `ressources/images/` |
| Trier les vidéos | `ressources/videos/` |
| Trier les PDF | `ressources/documents/` |
| Mettre un élément de côté | `a-trier/`, avec les mêmes sous-dossiers |
| Choisir une illustration du récit | `images-web/` et champs `image` / `figures` du JSON |

Les galeries de projets et de l’association se mettent à jour à l’actualisation du navigateur. Elles lisent leur dossier, pas un inventaire compilé. Les fichiers techniques et archives sont rangés dans `a-trier/`. Les sources originales restent intactes dans `ressources-locales/`.

`index.ts` relie les JSON au site. `organisation.json` associe les noms des blocs à leurs dossiers. Ce sont des fichiers techniques : aucune modification nécessaire pour trier les médias.

Le catalogue historique `/ressources` conserve son index de médias ; il ne pilote pas les galeries et n’est plus mis en avant dans la navigation. La présentation de l’accueil est dans `src/components/projects/ProjectSections.tsx`.
