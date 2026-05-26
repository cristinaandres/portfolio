'use client';
import React from 'react';
import { Modal, useDisclosure } from '@heroui/react';
import ModalContentProject from './ModalContentProject';
import { FaRegShareSquare } from 'react-icons/fa';

const ShareIcon = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  return (
    <>
      <button
        onClick={onOpen}
        className="text-xl font-bold absolute bottom-[-60px] right-0 lg:top-16 lg:right-[-80px] bg-[#3564ff] hover:bg-[#696969] transition-all duration-300 text-white rounded-full w-10 h-10 shadow-lg flex items-center justify-center"
      >
        <FaRegShareSquare />
      </button>
      <Modal backdrop="blur" isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContentProject />
      </Modal>
    </>
  );
};

export default ShareIcon;
