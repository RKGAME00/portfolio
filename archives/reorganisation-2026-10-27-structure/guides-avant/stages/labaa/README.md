# Stage LABAA : modifier la page

## Le récit et ses illustrations

`texte.json` contient la couverture, les textes, le sommaire et les images de chaque mission (`figures`). L’ordre suit `originaux/rappor/main.tex` : entreprise et atelier, produit et architecture, fiabilisation, SAV, production, outils, firmware, compétences et bilan. La mission de découpe est un complément issu de `docs/Portfolio.md`.

`images-web/` contient les copies optimisées des illustrations du rapport. Le champ `source` de chaque figure conserve le nom original. Les photographies et schémas ne sont pas recadrés. Les textes et ces illustrations nécessitent une recompilation après modification.

## La galerie en bas de page : ajouter ou retirer sans coder

Ouvrir **`ressources/`** dans ce dossier :

- `images/` : déposer les images JPEG, PNG, WebP, GIF ou AVIF.
- `videos/` : déposer les vidéos (MP4/WebM conseillés pour les navigateurs).
- `documents/` : PDF et autres documents.
- `audio/`, `sources/`, `archives/` : fichiers complémentaires.

**Ajouter un fichier puis actualiser la page suffit. Aucune indexation ni recompilation nécessaire.** Le serveur doit avoir accès à ce dossier. Même fonctionnement pour un fichier déplacé hors de `ressources/` : il disparaît de cette galerie à l’actualisation. Le serveur ne modifie aucun fichier.

Pour trier sans rien supprimer, déplacer les accès inutiles dans `a-trier/images/`, `a-trier/videos/`, etc., à côté de `ressources/`, en conservant la même profondeur de dossiers pour les liens relatifs. La plupart des fichiers actuels sont des liens vers les originaux ; ne pas modifier leur cible. Les copies pointant sur le même original n’apparaissent qu’une fois. `sync-block-links.py` laisse désormais LABAA intact pour ne pas rétablir les éléments retirés.

Cette sélection concerne la galerie complémentaire LABAA. Les figures du récit restent dans `texte.json`, et le catalogue global `/ressources` conserve son index existant. `ressources.json` et `inventaire-local.json` gardent l’inventaire initial, ils ne pilotent plus cette galerie.

## Sources et point à vérifier

Les originaux restent dans `ressources-locales/stage labaa/` (accès via `originaux`). Le rapport indique un début le 12 mars 2025, alors que le contenu existant indiquait le 18 mars. Le récit utilise donc « mars à juillet 2025 » en attendant la validation de la date précise.
