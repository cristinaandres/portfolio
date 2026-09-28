import Link from 'next/link';
import type { ReactNode } from 'react';
import { profile } from '@/content/profile';
import { siteConfig } from '@/lib/site.config';
import { fredoka } from './fonts';
import Nav from './Nav';
import Portrait from './Portrait';
import './isla.css';

const footerLinks = [
  { href: `mailto:${siteConfig.email}`, label: siteConfig.email },
  { href: siteConfig.calendly, label: 'Book a 30-minute call' },
  { href: siteConfig.socials.linkedin, label: 'LinkedIn' },
  { href: siteConfig.socials.behance, label: 'Behance' },
  { href: profile.cv, label: 'CV (PDF)' },
];

export default function IslaShell({ children }: { children: ReactNode }) {
  return (
    <div className={`${fredoka.variable} flex min-h-dvh flex-col bg-[#F6E3E5] text-[#3A2A33]`}>
      <a
        href="#content"
        className="sr-only z-50 rounded-full bg-[#3A2A33] px-4 py-3 text-[#FBF3EA] focus:not-sr-only focus:absolute focus:left-4 focus:top-4"
      >
        Skip to content
      </a>
      <header className="relative mx-auto flex w-full max-w-[1312px] items-center justify-between gap-4 px-4 pt-4 lg:px-8 lg:pt-8 2xl:px-0">
        <Link href="/" className="flex min-h-11 items-center gap-2 lg:gap-3">
          <Portrait size={40} />
          <span className="isla-display whitespace-nowrap text-base font-semibold lg:text-[22px]">
            {siteConfig.name}
          </span>
        </Link>
        <Nav />
      </header>

      <main id="content" className="flex-1">
        {children}
      </main>

      <footer className="mt-16 bg-[#FBF3EA]">
        <div className="mx-auto flex max-w-[1312px] flex-col gap-6 px-4 py-10 lg:flex-row lg:items-center lg:justify-between lg:px-8 2xl:px-0">
          <div className="flex items-center gap-3">
            <Portrait size={44} />
            <p className="isla-display text-lg font-semibold">{siteConfig.jobTitle}</p>
          </div>
          <ul className="flex flex-wrap gap-x-5 gap-y-2 text-sm">
            {footerLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="flex min-h-11 items-center underline decoration-[#8C4A62] underline-offset-4 hover:text-[#8C4A62]"
                  {...(link.href.startsWith('http')
                    ? { target: '_blank', rel: 'noopener noreferrer' }
                    : {})}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <p className="border-t border-[#3A2A33]/15 px-4 py-4 text-center text-xs text-[#6B4F5B]">
          Designed by {siteConfig.name} &amp; developed by{' '}
          <a
            href={siteConfig.developerUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-2"
          >
            {siteConfig.developerName}
          </a>
        </p>
      </footer>
    </div>
  );
}
