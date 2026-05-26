import React from 'react';
import type { Metadata } from 'next';
import AboutPhone from '@/components/About/AboutPhone';
import AboutTablet from '@/components/About/AboutTablet';
import AboutDesktop from '@/components/About/AboutDesktop';
import { JsonLd, faqSchema } from '@/components/seo/JsonLd';
import { siteConfig } from '@/lib/site.config';

const faqItems: Array<{ question: string; answer: string }> = [
  {
    question: 'Who is Cristina Andrés?',
    answer:
      'Cristina Andrés is a product, UX/UI and graphic designer based in Spain. She holds a degree in Industrial Design Engineering and Product Development from the Polytechnical University of Valencia, with Erasmus studies at He-ARC Neuchâtel (Switzerland) and Hochschule Augsburg (Germany).',
  },
  {
    question: 'What does Cristina design?',
    answer:
      'Cristina designs digital products and brand experiences. Her practice covers UX/UI design, product design, branding, packaging design, and industrial design, with selected work for Aqualung, Curefab, Punt, Smurfit Kappa, Montezuma, Ares Domus, Sakana, Ciclogreen and Blossom.',
  },
  {
    question: 'What languages does Cristina speak?',
    answer:
      'Cristina is fluent in Spanish, Catalan, French and English, which lets her collaborate with international teams across Europe.',
  },
  {
    question: 'How can I contact Cristina for a project?',
    answer: `You can email Cristina at ${siteConfig.email} or book a 30-minute introductory call at ${siteConfig.calendly}.`,
  },
];

export const metadata: Metadata = {
  title: 'About',
  description: `Learn about ${siteConfig.name}, ${siteConfig.jobTitle}. Background in industrial design engineering, expertise in product, UX/UI and graphic design.`,
  alternates: { canonical: '/about' },
  openGraph: {
    title: `About · ${siteConfig.name}`,
    description: `Learn about ${siteConfig.name}, ${siteConfig.jobTitle}.`,
    url: `${siteConfig.url}/about`,
    type: 'profile',
    images: ['/opengraph-image'],
  },
  twitter: {
    card: 'summary_large_image',
    title: `About · ${siteConfig.name}`,
    description: `Learn about ${siteConfig.name}, ${siteConfig.jobTitle}.`,
    images: ['/twitter-image'],
  },
};

function page() {
  return (
    <>
      <JsonLd id="ld-faq" data={faqSchema(faqItems)} />

      <h1 className="sr-only">About {siteConfig.name}</h1>

      <div className="mobile">
        <AboutPhone />
      </div>
      <div className="tablet">
        <AboutTablet />
      </div>
      <div className="desktop min-h-[80dvh] h-screen w-full bg-[#E2E2DB] items-center justify-center">
        <AboutDesktop />
      </div>

      <section className="sr-only" aria-label="Frequently asked questions">
        <h2>Frequently asked questions</h2>
        <dl>
          {faqItems.map((item) => (
            <div key={item.question}>
              <dt>{item.question}</dt>
              <dd>{item.answer}</dd>
            </div>
          ))}
        </dl>
      </section>
    </>
  );
}

export default page;
