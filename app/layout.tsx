import React from 'react';
import type { Metadata, Viewport } from 'next';
import { Inter, Poppins, Libre_Bodoni } from 'next/font/google';
import './globals.css';
import Header from '@/components/header';
import Footer from '@/components/Footer';
import Providers from '@/components/Providers';
import Menu from '@/components/Menu';
import { siteConfig } from '@/lib/site.config';
import { JsonLd, personSchema, websiteSchema } from '@/components/seo/JsonLd';

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '700', '800'],
  display: 'swap',
  variable: '--font-inter',
});

const bodoni = Libre_Bodoni({
  subsets: ['latin'],
  weight: ['400', '700'],
  display: 'swap',
  variable: '--font-bodoni',
});

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '700', '800'],
  display: 'swap',
  variable: '--font-poppins',
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} — ${siteConfig.jobTitle}`,
    template: `%s · ${siteConfig.name}`,
  },
  description: siteConfig.description,
  applicationName: siteConfig.shortName,
  authors: [{ name: siteConfig.name, url: siteConfig.url }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  keywords: [...siteConfig.keywords],
  category: 'design',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: siteConfig.locale,
    url: siteConfig.url,
    siteName: siteConfig.shortName,
    title: `${siteConfig.name} — ${siteConfig.jobTitle}`,
    description: siteConfig.description,
    images: [
      {
        url: '/opengraph-image',
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} — ${siteConfig.jobTitle}`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${siteConfig.name} — ${siteConfig.jobTitle}`,
    description: siteConfig.description,
    images: ['/twitter-image'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/favicon.ico',
  },
  other: {
    'profile:first_name': 'Cristina',
    'profile:last_name': 'Andrés',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#E2E2DB' },
    { media: '(prefers-color-scheme: dark)', color: '#000000' },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang={siteConfig.language}>
      <head>
        <JsonLd id="ld-person" data={personSchema()} />
        <JsonLd id="ld-website" data={websiteSchema()} />
      </head>
      <body className={`${inter.variable} ${poppins.variable} ${bodoni.variable}`}>
        <Providers>
          <Menu />
          <Header />
          <main className="min-h-screen overflow-hidden">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
