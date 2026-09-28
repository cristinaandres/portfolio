import Image from 'next/image';
import Link from 'next/link';
import { activityImage, getActivity, type Project } from '@/content';
import { profile } from '@/content/profile';
import { siteConfig } from '@/lib/site.config';
import { cornerOf, corners } from './groups';
import Portrait from './Portrait';
import ProjectCard from './ProjectCard';

/** The objects in her desk room, where they sit on the render (percent), and what they open. */
const hotspots = [
  { label: 'Screen', opens: 'UX/UI', href: '#on-the-screen', x: 29, y: 38, dot: '#D9ABBA' },
  { label: 'Wall', opens: 'Brands', href: '#on-the-wall', x: 39, y: 22, dot: '#E0A04A' },
  { label: 'Console', opens: 'Activities', href: '/activities', x: 36, y: 50, dot: '#A7B4CF' },
  { label: 'Shelf', opens: 'Products', href: '#on-the-shelf', x: 14, y: 58, dot: '#91A399' },
  { label: 'Window', opens: 'About me', href: '/about', x: 80, y: 42, dot: '#D9ABBA' },
] as const;

/** "2020–2025": the years her projects cover. */
function span(projects: readonly Project[]) {
  const years = projects.flatMap((p) => p.year.match(/\d{4}/g)?.map(Number) ?? []);
  return `${Math.min(...years)}–${Math.max(...years)}`;
}

function Cloud({ className }: { className: string }) {
  return (
    <div aria-hidden="true" className={`pointer-events-none absolute ${className}`}>
      <div className="h-[90px] w-[300px] rounded-[60px] bg-[#FCF1F2]" />
      <div className="absolute -top-10 left-16 h-[110px] w-[150px] rounded-[80px] bg-[#FCF1F2]" />
    </div>
  );
}

export default function IslaHome({ projects }: { projects: readonly Project[] }) {
  const room = activityImage(getActivity('blender')!.images[0]);

  return (
    <div className="relative overflow-hidden">
      <Cloud className="-left-24 top-24 hidden xl:block" />
      <Cloud className="-right-20 top-[26rem] hidden xl:block" />

      <section
        aria-labelledby="room-heading"
        className="relative mx-auto grid max-w-[1312px] gap-8 px-4 pt-8 lg:px-8 lg:pt-12 xl:grid-cols-[minmax(0,4fr)_minmax(0,7fr)] xl:items-center xl:gap-10 2xl:px-0"
      >
        <div className="flex flex-col gap-5">
          <p className="isla-display text-lg text-[#8C4A62]">{siteConfig.jobTitle}</p>
          <h1
            id="room-heading"
            className="isla-display text-[44px] font-semibold leading-[1.02] lg:text-[56px] 2xl:text-[66px]"
          >
            Hi, I&apos;m Cristina. Come in!
          </h1>
          <p className="text-lg leading-relaxed">
            Every object in my room opens a part of my work: interfaces on the screen, products on
            the shelf, brands on the wall.
          </p>
          <figure className="flex items-start gap-4 rounded-3xl bg-[#FBF3EA] p-5">
            <Portrait size={56} />
            <blockquote className="text-[15px] leading-relaxed">“{profile.curiousFact}”</blockquote>
          </figure>
          <a
            href="#all-work"
            className="self-start border-b-2 border-[#8C4A62] pb-0.5 font-medium hover:text-[#8C4A62]"
          >
            Skip the tour: see all work ↓
          </a>
        </div>

        <div>
          <div className="relative overflow-hidden rounded-[32px] bg-[#EFD2D6]">
            <Image
              src={room.src}
              width={room.width}
              height={room.height}
              alt={room.alt}
              sizes="(min-width: 1024px) 60vw, 100vw"
              preload
              className="h-auto w-full"
            />
            <ul className="hidden lg:block">
              {hotspots.map((spot, i) => (
                <li
                  key={spot.label}
                  className="absolute -translate-x-1/2 -translate-y-1/2"
                  style={{ left: `${spot.x}%`, top: `${spot.y}%` }}
                >
                  <a
                    href={spot.href}
                    className={`isla-lift flex min-h-11 items-center gap-2 whitespace-nowrap rounded-full px-4 text-sm font-medium shadow-[0_6px_16px_rgba(58,42,51,.22)] ${i === 0 ? 'bg-[#3A2A33] text-[#FBF3EA]' : 'bg-[#FBF3EA]'}`}
                  >
                    <span
                      aria-hidden="true"
                      className="h-2.5 w-2.5 rounded-full"
                      style={{ background: spot.dot }}
                    />
                    {spot.label} · {spot.opens}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <ul aria-label="What the room opens" className="mt-4 flex flex-wrap gap-2 lg:hidden">
            {hotspots.map((spot) => (
              <li key={spot.label}>
                <a
                  href={spot.href}
                  className="flex min-h-11 items-center gap-2 whitespace-nowrap rounded-full bg-[#FBF3EA] px-4 text-sm font-medium"
                >
                  <span
                    aria-hidden="true"
                    className="h-2.5 w-2.5 shrink-0 rounded-full"
                    style={{ background: spot.dot }}
                  />
                  {spot.label} · {spot.opens}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section
        id="all-work"
        aria-labelledby="all-work-heading"
        className="relative mx-auto mt-16 flex max-w-[1312px] scroll-mt-4 flex-col gap-10 px-4 lg:px-8 2xl:px-0"
      >
        <div className="flex flex-wrap items-baseline justify-between gap-2">
          <h2 id="all-work-heading" className="isla-display text-[34px] font-semibold">
            All work
          </h2>
          <p className="text-[15px] text-[#6B4F5B]">
            {projects.length} projects, {span(projects)}
          </p>
        </div>
        {corners.map((corner) => {
          const inCorner = projects.filter((p) => cornerOf(p) === corner.id);
          if (inCorner.length === 0) return null;
          return (
            <section
              key={corner.id}
              id={corner.anchor}
              aria-labelledby={`${corner.anchor}-heading`}
              className="flex scroll-mt-4 flex-col gap-4"
            >
              <h3 id={`${corner.anchor}-heading`} className="isla-display text-xl font-semibold">
                {corner.heading}
              </h3>
              <ul className="grid gap-4 lg:grid-cols-2 xl:grid-cols-3">
                {inCorner.map((project) => (
                  <li key={project.slug}>
                    <ProjectCard project={project} />
                  </li>
                ))}
              </ul>
            </section>
          );
        })}
      </section>
    </div>
  );
}
