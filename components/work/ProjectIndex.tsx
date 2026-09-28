import Link from 'next/link';
import type { Project } from '@/content';
import FigureView from './FigureView';

/** The neutral project list; each variant restyles it. */
export default function ProjectIndex({ projects }: { projects: readonly Project[] }) {
  return (
    <ul className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {projects.map((project, i) => (
        <li key={project.slug}>
          <Link href={`/work/${project.slug}`} className="flex flex-col gap-3">
            <FigureView
              project={project}
              figure={{ ...project.thumbnail, alt: '' }}
              sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
              priority={i < 3}
            />
            <span className="text-xl font-bold">{project.title}</span>
            <span className="text-sm">
              {project.tags.join(', ')} · {project.year}
            </span>
          </Link>
        </li>
      ))}
    </ul>
  );
}
