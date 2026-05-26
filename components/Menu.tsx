'use client';
import { Modal, useDisclosure } from '@heroui/react';
import Link from 'next/link';
import ModalContentContact from './ModalContentContact';
import { useMenu } from '@/context/MenuContext';

interface MenuContextType {
  isMenuOpen: boolean;
  closeMenu: () => void;
}
export function Menu() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
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
      <button
        type="button"
        onClick={() => window.open('/pdf/CV.pdf', '_blank', 'noopener,noreferrer')}
        className="min-h-[44px] focus-visible:underline"
      >
        About Me
      </button>
      <button type="button" onClick={onOpen} className="min-h-[44px] focus-visible:underline">
        Contact
      </button>
      <Modal backdrop="blur" isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContentContact />
      </Modal>
    </div>
  );
}

export default Menu;
