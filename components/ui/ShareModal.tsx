// @/components/ShareModal.tsx
import React from 'react';
import { FacebookShareButton, TwitterShareButton, WhatsappShareButton, FacebookIcon, TwitterIcon, WhatsappIcon, TelegramShareButton, TelegramIcon, RedditShareButton, RedditIcon } from 'next-share';
import { ShareModalProps } from '@/types/global';
import CopyLink from '@/assets/link.png'
import Image from 'next/image';



const ShareModal: React.FC<ShareModalProps> = ({ isOpen, onClose }) => {
  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href).then(() => {
      alert('Link copied to clipboard');
    }).catch((err) => {
      console.error('Failed to copy: ', err);
    });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-11/12 max-w-lg mx-auto">
        <h2 className="text-2xl mb-4 text-black">Share this page</h2>
        <div className="flex justify-around mb-4">
          <FacebookShareButton url={window.location.href}>
            <FacebookIcon size={48} round />
          </FacebookShareButton>
          <TwitterShareButton url={window.location.href}>
            <TwitterIcon size={48} round />
          </TwitterShareButton>
          <WhatsappShareButton url={window.location.href}>
            <WhatsappIcon size={48} round />
          </WhatsappShareButton>
          <TelegramShareButton url={window.location.href}>
            <TelegramIcon size={48} round />
          </TelegramShareButton>
          <RedditShareButton url={window.location.href}>
            <RedditIcon size={48} round />
          </RedditShareButton>
          <button onClick={handleCopyLink} className="flex items-center justify-center p-2 rounded-full bg-gray-200 hover:bg-gray-300">
            <Image src={CopyLink} alt="Copy link" width={24} height={24} />
          </button>
        </div>
        <button onClick={onClose} className="mt-4 bg-primary text-white py-2 px-4 rounded">
          Close
        </button>
      </div>
    </div>
  );
};

export default ShareModal;
