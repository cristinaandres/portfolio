'use client';
import React, { createContext, useCallback, useContext, useRef } from 'react';
import { siteConfig } from '@/lib/site.config';
import ShareButton from './ShareButton';

const ContactContext = createContext<(() => void) | null>(null);

/** Opens the one contact dialog from anywhere (header, menu, pages). */
export function useOpenContact() {
  const open = useContext(ContactContext);
  if (!open) throw new Error('useOpenContact must be used within ContactProvider');
  return open;
}

const channels = [
  { label: 'Email', value: siteConfig.email, href: `mailto:${siteConfig.email}` },
  { label: 'Book a 30-minute call', value: 'Calendly', href: siteConfig.calendly },
  { label: 'LinkedIn', value: 'cristinaandrs', href: siteConfig.socials.linkedin },
  { label: 'Behance', value: 'cristinaandrs', href: siteConfig.socials.behance },
];

/**
 * A native <dialog> opened with showModal(): the browser keeps focus inside it, closes it on
 * Escape and returns focus to the trigger. A click on the backdrop closes it too.
 */
export function ContactProvider({ children }: { children: React.ReactNode }) {
  const dialog = useRef<HTMLDialogElement>(null);
  const open = useCallback(() => dialog.current?.showModal(), []);
  const close = () => dialog.current?.close();

  return (
    <ContactContext.Provider value={open}>
      {children}
      <dialog
        ref={dialog}
        aria-labelledby="contact-title"
        className="m-auto w-[min(28rem,calc(100vw-2rem))] rounded-lg bg-white p-0 text-black backdrop:bg-black/60"
        onClick={(e) => {
          if (e.target === e.currentTarget) close();
        }}
      >
        <div className="flex flex-col gap-6 p-6">
          <div className="flex items-start justify-between gap-4">
            <h2 id="contact-title" className="text-xl font-bold">
              Contact
            </h2>
            <button
              type="button"
              onClick={close}
              className="-m-2 flex h-11 w-11 items-center justify-center rounded-md focus-visible:outline-2 focus-visible:outline-black"
              aria-label="Close contact dialog"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true">
                <path d="M2 2l12 12M14 2L2 14" stroke="currentColor" strokeWidth="2" />
              </svg>
            </button>
          </div>
          <ul className="flex flex-col gap-2">
            {channels.map((c) => (
              <li key={c.label}>
                <a
                  href={c.href}
                  {...(c.href.startsWith('http')
                    ? { target: '_blank', rel: 'noopener noreferrer' }
                    : {})}
                  className="flex min-h-11 flex-col justify-center rounded-md px-3 py-2 hover:bg-black/5 focus-visible:outline-2 focus-visible:outline-black"
                >
                  <span className="text-sm text-neutral-700">{c.label}</span>
                  <span className="font-medium">{c.value}</span>
                </a>
              </li>
            ))}
          </ul>
          <ShareButton />
        </div>
      </dialog>
    </ContactContext.Provider>
  );
}
