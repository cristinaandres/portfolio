import ProjectIndex from '@/components/work/ProjectIndex';
import type { Project } from '@/content';
import { siteConfig } from '@/lib/site.config';

export default function NeutralHome({ projects }: { projects: readonly Project[] }) {
  return (
    <div className="mx-auto flex max-w-6xl flex-col gap-12 px-4 pb-24 pt-32">
      <header className="flex max-w-3xl flex-col gap-4">
        <h1 className="text-4xl font-bold">
          {siteConfig.name} — {siteConfig.jobTitle}
        </h1>
        <p className="text-lg">{siteConfig.bio}</p>
      </header>
      <section aria-labelledby="work-heading" className="flex flex-col gap-6">
        <h2 id="work-heading" className="text-2xl font-bold">
          Selected work
        </h2>
        <ProjectIndex projects={projects} />
      </section>
    </div>
  );
}
