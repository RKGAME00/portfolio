import { dossierProjects } from './dossier-projects';
import { additionalProjects } from './more-projects';
/** Une réalisation = une source de contenu, réutilisée dans toutes les pages.
 * Les formulations distinguent le travail personnel, le collectif et les objectifs.
 * Sources : docs/Portfolio.md, docs/CV et docs/sources-medias.json.
 */
export type Project = {
  slug: string;
  title: string;
  category: 'Stage' | 'Formation' | 'Personnel';
  context: string;
  period: string;
  image: string;
  alt: string;
  summary: string;
  tags: string[];
  featured?: boolean;
  sections: { title: string; text: string }[];
  relatedPath: string;
  relatedLabel: string;
};
export const projects: Project[] = [
  {
    slug: 'labaa-electronique',
    title: 'Du diagnostic à la programmation des cartes.',
    category: 'Stage',
    context: 'LABAA · Fauteuils thérapeutiques OTO',
    period: 'Mars — juillet 2025',
    image: '/images/labaa.webp',
    alt: 'Carte électronique et câblage examinés pendant le stage chez LABAA',
    summary:
      'Analyser les défauts, tester les composants et simplifier la programmation des cartes électroniques.',
    tags: ['Électronique', 'Python', 'Raspberry Pi'],
    featured: true,
    sections: [
      {
        title: 'Le contexte',
        text: 'LABAA développe les fauteuils thérapeutiques OTO. Pendant mon stage, j’ai travaillé sur la fiabilité des cartes, le diagnostic des retours et les outils destinés à l’équipe.',
      },
      {
        title: 'Ma contribution',
        text: 'J’ai analysé un défaut de régulation, effectué des mesures et recherché des composants de remplacement. Au SAV, j’ai examiné les cartes retournées, rédigé les rapports de panne et remplacé les composants ou la carte selon le diagnostic.',
      },
      {
        title: 'Un outil de programmation plus simple',
        text: 'J’ai développé un outil sur Raspberry Pi, en Python avec PlatformIO, pour détecter une carte et téléverser son firmware. Un bouton lance la procédure et une LED indique son état. J’ai également documenté les codes couleur.',
      },
      {
        title: 'Les autres missions',
        text: 'J’ai travaillé à la réorganisation du firmware C/C++ pour isoler les fonctions et permettre leur validation, ainsi qu’à l’intégration d’une commande électronique sur une machine de découpe de tubes. Ces travaux ne sont pas présentés comme une industrialisation achevée.',
      },
    ],
    relatedPath: '/experiences/labaa',
    relatedLabel: 'Le stage chez LABAA',
  },
  {
    slug: 'subatech-xemis2',
    title: 'Donner une interface aux données scientifiques.',
    category: 'Stage',
    context: 'SUBATECH · Projet XEMIS2',
    period: 'Janvier — mars 2024',
    image: '/images/subatech.webp',
    alt: 'Installation expérimentale photographiée au laboratoire SUBATECH',
    summary:
      'Poser les premières bases d’une application d’acquisition, de visualisation et de relecture de données.',
    tags: ['C++', 'Qt', 'Linux'],
    featured: true,
    sections: [
      {
        title: 'Le besoin',
        text: 'Dans le cadre du projet de caméra médicale XEMIS2, les scientifiques avaient besoin d’acquérir des données d’expérience, de les visualiser et de les retrouver avec leurs repères temporels.',
      },
      {
        title: 'Ma contribution',
        text: 'Sous Linux, j’ai commencé la structure d’un logiciel C++/Qt et son interface. J’ai récupéré des valeurs de capteurs depuis un serveur pour tracer leur évolution en temps réel.',
      },
      {
        title: 'Enregistrer pour pouvoir relire',
        text: 'J’ai défini un format binaire et développé la sérialisation des données horodatées, puis leur désérialisation pour la relecture avec des marqueurs. Il s’agit de sérialisation, pas d’un algorithme de compression.',
      },
      {
        title: 'Le livrable',
        text: 'Une première base logicielle d’acquisition, d’affichage, d’enregistrement et de réouverture des données. Mon stage a posé les premières briques du projet, sans prétendre constituer un produit final complet.',
      },
    ],
    relatedPath: '/experiences/subatech',
    relatedLabel: 'Le stage chez SUBATECH',
  },
  {
    slug: 'robot-ultrasons',
    title: 'Compléter la perception d’un robot autonome.',
    category: 'Formation',
    context: 'BUT GEII · Robotique',
    period: 'Projet universitaire',
    image: '/images/robot.webp',
    alt: 'Prototype de carte d’interfaçage à base d’ESP32 réalisé pour le projet de robot universitaire',
    summary:
      'Associer ultrasons, électronique et ROS pour compléter la détection d’obstacles du LiDAR.',
    tags: ['ROS', 'ESP32', 'C++'],
    featured: true,
    sections: [
      {
        title: 'L’observation',
        text: 'Sur notre plateforme universitaire, certains obstacles étaient mal détectés par le LiDAR. J’ai travaillé sur une détection complémentaire avec des capteurs ultrasonores.',
      },
      {
        title: 'Du circuit au logiciel',
        text: 'J’ai réalisé une carte d’interfaçage à base d’ESP32, avec une liaison série/USB vers le système embarqué. La plateforme utilisait une Jetson Nano, ROS1, un RPLIDAR A2 et un VESC.',
      },
      {
        title: 'Un arrêt dans les deux modes de conduite',
        text: 'La fonction de détection pouvait arrêter le robot à l’approche d’un obstacle, en conduite manuelle comme autonome. Ce travail m’a permis de relier électronique, C++ et visualisation avec RViz.',
      },
    ],
    relatedPath: '/parcours/but-geii',
    relatedLabel: 'Les projets du BUT GEII',
  },
  {
    slug: 'passage-a-niveau',
    title: 'Du capteur à la détection d’un train.',
    category: 'Formation',
    context: 'BUT GEII · Premier projet électronique',
    period: 'Projet universitaire',
    image: '/images/passage-niveau.webp',
    alt: 'Carte électronique du capteur infrarouge de passage à niveau',
    summary:
      'Réaliser une chaîne de détection infrarouge, du schéma électrique à l’interface homme-machine.',
    tags: ['Capteurs', 'Routage', 'IHM'],
    sections: [
      {
        title: 'Une première chaîne complète',
        text: 'Ce projet m’a permis de prendre en main la conception électronique : schéma, routage et choix des composants pour détecter le passage d’un train.',
      },
      {
        title: 'Rendre le signal visible',
        text: 'J’ai réalisé une partie logicielle d’interfaçage et une interface homme-machine indiquant la détection. Un premier lien concret entre la mesure physique et sa présentation à l’utilisateur.',
      },
    ],
    relatedPath: '/parcours/but-geii',
    relatedLabel: 'Le BUT GEII',
  },
  {
    slug: 'robot-cartographie',
    title: 'Explorer la robotique, à mon rythme.',
    category: 'Personnel',
    context: 'Projet personnel · En cours',
    period: 'En cours',
    image: '/images/personnel.webp',
    alt: 'Montage de capteurs et de cartes issu des expérimentations personnelles',
    summary:
      'Expérimenter autour d’un robot destiné à cartographier une zone, et continuer à apprendre par la pratique.',
    tags: ['Robotique', 'Expérimentation'],
    sections: [
      {
        title: 'L’intention',
        text: 'Je travaille sur un projet personnel de robot autonome destiné à cartographier une zone. Le projet est en cours : je conserve ici une place pour documenter les étapes, les essais et les choix à mesure de son avancement.',
      },
      {
        title: 'Une pratique personnelle',
        text: 'Ces expérimentations complètent mes activités de domotique et de maintenance d’appareils électroniques. La photographie illustre mes montages personnels ; elle ne constitue pas la présentation d’un robot de cartographie terminé.',
      },
    ],
    relatedPath: '/passions/projets-personnels',
    relatedLabel: 'Mes projets personnels',
  },
  ...additionalProjects,
  ...dossierProjects,
];
export const featuredProjects = projects.filter((project) => project.featured);
