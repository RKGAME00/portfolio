import { ElectronicsShowcase } from '@/components/home/ElectronicsShowcase';
import { Hero } from '@/components/home/Hero';
import { FeaturedProjects } from '@/components/home/FeaturedProjects';
import { SkillsSection } from '@/components/home/SkillsSection';
import { JourneySection } from '@/components/home/JourneySection';
import { PassionsSection } from '@/components/home/PassionsSection';
import { ContactSection } from '@/components/home/ContactSection';
import { Reveal } from '@/components/ui/Reveal';
import { ResourceOverview } from '@/components/home/ResourceOverview';
/** L'ordre de lecture est explicite ici. Chaque section a son composant et son CSS. */
export default function Home() {
  return (
    <>
      <Hero />
      <div className="expertise-strip">
        <div className="container">
          <span>ÉLECTRONIQUE</span>
          <span aria-hidden="true">+</span>
          <span>SYSTÈMES EMBARQUÉS</span>
          <span aria-hidden="true">+</span>
          <span>ROBOTIQUE</span>
          <span aria-hidden="true">+</span>
          <span>DÉVELOPPEMENT</span>
        </div>
      </div>
      <ElectronicsShowcase />
      <ResourceOverview />
      <Reveal>
        <FeaturedProjects />
      </Reveal>
      <Reveal>
        <SkillsSection />
      </Reveal>
      <Reveal>
        <JourneySection />
      </Reveal>
      <Reveal>
        <PassionsSection />
      </Reveal>
      <ContactSection />
    </>
  );
}
