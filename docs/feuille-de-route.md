# Feuille de route du portfolio

Version du 26 octobre 2026 — conception proposée, développement non commencé.

**Mise à jour — premier jet visuel réalisé le 26 octobre 2026 :** site public Next.js, pages du parcours, réalisations, CV, contact et charte graphique. Recherche et filtres fonctionnels ; images issues des ressources réorganisées. L'administration Payload/PostgreSQL reste à intégrer : les critères de fin des lots 1 et 2 ne sont donc pas encore remplis. Voir `developpement.md` pour la structure et les vérifications. La priorité de cette tranche suit la demande de Céleste de voir un premier jet du site et de sa charte.

## 1. Direction retenue

Construire rapidement une première version complète avec Next.js, Payload CMS et PostgreSQL, puis passer à la pédagogie lorsque Céleste sera satisfait. La documentation des choix sera tenue pendant la réalisation pour permettre ensuite de reconstruire le projet et d'en comprendre chaque partie.

Le portfolio propose deux lectures complémentaires : le parcours chronologique et les réalisations concrètes. Les recruteurs accèdent directement aux projets, aux compétences et au CV ; les visiteurs peuvent aussi explorer les formations, l'association, les passions et les créations musicales.

Une réalisation possède une fiche unique, liée à une expérience, une étape du parcours et plusieurs compétences. Elle peut donc apparaître sur l'accueil, dans le BUT et dans les réalisations sans dupliquer son contenu.

## 2. Sources et mise à jour du contexte

- `Portfolio.md` : dossier détaillé des faits, contributions et questions ouvertes.
- `CV/CV.pdf` et `CV/main.tex` : CV actuel lu en PDF et en source LaTeX ; le PDF comporte trois pages. Il cible un emploi de technicien en électronique ou systèmes embarqués.
- `lettre_motiv/lettre_motiv.pdf` et `lettre_motiv/main.tex` : lettre générale de candidature spontanée, une page, lue dans les deux formats. Elle précise l'intérêt pour la conception, les essais, le diagnostic et le travail matériel/logiciel.
- Dernière précision directe de Céleste : la formation en école d'ingénieurs a effectivement commencé et a produit des travaux à présenter avant son interruption faute d'alternance. Cette précision prime sur la mention « poursuite non engagée » encore présente dans le CV et sur les incertitudes du dossier initial. Les dates, cours et travaux exacts restent à recueillir.

Les quatre fichiers de candidature restent inchangés. Leur lecture ne vaut pas autorisation de publier tous leurs éléments. Prévoir le CV comme téléchargement public ; conserver la lettre et les sources LaTeX comme documents de travail par défaut. Signaler avant publication du CV que sa formulation sur l'école doit être harmonisée avec la dernière précision.

## 3. Navigation et pages

Navigation principale : **Réalisations · Parcours · Compétences · Passions · Contact**, avec le nom/logo vers l'accueil et un bouton **CV**. La musique est mise en évidence dans Passions et peut devenir une entrée principale par simple modification du menu.

| Page | Adresse proposée | Contenu et rôle |
| --- | --- | --- |
| Accueil | `/` | Présentation courte, réalisations choisies, compétences démontrées, parcours condensé, ouverture vers les passions, CV et contact |
| Toutes les réalisations | `/realisations` | Cartes filtrables par domaine et contexte : stage, formation, association, personnel |
| Fiche réalisation | `/realisations/[slug]` | Besoin, contribution personnelle, démarche, médias, résultat, limites, compétences et expérience liée |
| Parcours | `/parcours` | Frise lycée → BUT → début d'école d'ingénieurs → orientation actuelle ; accès aux expériences professionnelles |
| Lycée / STI2D | `/parcours/lycee-sti2d` | La Colinière, formation, découverte de l'électronique et robot de la Coupe de France Junior |
| BUT GEII | `/parcours/but-geii` | Formation, projets universitaires, stages et engagement associatif, en rubriques distinctes |
| École d'ingénieurs | `/parcours/ecole-ingenieurs` | Début de formation, travaux réellement effectués, interruption faute d'alternance et acquis conservés |
| Expériences | `/experiences` | Stages, futurs emplois et missions, avec dates, structure, rôle et réalisations liées |
| Fiche expérience | `/experiences/[slug]` | Une structure, un contexte, les missions et les projets ; fiches LABAA et SUBATECH au lancement |
| Association robotique | `/parcours/association-robotique` | Relance collective, vice-présidence, projets, compétitions et FabLab ; accessible aussi depuis le BUT |
| Compétences | `/competences` | Familles de savoir-faire reliées à des réalisations ; aucun pourcentage de maîtrise arbitraire |
| Passions | `/passions` | Musique, sonorisation, projets personnels, domotique, maintenance, F1 et simulation automobile |
| Projets personnels | `/passions/projets-personnels` | Vue des mêmes fiches de réalisation, filtrée sur leur contexte personnel |
| Musique | `/passions/musique` | Présentation, compositions et interprétations, lecteurs audio, vidéos, collections et sonorisation |
| Fiche création musicale | `/passions/musique/[slug]` | Titre, lecteur, contexte, rôle, crédits, date si connue, image et éventuelle vidéo |
| CV | `/cv` | Résumé lisible, consultation et téléchargement du PDF actuel, date de mise à jour |
| Contact | `/contact` | Courriel et liens professionnels ; disponibilité modifiable. Lien mail pour la première version |
| Mentions et confidentialité | `/mentions-legales`, `/confidentialite` | Informations adaptées à l'hébergement et aux traitements réellement utilisés |
| Page introuvable | Route inconnue | Retour vers accueil et réalisations |
| Administration privée | `/admin` | Gestion des contenus, médias, menus, brouillons et ordre des blocs |

Pas de page « avenir » isolée au lancement : une rubrique « Aujourd'hui et la suite » dans Parcours portera la recherche d'emploi et les envies confirmées. Elle pourra devenir une page autonome lorsque son contenu le justifiera.

Le BUT sert de page de synthèse, sans faire passer les stages ou l'engagement associatif pour des cours. Les expériences restent accessibles directement, et les futurs emplois pourront être ajoutés sans les rattacher artificiellement au BUT.

## 4. Première page d'accueil

L'accueil doit permettre de comprendre le profil et d'accéder à une preuve concrète dès le premier écran. Pas de liste exhaustive de technologies ni de lecture audio automatique.

| Ordre initial | Bloc | Contenu proposé |
| --- | --- | --- |
| 1 | Présentation | Céleste Koloussa ; « Électronique, systèmes embarqués et réalisations concrètes » ; introduction courte et recherche d'emploi |
| 2 | Réalisations sélectionnées | Trois entrées : outil de programmation LABAA, acquisition C++/Qt SUBATECH, détection ultrasonore du robot universitaire |
| 3 | Compétences en action | Électronique ; embarqué ; supervision/robotique ; outils et fabrication. Chaque famille mène à des exemples |
| 4 | Parcours en quelques étapes | STI2D, BUT, début d'école d'ingénieurs, orientation actuelle ; lien vers le parcours complet |
| 5 | Au-delà des projets techniques | Aperçu musique/sonorisation et projets personnels ; liens vers leurs espaces |
| 6 | Prendre contact | Emploi recherché, courriel, CV et liens professionnels |

Proposition de texte d'introduction, à ajuster avec Céleste :

> Titulaire d'un BUT GEII, je développe des projets qui relient électronique et logiciel : diagnostic de cartes, programmation embarquée, acquisition de données et robotique. Je recherche un emploi de technicien en électronique ou systèmes embarqués.

Actions principales : **Découvrir mes réalisations** et **Consulter mon CV**. Les médias seront choisis parmi les fichiers existants après identification ; pas de photo de réalisation inventée. Une fiche sans illustration pourra rester textuelle.

Direction visuelle proposée : présentation technique et humaine, typographie lisible, espaces généreux, photos et schémas réels, couleurs sobres avec un accent. La musique pourra avoir ses propres pochettes et couleurs sans changer toute la navigation.

## 5. Contenu de départ

Les fiches sont préparées à partir des sources disponibles ; les informations manquantes restent en brouillon ou sont omises de la publication sans être supprimées des sources.

- LABAA : page d'expérience et cinq missions, regroupées en sections au départ ; fiches autonomes pour les missions disposant d'assez de matière, notamment l'outil de programmation.
- SUBATECH / XEMIS2 : expérience et réalisation acquisition/visualisation C++/Qt.
- Association : page d'engagement et réalisations collectives documentées ; distinguer les responsabilités personnelles.
- BUT : F1Tenth, robot à balises, supercondensateurs, détection de train, démarche de fabrication des cartes.
- Lycée : robot de manipulation et d'identification des palettes, compétition Junior.
- École : page et fiches préparées en brouillon ; textes et livrables à compléter avec les ressources EPF.
- Personnel : cartographie en cours, domotique et maintenance selon les preuves disponibles.
- Musique : espace fonctionnel prêt à recevoir les créations ; aucun morceau, titre, crédit ou enregistrement inventé. Les visiteurs ne voient pas de fausses cartes de démonstration.

## 6. Administration et modularité

Collections prévues : réalisations, expériences, étapes du parcours, compétences, créations musicales, médias et pages. Réglages globaux : identité, coordonnées, disponibilité, navigation, pied de page et CV actuel. Compte administrateur privé.

Blocs disponibles au lancement : texte enrichi, image, galerie, vidéo, audio, document téléchargeable, liste de réalisations, sélection musicale, frise, liste de compétences et appel à contact. Les listes peuvent afficher une sélection manuelle ou les contenus associés à une formation, un domaine ou une expérience.

Depuis l'administration, Céleste pourra :

1. Créer une fiche ou une page à partir d'un modèle.
2. Ajouter et réordonner les blocs, les masquer et les réafficher.
3. Choisir les projets mis en avant et l'ordre des morceaux.
4. Relier une réalisation à une compétence ou une étape de formation.
5. Modifier les menus et les coordonnées.
6. Remplacer le CV public en conservant la version précédente.
7. Enregistrer un brouillon, prévisualiser, puis publier ou dépublier.

La règle de conservation s'applique aussi à la conception de l'administration : favoriser archivage et dépublication, conserver les versions et ne pas proposer de suppression définitive dans le parcours courant. La rétention des versions et des médias devra être explicitement configurée.

Les blocs ont des mises en page prévues pour rester cohérents sur mobile. Un nouveau contenu ou un nouvel ordre ne demande pas de code ; une nouvelle fonctionnalité ou un nouveau type de bloc en demandera. Il ne s'agit pas de recréer un éditeur graphique universel.

PostgreSQL conserve les contenus et relations ; les médias utilisent un stockage persistant distinct. Seuls les fichiers sélectionnés sont importés : les archives locales de plusieurs gigaoctets ne sont pas versées automatiquement dans le site. Pour les gros fichiers audio/vidéo, prévoir des versions de diffusion adaptées ; le CMS n'est pas à lui seul un service de transcodage vidéo.

## 7. Ordre de réalisation

| Lot | Livrable | Critère de fin |
| --- | --- | --- |
| 0 — Cadrage | Présent plan, sources et arborescence | Parcours, accueil, administration et musique décrits ; fait dans cette session |
| 1 — Fondations | Next.js, Payload, base, compte privé, médias, modèles et blocs | Création d'une fiche depuis l'administration et affichage public ; brouillon inaccessible publiquement |
| 2 — Première tranche complète | Accueil et fiche LABAA, avec navigation responsive | Modification dans l'administration, prévisualisation et publication visibles sur le site |
| 3 — Parcours et réalisations | Lycée, BUT, école, association, expériences, index et compétences | Navigation cohérente et une seule source par réalisation ; contenus sourcés |
| 4 — Passions et candidature | Musique, projets personnels, CV, contact | Lecture d'un véritable fichier audio, ordre modifiable, CV téléchargeable, liens fonctionnels |
| 5 — Finalisation | Médias choisis, mobile, accessibilité, référencement, sauvegardes, déploiement | Tests de fonctionnement et de restauration ; aperçu complet revu ; publication après choix d'hébergement et validation |
| 6 — Pédagogie | Guide de reconstruction, explications et exercices sur le projet réel | Céleste peut ajouter un bloc, comprendre les relations et reconstruire l'application |

Priorité à un parcours complet administrable avant les animations avancées. Les fonctionnalités originales pourront enrichir les blocs ensuite. La section école ou musique peut être préparée intégralement sur le plan fonctionnel tout en gardant ses contenus non fournis en brouillon.

## 8. Vérifications de la première version

- Sur téléphone et ordinateur : menus, textes, cartes, galeries et lecteurs utilisables sans débordement.
- Au clavier : navigation, filtres et lecteurs accessibles, focus visible, titres structurés et images décrites.
- Publication : aucun brouillon ou média privé accessible par URL publique ou API ; administration réservée au compte autorisé.
- Modularité : ajouter une réalisation, la relier au BUT, réordonner l'accueil et une sélection musicale sans changer le code.
- Documents : CV actuel, absence de téléchargement cassé, lettre de motivation conservée en interne.
- Audio/vidéo : lecture volontaire, commandes disponibles et aucune lecture automatique sonore.
- Conservation : sauvegarde de la base et des médias, restauration vérifiée, originaux préservés.
- Contenu : pas de résultat, de diplôme obtenu ou de rôle individuel inventé ; formulation EPF harmonisée avant publication.

## 9. Informations à recueillir au bon moment

Ces éléments ne bloquent pas les fondations : dates et travaux EPF, premiers morceaux publiables et leurs crédits, médias à mettre en avant, hébergement/domaine et coordonnées à afficher. Les points documentaires du dossier initial restent suivis.

La pédagogie détaillée est volontairement placée après la première version satisfaisante. Pendant le développement, un journal bref des choix, commandes et relations sera conservé pour préparer cette étape.
