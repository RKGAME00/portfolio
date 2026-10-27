# Contenu intégré — 27 octobre 2026

Source principale : `docs/Portfolio.md`. Les dernières précisions directes de
Céleste prévalent, notamment le début effectif de l’école d’ingénieurs avant
l’interruption faute d’alternance. Aucun média n’est pris sur Internet.

| Matière du dossier | Présentation dans le site |
| --- | --- |
| Recherche d’emploi de technicien, BUT GEII, mobilité | Accueil, CV, contact |
| Bac STI2D et robot Junior à palettes | Parcours lycée et fiche robotique lycée |
| BUT, fabrication de cartes, rapports | Parcours BUT, projets et compétences |
| Début d’école et TP | Parcours école, UART/DMA et bibliothèque de sources |
| SUBATECH, C++/Qt, acquisition serveur, binaire et relecture | Stage et fiche XEMIS2 |
| LABAA : régulation | Fiche `regulation-cartes` |
| LABAA : retours SAV | Fiche `sav-cartes` |
| LABAA : outil Raspberry Pi/Python/PlatformIO, bouton/LED et interfaces | Fiches LABAA et outil OTO |
| LABAA : réorganisation pour les tests | Fiche `organisation-firmware` |
| LABAA : machine de découpe | Fiche `commande-decoupe` |
| Distinction collective et fiabilité | Page LABAA, sans gain économique inventé |
| Association, relance collective, trois niveaux de robots, Cachan, FabLab | Parcours association |
| Robot à balises : pilotage personnel, trois fonctions | Fiche robot à balises |
| Conversion et régulation de supercondensateurs | Fiche supercondensateurs distincte |
| Détection de passage à niveau et IHM | Fiche passage à niveau |
| F1Tenth, ultrasons, ESP32, ROS1, modes manuel/autonome | Fiche robot ultrasons |
| Robot de cartographie en cours | Fiche personnelle distincte |
| Domotique, Tuya, Bluetooth, LoRa | Fiche domotique |
| Maintenance d’appareils | Fiche maintenance personnelle |
| Piano, composition, groupe musical et sonorisation live | Passions / musique |
| F1 et sim racing | Passions |
| Fabrication 3D et laser, Inventor, premières utilisations SolidWorks | Compétences, fiche modélisation |
| Tous les langages et outils de l’inventaire §10 | Compétences, groupes sans scores artificiels |
| Français, anglais B1 et usages | Compétences |
| Ressources supplémentaires : solaire, tour de Hanoï, STI2D | Fiches dédiées et galeries |

Les informations internes du dossier (correspondance familiale, adresses de tiers,
historique de rédaction du CV, erreurs de livraison et identifiants de pièces)
restent conservées dans le document source. Elles ne deviennent pas du texte
biographique public. Les propositions et les faits incertains ne sont pas
transformés en réalisations établies.

## Ressources

Le catalogue dédoublonné est accessible intégralement dans `/ressources`.
Les galeries intégrées aux projets et formations affichent tout leur sous-ensemble,
avec recherche, format, thème et affichage progressif. Les photos de cartes
vérifiées sont prioritaires sur l’accueil et dans la bibliothèque.

Les fichiers liés à un thème constituent un contexte documentaire : une photo
partagée par plusieurs missions n’est pas une preuve individuelle de chacune.
Les supports pédagogiques restent distingués des rapports et travaux.

## Suite prévue

Relecture éditoriale avec Céleste, vérification des détails encore incertains,
puis sélection de publication et intégration de l’administration sans code.
Aucun fichier audio n’a été trouvé dans le catalogue actuel ; l’espace musical
ne prétend donc pas proposer déjà des morceaux à écouter.

## Vérification de cette version

- Compilation de production et TypeScript réussis : 43 pages générées dans le build.
- 40 routes pré-rendues publiques contrôlées en HTTP.
- 3 443 ressources : existence, tailles, unicité SHA-256 du registre et aperçus contrôlés.
- 548 images, vidéos et PDF contrôlés par requêtes partielles (16 octets) ; ce contrôle
  vérifie la diffusion, pas le décodage intégral de chaque vidéo par chaque navigateur.
- Pages de détail des cinq catégories présentes, téléchargement HTML en pièce jointe,
  vidéo partielle comparée à l’original, plage invalide et identifiant inconnu vérifiés.
- Accueil inspecté sur ordinateur et à 390 px de large ; menu mobile et combinaison
  de filtres « Vidéos » / « Tour de Hanoï » vérifiés dans le navigateur.
- Dernier build : 18,967 secondes et pic de 838 Mio selon systemd, sans saturation.

L’aperçu local sert la version compilée sur http://127.0.0.1:3000/.
Le serveur d’aperçu est dans `portfolio-preview.scope`, isolé et plafonné à 2 Gio.
Pour l’arrêter : `systemctl --user stop portfolio-preview.scope`.
