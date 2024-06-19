'use client'
import React, { useCallback, useEffect, useState } from "react";
import ShareIcon from "./ShareIcon";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import { useStartTyping } from "react-use";
import { usePathname, useSearchParams, useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion"
import projets from '@/public/json/projets.json'
import { Modal, ModalBody, ModalFooter, Button } from "@nextui-org/react";

interface ModalProps {
    children: React.ReactNode;
    isOpen: boolean;
    onClose: () => void;
    index: number
}

const ModalProjects: React.FC<ModalProps> = ({ children, isOpen, onClose, index }) => {

    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const [indexProject, setIndexProject] = useState<number | null>(index)
    const [secondRender, setSecondRender] = useState<boolean>(false)


    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
        if (e.target === e.currentTarget) {
            setIndexProject(null);
            onClose();
        }
    };

    const goToPreviousProject = () => {
        if (indexProject !== null && indexProject > 0) {
            setIndexProject(indexProject - 1);
        }
    };

    const goToNextProject = () => {
        const maxIndex = projets.length - 1;
        if (indexProject !== null && indexProject < maxIndex) {
            setIndexProject(indexProject + 1);
        }
    };

    useEffect(() => {
        console.log('Index après décrémentation:', indexProject);
        console.log(secondRender)
        if (secondRender) {
            onClose();
            const params = new URLSearchParams(searchParams.toString())
            params.delete("project");
            if (indexProject != null) {
                params.set("project", projets[indexProject].title.toLowerCase());
            }

            router.push(pathname + '?' + params.toString())
            console.log(params.toString())
        }
        setSecondRender(true)
    }, [indexProject]);

    if (!isOpen) return null;

    return (
        <AnimatePresence>
            {isOpen && (
                <div>
                    <div className="">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            id="modal-overlay"
                            className="fixed inset-0 bg-black bg-opacity-90 flex justify-center items-center px-4 z-50 overflow-y-auto"
                            onClick={handleOverlayClick}>
                            <div className="relative flex flex-col">
                                <div className="bg-transparent rounded-lg 2xl:w-[1300px] xl:w-[1100px] lg:w-[900px] md:w-[700px] overflow-y-auto transition-all duration-300" style={{ maxHeight: '90vh' }} onClick={(e) => e.stopPropagation()}>
                                    {children}
                                </div>
                                <button onClick={onClose} className="text-xl font-bold absolute top-[-60px] right-0 lg:top-0 lg:right-[-80px] bg-[#343434] hover:bg-[#696969] transition-all duration-300 text-white rounded-full w-10 h-10 shadow-lg">
                                    &times;
                                </button>
                                {/* <button
                                    className="text-xl font-bold absolute bottom-16 left-[-80px] bg-[#343434] hover:bg-[#696969] transition-all duration-300 text-white rounded-full w-10 h-10 shadow-lg flex items-center justify-center"
                                    onClick={goToPreviousProject}>
                                    <FaArrowLeft />
                                </button>
                                <button
                                    className="text-xl font-bold absolute bottom-16 right-[-80px] bg-[#343434] hover:bg-[#696969] transition-all duration-300 text-white rounded-full w-10 h-10 shadow-lg flex items-center justify-center"
                                    onClick={goToNextProject}>
                                    <FaArrowRight />
                                </button> */}
                                <ShareIcon />
                            </div>
                        </motion.div>
                    </div>

                </div>

            )}
        </AnimatePresence>

    );
};

export default ModalProjects;
