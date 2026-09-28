import Link from 'next/link';
import type { Project } from '@/content';
import Blocks from './Blocks';
import FigureView from './FigureView';

interface CaseStudyProps {
  project: Project;
  previous: Project;
  next: Project;
}

/** The neutral case-study rendering; each variant restyles it. */
export default function CaseStudy({ project, previous, next }: CaseStudyProps) {
  return (
    <article className="mx-auto flex max-w-3xl flex-col gap-12 px-4 pb-24 pt-32">
      <header className="flex flex-col gap-4">
        <p className="text-sm uppercase tracking-widest">
          {project.year} · {project.sector}
        </p>
        <h1 className="text-4xl font-bold">{project.name}</h1>
        <p className="text-lg">{project.summary}</p>
        <dl className="grid grid-cols-2 gap-4 text-sm">
          <div>
            <dt className="font-bold">Role</dt>
            <dd>{project.role}</dd>
          </div>
          <div>
            <dt className="font-bold">Disciplines</dt>
            <dd>{project.tags.join(', ')}</dd>
          </div>
          {project.tools && (
            <div>
              <dt className="font-bold">Tools</dt>
              <dd>{project.tools.join(', ')}</dd>
            </div>
          )}
        </dl>
      </header>

      {project.sections.length === 0 && (
        <FigureView project={project} figure={project.thumbnail} priority />
      )}

      {project.sections.map((section, i) => (
        <section key={section.kind + i} className="flex flex-col gap-4">
          <h2 className="text-2xl font-bold">{section.heading}</h2>
          <Blocks blocks={section.body} />
          {section.figures.map((figure) => (
            <FigureView key={figure.id} project={project} figure={figure} priority={i === 0} />
          ))}
        </section>
      ))}

      {project.downloads && project.downloads.length > 0 && (
        <ul className="flex flex-col gap-2">
          {project.downloads.map((d) => (
            <li key={d.href}>
              <a href={d.href} className="underline" download>
                {d.label}
              </a>
            </li>
          ))}
        </ul>
      )}

      <nav aria-label="More projects" className="flex justify-between gap-4 border-t pt-6">
        <Link href={`/work/${previous.slug}`} className="underline">
          ← {previous.title}
        </Link>
        <Link href={`/work/${next.slug}`} className="underline">
          {next.title} →
        </Link>
      </nav>
    </article>
  );
}
