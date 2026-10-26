import { featuredProjects } from '@/content/projects';
import { ProjectCard } from '@/components/projects/ProjectCard';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Button } from '@/components/ui/Button';
export function FeaturedProjects() {
  return (
    <section className="section container" id="realisations">
      <SectionHeading
        eyebrow="01 / Une sélection de mon travail"
        title="Des idées mises à l’épreuve."
      >
        <Button href="/realisations" variant="text">
          Toutes les réalisations
        </Button>
      </SectionHeading>
      <div className="project-grid">
        {featuredProjects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </section>
  );
}
