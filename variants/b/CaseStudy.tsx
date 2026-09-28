import Link from 'next/link';
import FigureView from '@/components/work/FigureView';
import { workPath, type Block, type Project } from '@/content';
import { cornerOf } from './groups';
import Portrait from './Portrait';

const from = { screen: 'From the screen', shelf: 'From the shelf', wall: 'From the wall' };

/** Her text; her own quoted words sit beside her self-portrait. */
function Blocks({ blocks }: { blocks: readonly Block[] }) {
  return blocks.map((block, i) => {
    if (typeof block === 'string')
      return (
        <p key={i} className="text-base leading-relaxed">
          {block}
        </p>
      );
    if ('list' in block)
      return (
        <ul key={i} className="flex list-disc flex-col gap-1.5 pl-5 text-base leading-relaxed">
          {block.list.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      );
    return (
      <figure key={i} className="flex items-start gap-3 rounded-3xl bg-[#F6E3E5] p-4">
        <Portrait size={44} />
        <blockquote className="text-[15px] leading-relaxed">“{block.quote}”</blockquote>
      </figure>
    );
  });
}

export default function IslaCaseStudy({
  project,
  previous,
  next,
}: {
  project: Project;
  previous: Project;
  next: Project;
}) {
  return (
    <article className="mx-auto flex max-w-[1100px] flex-col gap-6 px-4 pt-6 lg:gap-8 lg:px-8 lg:pt-10">
      <Link
        href="/#all-work"
        className="flex min-h-11 items-center self-start rounded-full bg-[#FBF3EA] px-4 text-sm font-medium"
      >
        ← Back to the room
      </Link>

      <header
        className="grid gap-5 rounded-[28px] p-5 lg:grid-cols-[minmax(0,5fr)_minmax(0,6fr)] lg:items-center lg:gap-8 lg:p-8"
        style={{ background: project.color, color: project.ink }}
      >
        <div className="flex flex-col gap-3">
          <p className="text-[13px] font-medium">
            {from[cornerOf(project)]} · {project.year}
          </p>
          <h1 className="isla-display text-[40px] font-semibold leading-none lg:text-[52px]">
            {project.name}
          </h1>
          <p className="text-base leading-relaxed">{project.summary}</p>
          <ul aria-label="Disciplines" className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <li
                key={tag}
                className="rounded-full bg-[#FBF3EA] px-3 py-1.5 text-xs font-medium text-[#3A2A33]"
              >
                {tag}
              </li>
            ))}
          </ul>
          <dl className="mt-1 grid grid-cols-2 gap-3 text-sm">
            <div>
              <dt className="font-semibold">Role</dt>
              <dd>{project.role}</dd>
            </div>
            <div>
              <dt className="font-semibold">Sector</dt>
              <dd>{project.sector}</dd>
            </div>
            {project.tools && (
              <div>
                <dt className="font-semibold">Tools</dt>
                <dd>{project.tools.join(', ')}</dd>
              </div>
            )}
          </dl>
        </div>
        <FigureView
          project={project}
          figure={project.cover}
          preload
          sizes="(min-width: 768px) 55vw, 100vw"
          className="overflow-hidden rounded-[20px] bg-[#FBF3EA] [&_img]:rounded-[20px]"
        />
      </header>

      {project.sections.map((section, i) => (
        <section
          key={section.kind + i}
          aria-labelledby={`section-${i}`}
          className="flex flex-col gap-4 rounded-3xl bg-[#FBF3EA] p-5 lg:p-8"
        >
          <h2 id={`section-${i}`} className="isla-display text-[26px] font-semibold">
            {section.heading}
          </h2>
          {section.body.length > 0 && (
            <div className="flex max-w-[68ch] flex-col gap-3">
              <Blocks blocks={section.body} />
            </div>
          )}
          {section.figures.length > 0 && (
            <div
              className={`grid gap-4 ${section.figures.length > 1 ? 'lg:grid-cols-2' : ''} [&_figcaption]:text-[#6B4F5B] [&_img]:rounded-2xl`}
            >
              {section.figures.map((figure) => (
                <FigureView
                  key={figure.id}
                  project={project}
                  figure={figure}
                  sizes={
                    section.figures.length > 1
                      ? '(min-width: 768px) 50vw, 100vw'
                      : '(min-width: 1024px) 1036px, 100vw'
                  }
                />
              ))}
            </div>
          )}
        </section>
      ))}

      {project.downloads && project.downloads.length > 0 && (
        <ul className="flex flex-wrap gap-3">
          {project.downloads.map((d) => (
            <li key={d.href}>
              <a
                href={d.href}
                download
                className="flex min-h-11 items-center rounded-full bg-[#3A2A33] px-5 text-sm font-medium text-[#FBF3EA] hover:bg-[#8C4A62]"
              >
                {d.label}
              </a>
            </li>
          ))}
        </ul>
      )}

      <nav aria-label="More projects" className="grid grid-cols-2 gap-3">
        <Link
          href={workPath(previous)}
          className="isla-lift flex min-h-11 flex-col gap-0.5 rounded-[20px] bg-[#FBF3EA] p-4"
        >
          <span className="text-xs text-[#6B4F5B]">Previous</span>
          <span className="text-sm font-medium">← {previous.title}</span>
        </Link>
        <Link
          href={workPath(next)}
          className="isla-lift flex min-h-11 flex-col gap-0.5 rounded-[20px] bg-[#3A2A33] p-4 text-right text-[#FBF3EA]"
        >
          <span className="text-xs text-[#E9D3DA]">Next</span>
          <span className="text-sm font-medium">{next.title} →</span>
        </Link>
      </nav>
    </article>
  );
}
