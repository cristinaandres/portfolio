'use client';
import React from 'react';
import { HeroUIProvider } from '@heroui/react';
import { MenuProvider } from '@/context/MenuContext';
import { OverflowProvider } from '@/context/OverflowProvier';
import { Analytics } from '@vercel/analytics/react';
import { NameColorProvider } from '@/context/NameColorContext';

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <HeroUIProvider>
      <MenuProvider>
        <NameColorProvider>
          <OverflowProvider>
            {children}
            <Analytics />
          </OverflowProvider>
        </NameColorProvider>
      </MenuProvider>
    </HeroUIProvider>
  );
}

export default Providers;
