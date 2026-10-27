# labaa

- `texte.json` : contenu de la réalisation, lu directement par le site (si présent).
- `page.json` : contenu de la page de parcours (si présent).
- `ressources.json` : identifiants affichés pour ce bloc ; retirer une entrée masque la ressource sans supprimer son original.
- `ressources/` : accès classé aux originaux par liens symboliques, sans copies supplémentaires.
- `inventaire-local.json` : correspondance entre liens, identifiants et chemins réels.
- `images-web/` : versions légères utilisées par le site (si présent).

Ne pas confondre retirer un lien et supprimer son fichier cible. Les originaux restent dans `ressources-locales/` ; aucun nettoyage automatique ne les efface.
