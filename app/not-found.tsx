import Link from 'next/link';
import type { Metadata } from 'next';
import { siteConfig } from '@/lib/site.config';

export const metadata: Metadata = {
  title: 'Page not found',
  description: `The page you are looking for does not exist on ${siteConfig.name}'s portfolio.`,
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <div className="font-poppins min-h-[100dvh] bg-[#E2E2DB] flex items-center justify-center px-6 py-32">
      <div className="max-w-prose text-center flex flex-col items-center gap-6">
        <p className="uppercase tracking-[6px] text-xs font-bold">Error 404</p>
        <h1 className="font-bodoni text-4xl md:text-5xl lg:text-6xl">Page not found</h1>
        <p className="text-sm md:text-base">
          The page you are looking for has moved, no longer exists, or never existed in the first
          place. Let&apos;s get you back on track.
        </p>
        <nav aria-label="Helpful links" className="flex flex-wrap justify-center gap-3 mt-4">
          <Link
            href="/"
            className="uppercase text-xs tracking-[4px] font-bold bg-black text-white rounded-md px-4 py-2 hover:bg-black/80 transition-colors"
          >
            Selected work
          </Link>
          <Link
            href="/about"
            className="uppercase text-xs tracking-[4px] font-bold border border-black rounded-md px-4 py-2 hover:bg-black hover:text-white transition-colors"
          >
            About
          </Link>
          <Link
            href="/activities"
            className="uppercase text-xs tracking-[4px] font-bold border border-black rounded-md px-4 py-2 hover:bg-black hover:text-white transition-colors"
          >
            Activities
          </Link>
        </nav>
      </div>
    </div>
  );
}
