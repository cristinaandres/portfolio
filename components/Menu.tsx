'use client';
import Link from 'next/link';
import { useMenu } from '@/context/MenuContext';
import { useOpenContact } from './contact/ContactDialog';

export function Menu() {
  const openContact = useOpenContact();
  const { isMenuOpen, toggleMenu } = useMenu();
  if (!isMenuOpen) return null;

  return (
    <div
      className="fixed inset-0 h-[100dvh] w-[100dvw] overflow-hidden bg-black/95 text-white text-2xl px-8 pt-[max(env(safe-area-inset-top),2rem)] pb-[max(env(safe-area-inset-bottom),2rem)] flex flex-col items-center justify-center gap-[8.6dvh] z-40"
      role="dialog"
      aria-modal="true"
      aria-label="Main menu"
    >
      <Link
        href={'/'}
        onClick={toggleMenu}
        className="min-h-[44px] flex items-center focus-visible:underline"
      >
        Work
      </Link>
      <Link
        href={'/activities'}
        onClick={toggleMenu}
        className="min-h-[44px] flex items-center focus-visible:underline"
      >
        Activities
      </Link>
      <Link
        href={'/about'}
        onClick={toggleMenu}
        className="min-h-[44px] flex items-center focus-visible:underline"
      >
        About me
      </Link>
      <button
        type="button"
        onClick={() => {
          toggleMenu();
          openContact();
        }}
        className="min-h-[44px] focus-visible:underline"
      >
        Contact
      </button>
    </div>
  );
}

export default Menu;
