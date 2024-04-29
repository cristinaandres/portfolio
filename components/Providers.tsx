"use client";
import React from 'react'
import { MenuProvider } from "@/components/context/MenuContext";
import { OverflowProvider } from './context/OverflowProvier';
export function Providers({ children }: { children: React.ReactNode }) {
    return (
        <MenuProvider>
            <OverflowProvider>
                {children}
            </OverflowProvider>
        </MenuProvider >
    );
}

export default Providers