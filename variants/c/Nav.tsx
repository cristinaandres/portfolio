'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import ContactButton from '@/components/contact/ContactButton';

const links = [
  { href: '/', label: 'Work', match: (p: string) => p === '/' || p.startsWith('/work') },
  { href: '/about', label: 'About', match: (p: string) => p === '/about' },
  { href: '/activities', label: 'Activities', match: (p: string) => p.startsWith('/activities') },
];

const itemClass =
  'c-label flex min-h-11 items-center font-medium border-b-[1.5px] border-transparent aria-[current=page]:border-current hover:text-[var(--c-accent)]';

/** Wide-tracked uppercase navigation; below 768 px it folds into a disclosure. */
export default function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [openedAt, setOpenedAt] = useState(pathname);

  // Close the phone menu after navigating.
  if (open && openedAt !== pathname) {
    setOpen(false);
    setOpenedAt(pathname);
  }

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  const items = (
    <>
      {links.map((l) => (
        <li key={l.href}>
          <Link
            href={l.href}
            aria-current={l.match(pathname) ? 'page' : undefined}
            className={itemClass}
          >
            {l.label}
          </Link>
        </li>
      ))}
      <li>
        <ContactButton className={itemClass}>Contact</ContactButton>
      </li>
    </>
  );

  return (
    <nav aria-label="Main">
      <ul className="hidden items-center gap-9 lg:flex">{items}</ul>
      <div className="lg:hidden">
        <button
          type="button"
          aria-expanded={open}
          aria-controls="c-menu"
          onClick={() => {
            setOpen((o) => !o);
            setOpenedAt(pathname);
          }}
          className="c-label flex min-h-11 items-center gap-2 font-medium"
        >
          <span aria-hidden="true" className="flex w-5 flex-col gap-[5px]">
            <span
              className={`h-[1.5px] bg-current transition-transform motion-reduce:transition-none ${open ? 'translate-y-[3.25px] rotate-45' : ''}`}
            />
            <span
              className={`h-[1.5px] bg-current transition-transform motion-reduce:transition-none ${open ? '-translate-y-[3.25px] -rotate-45' : ''}`}
            />
          </span>
          Menu
        </button>
        <ul
          id="c-menu"
          hidden={!open}
          className="absolute inset-x-0 top-full z-40 flex flex-col gap-1 border-b border-[var(--c-ink)] bg-[var(--c-ground)] px-4 pb-6 pt-2 [&[hidden]]:hidden"
        >
          {items}
        </ul>
      </div>
    </nav>
  );
}
