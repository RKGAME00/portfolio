import type { Project } from './projects';

/** Fiches complémentaires issues des ressources désormais indexées. */
export const additionalProjects: Project[] = [
  {
    slug: 'robot-balises',
    title: 'Piloter un robot vers sa balise.',
    category: 'Formation',
    context: 'BUT GEII · Robotique et énergie',
    period: 'Projet universitaire',
    image: '/images/balises.webp',
    alt: 'Robot universitaire avec cartes électroniques et supercondensateurs',
    summary:
      'Un robot réalisé à trois : énergie, détection infrarouge et algorithme de pilotage.',
    tags: ['Robotique', 'Pilotage', 'Supercondensateurs'],
    sections: [
      {
        title: 'Trois fonctions, une réalisation collective',
        text: 'Le projet réunissait une alimentation par supercondensateurs, la détection d’une balise infrarouge et le pilotage du robot. Chaque étudiant prenait en charge une fonction.',
      },
      {
        title: 'Ma contribution : le pilotage',
        text: 'J’étais responsable de l’algorithme principal de pilotage. Il exploitait les informations de détection pour orienter le robot vers la balise, en coordination avec les responsables de l’énergie et de la détection.',
      },
      {
        title: 'Photos et essais',
        text: 'Les photographies et les vidéos conservées montrent le montage et les essais. Elles permettent de suivre le travail au-delà du seul résultat final.',
      },
    ],
    relatedPath: '/parcours/but-geii',
    relatedLabel: 'Le BUT GEII',
  },
  {
    slug: 'conversion-solaire',
    title: 'Explorer la conversion d’énergie.',
    category: 'Formation',
    context: 'BUT GEII · Électronique de puissance',
    period: 'Projet universitaire',
    image: '/images/solaire.webp',
    alt: 'Carte électronique photographiée dans le projet de conversion solaire',
    summary:
      'Les cartes et composants d’un projet autour du solaire, des conversions buck/boost et du MPPT.',
    tags: ['Électronique', 'Conversion', 'Solaire'],
    sections: [
      {
        title: 'Une trace du travail sur les cartes',
        text: 'Les photographies de ce projet documentent les circuits imprimés et les composants utilisés. Le dossier de travail rassemble ces éléments autour de la conversion d’énergie solaire, du buck/boost et du MPPT.',
      },
      {
        title: 'Regarder le matériel en détail',
        text: 'La galerie permet de consulter les vues de la carte et les gros plans sur les composants. Elle complète les autres projets universitaires d’électronique et de régulation.',
      },
    ],
    relatedPath: '/parcours/but-geii',
    relatedLabel: 'Les projets du BUT',
  },
  {
    slug: 'tour-hanoi',
    title: 'Une démonstration autour de la tour de Hanoï.',
    category: 'Formation',
    context: 'BUT GEII · Projet universitaire',
    period: 'Projet universitaire',
    image: '/ressources-apercus/12d0e2360ea58f4471a78078.webp',
    alt: 'Image extraite de la vidéo du projet de tour de Hanoï',
    summary: 'Une vidéo de démonstration conservée parmi mes projets universitaires.',
    tags: ['Démonstration', 'Projet universitaire'],
    sections: [
      {
        title: 'Voir la réalisation',
        text: 'Cette vidéo documente le projet de tour de Hanoï. Elle est présentée avec les autres travaux du BUT et peut être consultée dans son intégralité ci-dessous.',
      },
    ],
    relatedPath: '/parcours/but-geii',
    relatedLabel: 'Le BUT GEII',
  },
  {
    slug: 'modelisation-3d',
    title: 'Donner une forme aux idées.',
    category: 'Formation',
    context: 'BUT GEII · Conception mécanique',
    period: 'Travaux de conception',
    image: '/images/modelisation.webp',
    alt: 'Vue en perspective d’une pièce conçue en modélisation 3D',
    summary:
      'Des vues de pièces modélisées, pour relier la conception numérique à la fabrication.',
    tags: ['CAO', 'Modélisation 3D', 'Fabrication'],
    sections: [
      {
        title: 'Concevoir des pièces',
        text: 'Ces captures présentent des travaux de modélisation 3D. Elles complètent ma pratique de la conception et de la fabrication, avec Autodesk Inventor, SolidWorks et l’impression 3D.',
      },
      {
        title: 'Plusieurs points de vue',
        text: 'Les captures conservées permettent d’observer les formes et les détails des pièces sous plusieurs angles.',
      },
    ],
    relatedPath: '/competences',
    relatedLabel: 'Conception et fabrication',
  },
  {
    slug: 'robotique-lycee',
    title: 'Mes premiers projets de robotique.',
    category: 'Formation',
    context: 'Lycée · STI2D',
    period: 'Pendant le lycée',
    image: '/ressources-apercus/e61bc8caff1c0dacc3b0e68d.webp',
    alt: 'Image issue des ressources de robotique du lycée',
    summary:
      'Les vidéos du robot foot et les images de la compétition Junior, conservées comme traces des premiers projets.',
    tags: ['STI2D', 'Robotique', 'Travail en équipe'],
    sections: [
      {
        title: 'Découvrir par la pratique',
        text: 'Le travail en équipe sur des robots au lycée a contribué à mon envie de poursuivre en électronique. Le portfolio rassemble les vidéos du dossier robot foot et les images de la Coupe de France de robotique Junior.',
      },
      {
        title: 'Des projets à distinguer',
        text: 'Le robot de la compétition Junior devait identifier et déplacer des palettes de couleur. Les vidéos du robot foot constituent un autre ensemble de documents ; les deux projets restent identifiés séparément dans leurs fichiers.',
      },
    ],
    relatedPath: '/parcours/lycee-sti2d',
    relatedLabel: 'Le lycée et le bac STI2D',
  },
  {
    slug: 'projet-sti2d',
    title: 'Les travaux de mon parcours STI2D.',
    category: 'Formation',
    context: 'Lycée · Projet STI2D',
    period: 'Pendant le lycée',
    image: '/ressources-apercus/7195ee6d6dbf1a4d6d4c780f.webp',
    alt: 'Photographie provenant du dossier du projet STI2D',
    summary:
      'Photographies et vidéo de travail issues du dossier de projet réalisé au lycée.',
    tags: ['STI2D', 'Prototype', 'Expérimentation'],
    sections: [
      {
        title: 'Conserver les étapes du projet',
        text: 'Ce dossier réunit les photographies et la vidéo du projet identifié dans mes archives comme « projet covid STI2D ». Les documents donnent à voir les montages et les essais.',
      },
      {
        title: 'Des sources partagées, sans doublons',
        text: 'Certaines vidéos figurent aussi dans le dossier du robot foot. Elles sont conservées une seule fois dans la bibliothèque et reliées aux deux ensembles.',
      },
    ],
    relatedPath: '/parcours/lycee-sti2d',
    relatedLabel: 'Les projets du lycée',
  },
  {
    slug: 'uart-dma',
    title: 'Recevoir les données sans bloquer le microcontrôleur.',
    category: 'Formation',
    context: 'École d’ingénieurs · TP en binôme',
    period: 'Début de formation',
    image: '/images/uart-rapport.webp',
    alt: 'Aperçu du compte rendu de TP UART DMA',
    summary:
      'Un compte rendu et des sources autour de l’UART, du DMA circulaire et de la détection IDLE sur STM32.',
    tags: ['STM32', 'UART', 'DMA'],
    sections: [
      {
        title: 'Le travail pratique',
        text: 'Le compte rendu réalisé avec Xavier Da Rocha présente l’UART en mode DMA, puis le DMA circulaire associé à la détection IDLE. Il décrit la configuration des périphériques et l’organisation des fichiers.',
      },
      {
        title: 'Une organisation matérielle et logicielle',
        text: 'Les fichiers de travail comprennent les programmes et configurations STM32, ainsi que des exercices sur les interruptions, les temporisateurs, le PWM et l’I²C. Le rapport documente l’implémentation et les tests du TP.',
      },
    ],
    relatedPath: '/parcours/ecole-ingenieurs',
    relatedLabel: 'Le début de formation en école',
  },
  {
    slug: 'outil-programmation-oto',
    title: 'Un outil pour programmer et diagnostiquer.',
    category: 'Stage',
    context: 'LABAA · Outil de production',
    period: 'Mars — juillet 2025',
    image: '/images/ototool.webp',
    alt: 'Capture de l’interface graphique de l’outil OtoTool',
    summary:
      'Automatiser la programmation et rendre les opérations de diagnostic accessibles à l’équipe.',
    tags: ['Python', 'Qt', 'PlatformIO'],
    sections: [
      {
        title: 'Le besoin de l’équipe',
        text: 'Programmer les cartes et récupérer leurs informations demandait plusieurs manipulations. L’objectif était de regrouper ces opérations dans un outil simple à utiliser.',
      },
      {
        title: 'Des interfaces complémentaires',
        text: 'Le rapport de stage présente une interface en ligne de commande et une interface graphique Qt, avec boutons d’action, indicateurs d’état et zone de logs. Les captures conservées montrent ces deux interfaces.',
      },
      {
        title: 'Programmation et diagnostic',
        text: 'Le travail s’appuie sur Raspberry Pi, Python et PlatformIO pour programmer les cartes. L’outil est également présenté dans le rapport comme un support de diagnostic et de récupération des logs.',
      },
    ],
    relatedPath: '/experiences/labaa',
    relatedLabel: 'Le stage LABAA',
  },
];
