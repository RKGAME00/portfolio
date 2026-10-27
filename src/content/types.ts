export type Project = {
  slug: string;
  resourceBlock?: string;
  report?: { id: string; label: string };
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
