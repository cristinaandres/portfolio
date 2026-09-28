import Image from 'next/image';
import Link from 'next/link';
import { figureImage, workPath, type Project } from '@/content';
import { profile } from '@/content/profile';
import { siteConfig } from '@/lib/site.config';
import { buttonDark, buttonLine, container, Label, SheetRule, sheetNumber, SpecTable } from './ui';

function yearSpan(projects: readonly Project[]): string {
  const years = projects.flatMap((p) => p.year.match(/\d{4}/g) ?? []).map(Number);
  return `${Math.min(...years)}–${Math.max(...years)}`;
}

export default function PlanimetriaHome({ projects }: { projects: readonly Project[] }) {
  return (
    <div className={`${container} flex flex-col gap-12 pb-8 pt-10 lg:gap-16 lg:pt-14`}>
      <section className="grid gap-8 xl:grid-cols-[minmax(0,7fr)_minmax(0,5fr)] xl:items-end xl:gap-12">
        <div className="flex flex-col gap-5">
          <Label className="text-[#4E6558]">Sheet 00 / Index</Label>
          <h1 className="text-[40px] font-semibold leading-[1.04] tracking-[-0.02em] lg:text-[56px] xl:text-[68px]">
            Designing where form meets function.
          </h1>
          <p className="max-w-[40rem] text-base leading-relaxed text-[#3B3F36] lg:text-lg">
            {siteConfig.tagline}
          </p>
          <div className="flex flex-wrap gap-3">
            <a href="#work" className={buttonDark}>
              See the work <span aria-hidden="true">↓</span>
            </a>
            <a
              href={siteConfig.calendly}
              target="_blank"
              rel="noopener noreferrer"
              className={buttonLine}
            >
              Book a 30-minute call
            </a>
          </div>
        </div>
        <SpecTable
          specs={[
            { label: 'Designer', value: <span className="font-medium">{siteConfig.name}</span> },
            { label: 'Based', value: profile.location },
            {
              label: 'Studies',
              value: (
                <ul className="flex flex-col gap-1">
                  {profile.education.map((s) => (
                    <li key={s.school}>
                      {s.title}, {s.school.replace(/ \(.*\)$/, '')}
                    </li>
                  ))}
                </ul>
              ),
            },
            { label: 'Languages', value: profile.languages.map((l) => l.name).join(' · ') },
            { label: 'Tools', value: profile.tools.join(' · ') },
          ]}
        />
      </section>

      <section
        id="work"
        aria-labelledby="register-heading"
        className="flex scroll-mt-4 flex-col gap-4"
      >
        <SheetRule
          id="register-heading"
          label="Sheet 01 / Project register"
          aside={`${projects.length} projects · ${yearSpan(projects)}`}
        />
        <div className="border-[1.5px] border-[#23261F] bg-[#EDEDE6]">
          <div
            aria-hidden="true"
            className="a-mono hidden grid-cols-[4.5rem_minmax(0,3fr)_minmax(0,2fr)_7.5rem_minmax(0,2fr)_10rem] border-b-[1.5px] border-[#23261F] text-[11px] uppercase tracking-[0.14em] text-[#4B5046] xl:grid"
          >
            <span className="px-4 py-2.5">No.</span>
            <span className="px-4 py-2.5">Project</span>
            <span className="px-4 py-2.5">Sector</span>
            <span className="px-4 py-2.5">Year</span>
            <span className="px-4 py-2.5">Discipline</span>
            <span className="px-4 py-2.5">Plate</span>
          </div>
          <ol>
            {projects.map((project, i) => {
              const plate = figureImage(project, project.cover);
              return (
                <li key={project.slug} className={i > 0 ? 'border-t border-[#23261F]' : ''}>
                  <Link
                    href={workPath(project)}
                    className="group grid grid-cols-[minmax(0,1fr)_7.5rem] items-center gap-x-3 gap-y-1 p-3 hover:bg-[#DCE3DC] md:grid-cols-[minmax(0,1fr)_10rem] lg:p-4 xl:grid-cols-[4.5rem_minmax(0,3fr)_minmax(0,2fr)_7.5rem_minmax(0,2fr)_10rem] xl:gap-0 xl:p-0"
                  >
                    <span className="flex flex-col gap-1 xl:contents">
                      <span className="a-mono text-sm text-[#4E6558] xl:px-4 xl:text-[22px]">
                        {sheetNumber(i + 1)}
                      </span>
                      <span className="text-lg font-semibold leading-tight group-hover:underline xl:px-4 xl:text-[19px]">
                        {project.title}
                      </span>
                      <span className="text-sm text-[#3B3F36] xl:px-4 xl:text-sm">
                        {project.sector}
                        <span className="xl:hidden"> · {project.year}</span>
                      </span>
                      <span className="a-mono hidden whitespace-nowrap text-sm xl:block xl:px-4">
                        {project.year}
                      </span>
                      <span className="text-sm text-[#3B3F36] xl:px-4">
                        {project.tags.join(', ')}
                      </span>
                    </span>
                    <Image
                      src={plate.src}
                      width={plate.width}
                      height={plate.height}
                      alt=""
                      sizes="(min-width: 480px) 160px, 120px"
                      preload={i < 2}
                      className="aspect-[2/1] h-auto w-full border border-[#23261F] bg-white object-cover xl:m-1.5 xl:w-[calc(100%-0.75rem)]"
                    />
                  </Link>
                </li>
              );
            })}
          </ol>
        </div>
      </section>
    </div>
  );
}
