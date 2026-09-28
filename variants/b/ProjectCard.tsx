import Image from 'next/image';
import Link from 'next/link';
import { figureImage, workPath, type Project } from '@/content';

/** A cream card in the All work grid: cover, name, disciplines and year. */
export default function ProjectCard({ project, preload }: { project: Project; preload?: boolean }) {
  const cover = figureImage(project, project.cover);
  return (
    <Link
      href={workPath(project)}
      className="isla-lift flex h-full items-center gap-4 rounded-3xl bg-[#FBF3EA] p-3"
    >
      <span
        className="relative block h-[86px] w-[120px] shrink-0 overflow-hidden rounded-2xl"
        style={{ background: project.color }}
      >
        <Image
          src={cover.src}
          alt=""
          fill
          sizes="120px"
          preload={preload}
          className="object-cover"
        />
      </span>
      <span className="flex min-w-0 flex-col gap-1">
        <span className="text-[17px] font-medium leading-snug">{project.title}</span>
        <span className="text-[13px] text-[#6B4F5B]">
          {project.tags.slice(0, 2).join(' · ')} ·{' '}
          <span className="whitespace-nowrap">{project.year}</span>
        </span>
      </span>
    </Link>
  );
}
