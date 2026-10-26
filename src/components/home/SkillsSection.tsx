import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { skills } from '@/content/skills';
import { SectionHeading } from '@/components/ui/SectionHeading';
export function SkillsSection() {
  return (
    <section className="section container skills-section">
      <SectionHeading
        eyebrow="02 / Mes domaines de pratique"
        title="Du circuit à son usage."
      >
        <p>
          Des compétences qui se construisent
          <br />
          et se démontrent dans les projets.
        </p>
      </SectionHeading>
      <div className="skills-grid">
        {skills.map((skill) => (
          <Link
            href={`/realisations/${skill.project}`}
            className="skill-item"
            key={skill.number}
          >
            <div className="skill-number">
              {skill.number}
              <ArrowUpRight size={18} aria-hidden="true" />
            </div>
            <h3>{skill.title}</h3>
            <p>{skill.text}</p>
            <div className="skill-tools">{skill.tools.join(' · ')}</div>
          </Link>
        ))}
      </div>
    </section>
  );
}
