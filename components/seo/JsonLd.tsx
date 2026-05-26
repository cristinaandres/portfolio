import React from 'react';
import projets from '@/public/json/projets.json';
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

export function projectsSchema(): SchemaObject[] {
  return projets.map((p) => ({
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    '@id': `${siteConfig.url}/#project-${p.title.toLowerCase().replace(/\s+/g, '-')}`,
    name: p.complete_name,
    alternateName: p.title,
    headline: p.complete_name,
    description: p.description,
    creator: { '@id': `${siteConfig.url}/#person` },
    author: { '@id': `${siteConfig.url}/#person` },
    dateCreated: p.year,
    genre: p.label,
    keywords: [p.label, p.title, 'design portfolio'].join(', '),
    url: `${siteConfig.url}/?project=${encodeURIComponent(p.title.toLowerCase())}`,
    image: absoluteUrl(`/images/${p.logo}`),
  }));
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
