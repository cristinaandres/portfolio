import Link from 'next/link';

const linkClass =
  'c-label flex min-h-11 items-center border border-[var(--c-ink)] px-5 font-medium hover:bg-[var(--c-ink)] hover:text-[var(--c-ground)]';

export default function MuestrarioNotFound() {
  return (
    <div className="mx-auto flex max-w-3xl flex-col gap-6 px-4 py-20 lg:py-32">
      <p className="c-label text-[var(--c-muted)]">Error 404</p>
      <h1 className="c-display text-[44px] font-medium leading-[1] lg:text-[72px]">
        Page <span className="italic">not found</span>
      </h1>
      <p className="text-base leading-relaxed">
        The page you are looking for has moved, no longer exists, or never existed in the first
        place. Let&apos;s get you back on track.
      </p>
      <nav aria-label="Helpful links">
        <ul className="flex flex-wrap gap-3">
          <li>
            <Link href="/" className={linkClass}>
              Selected work
            </Link>
          </li>
          <li>
            <Link href="/about" className={linkClass}>
              About
            </Link>
          </li>
          <li>
            <Link href="/activities" className={linkClass}>
              Activities
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
