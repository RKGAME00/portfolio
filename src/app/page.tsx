import { Hero } from '@/components/home/Hero';
import { ProjectSections } from '@/components/projects/ProjectSections';
import { SkillsSection } from '@/components/home/SkillsSection';
import { ContactSection } from '@/components/home/ContactSection';
/** Accueil recruteur : candidature, expériences, projets, formation, compétences, contact. */
export default function Home() {
  return (
    <>
      <Hero />
      <ProjectSections />
      <SkillsSection />
      <ContactSection />
    </>
  );
}
