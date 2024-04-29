'use client'
import { useMenu } from "./MenuContext"

export function OverflowProvider({ children }: { children: React.ReactNode }) {
    const { isMenuOpen } = useMenu();

    return <div className={isMenuOpen ? 'overflow-hidden' : ''}>{children}</div >;
}
