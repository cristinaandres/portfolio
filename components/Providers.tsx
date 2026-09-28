'use client';
import React from 'react';
import { HeroUIProvider } from '@heroui/react';
import { MenuProvider } from '@/context/MenuContext';
import { OverflowProvider } from '@/context/OverflowProvier';
import { Analytics } from '@vercel/analytics/react';
import { MotionConfig } from 'motion/react';
import { NameColorProvider } from '@/context/NameColorContext';

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <HeroUIProvider>
      <MenuProvider>
        <NameColorProvider>
          <OverflowProvider>
            <MotionConfig reducedMotion="user">{children}</MotionConfig>
            <Analytics />
          </OverflowProvider>
        </NameColorProvider>
      </MenuProvider>
    </HeroUIProvider>
  );
}

export default Providers;
