'use client';

import React, { useEffect, useState } from 'react';
import { ModalContent, ModalHeader, ModalBody, ModalFooter, Button, Tooltip } from '@heroui/react';
import { MdContentCopy } from 'react-icons/md';
import { Toaster, toast } from 'sonner';

import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
  LinkedinShareButton,
  LinkedinIcon,
  WhatsappShareButton,
  WhatsappIcon,
  EmailShareButton,
  EmailIcon,
} from 'next-share';

const ModalContentSocials = () => {
  const [currentUrl, setCurrentUrl] = useState('');

  useEffect(() => {
    const url = window.location.origin;
    setCurrentUrl(url);
  }, []);

  const textToCopy = currentUrl;

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(textToCopy);
      toast.success('Link succesfully copied to clipboard');
    } catch (err) {
      console.error('Failed to copy: ', err);
      toast.success('Failed to copy!');
    }
  };

  return (
    <>
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col gap-1">Share this</ModalHeader>
            <ModalBody>
              <div className="flex flex-col gap-8">
                <div className="flex gap-4">
                  <Tooltip content="Twitter/X">
                    <div className="flex items-center justify-center">
                      <TwitterShareButton
                        url={currentUrl}
                        title={'Go see Cristinas Portfolio ASAP !'}
                        hashtags={['portfolio', 'cristinaandres', 'design', 'uxdesigner']}
                      >
                        <TwitterIcon
                          className="hover:opacity-80 hover:scale-105 transition-all duration-300"
                          size={46}
                          round
                        />
                      </TwitterShareButton>
                    </div>
                  </Tooltip>

                  <Tooltip content="LinkedIn">
                    <div className="flex items-center justify-center">
                      <LinkedinShareButton url={currentUrl}>
                        <LinkedinIcon
                          className="hover:opacity-80 hover:scale-105 transition-all duration-300"
                          size={46}
                          round
                        />
                      </LinkedinShareButton>
                    </div>
                  </Tooltip>

                  <Tooltip content="Email">
                    <div className="flex items-center justify-center">
                      <EmailShareButton
                        url={currentUrl}
                        subject={'Go see Cristinas Portfolio ASAP !'}
                        body="Here is the brand new portfolio from Cristina Andres ! "
                      >
                        <EmailIcon
                          className="hover:opacity-80 hover:scale-105 transition-all duration-300"
                          size={46}
                          round
                        />
                      </EmailShareButton>
                    </div>
                  </Tooltip>

                  <Tooltip content="Facebook">
                    <div className="flex items-center justify-center">
                      <FacebookShareButton
                        url={currentUrl}
                        quote={''}
                        hashtag={'#portfolio#cristinaandres#design#uxdesigner'}
                      >
                        <FacebookIcon
                          className="hover:opacity-80 hover:scale-105 transition-all duration-300"
                          size={46}
                          round
                        />
                      </FacebookShareButton>
                    </div>
                  </Tooltip>

                  <Tooltip content="WhatsApp">
                    <div className="flex items-center justify-center">
                      <WhatsappShareButton
                        url={currentUrl}
                        title={'Go see Cristinas Portfolio ASAP !'}
                        separator={'\n'}
                      >
                        <WhatsappIcon
                          className="hover:opacity-80 hover:scale-105 transition-all duration-300"
                          size={46}
                          round
                        />
                      </WhatsappShareButton>
                    </div>
                  </Tooltip>
                </div>
                <div className="flex justify-between px-3 py-2 border border-black/10 rounded-lg">
                  <p className="w-full">{currentUrl}</p>
                  <button onClick={copyToClipboard} className="">
                    <MdContentCopy
                      size={22}
                      className="hover:opacity-80 hover:scale-105 transition-all duration-150"
                    />
                  </button>
                </div>
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

export default ModalContentSocials;
