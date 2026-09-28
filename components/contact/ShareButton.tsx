'use client';
import { useState } from 'react';

/** Shares the current page with the Web Share API, or copies its link where that's missing. */
export default function ShareButton({ className = '' }: { className?: string }) {
  const [status, setStatus] = useState('');

  async function share() {
    const url = window.location.href;
    if (navigator.share) {
      try {
        await navigator.share({ title: document.title, url });
      } catch {
        // The visitor closed the share sheet.
      }
      return;
    }
    try {
      await navigator.clipboard.writeText(url);
      setStatus('Link copied to the clipboard.');
    } catch {
      setStatus(`Copy this link: ${url}`);
    }
  }

  return (
    <div className={`flex flex-col gap-2 ${className}`}>
      <button
        type="button"
        onClick={share}
        className="min-h-11 rounded-md border border-black px-4 font-medium hover:bg-black/5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
      >
        Share this page
      </button>
      <p role="status" className="min-h-5 text-sm text-neutral-700">
        {status}
      </p>
    </div>
  );
}
