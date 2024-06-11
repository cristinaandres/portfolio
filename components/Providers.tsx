"use client";
import React from 'react'
import { MenuProvider } from "@/components/context/MenuContext";
import { OverflowProvider } from './context/OverflowProvier';
import { Analytics } from '@vercel/analytics/react';

export function Providers({ children }: { children: React.ReactNode }) {
    return (
        <MenuProvider>
            <OverflowProvider>
                {children}
                <Analytics />
            </OverflowProvider>
        </MenuProvider >
    );
}

export default Providers