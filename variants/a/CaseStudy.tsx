import Link from 'next/link';
import Image from 'next/image';
import { figureImage, workPath, type Project, type Section } from '@/content';
import {
  Badge,
  Blocks,
  container,
  Label,
  Plate,
  projectSheet,
  SheetRule,
  SpecGrid,
  type Spec,
} from './ui';

const wide = '(min-width: 1024px) 60vw, 100vw';
const half = '(min-width: 1024px) 30vw, (min-width: 768px) 50vw, 100vw';

/**
 * Figures of one section: one per row on phones; from 768 px landscape figures take the full
 * width and the others pair up, so portrait renders never grow taller than the screen.
 */
function Figures({ project, section }: { project: Project; section: Section }) {
  const { figures } = section;
  return (
    <div className="grid gap-4 lg:grid-cols-2">
      {figures.map((figure) => {
        const { width, height } = figureImage(project, figure);
        const span = width / height >= 1.4;
        return (
          <Plate
            key={figure.id}
            project={project}
            figure={figure}
            sizes={span ? wide : half}
            className={span ? 'lg:col-span-2' : ''}
          />
        );
      })}
    </div>
  );
}

/** The lead image on a panel, never taller than most of the screen whatever its proportions. */
function Cover({ project }: { project: Project }) {
  const image = figureImage(project, project.cover);
  return (
    <figure className="flex justify-center border-[1.5px] border-[#23261F] bg-[#EDEDE6] p-2 lg:p-4">
      <Image
        src={image.src}
        width={image.width}
        height={image.height}
        alt={image.alt}
        sizes="(min-width: 1440px) 1312px, 100vw"
        preload
        // Reserve the box before the image loads (no layout shift): its aspect ratio, as wide as
        // fits, but never taller than 70 % of the screen.
        style={{
          aspectRatio: `${image.width} / ${image.height}`,
          width: `min(100%, calc(70vh * ${image.width} / ${image.height}))`,
        }}
        className="h-auto object-contain"
      />
    </figure>
  );
}

export default function PlanimetriaCaseStudy({
  project,
  previous,
  next,
}: {
  project: Project;
  previous: Project;
  next: Project;
}) {
  const specs: Spec[] = [
    { label: 'Year', value: project.year },
    { label: 'Sector', value: project.sector },
    { label: 'Role', value: project.role },
    {
      label: project.tools ? 'Tools' : 'Discipline',
      value: (project.tools ?? project.tags).join(' · '),
    },
  ];

  return (
    <article className={`${container} flex flex-col gap-10 pb-8 pt-8 lg:gap-14 lg:pt-12`}>
      <header className="grid gap-6 xl:grid-cols-[minmax(0,6fr)_minmax(0,6fr)] xl:items-end xl:gap-12">
        <div className="flex flex-col gap-3">
          <Label className="text-[#4E6558]">
            Sheet {projectSheet(project)} / {project.title}
          </Label>
          <h1 className="text-[34px] font-semibold leading-[1.05] tracking-[-0.01em] lg:text-5xl xl:text-[56px]">
            {project.name}
          </h1>
          <p className="max-w-[40rem] text-[15px] leading-relaxed text-[#3B3F36] lg:text-lg">
            {project.summary}
          </p>
          {project.tools && (
            <p className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="a-mono border border-[#23261F] px-2 py-0.5 text-[11px] uppercase tracking-[0.12em]"
                >
                  {tag}
                </span>
              ))}
            </p>
          )}
        </div>
        <SpecGrid specs={specs} />
      </header>

      <Cover project={project} />

      {project.sections.map((section, i) => (
        <section
          key={section.kind + section.heading}
          aria-labelledby={`section-${i + 1}`}
          className={`grid gap-5 border-t-[1.5px] border-[#23261F] pt-6 lg:gap-10 lg:pt-8 ${section.figures.length ? 'lg:grid-cols-[minmax(0,4fr)_minmax(0,8fr)]' : ''}`}
        >
          <div
            className={`flex flex-col gap-4 ${section.figures.length ? 'lg:sticky lg:top-6 lg:self-start' : 'max-w-[44rem]'}`}
          >
            <div className="flex items-center gap-3">
              <Badge n={i + 1} />
              <h2 id={`section-${i + 1}`} className="text-xl font-semibold lg:text-2xl">
                {section.heading}
              </h2>
            </div>
            <Blocks blocks={section.body} />
          </div>
          {section.figures.length > 0 && <Figures project={project} section={section} />}
        </section>
      ))}

      {project.downloads && project.downloads.length > 0 && (
        <section aria-labelledby="downloads" className="flex flex-col gap-4">
          <SheetRule id="downloads" label="Attachments" />
          <ul className="flex flex-wrap gap-3">
            {project.downloads.map((d) => (
              <li key={d.href}>
                <a
                  href={d.href}
                  download
                  className="inline-flex min-h-11 items-center gap-3 border-[1.5px] border-[#23261F] bg-[#EDEDE6] px-4 font-medium hover:bg-[#DCE3DC]"
                >
                  <span aria-hidden="true" className="a-mono text-[#4E6558]">
                    ↓
                  </span>
                  {d.label}
                </a>
              </li>
            ))}
          </ul>
        </section>
      )}

      <nav
        aria-label="More projects"
        className="grid grid-cols-2 gap-3 border-t-[1.5px] border-[#23261F] pt-6"
      >
        <Link
          href={workPath(previous)}
          className="flex min-h-11 flex-col gap-1 border-[1.5px] border-[#23261F] bg-[#EDEDE6] p-3 hover:bg-[#DCE3DC] lg:p-4"
        >
          <Label as="span" className="text-[#4B5046]">
            ← Sheet {projectSheet(previous)}
          </Label>
          <span className="font-semibold lg:text-lg">{previous.title}</span>
        </Link>
        <Link
          href={workPath(next)}
          className="a-dark flex min-h-11 flex-col items-end gap-1 border-[1.5px] border-[#23261F] bg-[#23261F] p-3 text-right text-[#F4F3EE] hover:bg-[#3B3F36] lg:p-4"
        >
          <Label as="span" className="text-[#C9CEC4]">
            Sheet {projectSheet(next)} →
          </Label>
          <span className="font-semibold lg:text-lg">{next.title}</span>
        </Link>
      </nav>
    </article>
  );
}
