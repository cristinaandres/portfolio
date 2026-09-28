import type { Metadata } from 'next';
import ProjectIndex from '@/components/work/ProjectIndex';
import { JsonLd, projectsSchema } from '@/components/seo/JsonLd';
import { getProjects } from '@/content';
import { siteConfig } from '@/lib/site.config';

export const metadata: Metadata = {
  title: {
    absolute: `${siteConfig.name} — ${siteConfig.jobTitle}`,
  },
  description: siteConfig.description,
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    url: siteConfig.url,
    title: `${siteConfig.name} — ${siteConfig.jobTitle}`,
    description: siteConfig.description,
    siteName: siteConfig.shortName,
    images: ['/opengraph-image'],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${siteConfig.name} — ${siteConfig.jobTitle}`,
    description: siteConfig.description,
    images: ['/twitter-image'],
  },
};

export default function Home() {
  return (
    <>
      <JsonLd id="ld-projects" data={projectsSchema()} />
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
          <ProjectIndex projects={getProjects()} />
        </section>
      </div>
    </>
  );
}
