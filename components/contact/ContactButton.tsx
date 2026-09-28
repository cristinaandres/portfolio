'use client';
import { useOpenContact } from './ContactDialog';

/** A real button that opens the contact dialog; pages and variants style it. */
export default function ContactButton({
  className,
  children = 'Contact me',
}: {
  className?: string;
  children?: React.ReactNode;
}) {
  const openContact = useOpenContact();
  return (
    <button type="button" onClick={openContact} className={className}>
      {children}
    </button>
  );
}
