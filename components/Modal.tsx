import React, { useEffect } from "react";
import ShareIcon from "./ShareIcon";

interface ModalProps {
    children: React.ReactNode;
    isOpen: boolean;
    onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ children, isOpen, onClose }) => {
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
        // Checks if the click is on the modal overlay itself and not its children
        if (e.target === e.currentTarget) {
            onClose();
        }
    };

    if (!isOpen) return null;

    return (
        <div id="modal-overlay" className="fixed inset-0 bg-black bg-opacity-90 flex justify-center items-center px-4 z-50 overflow-y-auto" onClick={handleOverlayClick}>
            <div className="relative">
                <div className="bg-transparent rounded-lg 2xl:w-[1300px] xl:w-[1100px] lg:w-[900px] md:w-[700px] overflow-y-auto transition-all duration-300" style={{ maxHeight: '90vh' }} onClick={(e) => e.stopPropagation()}>
                    {children}
                </div>
                <button onClick={onClose} className="text-xl font-bold absolute top-0 right-[-80px] bg-[#343434] hover:bg-[#696969] transition-all duration-300 text-white rounded-full w-10 h-10 shadow-lg">
                    &times;
                </button>
                <ShareIcon />
            </div>
        </div>
    );
};

export default Modal;
