'use client';
import React from 'react';
import { MenuProvider } from '@/context/MenuContext';
import { OverflowProvider } from '@/context/OverflowProvier';
import { Analytics } from '@vercel/analytics/react';
import { MotionConfig } from 'motion/react';
import { NameColorProvider } from '@/context/NameColorContext';
import { ContactProvider } from '@/components/contact/ContactDialog';

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <MenuProvider>
      <NameColorProvider>
        <OverflowProvider>
          <ContactProvider>
            <MotionConfig reducedMotion="user">{children}</MotionConfig>
          </ContactProvider>
          <Analytics />
        </OverflowProvider>
      </NameColorProvider>
    </MenuProvider>
  );
}

export default Providers;
