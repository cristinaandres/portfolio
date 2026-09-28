import Link from 'next/link';
import { buttonDark, buttonLine, container, Label } from './ui';

export default function PlanimetriaNotFound() {
  return (
    <div className={`${container} flex flex-col items-start gap-6 py-16 lg:py-24`}>
      <Label className="text-[#4E6558]">Sheet 404 / Not found</Label>
      <h1 className="text-[40px] font-semibold leading-[1.04] tracking-[-0.02em] lg:text-[56px]">
        Page not found
      </h1>
      <p className="max-w-[40rem] text-base leading-relaxed lg:text-lg">
        The page you are looking for has moved, no longer exists, or never existed in the first
        place. Let&apos;s get you back on track.
      </p>
      <nav aria-label="Helpful links" className="flex flex-wrap gap-3">
        <Link href="/" className={buttonDark}>
          Selected work
        </Link>
        <Link href="/about" className={buttonLine}>
          About
        </Link>
        <Link href="/activities" className={buttonLine}>
          Activities
        </Link>
      </nav>
    </div>
  );
}
