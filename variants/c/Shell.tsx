import Image from 'next/image';
import Link from 'next/link';
import type { ReactNode } from 'react';
import { getProjects } from '@/content';
import { siteConfig } from '@/lib/site.config';
import { bodoni } from './fonts';
import Nav from './Nav';
import './muestrario.css';

export default function MuestrarioShell({ children }: { children: ReactNode }) {
  const projects = getProjects();
  return (
    <div className={`${bodoni.variable} flex min-h-dvh flex-col`}>
      <a
        href="#main"
        className="c-label sr-only z-50 bg-[var(--c-ink)] px-4 py-3 text-[var(--c-ground)] focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
      >
        Skip to content
      </a>
      <header className="relative border-b border-[var(--c-rule)]">
        <div className="mx-auto flex max-w-[1440px] items-center justify-between gap-6 px-4 py-2 lg:px-10 xl:px-16">
          <Link href="/" className="flex min-h-11 items-center gap-3">
            <Image
              src="/images/logo.svg"
              alt=""
              width={40}
              height={40}
              className="h-9 w-9 lg:h-11 lg:w-11"
            />
            <span className="c-display text-lg font-semibold lg:text-[22px]">
              {siteConfig.name}
            </span>
          </Link>
          <Nav />
        </div>
      </header>

      <main id="main" className="flex-1">
        {children}
      </main>

      <footer className="border-t border-[var(--c-ink)]">
        <div aria-hidden="true" className="flex h-2.5">
          {projects.map((p) => (
            <span key={p.slug} className="flex-1" style={{ background: p.color }} />
          ))}
        </div>
        <div className="mx-auto flex max-w-[1440px] flex-col gap-6 px-4 py-10 lg:flex-row lg:items-end lg:justify-between lg:px-10 xl:px-16">
          <div className="flex flex-col gap-2">
            <p className="c-display text-2xl font-medium">{siteConfig.name}</p>
            <p className="text-sm text-[var(--c-muted)]">{siteConfig.jobTitle}</p>
          </div>
          <ul className="flex flex-wrap gap-x-6 gap-y-1 text-sm">
            <li>
              <a href={`mailto:${siteConfig.email}`} className="c-link flex min-h-11 items-center">
                {siteConfig.email}
              </a>
            </li>
            <li>
              <a
                href={siteConfig.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="c-link flex min-h-11 items-center"
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a
                href={siteConfig.socials.behance}
                target="_blank"
                rel="noopener noreferrer"
                className="c-link flex min-h-11 items-center"
              >
                Behance
              </a>
            </li>
          </ul>
        </div>
        <p className="border-t border-[var(--c-rule)] px-4 py-4 text-center text-xs text-[var(--c-muted)]">
          Designed by {siteConfig.name} &amp; developed by{' '}
          <a
            href={siteConfig.developerUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="c-link"
          >
            {siteConfig.developerName}
          </a>
        </p>
      </footer>
    </div>
  );
}
