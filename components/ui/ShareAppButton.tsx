// components/ui/ShareAppButton.tsx

'use client';

import React, { useState } from 'react';
import ShareModal from './ShareModal';

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
        className="flex lg:text-primary mx-2 w-fit text-center text-[16px] border-3 border-primary rounded-full px-6 py-3 hover:text-secondary"
        onClick={handleShareClick}
      >
        Share our app
      </a>
      <ShareModal isOpen={isShareModalOpen} onClose={() => setIsShareModalOpen(false)} />
    </>
  );
};

export default ShareAppButton;
