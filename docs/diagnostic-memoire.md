# Interruptions de l’application — 26 octobre 2026

Le journal du noyau signale deux saturations globales de mémoire, à 19:49:24
et 19:58:50 (horodatages du journal). Les victimes sont des processus
`next-build (v16)` : respectivement 7 688 792 et 8 533 084 Kio de mémoire
résidente anonyme. Ils appartenaient au groupe de processus de Chromium,
déclaré ensuite en échec `oom-kill`. Cela explique probablement la fermeture
de l’application hôte. Ce ne sont pas des preuves d’une fuite mémoire de ChatGPT.

La machine expose environ 14 Gio de RAM et 8 Gio de swap. Le responsable de
l’arrêt observé est le mécanisme OOM du noyau Linux. Désactiver systemd-oomd
ne désactiverait pas ce mécanisme et ne résoudrait pas la consommation excessive.

## Protection mise en place

`npm run build` passe désormais par `scripts/build-protected.mjs` :

- groupe systemd utilisateur distinct de Chromium ;
- seuil de pression à 3 Gio, plafond de mémoire à 4 Gio et de swap à 512 Mio ;
- tas JavaScript limité à 2 560 Mio (complément du plafond global) ;
- nom de groupe fixe pour empêcher deux builds protégés simultanés ;
- arrêt avec erreur si l’isolation ne peut pas être créée, sans repli non limité.

La commande légère `node scripts/build-protected.mjs --check` permet de lire
les limites réellement appliquées sans compiler. Elle doit être exécutée
dans la session Linux utilisateur avec accès à systemd (hors sandbox si nécessaire).
Ce lanceur est spécifique à cet environnement Linux/systemd.

Ne pas lancer un build et le serveur de développement simultanément pendant
le diagnostic. Ne pas contourner le lanceur avec `npx next build`.
Les protections du système et les fichiers de ressources restent inchangés.

## Limites du diagnostic

Le garde-fou contient les prochaines compilations ; il ne garantit pas qu’elles
aboutiront dans 4 Gio. L’origine précise de la hausse mémoire dans le build
reste à rechercher. Aucun nouveau build complet n’est lancé dans cette étape :
la vérification fonctionnelle du portfolio reste à reprendre séparément.


## Correction validée

Le 26 octobre, la compilation protégée a abouti avec Webpack, deux workers et
l’exclusion des gros dossiers de travail des traces de déploiement. Le journal
systemd indique 21,994 secondes et un pic de 850,4 Mio pour ce build. TypeScript,
pré-rendu et tests HTTP de la bibliothèque ont réussi. Ces réglages constituent
une solution vérifiée ; la contribution exacte de chaque réglage à la baisse
mémoire n’a pas été mesurée séparément. Les mises à jour suivantes conservent
ce chemin de compilation protégé.
