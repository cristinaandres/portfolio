import React from 'react';
import { getProjects, figureImage, type Project } from '@/content';
import { siteConfig, sameAs, absoluteUrl } from '@/lib/site.config';

type SchemaValue = string | number | boolean | null | SchemaObject | SchemaValue[];

interface SchemaObject {
  [key: string]: SchemaValue | undefined;
}

interface JsonLdProps {
  data: SchemaObject | SchemaObject[];
  id?: string;
}

export function JsonLd({ data, id }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      id={id}
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, '\\u003c'),
      }}
    />
  );
}

export function personSchema(): SchemaObject {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    '@id': `${siteConfig.url}/#person`,
    name: siteConfig.name,
    givenName: 'Cristina',
    familyName: 'Andrés',
    jobTitle: siteConfig.jobTitle,
    description: siteConfig.bio,
    url: siteConfig.url,
    email: `mailto:${siteConfig.email}`,
    image: absoluteUrl('/images/cristina.jpeg'),
    sameAs,
    knowsAbout: [...siteConfig.knowsAbout],
    knowsLanguage: [...siteConfig.languages],
    alumniOf: siteConfig.alumniOf.map((name) => ({
      '@type': 'EducationalOrganization',
      name,
    })),
  };
}

export function websiteSchema(): SchemaObject {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${siteConfig.url}/#website`,
    name: siteConfig.shortName,
    alternateName: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
    inLanguage: siteConfig.language,
    author: { '@id': `${siteConfig.url}/#person` },
    publisher: { '@id': `${siteConfig.url}/#person` },
  };
}

export function projectSchema(p: Project): SchemaObject {
  return {
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    '@id': `${siteConfig.url}/work/${p.slug}#work`,
    name: p.name,
    alternateName: p.title,
    headline: p.name,
    description: p.summary,
    creator: { '@id': `${siteConfig.url}/#person` },
    author: { '@id': `${siteConfig.url}/#person` },
    dateCreated: p.year,
    genre: p.tags.join(', '),
    keywords: [...p.tags, p.title, 'design portfolio'].join(', '),
    url: absoluteUrl(`/work/${p.slug}`),
    image: absoluteUrl(figureImage(p, p.thumbnail).src),
  };
}

export function projectsSchema(): SchemaObject[] {
  return getProjects().map(projectSchema);
}

export function breadcrumbSchema(items: Array<{ name: string; path: string }>): SchemaObject {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function faqSchema(items: Array<{ question: string; answer: string }>): SchemaObject {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };
}
