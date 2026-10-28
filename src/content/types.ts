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
  imageFit?: 'contain';
  imageCaption?: string;
  summary: string;
  tags: string[];
  featured?: boolean;
  draft?: boolean;
  sections: {
    title: string;
    text: string;
    layout?: string;
    links?: { label: string; href: string }[];
    figures?: {
      src: string;
      alt: string;
      caption: string;
      width: number;
      height: number;
      source?: string;
    }[];
  }[];
  relatedPath: string;
  relatedLabel: string;
};

export type EditorialPage = {
  resourceBlock?: string;
  resourceThemes?: string[];
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
