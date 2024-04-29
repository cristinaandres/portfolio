'use client'
import { Modal, useDisclosure } from "@nextui-org/react";
import Link from "next/link";
import ModalContentContact from "./ModalContentContact";
import { useMenu } from "./context/MenuContext";

interface MenuContextType {
    isMenuOpen: boolean;
    closeMenu: () => void;
}
export function Menu() {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    const { isMenuOpen, toggleMenu } = useMenu();
    if (!isMenuOpen) return null;

    return (
        <div className=" fixed h-screen w-screen overflow-hidden bg-black bg-opacity-95 text-white text-2xl z-10 p-8 flex flex-col items-center justify-center gap-[8.6dvh]">
            <Link href={'/'} onClick={toggleMenu}>Project</Link>
            <Link href={'/services'} onClick={toggleMenu}>Services</Link>
            <Link href={'/about'} onClick={toggleMenu}>About Me</Link>
            <button onClick={onOpen}>Contact</button>
            <Modal backdrop='blur' isOpen={isOpen} onOpenChange={onOpenChange}>
                <ModalContentContact />
            </Modal>
        </div>
    );
}

export default Menu;
