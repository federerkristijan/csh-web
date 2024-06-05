'use client';

import React, { useState } from 'react';
import ShareModal from './ShareModal';
import Image from 'next/image';
import Hand from '@/assets/hand.svg';
import HandHover from '@/assets/hand2.svg';

interface ShareAppButtonProps {}

const ShareAppButton: React.FC<ShareAppButtonProps> = () => {
  const [isShareModalOpen, setIsShareModalOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleShareClick = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    event.preventDefault();
    setIsShareModalOpen(true);
  };

  return (
    <>
      <a
        href="/"
        className="flex items-center font-bold tracking-wide mx-2 w-fit text-center text-[16px] border-3 border-primary rounded-full px-6 py-3 text-primary hover:text-secondary hover:border-secondary"
        onClick={handleShareClick}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        Share our app
        <span className="ml-2 transition-colors duration-300 ease-in-out bg-none">
          {isHovered ? (
            <Image
              src={HandHover}
              alt="Hand icon hover"
              width={30}
              height={30}
              className='bg-transparent'
            />
          ) : (
            <Image
              src={Hand}
              alt="Hand icon"
              width={30}
              height={30}
            />
          )}
        </span>
      </a>
      <ShareModal isOpen={isShareModalOpen} onClose={() => setIsShareModalOpen(false)} />
    </>
  );
};

export default ShareAppButton;
