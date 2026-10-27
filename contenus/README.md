# Les contenus du portfolio, par bloc

Commencer ici pour relire le site. Chaque dossier rassemble le texte, les médias
et l’accès aux originaux d’une expérience ou d’un projet.

- **labaa/** : une seule fiche pour le stage complet, structurée suivant le rapport.
- **subatech/** : une seule fiche pour le stage XEMIS2.
- **projets-personnels/** : cartographie, domotique et maintenance regroupées ;
  aucune affectation artificielle de la même photo à trois projets distincts.
- **but-geii/**, **ecole-ingenieurs/**, **association-robotique/** : parcours et ressources.
- Les autres dossiers portent le nom du projet ou de la page.

## Modifier un bloc

1. Ouvrir `texte.json` (réalisation) ou `page.json` (page de parcours).
2. Parcourir `ressources/images`, `videos`, `documents`, `sources` ou `archives`.
3. Pour masquer un média, retirer son identifiant de `ressources.json` : aucune
   suppression du fichier original n’est nécessaire. Le catalogue général est
   limité à l’union de ces listes.
4. Relancer `npm run build`, puis redémarrer l’aperçu de production.

`ressources/` contient des **liens symboliques vers les originaux**, pas de nouvelles
copies. `originaux` ouvre le dossier source entier lorsqu’il existe pour le bloc.
`images-web/` contient les petites versions réellement utilisées par le site ;
`public/images/` fournit des liens compatibles avec les anciennes URL.
Les aperçus de la bibliothèque restent un cache généré partagé : un fichier
identique n’a qu’un identifiant, même s’il a plusieurs provenances.

`index.ts` relie les blocs au site. Les composants et styles restent dans `src/`.
Les anciennes fiches sont conservées dans `archives/reorganisation-2026-10-27/`.
L’image du fond de l’accueil n’a pas été changée pendant cette réorganisation.
