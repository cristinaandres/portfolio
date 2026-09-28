'use client';

import { useRouter } from 'next/navigation';
import { useState, useTransition } from 'react';
import { VARIANT_PARAM, variants, type VariantId } from './config';

const ids = Object.keys(variants) as VariantId[];

/**
 * Floating control to compare variants on any page. The server renders it only outside
 * production. The choice lives in a cookie, so it follows the visitor from page to page, and
 * the ?variant= left in the URL makes the current view shareable.
 */
export default function VariantSwitcher({ current }: { current: VariantId }) {
  const router = useRouter();
  const [open, setOpen] = useState(true);
  const [pending, startTransition] = useTransition();

  // The proxy turns ?variant= into the cookie, so switching is just a navigation to the same page.
  function choose(id: VariantId) {
    const url = new URL(window.location.href);
    url.searchParams.set(VARIANT_PARAM, id);
    startTransition(() => {
      router.replace(url.pathname + url.search + url.hash, { scroll: false });
      router.refresh();
    });
  }

  return (
    <div
      data-variant-switcher
      className="fixed bottom-3 right-3 z-[60] flex items-center gap-1 rounded-full border border-black/20 bg-white/95 p-1 text-sm text-black shadow-lg"
    >
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        aria-controls="variant-switcher-options"
        className="flex h-11 min-w-11 items-center justify-center rounded-full px-3 font-semibold focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
      >
        <span className="sr-only">Design variant: </span>
        {current.toUpperCase()}
        <span className="sr-only">, {open ? 'hide' : 'show'} options</span>
      </button>
      {open && (
        <div
          id="variant-switcher-options"
          role="group"
          aria-label="Choose a design variant"
          className="flex gap-1"
          aria-busy={pending}
        >
          {ids.map((id) => (
            <button
              key={id}
              type="button"
              aria-pressed={id === current}
              onClick={() => choose(id)}
              className="h-11 rounded-full px-3 aria-pressed:bg-black aria-pressed:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
            >
              <span aria-hidden="true">{id.toUpperCase()}</span>
              <span className="sr-only">
                {id.toUpperCase()}, {variants[id].name}
              </span>
              <span className="hidden lg:inline" aria-hidden="true">
                {' '}
                {variants[id].name}
              </span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
