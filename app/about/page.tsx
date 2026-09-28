import type { Metadata } from 'next';
import AboutPage from '@/components/about/AboutPage';
import { JsonLd, breadcrumbSchema, faqSchema } from '@/components/seo/JsonLd';
import { profile } from '@/content/profile';
import { siteConfig } from '@/lib/site.config';

const faqItems: Array<{ question: string; answer: string }> = [
  {
    question: 'Who is Cristina Andrés?',
    answer: `Cristina Andrés is a ${siteConfig.jobTitle.replace('&', 'and')} based in ${profile.location}. She studied Industrial Design Engineering and Product Development at the Universidad Politécnica de Valencia, with Erasmus terms at HE-Arc Neuchâtel and Hochschule Augsburg, and a Máster en Diseño Web at ESDESIGN Barcelona.`,
  },
  {
    question: 'What does Cristina design?',
    answer:
      'Interfaces, websites and physical products: UX/UI design, product design, branding and packaging, with selected work for Aqualung, Curefab, Punt, Smurfit Kappa, Montezuma, Ares Domus, Sakana, Ciclogreen and Blossom.',
  },
  {
    question: 'What languages does Cristina speak?',
    answer: `${profile.languages.map((l) => `${l.name} (${l.level.toLowerCase()})`).join(', ')}.`,
  },
  {
    question: 'How can I contact Cristina for a project?',
    answer: `Email her at ${siteConfig.email} or book a 30-minute introductory call at ${siteConfig.calendly}.`,
  },
];

export const metadata: Metadata = {
  title: 'About',
  description: `About ${siteConfig.name}, ${siteConfig.jobTitle}: experience, studies, languages and tools.`,
  alternates: { canonical: '/about' },
  openGraph: {
    title: `About · ${siteConfig.name}`,
    description: `About ${siteConfig.name}, ${siteConfig.jobTitle}.`,
    url: `${siteConfig.url}/about`,
    type: 'profile',
    images: ['/opengraph-image'],
  },
  twitter: {
    card: 'summary_large_image',
    title: `About · ${siteConfig.name}`,
    description: `About ${siteConfig.name}, ${siteConfig.jobTitle}.`,
    images: ['/twitter-image'],
  },
};

export default function Page() {
  return (
    <>
      <JsonLd id="ld-faq" data={faqSchema(faqItems)} />
      <JsonLd id="ld-breadcrumb" data={breadcrumbSchema([{ name: 'About', path: '/about' }])} />
      <AboutPage />
    </>
  );
}
