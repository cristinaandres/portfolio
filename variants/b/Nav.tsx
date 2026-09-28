'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import ContactButton from '@/components/contact/ContactButton';

const links = [
  { href: '/', label: 'The room' },
  { href: '/#all-work', label: 'All work' },
  { href: '/about', label: 'About me' },
  { href: '/activities', label: 'Activities' },
];

const pill =
  'flex min-h-11 items-center rounded-full px-4 text-[15px] font-medium hover:bg-[#F6E3E5] aria-[current=page]:bg-[#D9ABBA]';

function isCurrent(pathname: string, href: string) {
  if (href === '/') return pathname === '/';
  if (href.startsWith('/#')) return false;
  return pathname === href || pathname.startsWith(`${href}/`);
}

/** The pill navigation: inline from 1024 px, a real disclosure menu below. */
export default function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  // Close the phone menu whenever the page changes.
  useEffect(() => setOpen(false), [pathname]);

  return (
    <>
      <nav aria-label="Main" className="hidden xl:block">
        <ul className="flex items-center gap-1 rounded-full bg-[#FBF3EA] p-1.5">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                aria-current={isCurrent(pathname, link.href) ? 'page' : undefined}
                className={pill}
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li>
            <ContactButton className="flex min-h-11 items-center rounded-full bg-[#3A2A33] px-4 text-[15px] font-medium text-[#FBF3EA] hover:bg-[#8C4A62]">
              Say hi
            </ContactButton>
          </li>
        </ul>
      </nav>

      <div className="flex items-center gap-2 xl:hidden">
        <Link
          href="/#all-work"
          className="flex min-h-11 items-center rounded-full bg-[#FBF3EA] whitespace-nowrap px-3 text-sm font-medium"
        >
          All work
        </Link>
        <button
          type="button"
          aria-expanded={open}
          aria-controls="isla-menu"
          onClick={() => setOpen((o) => !o)}
          className="flex min-h-11 items-center rounded-full bg-[#3A2A33] px-3 text-sm font-medium text-[#FBF3EA]"
        >
          {open ? 'Close' : 'Menu'}
        </button>
      </div>

      <nav
        id="isla-menu"
        aria-label="Main"
        hidden={!open}
        className="absolute inset-x-4 top-full z-40 mt-2 rounded-[28px] bg-[#FBF3EA] p-3 shadow-lg xl:hidden"
      >
        <ul className="flex flex-col gap-1">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                aria-current={isCurrent(pathname, link.href) ? 'page' : undefined}
                onClick={() => setOpen(false)}
                className={`${pill} text-base`}
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li>
            <ContactButton className="flex min-h-11 w-full items-center rounded-full bg-[#3A2A33] px-4 text-base font-medium text-[#FBF3EA]">
              Say hi
            </ContactButton>
          </li>
        </ul>
      </nav>
    </>
  );
}
