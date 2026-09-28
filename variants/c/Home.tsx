import Image from 'next/image';
import Link from 'next/link';
import { figureImage, workPath, type Project } from '@/content';
import { siteConfig } from '@/lib/site.config';
import { swatchNumber, yearSpan } from './swatch';

export default function MuestrarioHome({ projects }: { projects: readonly Project[] }) {
  return (
    <div className="mx-auto flex max-w-[1440px] flex-col gap-10 px-4 pb-20 pt-8 lg:gap-12 lg:px-10 lg:pt-12 xl:px-16">
      <header className="grid gap-8 border-b border-[var(--c-ink)] pb-8 xl:grid-cols-[3fr_2fr] xl:items-end xl:gap-12">
        <div className="flex flex-col gap-4">
          <p className="c-label text-[var(--c-muted)]">Swatch book · {yearSpan(projects)}</p>
          <h1 className="flex flex-col gap-3">
            <span className="c-label font-medium">
              {siteConfig.name} · {siteConfig.jobTitle}
            </span>
            <span className="c-display text-[44px] font-medium leading-[1] tracking-[-0.01em] lg:text-[64px] xl:text-[80px] 2xl:text-[88px]">
              Every project has <span className="italic">its own colour.</span>
            </span>
          </h1>
        </div>
        <div className="flex flex-col gap-5">
          <p className="text-base leading-relaxed lg:text-[17px]">{siteConfig.bio}</p>
          <ul aria-label="Project colours" className="flex flex-wrap gap-2">
            {projects.map((p) => (
              <li key={p.slug}>
                <span
                  role="img"
                  aria-label={`${p.title}, ${p.color}`}
                  className="block h-7 w-7 rounded-full shadow-[inset_0_0_0_1px_rgb(31_27_26/0.12)]"
                  style={{ background: p.color }}
                />
              </li>
            ))}
          </ul>
        </div>
      </header>

      <section aria-labelledby="work" className="flex flex-col gap-6">
        <h2 id="work" className="c-label flex items-baseline justify-between font-medium">
          <span>Selected work</span>
          <span className="text-[var(--c-muted)]">{projects.length} projects</span>
        </h2>
        <ul className="grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
          {projects.map((project, i) => (
            <li key={project.slug}>
              <SwatchTile project={project} preload={i < 3} />
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

function SwatchTile({ project, preload }: { project: Project; preload?: boolean }) {
  const cover = figureImage(project, project.cover);
  // Landscape covers fill the swatch; portrait ones sit inside it with the colour around them.
  const portrait = cover.height > cover.width * 0.8;
  return (
    <Link
      href={workPath(project)}
      className="c-swatch group flex h-full flex-col bg-white shadow-[0_1px_0_var(--c-rule)]"
    >
      <div className="relative aspect-[16/10]" style={{ background: project.color }}>
        <div className="absolute inset-4 lg:inset-5">
          <Image
            src={cover.src}
            alt=""
            fill
            sizes="(min-width: 1024px) 30vw, (min-width: 768px) 45vw, 92vw"
            preload={preload}
            className={
              portrait
                ? 'object-contain drop-shadow-[0_8px_14px_rgb(0_0_0/0.22)]'
                : 'object-cover shadow-[0_8px_20px_rgb(0_0_0/0.18)]'
            }
          />
        </div>
      </div>
      <div className="flex flex-col gap-1.5 p-5">
        <span className="c-label text-[11px] text-[var(--c-muted)]">
          {swatchNumber(project)} · {project.color}
        </span>
        <span className="c-display text-2xl font-semibold group-hover:underline group-hover:decoration-1 group-hover:underline-offset-4 lg:text-[26px]">
          {project.title}
        </span>
        <span className="text-sm text-[var(--c-muted)]">
          {project.tags[0]} · {project.year}
        </span>
      </div>
    </Link>
  );
}
