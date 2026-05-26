import Link from 'next/link';
import React from 'react';
import type { Metadata } from 'next';
import { JsonLd, breadcrumbSchema } from '@/components/seo/JsonLd';
import { siteConfig } from '@/lib/site.config';

export const metadata: Metadata = {
  title: 'Activities',
  description: `Personal projects and creative side-quests by ${siteConfig.name} — 3D modeling in Blender and Animal Crossing island design.`,
  alternates: { canonical: '/activities' },
  openGraph: {
    title: `Activities · ${siteConfig.name}`,
    description: `Personal projects and creative side-quests by ${siteConfig.name}.`,
    url: `${siteConfig.url}/activities`,
    images: ['/opengraph-image'],
  },
  twitter: {
    card: 'summary_large_image',
    title: `Activities · ${siteConfig.name}`,
    description: `Personal projects and creative side-quests by ${siteConfig.name}.`,
    images: ['/twitter-image'],
  },
};

const page = () => {
  return (
    <>
      <JsonLd
        id="ld-breadcrumb-activities"
        data={breadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'Activities', path: '/activities' },
        ])}
      />
      <div className="w-full min-h-[100dvh] bg-[#E2E2DB] py-16 lg:py-32 px-4 md:px-16 lg:px-24 xl:px-36 flex justify-center items-center">
        <div className="w-full max-w-[1144px] flex flex-col justify-center">
          <div className="w-full px-8 md:px-[64px] lg:px-[124px] xl:px-[192px] flex flex-col">
            <h1 className="font-bold text-center text-2xl md:text-3xl">Activities</h1>
            <p className="mt-5 text-center">
              This is the space where I show a little bit of who I am, my passions and my tastes.
              What follows is a collection of projects that I do during my free time. Some of them
              are more professional and others less, but all of them have a little piece of my
              heart.
            </p>
          </div>
          <div className="flex flex-col lg:flex-row gap-8 mt-11 justify-center items-center">
            <Link
              href={'/activities/blender'}
              className="rounded-3xl border-4 border-[#E6793B] w-[160px] md:w-[200px] lg:w-[240px] xl:w-[280px] h-[160px]  md:h-[200px] lg:h-[240px] xl:h-[280px] bg-blender py-8 md:py-16 lg:py-20 xl:py-[92px] px-8 flex flex-col transition-all duration-250 hover:scale-105 bg-cover items-center justify-end"
              style={{ paddingBottom: '3rem' }}
            >
              <h3 className="uppercase font-bold tracking-[4px]" style={{ color: 'white' }}>
                3D Modeling
              </h3>
            </Link>
            <Link
              href={'/activities/animal-crossing'}
              className="rounded-3xl border-4 border-[#E6793B] w-[160px] md:w-[200px] lg:w-[240px] xl:w-[280px] h-[160px]  md:h-[200px] lg:h-[240px] xl:h-[280px] bg-animal py-8 md:py-16 lg:py-20 xl:py-[92px] px-8 flex flex-col transition-all duration-250 hover:scale-105 bg-cover items-center justify-end"
              style={{ paddingBottom: '3rem' }}
            >
              <h3 className="uppercase font-bold tracking-[4px]">Animal Crossing</h3>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
