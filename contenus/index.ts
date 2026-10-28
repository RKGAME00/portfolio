import musicResources from './passions/musique/ressources.json';
import type { Project, EditorialPage } from '@/content/types';
import labaaProject from './stages/labaa/texte.json';
import subatechProject from './stages/subatech/texte.json';
import robotUltrasonsProject from './formations/but-geii/projets/robot-ultrasons/texte.json';
import passageNiveauProject from './formations/but-geii/projets/passage-a-niveau/texte.json';
import personnelsProject from './projets/personnels/texte.json';
import robotBalisesProject from './formations/but-geii/projets/robot-balises/texte.json';
import solaireProject from './formations/but-geii/projets/conversion-solaire/texte.json';
import hanoiProject from './formations/but-geii/projets/tour-hanoi/texte.json';
import modelisationProject from './projets/modelisation-3d/texte.json';
import robotiqueLyceeProject from './formations/lycee-sti2d/projets/robotique-lycee/texte.json';
import sti2dProject from './formations/lycee-sti2d/projets/projet-sti2d/texte.json';
import ingenieursProject from './formations/ecole-ingenieurs/texte.json';
import supercondensateursProject from './formations/but-geii/projets/supercondensateurs/texte.json';
import butPage from './formations/but-geii/page.json';
import lyceePage from './formations/lycee-sti2d/page.json';
import ingenieursPage from './formations/ecole-ingenieurs/page.json';
import associationPage from './engagements/association-robotique/page.json';
import experiencesPage from './pages/experiences/page.json';
import passionsPage from './passions/page.json';
import musiquePage from './passions/musique/page.json';
import mentionsPage from './pages/mentions-legales/page.json';
import confidentialitePage from './pages/confidentialite/page.json';
import butResources from './formations/but-geii/ressources.json';
import robotUltrasonsResources from './formations/but-geii/projets/robot-ultrasons/ressources.json';
import associationResources from './engagements/association-robotique/ressources.json';
import robotiqueLyceeResources from './formations/lycee-sti2d/projets/robotique-lycee/ressources.json';
import subatechResources from './stages/subatech/ressources.json';
import modelisationResources from './projets/modelisation-3d/ressources.json';
import solaireResources from './formations/but-geii/projets/conversion-solaire/ressources.json';
import passageNiveauResources from './formations/but-geii/projets/passage-a-niveau/ressources.json';
import hanoiResources from './formations/but-geii/projets/tour-hanoi/ressources.json';
import robotBalisesResources from './formations/but-geii/projets/robot-balises/ressources.json';
import ingenieursResources from './formations/ecole-ingenieurs/ressources.json';
import archivesResources from './a-trier/archives-portfolio/ressources.json';
import labaaResources from './stages/labaa/ressources.json';
import sti2dResources from './formations/lycee-sti2d/projets/projet-sti2d/ressources.json';
import personnelsResources from './projets/personnels/ressources.json';
import supercondensateursResources from './formations/but-geii/projets/supercondensateurs/ressources.json';
export const projects = [
  labaaProject,
  subatechProject,
  robotUltrasonsProject,
  passageNiveauProject,
  personnelsProject,
  robotBalisesProject,
  solaireProject,
  hanoiProject,
  modelisationProject,
  robotiqueLyceeProject,
  sti2dProject,
  ingenieursProject,
  supercondensateursProject,
] as Project[];
export const pages = [
  butPage,
  lyceePage,
  ingenieursPage,
  associationPage,
  experiencesPage,
  passionsPage,
  musiquePage,
  mentionsPage,
  confidentialitePage,
] as EditorialPage[];
export const blockResources: Record<string, string[]> = {
  musique: musicResources.ids,
  'but-geii': butResources.ids,
  'robot-ultrasons': robotUltrasonsResources.ids,
  'association-robotique': associationResources.ids,
  'robotique-lycee': robotiqueLyceeResources.ids,
  subatech: subatechResources.ids,
  'modelisation-3d': modelisationResources.ids,
  'conversion-solaire': solaireResources.ids,
  'passage-a-niveau': passageNiveauResources.ids,
  'tour-hanoi': hanoiResources.ids,
  'robot-balises': robotBalisesResources.ids,
  'ecole-ingenieurs': ingenieursResources.ids,
  'archives-portfolio': archivesResources.ids,
  labaa: labaaResources.ids,
  'projet-sti2d': sti2dResources.ids,
  'projets-personnels': personnelsResources.ids,
  supercondensateurs: supercondensateursResources.ids,
};
