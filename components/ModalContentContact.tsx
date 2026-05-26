import React from 'react';
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from '@heroui/react';
import Email from './Logos/Email';
import Appointment from './Logos/Appointment';

const ModalContentContact = () => {
  return (
    <>
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col gap-1">Contact</ModalHeader>
            <ModalBody>
              <div className="flex flex-col gap-2">
                <a
                  href="mailto:cristina.andresrr@gmail.com"
                  className="flex gap-4 px-4 py-3 items-center rounded-lg hover:bg-black/5 transition-all duration-300"
                >
                  <div className="scale-90">
                    <Email />
                  </div>
                  <span>cristina.andresrr@gmail.com</span>
                </a>
                <a
                  href="https://calendly.com/cristina-andresrr/30min"
                  target="_blank"
                  className="flex gap-4 px-4 py-3 items-center rounded-lg hover:bg-black/5 transition-all duration-300"
                >
                  <div className="scale-90">
                    <Appointment />
                  </div>
                  <span>Book an appointment</span>
                </a>
              </div>
            </ModalBody>
            <ModalFooter>
              <Button color="danger" variant="light" onPress={onClose}>
                Close
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </>
  );
};

export default ModalContentContact;
