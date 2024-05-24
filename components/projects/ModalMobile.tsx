import React from 'react'
import { Modal, ModalBody } from '@nextui-org/react';
import ShareIcon from '../ShareIcon';
interface ModalProps {
    children: React.ReactNode;
    isOpen: boolean;
    onClose: () => void;
    index: number
}

const ModalMobile: React.FC<ModalProps> = ({ children, isOpen, onClose, index }) => {
    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            {isOpen && (
                <ModalBody>
                    <div className="relative">
                        <div className="bg-transparent rounded-lg 2xl:w-[1300px] xl:w-[1100px] lg:w-[900px] md:w-[700px] overflow-y-auto transition-all duration-300" style={{ maxHeight: '90vh' }} onClick={(e) => e.stopPropagation()}>
                            {children}
                        </div>

                        <ShareIcon />
                    </div>
                </ModalBody>
            )}
        </Modal>
    )
}

export default ModalMobile