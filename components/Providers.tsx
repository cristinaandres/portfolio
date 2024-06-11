"use client";
import React from 'react'
import { MenuProvider } from "@/components/context/MenuContext";
import { OverflowProvider } from './context/OverflowProvier';
import { Analytics } from '@vercel/analytics/react';
import { NameColorProvider } from '@/context/NameColorContext';

export function Providers({ children }: { children: React.ReactNode }) {
    return (
        <MenuProvider>
            <NameColorProvider>
                <OverflowProvider>
                    {children}
                    <Analytics />
                </OverflowProvider>
            </NameColorProvider>
        </MenuProvider >
    );
}

export default Providers