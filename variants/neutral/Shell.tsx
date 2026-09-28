import type { ReactNode } from 'react';
import Footer from '@/components/Footer';
import Menu from '@/components/Menu';
import Header from '@/components/header';

export default function NeutralShell({ children }: { children: ReactNode }) {
  return (
    <>
      <Menu />
      <Header />
      <main className="min-h-screen overflow-hidden">{children}</main>
      <Footer />
    </>
  );
}
