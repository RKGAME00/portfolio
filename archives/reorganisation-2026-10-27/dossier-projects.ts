import type { Project } from './projects';

/** Détails du récit personnel : docs/Portfolio.md, §6, §8.2 et §9.
 * Les résultats non mesurés et les mises en production non confirmées ne sont pas ajoutés.
 */
const labaa = {
  category: 'Stage' as const,
  context: 'LABAA · Électronique OTO',
  period: 'Mars — juillet 2025',
  image: '/images/labaa.webp',
  alt: 'Montage électronique photographié chez LABAA',
  relatedPath: '/experiences/labaa',
  relatedLabel: 'Toutes les missions du stage',
};
const personal = {
  category: 'Personnel' as const,
  context: 'Expérimentations personnelles',
  period: 'Projets personnels',
  image: '/images/personnel.webp',
  alt: 'Montage issu des expérimentations personnelles',
  relatedPath: '/passions/projets-personnels',
  relatedLabel: 'Les projets personnels',
};
export const dossierProjects: Project[] = [
  {
    ...labaa,
    slug: 'regulation-cartes',
    title: 'Comprendre un défaut de régulation.',
    summary:
      'Examiner la carte, mesurer les composants et tester des références de remplacement.',
    tags: ['Diagnostic', 'Régulation', 'Sourcing'],
    sections: [
      {
        title: 'Une base électronique existante',
        text: 'À mon arrivée, l’électronique des fauteuils OTO avait déjà été conçue avec un bureau d’études. Ma mission était d’analyser les problèmes rencontrés et de proposer des améliorations, notamment autour d’un régulateur et du dimensionnement de certains composants.',
      },
      {
        title: 'Observer, mesurer, proposer',
        text: 'J’ai examiné le fonctionnement de la carte et réalisé des essais dans son environnement d’utilisation et dans des conditions choisies. Les mesures m’ont servi à proposer un redimensionnement, rechercher de nouvelles références et tester les composants envisagés.',
      },
      {
        title: 'La fiabilité comme objectif',
        text: 'Ce travail visait à améliorer la fiabilité de la base existante. Je distingue cette démarche de validation d’un gain chiffré : je ne présente ici ni baisse mesurée des coûts ni taux de panne comparatif.',
      },
    ],
  },
  {
    ...labaa,
    slug: 'sav-cartes',
    title: 'Diagnostiquer les cartes de retour au SAV.',
    summary:
      'Du constat de panne à la réparation ou au remplacement, en conservant une trace du diagnostic.',
    tags: ['SAV', 'Maintenance', 'Rapports de panne'],
    sections: [
      {
        title: 'Analyser le retour',
        text: 'Certaines cartes utilisées chez les clients revenaient défectueuses. J’examinais leur fonctionnement pour identifier la panne et rédiger un rapport.',
      },
      {
        title: 'Intervenir sur le matériel',
        text: 'Lorsque la réparation était possible, je remplaçais les composants concernés. Si un remplacement complet était nécessaire, je fournissais une autre carte. Cette mission reliait diagnostic, intervention matérielle et documentation.',
      },
    ],
  },
  {
    ...labaa,
    slug: 'organisation-firmware',
    title: 'Préparer le firmware à la validation.',
    summary:
      'Travailler sur l’organisation du programme embarqué pour mieux isoler les fonctions à tester.',
    tags: ['C / C++', 'Firmware', 'Testabilité'],
    sections: [
      {
        title: 'Le problème rencontré',
        text: 'Le programme de la carte était encore en développement. Son organisation rendait difficiles les essais et la validation séparée des différents blocs.',
      },
      {
        title: 'Ma contribution',
        text: 'J’ai travaillé à la réorganisation du logiciel embarqué pour faciliter les tests unitaires et la validation des fonctions. L’objectif était de rendre le programme plus facile à vérifier et à faire évoluer.',
      },
      {
        title: 'Périmètre du travail',
        text: 'Il s’agit d’un travail de restructuration visant la testabilité. Je ne revendique pas une refonte entièrement achevée ni une couverture de tests complète.',
      },
    ],
  },
  {
    ...labaa,
    slug: 'commande-decoupe',
    title: 'Ajouter une commande à une machine de découpe.',
    summary:
      'Contribuer à l’automatisation d’un procédé manuel de mesure et de coupe de tubes.',
    tags: ['Carte de commande', 'Automatisation', 'Production'],
    sections: [
      {
        title: 'Le besoin de l’atelier',
        text: 'La machine de découpe de tubes existait déjà et son procédé était manuel. L’objectif était d’ajouter une carte électronique pour simplifier les opérations.',
      },
      {
        title: 'L’intervention',
        text: 'J’ai travaillé à l’intégration d’une carte de commande pour un cycle de mesure et de coupe, avec des commandes par boutons. Cette mission associait l’électronique à un besoin concret de l’atelier.',
      },
      {
        title: 'État présenté',
        text: 'Cette page présente la contribution à l’automatisation, sans assimiler le travail à une machine industrialisée ou à une mise en service finale validée.',
      },
    ],
  },
  {
    slug: 'supercondensateurs',
    title: 'Étudier la charge des supercondensateurs.',
    category: 'Formation',
    context: 'BUT GEII · Électronique de puissance',
    period: 'Projet universitaire',
    image: '/images/balises.webp',
    alt: 'Ensemble robotique comprenant des supercondensateurs',
    summary:
      'Explorer les conversions abaisseuse et élévatrice et le rôle de la régulation dans la charge.',
    tags: ['Buck', 'Boost', 'Régulation'],
    relatedPath: '/parcours/but-geii',
    relatedLabel: 'Le BUT GEII',
    sections: [
      {
        title: 'Conversion et régulation',
        text: 'J’ai travaillé autour de la charge et de la décharge de supercondensateurs, avec des solutions de conversion buck, boost et une solution combinant les deux comportements. Le travail abordait une boucle de rétro-régulation pour accompagner la charge.',
      },
      {
        title: 'Comprendre l’énergie disponible',
        text: 'Le sujet relie le comportement des cellules, les variations de tension et la conversion d’énergie. Mon récit détaille surtout la charge ; il ne fournit pas de rendement mesuré ni de valeur de courant à annoncer.',
      },
      {
        title: 'Distinguer les contributions',
        text: 'Ce travail est présenté séparément de mon rôle sur l’algorithme du robot à balises. Dans ce projet de robot à trois étudiants, la fonction énergie était confiée à un autre membre de l’équipe. Les médias de cet ensemble donnent le contexte matériel.',
      },
    ],
  },
  {
    ...personal,
    slug: 'domotique',
    title: 'Expérimenter avec un habitat connecté.',
    summary:
      'Explorer les modules connectés, l’éclairage et la commande vocale dans des projets personnels.',
    tags: ['Tuya', 'Bluetooth', 'LoRa'],
    sections: [
      {
        title: 'Des usages quotidiens',
        text: 'Mes expérimentations en domotique portent notamment sur l’éclairage autonome ou commandé par un assistant vocal. Je m’intéresse à la manière de relier un besoin quotidien à des modules électroniques.',
      },
      {
        title: 'Des technologies à explorer',
        text: 'J’utilise ou explore des modules Tuya, le Bluetooth et le LoRa. Ces technologies appartiennent à mes différents essais ; elles ne sont pas présentées comme les composants d’une architecture unique déjà finalisée.',
      },
    ],
  },
  {
    ...personal,
    slug: 'maintenance-personnelle',
    title: 'Comprendre avant de réparer.',
    summary:
      'Mettre mes compétences électroniques en pratique sur des appareils du quotidien.',
    tags: ['Maintenance', 'Électronique', 'Diagnostic'],
    sections: [
      {
        title: 'Une pratique personnelle',
        text: 'Lorsque je le peux, j’utilise mes compétences pour entretenir et réparer des appareils électroniques. Chercher l’origine d’un défaut me permet de continuer à apprendre à partir de situations concrètes.',
      },
      {
        title: 'Une démarche',
        text: 'Observer le montage, comprendre son fonctionnement et évaluer ce qui peut être réparé : cette pratique prolonge mon intérêt pour le diagnostic. Les photographies regroupées ici montrent mes expérimentations personnelles, sans constituer un inventaire d’interventions commerciales.',
      },
    ],
  },
];
