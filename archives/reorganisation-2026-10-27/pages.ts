/** Pages éditoriales : le contenu reste indépendant du composant de rendu.
 * Le futur CMS pourra fournir le même contrat (titre, sections, liens, projets).
 */
export type EditorialPage = {
  path: string;
  eyebrow: string;
  title: string;
  intro: string;
  image?: string;
  alt?: string;
  sections: { title: string; text: string }[];
  links?: { title: string; text: string; href: string }[];
  projectSlugs?: string[];
};
export const pages: EditorialPage[] = [
  {
    path: 'parcours/but-geii',
    eyebrow: 'IUT de Nantes · 2022 — 2025',
    title: 'Le BUT GEII. Apprendre par le projet.',
    intro:
      'Trois années pour relier électronique, informatique industrielle et systèmes embarqués. Une formation nourrie par les projets, les stages et l’engagement associatif.',
    sections: [
      {
        title: 'Du schéma aux essais',
        text: 'Réaliser le schéma, choisir les composants, router la carte, commander les circuits imprimés, assembler puis tester : le BUT m’a permis de pratiquer les différentes étapes de la fabrication électronique.',
      },
      {
        title: 'Des projets complémentaires',
        text: 'Robot à balises infrarouges, conversion et régulation pour des supercondensateurs, détection de passage d’un train et robot autonome : des projets pour apprendre à articuler énergie, capteurs, programmation et commande.',
      },
    ],
    links: [
      {
        title: 'Les stages',
        text: 'SUBATECH et LABAA : mettre les apprentissages à l’épreuve du terrain.',
        href: '/experiences',
      },
      {
        title: 'L’association robotique',
        text: 'Une aventure collective, des compétitions et des échanges au FabLab.',
        href: '/parcours/association-robotique',
      },
    ],
    projectSlugs: [
      'labaa-electronique',
      'subatech-xemis2',
      'robot-ultrasons',
      'passage-a-niveau',
      'robot-balises',
      'conversion-solaire',
      'tour-hanoi',
      'modelisation-3d',
      'supercondensateurs',
    ],
  },
  {
    path: 'parcours/lycee-sti2d',
    projectSlugs: ['robotique-lycee', 'projet-sti2d'],
    eyebrow: 'Lycée La Colinière · Nantes · 2020 — 2022',
    title: 'L’envie de comprendre commence ici.',
    intro:
      'Le baccalauréat STI2D m’a ouvert à l’électronique et aux systèmes techniques. La robotique a donné une dimension concrète à cette découverte.',
    sections: [
      {
        title: 'Un robot et un travail d’équipe',
        text: 'Avec l’équipe du lycée, j’ai participé à la réalisation d’un robot destiné à identifier des palettes de couleur et à les déplacer, dans le cadre de la Coupe de France de robotique Junior.',
      },
      {
        title: 'Une direction pour la suite',
        text: 'Cette expérience a contribué à mon envie de poursuivre en électronique. J’ai ensuite intégré le BUT Génie électrique et informatique industrielle de l’IUT de Nantes.',
      },
    ],
    links: [
      {
        title: 'La suite : le BUT GEII',
        text: 'Approfondir l’électronique et les systèmes embarqués.',
        href: '/parcours/but-geii',
      },
    ],
  },
  {
    path: 'parcours/ecole-ingenieurs',
    projectSlugs: ['uart-dma'],
    eyebrow: 'ESTI / EPF · Début de formation',
    title: 'Une étape courte. Des acquis bien réels.',
    intro:
      'J’ai commencé une formation en école d’ingénieurs, avant de l’interrompre faute d’alternance. Les travaux réalisés pendant cette période font aussi partie de mon parcours.',
    sections: [
      {
        title: 'Explorer les microcontrôleurs',
        text: 'Un compte rendu de TP réalisé en binôme porte sur la communication UART avec DMA, puis sur un fonctionnement circulaire avec détection IDLE. Les ressources conservées comprennent aussi des exercices sur les temporisateurs, les interruptions et l’I²C.',
      },
      {
        title: 'Garder le fil de l’apprentissage',
        text: 'Cette étape m’a permis de poursuivre le travail sur les liens entre périphériques, programmation et électronique. Je souhaite aujourd’hui mobiliser ces apprentissages dans un emploi technique et continuer à progresser sur des projets concrets.',
      },
    ],
    links: [
      {
        title: 'Mes compétences',
        text: 'Électronique, systèmes embarqués et développement.',
        href: '/competences',
      },
    ],
  },
  {
    path: 'parcours/association-robotique',
    eyebrow: 'Université de Nantes · Engagement associatif',
    title: 'La robotique se construit ensemble.',
    intro:
      'Engagé dans l’association de 2023 à 2025, notamment comme vice-président, j’ai participé à sa relance et à la coordination des projets avec les autres étudiants.',
    sections: [
      {
        title: 'Relancer une dynamique collective',
        text: 'Avec d’autres étudiants, nous avons repris une association devenue inactive. Mon rôle associait choix techniques, répartition des fonctions et échanges avec les interlocuteurs universitaires pour préparer les compétitions GEII à Cachan.',
      },
      {
        title: 'Concevoir et faire fonctionner',
        text: 'Les projets progressaient avec les années de formation : robot suiveur de ligne en première année, navigation entre balises infrarouges avec évitement d’obstacles en deuxième année, puis robot autonome en troisième année. Avec l’équipe, j’ai discuté les besoins des robots, choisi les composants, réparti les fonctions et coordonné les travaux. J’ai participé à la conception et à la maintenance des cartes, au firmware bas niveau, aux modules communicants et aux bibliothèques C++.',
      },
      {
        title: 'Le FabLab, un lieu d’échange',
        text: 'Nous apportions de l’aide en électronique à des étudiants d’autres formations, tout en bénéficiant de leurs compétences, notamment en mécanique. J’ai aussi réalisé des modélisations 3D et participé aux rapports et échanges nécessaires à la préparation des compétitions. Les conceptions étaient collectives : elles ne reposaient pas sur une seule personne.',
      },
    ],
    links: [
      {
        title: 'Mon parcours en BUT',
        text: 'L’engagement associatif aux côtés des projets et des stages.',
        href: '/parcours/but-geii',
      },
    ],
  },
  {
    path: 'experiences',
    eyebrow: 'Entreprise & laboratoire',
    title: 'Des contextes différents. Une même curiosité.',
    intro:
      'Deux stages pour développer des outils, diagnostiquer des cartes et relier les besoins des utilisateurs à des solutions techniques.',
    sections: [],
    links: [
      {
        title: 'LABAA · Mars — juillet 2025',
        text: 'Électronique, diagnostic, programmation et travail sur le firmware des fauteuils thérapeutiques OTO.',
        href: '/experiences/labaa',
      },
      {
        title: 'SUBATECH · Janvier — mars 2024',
        text: 'Une première base logicielle d’acquisition et de visualisation C++/Qt pour XEMIS2.',
        href: '/experiences/subatech',
      },
    ],
  },
  {
    path: 'experiences/labaa',
    eyebrow: 'Mars — juillet 2025 · Stage',
    title: 'LABAA. De la carte à l’usage.',
    intro:
      'Un stage de technicien supérieur en bureau d’études autour des fauteuils thérapeutiques OTO, avec une forte dimension pratique.',
    image: '/images/labaa.webp',
    alt: 'Électronique examinée pendant le stage LABAA',
    sections: [
      {
        title: 'Des missions au contact du matériel',
        text: 'Analyse d’un défaut de régulation, sourcing et essais de composants, diagnostic de cartes retournées au SAV et rédaction des rapports de panne.',
      },
      {
        title: 'Des outils pour l’équipe',
        text: 'Développement d’un outil de programmation sur Raspberry Pi avec Python et PlatformIO, travail sur l’organisation du firmware et contribution à une commande de machine de découpe.',
      },
      {
        title: 'Une expérience collective',
        text: 'J’ai contribué au travail de l’équipe LABAA, récompensée par Innovation Team Best Practices 2025. Cette distinction est collective.',
      },
    ],
    projectSlugs: [
      'regulation-cartes',
      'sav-cartes',
      'outil-programmation-oto',
      'organisation-firmware',
      'commande-decoupe',
    ],
  },
  {
    path: 'experiences/subatech',
    eyebrow: 'Janvier — mars 2024 · Stage',
    title: 'SUBATECH. Rendre les données exploitables.',
    intro:
      'Dans le cadre du projet XEMIS2, j’ai posé les premières bases d’un logiciel d’acquisition et de visualisation de données expérimentales.',
    image: '/images/subatech.webp',
    alt: 'Installation expérimentale au laboratoire SUBATECH',
    sections: [
      {
        title: 'Du serveur à l’interface',
        text: 'Récupérer les données des capteurs, afficher les courbes en temps réel et organiser une interface sous Qt : une première application concrète du C++ sous Linux.',
      },
      {
        title: 'Conserver la trace des expériences',
        text: 'Sérialisation binaire, données horodatées et réouverture des fichiers pour retrouver les valeurs avec leurs marqueurs et repères temporels.',
      },
    ],
    projectSlugs: ['subatech-xemis2'],
  },
  {
    path: 'passions',
    eyebrow: 'Au-delà du parcours professionnel',
    title: 'Curieux, même après avoir fermé l’atelier.',
    intro:
      'Musique, électronique personnelle, domotique et simulation automobile : d’autres espaces pour expérimenter et apprendre.',
    sections: [
      {
        title: 'Le plaisir de chercher',
        text: 'Comprendre un appareil, tester un montage ou trouver un son : j’aime les activités où l’on peut essayer, observer et affiner.',
      },
      {
        title: 'Formule 1 et simulation automobile',
        text: 'Je m’intéresse également à la Formule 1 et au sim racing, deux passions qui complètent mon quotidien technique et musical.',
      },
    ],
    links: [
      {
        title: 'Musique & sonorisation',
        text: 'Piano, composition sur ordinateur et diffusion live.',
        href: '/passions/musique',
      },
      {
        title: 'Projets personnels',
        text: 'Robotique, domotique et maintenance électronique.',
        href: '/passions/projets-personnels',
      },
    ],
  },
  {
    path: 'passions/musique',
    eyebrow: 'Piano · Composition · Sonorisation',
    title: 'Créer. Écouter. Faire résonner.',
    intro:
      'La musique est un autre terrain d’expérimentation : jouer du piano, composer sur ordinateur et participer à la sonorisation d’événements.',
    image: '/images/musique.webp',
    alt: 'Clavier et matériel de mixage dans mon espace musical',
    sections: [
      {
        title: 'Jouer et composer',
        text: 'Je pratique le piano, notamment au sein d’un groupe musical religieux, et la composition sur ordinateur. Cet espace accueillera une sélection de mes créations.',
      },
      {
        title: 'Le son en situation',
        text: 'Installation de sonorisation, table de mixage et diffusion live : j’aime aussi travailler sur la façon dont la musique est entendue et partagée.',
      },
      {
        title: 'Les enregistrements arrivent bientôt',
        text: 'Aucun morceau n’est encore publié ici. Je prépare une sélection d’enregistrements pour faire découvrir cette partie de mon travail.',
      },
    ],
  },
  {
    path: 'passions/projets-personnels',
    eyebrow: 'Expérimentations personnelles',
    title: 'Apprendre, sans attendre un sujet de projet.',
    intro:
      'Des montages électroniques, de la domotique et un projet de robot de cartographie en cours : un espace pour documenter mes explorations.',
    sections: [
      {
        title: 'Domotique et maintenance',
        text: 'J’expérimente avec des modules Tuya, Bluetooth et LoRa, notamment autour de l’éclairage et de la commande vocale. J’utilise aussi mes compétences pour diagnostiquer et réparer des appareils électroniques lorsque cela est possible.',
      },
    ],
    projectSlugs: ['robot-cartographie', 'domotique', 'maintenance-personnelle'],
  },
  {
    path: 'mentions-legales',
    eyebrow: 'Informations sur le site',
    title: 'Mentions légales.',
    intro: 'Portfolio personnel de Céleste Koloussa.',
    sections: [
      {
        title: 'Contact',
        text: 'Pour toute question concernant le site : ckoloussa@gmail.com.',
      },
      {
        title: 'Version de travail locale',
        text: 'Ce site est actuellement présenté en aperçu local. Les informations relatives à l’hébergeur et les mentions applicables seront complétées avant sa mise en ligne.',
      },
      {
        title: 'Travaux et illustrations',
        text: 'Les photographies sont issues des ressources personnelles du portfolio. Les projets collectifs sont présentés en distinguant ma contribution du travail de l’équipe.',
      },
    ],
  },
  {
    path: 'confidentialite',
    eyebrow: 'Respect de la vie privée',
    title: 'Une consultation simple.',
    intro:
      'Cette première version privilégie une consultation directe, sans compte visiteur ni formulaire de collecte.',
    sections: [
      {
        title: 'Données et traceurs',
        text: 'Aucun outil d’analyse d’audience, de publicité ou de suivi n’a été ajouté à cette version. Les polices et les images sont servies par le site. Les éventuels journaux techniques dépendront de l’hébergement choisi.',
      },
      {
        title: 'Prendre contact',
        text: 'Le lien de contact ouvre votre logiciel de messagerie. L’envoi d’un email utilise votre service de messagerie habituel. Le lien LinkedIn conduit vers un service externe.',
      },
    ],
  },
];
