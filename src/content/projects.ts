/** Contenus regroupés par bloc dans contenus/. */
export type { Project } from './types';
import { projects } from '../../contenus';
export { projects };
export const featuredProjects = projects.filter((project) => project.featured);
