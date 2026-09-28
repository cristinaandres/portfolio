'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useRef } from 'react';
import { useOpenContact } from '@/components/contact/ContactDialog';

export const navItems = [
  { n: '01', label: 'Work', href: '/' },
  { n: '02', label: 'About', href: '/about' },
  { n: '03', label: 'Activities', href: '/activities' },
] as const;

function isCurrent(pathname: string, href: string) {
  if (href === '/') return pathname === '/' || pathname.startsWith('/work/');
  return pathname === href || pathname.startsWith(`${href}/`);
}

/** The numbered navigation of the title block, from 768 px up. */
export function HeaderNav() {
  const pathname = usePathname();
  const openContact = useOpenContact();
  return (
    <nav aria-label="Main" className="hidden lg:block">
      <ul className="a-mono flex items-center gap-6 text-[13px] uppercase tracking-[0.12em] xl:gap-9">
        {navItems.map((item) => {
          const current = isCurrent(pathname, item.href);
          return (
            <li key={item.href}>
              <Link
                href={item.href}
                aria-current={current ? 'page' : undefined}
                className={`inline-flex min-h-11 items-center border-b-2 ${current ? 'border-[#4E6558]' : 'border-transparent hover:border-[#23261F]'}`}
              >
                <span className="text-[#4E6558]">{item.n}</span>&nbsp;{item.label}
              </Link>
            </li>
          );
        })}
        <li>
          <button
            type="button"
            onClick={openContact}
            className="inline-flex min-h-11 items-center border-b-2 border-transparent uppercase tracking-[0.12em] hover:border-[#23261F]"
          >
            <span className="text-[#4E6558]">04</span>&nbsp;Contact
          </button>
        </li>
      </ul>
    </nav>
  );
}

/**
 * Below 768 px the navigation lives in a full-height native dialog: the browser traps focus,
 * Escape closes it and focus returns to the menu button.
 */
export function PhoneMenu() {
  const dialog = useRef<HTMLDialogElement>(null);
  const trigger = useRef<HTMLButtonElement>(null);
  const pathname = usePathname();
  const openContact = useOpenContact();
  const close = () => dialog.current?.close();

  return (
    <div className="lg:hidden">
      <button
        ref={trigger}
        type="button"
        aria-haspopup="dialog"
        onClick={() => dialog.current?.showModal()}
        className="flex h-11 w-11 flex-col items-center justify-center gap-[5px] border-[1.5px] border-[#23261F]"
      >
        <span className="sr-only">Open menu</span>
        <span aria-hidden="true" className="block h-[1.5px] w-[18px] bg-[#23261F]" />
        <span aria-hidden="true" className="block h-[1.5px] w-[18px] bg-[#23261F]" />
      </button>
      <dialog
        ref={dialog}
        aria-label="Main menu"
        className="a-menu"
        onClick={(e) => {
          if (e.target === e.currentTarget) close();
        }}
      >
        <div className="a-root flex h-full flex-col gap-6 p-4">
          <div className="flex items-center justify-between border-[1.5px] border-[#23261F] bg-[#EDEDE6] px-3 py-2">
            <p className="a-mono text-[11px] uppercase tracking-[0.18em] text-[#4B5046]">
              Index of sheets
            </p>
            <button
              type="button"
              onClick={close}
              className="flex h-11 w-11 items-center justify-center border-[1.5px] border-[#23261F]"
            >
              <span className="sr-only">Close menu</span>
              <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true">
                <path d="M2 2l12 12M14 2L2 14" stroke="currentColor" strokeWidth="1.5" />
              </svg>
            </button>
          </div>
          <nav aria-label="Main">
            <ul className="border-[1.5px] border-[#23261F] bg-[#EDEDE6]">
              {navItems.map((item, i) => {
                const current = isCurrent(pathname, item.href);
                return (
                  <li key={item.href} className={i > 0 ? 'border-t border-[#23261F]' : ''}>
                    <Link
                      href={item.href}
                      onClick={close}
                      aria-current={current ? 'page' : undefined}
                      className={`flex min-h-16 items-center gap-4 px-4 text-2xl font-semibold ${current ? 'bg-[#DCE3DC]' : ''}`}
                    >
                      <span className="a-mono text-base font-normal text-[#4E6558]">{item.n}</span>
                      {item.label}
                    </Link>
                  </li>
                );
              })}
              <li className="border-t border-[#23261F]">
                <button
                  type="button"
                  onClick={() => {
                    close();
                    openContact();
                  }}
                  className="flex min-h-16 w-full items-center gap-4 px-4 text-left text-2xl font-semibold"
                >
                  <span className="a-mono text-base font-normal text-[#4E6558]">04</span>
                  Contact
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </dialog>
    </div>
  );
}
