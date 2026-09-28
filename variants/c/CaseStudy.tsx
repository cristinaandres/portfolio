import Image from 'next/image';
import Link from 'next/link';
import type { ReactNode } from 'react';
import Blocks from '@/components/work/Blocks';
import { figureImage, workPath, type Figure, type Project } from '@/content';
import { pullQuote, swatchNumber } from './swatch';

interface Props {
  project: Project;
  previous: Project;
  next: Project;
}

/** "Sakana, a Swiss watch" → Sakana + italic "a Swiss watch", as on the board. */
function Title({ name }: { name: string }): ReactNode {
  const [head, ...tail] = name.split(', ');
  if (!tail.length) return name;
  return (
    <>
      {head},<br />
      <span className="italic">{tail.join(', ')}</span>
    </>
  );
}

export default function MuestrarioCaseStudy({ project, previous, next }: Props) {
  const { quote, sections } = pullQuote(project);
  const cover = figureImage(project, project.cover);

  return (
    <article className="flex flex-col">
      <header
        className="c-on-colour px-4 pb-24 pt-8 lg:px-10 lg:pb-32 lg:pt-14 xl:px-16"
        style={{ background: project.color, color: project.ink }}
      >
        <div className="mx-auto flex max-w-5xl flex-col gap-4">
          <p className="c-label text-[11px] font-medium">
            {swatchNumber(project)} · {project.color} · {project.year}
          </p>
          <h1 className="c-display text-[40px] font-medium leading-[1.02] lg:text-[64px] xl:text-[76px]">
            <Title name={project.name} />
          </h1>
          <ul className="flex flex-wrap gap-2" aria-label="Disciplines">
            {project.tags.map((tag) => (
              <li
                key={tag}
                className="border px-2.5 py-1 text-xs"
                style={{ borderColor: project.ink }}
              >
                {tag}
              </li>
            ))}
          </ul>
          <dl className="mt-2 grid gap-x-8 gap-y-2 text-sm sm:grid-cols-[auto_1fr] lg:grid-cols-[auto_1fr_auto_1fr]">
            <dt className="c-label text-[11px] font-medium">Role</dt>
            <dd>{project.role}</dd>
            <dt className="c-label text-[11px] font-medium">Sector</dt>
            <dd>{project.sector}</dd>
            {project.tools && (
              <>
                <dt className="c-label text-[11px] font-medium">Tools</dt>
                <dd>{project.tools.join(', ')}</dd>
              </>
            )}
          </dl>
        </div>
      </header>

      <div className="mx-auto -mt-16 w-full max-w-5xl px-4 lg:-mt-24 lg:px-10">
        <Image
          src={cover.src}
          width={cover.width}
          height={cover.height}
          alt={cover.alt}
          sizes="(min-width: 1024px) 960px, 100vw"
          preload
          className="h-auto w-full bg-white shadow-[0_10px_24px_rgb(0_0_0/0.14)]"
        />
      </div>

      <div className="mx-auto flex w-full max-w-3xl flex-col gap-12 px-4 pb-16 pt-10 lg:gap-16 lg:pt-16">
        <p className="text-base leading-relaxed text-[var(--c-muted)] lg:text-lg">
          {project.summary}
        </p>

        {quote && (
          <figure className="border-l-[3px] pl-5" style={{ borderColor: project.color }}>
            <blockquote className="c-display text-[22px] italic leading-snug lg:text-[30px]">
              “{quote}”
            </blockquote>
          </figure>
        )}

        {sections.map((section, i) => (
          <section key={section.kind + i} className="flex flex-col gap-5">
            <h2 className="c-label flex items-center gap-3 font-medium">
              <span
                aria-hidden="true"
                className="inline-block h-3 w-3"
                style={{ background: project.color }}
              />
              {section.heading}
            </h2>
            {section.body.length > 0 && (
              <div className="flex flex-col gap-4 text-[15px] leading-relaxed lg:text-base c-prose">
                <Blocks blocks={section.body} />
              </div>
            )}
            {section.figures.map((figure) => (
              <FigureC key={figure.id} project={project} figure={figure} />
            ))}
          </section>
        ))}

        {project.downloads && project.downloads.length > 0 && (
          <ul className="flex flex-col gap-2">
            {project.downloads.map((d) => (
              <li key={d.href}>
                <a
                  href={d.href}
                  download
                  className="c-label flex min-h-11 items-center gap-3 border border-[var(--c-ink)] px-4 font-medium hover:bg-[var(--c-ink)] hover:text-[var(--c-ground)]"
                >
                  {d.label} ↓
                </a>
              </li>
            ))}
          </ul>
        )}
      </div>

      <nav
        aria-label="More projects"
        className="mx-auto grid w-full max-w-5xl grid-cols-2 gap-4 px-4 pb-16 lg:gap-8 lg:px-10"
      >
        <AdjacentLink project={previous} direction="previous" />
        <AdjacentLink project={next} direction="next" />
        <Link
          href="/"
          className="c-label col-span-2 flex min-h-11 items-center justify-center border-t border-[var(--c-rule)] pt-4 font-medium hover:text-[var(--c-accent)]"
        >
          All work
        </Link>
      </nav>
    </article>
  );
}

function FigureC({ project, figure }: { project: Project; figure: Figure }) {
  const image = figureImage(project, figure);
  return (
    <figure className="flex flex-col gap-2">
      <Image
        src={image.src}
        width={image.width}
        height={image.height}
        alt={image.alt}
        sizes="(min-width: 768px) 720px, 100vw"
        className="h-auto w-full bg-white"
      />
      {figure.caption && (
        <figcaption className="text-xs text-[var(--c-muted)]">{figure.caption}</figcaption>
      )}
    </figure>
  );
}

function AdjacentLink({
  project,
  direction,
}: {
  project: Project;
  direction: 'previous' | 'next';
}) {
  const isNext = direction === 'next';
  return (
    <Link
      href={workPath(project)}
      className={`group flex min-h-11 flex-col gap-2 ${isNext ? 'text-right' : ''}`}
    >
      <span aria-hidden="true" className="h-2.5" style={{ background: project.color }} />
      <span className="c-label text-[11px] text-[var(--c-muted)]">
        {isNext ? 'Next' : 'Previous'}
      </span>
      <span className="c-display text-lg font-medium group-hover:underline lg:text-2xl">
        {isNext ? `${project.title} →` : `← ${project.title}`}
      </span>
    </Link>
  );
}
