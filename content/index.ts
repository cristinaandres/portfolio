// The public face of the content module: pages, the sitemap and the llms files read
// projects through these functions only.
import manifest from './image-manifest.json' with { type: 'json' };
import { projects } from './projects/index.ts';
import type { Figure, Project } from './types.ts';

export type { Block, Figure, Project, Section, SectionKind } from './types.ts';

/** The one place that knows where a case study lives. */
export function workPath(project: Pick<Project, 'slug'>): string {
  return `/work/${project.slug}`;
}

export function getProjects(): readonly Project[] {
  return projects;
}

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

/** The projects before and after, wrapping around, for previous/next links. */
export function getAdjacent(slug: string): { previous: Project; next: Project } {
  const i = projects.findIndex((p) => p.slug === slug);
  if (i === -1) throw new Error(`Unknown project "${slug}"`);
  const n = projects.length;
  return { previous: projects[(i - 1 + n) % n], next: projects[(i + 1) % n] };
}

/** Finds a project by its old `?project=` value ("Punt", "smurfit kappa"), case-insensitively. */
export function findByLegacyTitle(title: string): Project | undefined {
  const wanted = title.trim().toLowerCase();
  return projects.find((p) => p.title.toLowerCase() === wanted || p.slug === wanted);
}

export interface FigureImage {
  src: string;
  width: number;
  height: number;
  alt: string;
}

/** Where the image script wrote a figure, and its real size. Fails the build if the script wasn't run. */
export function figureImage(project: Project, figure: Figure): FigureImage {
  const src = `/images/work/${project.slug}/${figure.id}.webp`;
  const size = (manifest as Record<string, { width: number; height: number }>)[src];
  if (!size) throw new Error(`${src} is missing: run \`npm run images\``);
  return { src, ...size, alt: figure.alt };
}
