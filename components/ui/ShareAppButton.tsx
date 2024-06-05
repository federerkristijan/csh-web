// components/ui/ShareAppButton.tsx

'use client';

import React, { useState } from 'react';
import ShareModal from './ShareModal';
import Image from 'next/image';
import Hand from '@/assets/hand.svg';

interface ShareAppButtonProps {}

const ShareAppButton: React.FC<ShareAppButtonProps> = () => {
  const [isShareModalOpen, setIsShareModalOpen] = useState(false);

  const handleShareClick = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    event.preventDefault();
    setIsShareModalOpen(true);
  };

  return (
    <>
      <a
        href="/"
        className="flex lg:text-primary items-center font-bold tracking-wide mx-2 w-fit text-center text-[16px] border-3 border-primary rounded-full px-6 py-3 hover:text-secondary"
        onClick={handleShareClick}
      >
        Share our app
        <Image
          src={Hand}
          alt="Hand icon"
          width={30}
          height={30}
        />
      </a>
      <ShareModal isOpen={isShareModalOpen} onClose={() => setIsShareModalOpen(false)} />
    </>
  );
};

export default ShareAppButton;
