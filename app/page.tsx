import { Suspense } from 'react';
import type { Metadata } from 'next';
import HomeCarousel from '@/components/HomeCarousel';
import { JsonLd, projectsSchema } from '@/components/seo/JsonLd';
import { siteConfig } from '@/lib/site.config';
import projets from '@/public/json/projets.json';

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

      <section className="sr-only" aria-label="Portfolio summary">
        <h1>
          {siteConfig.name} — {siteConfig.jobTitle}
        </h1>
        <p>{siteConfig.tagline}</p>
        <p>{siteConfig.bio}</p>

        <h2>Selected work</h2>
        <ul>
          {projets.map((project) => (
            <li key={project.title}>
              <article>
                <h3>{project.complete_name}</h3>
                <p>
                  <strong>{project.label}</strong> · {project.year}
                </p>
                <p>{project.description}</p>
              </article>
            </li>
          ))}
        </ul>

        <h2>Skills and expertise</h2>
        <ul>
          {siteConfig.knowsAbout.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>

        <h2>Contact</h2>
        <p>
          Reach out by email at <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a> or
          book a call via{' '}
          <a href={siteConfig.calendly} rel="noopener noreferrer">
            Calendly
          </a>
          .
        </p>
      </section>

      <Suspense fallback={<div className="h-dvh" aria-hidden="true" />}>
        <HomeCarousel />
      </Suspense>
    </>
  );
}
