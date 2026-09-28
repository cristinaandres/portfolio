import Image from 'next/image';
import Link from 'next/link';
import type { ReactNode } from 'react';
import { siteConfig } from '@/lib/site.config';
import { HeaderNav, PhoneMenu } from './Nav';
import { container, Label, plexMono } from './ui';
import './planimetria.css';

/** Title-block header, the sheet in the middle, the dimension-line footer. */
export default function PlanimetriaShell({ children }: { children: ReactNode }) {
  return (
    <div className={`${plexMono.variable} a-root flex min-h-dvh flex-col`}>
      <header className={`${container} pt-4 lg:pt-8`}>
        <div className="flex items-center justify-between gap-4 border-[1.5px] border-[#23261F] bg-[#EDEDE6] px-3 py-2 lg:px-5 lg:py-3">
          <Link href="/" className="flex min-h-11 items-center gap-3">
            <Image
              src="/images/logo_no_text.svg"
              width={84}
              height={84}
              alt=""
              unoptimized
              className="h-9 w-9 lg:h-12 lg:w-12"
            />
            <span className="flex flex-col">
              <span className="text-[15px] font-semibold lg:text-[17px]">{siteConfig.name}</span>
              <Label as="span" className="hidden text-[#4B5046] md:block lg:hidden xl:block">
                {siteConfig.jobTitle}
              </Label>
            </span>
          </Link>
          <HeaderNav />
          <PhoneMenu />
        </div>
      </header>

      <main className="grow">{children}</main>

      <footer className={`${container} flex flex-col gap-4 pb-6 pt-10`}>
        <div className="a-mono flex items-center gap-3 text-xs text-[#4B5046]">
          <span aria-hidden="true">|◄</span>
          <span aria-hidden="true" className="h-px grow bg-[#4B5046]" />
          <ul className="flex flex-wrap justify-center gap-x-4 gap-y-1 uppercase tracking-[0.1em]">
            <li>
              <a
                href={`mailto:${siteConfig.email}`}
                className="inline-flex min-h-11 items-center hover:text-[#23261F]"
              >
                Email
              </a>
            </li>
            <li>
              <a
                href={siteConfig.calendly}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-11 items-center hover:text-[#23261F]"
              >
                Calendly
              </a>
            </li>
            <li>
              <a
                href={siteConfig.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-11 items-center hover:text-[#23261F]"
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a
                href={siteConfig.socials.behance}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-11 items-center hover:text-[#23261F]"
              >
                Behance
              </a>
            </li>
          </ul>
          <span aria-hidden="true" className="h-px grow bg-[#4B5046]" />
          <span aria-hidden="true">►|</span>
        </div>
        <p className="text-center text-xs text-[#4B5046]">
          Designed by {siteConfig.name} &amp; developed by{' '}
          <a
            href={siteConfig.developerUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-[#23261F]"
          >
            {siteConfig.developerName}
          </a>
        </p>
      </footer>
    </div>
  );
}
