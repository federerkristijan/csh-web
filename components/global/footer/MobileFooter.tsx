'use client';

import React, { useState } from 'react';
import { Menu } from '@headlessui/react';
import ShareModal from '@/components/ui/ShareModal';
import Image from 'next/image';
import Hamburger from '@/assets/hamburger.svg';

type Props = {};

const MobileFooter: React.FC<Props> = (props) => {
  const [isShareModalOpen, setIsShareModalOpen] = useState(false);

  const handleShareClick = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    event.preventDefault();
    setIsShareModalOpen(true);
  };

  const items = [
    {
      title: "T&(H)Cs",
      url: "/about-us",
    },
    {
      title: "Share our app",
      url: "/",
    },
    {
      title: "Rules on Berlin.de",
      url: "https://www.berlin.de/ba-friedrichshain-kreuzberg/politik-und-verwaltung/service-und-organisationseinheiten/bezirkliche-planung-und-koordinierung/planungs-und-koordinierungsstelle-gesundheit/artikel.243960.php",
    },
  ];

  return (
    <>
      <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button className="flex items-center p-2 text-sm font-medium text-primary bg-none rounded-md hover:bg-secondary">
            <Image
              src={Hamburger}
              className="ml-2 -mr-1 text-violet-200 hover:text-violet-100"
              aria-hidden="true"
              alt="Hamburger menu"
              width={40}
              height={28}
            />
          </Menu.Button>
        </div>
        <Menu.Items className="absolute right-0 z-10 mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg w-44 ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            {items.map((item, index) => (
              <Menu.Item key={index}>
                {({ active }) => (
                  <a
                    href={item.url}
                    className={`${
                      active ? 'bg-gray-100 text-gray-900' : 'text-gray-700'
                    } flex justify-between w-full px-4 py-2 text-sm`}
                    onClick={item.title === "Share our app" ? handleShareClick : undefined}
                  >
                    {item.title}
                  </a>
                )}
              </Menu.Item>
            ))}
          </div>
        </Menu.Items>
      </Menu>
      <ShareModal isOpen={isShareModalOpen} onClose={() => setIsShareModalOpen(false)} />
    </>
  );
};

export default MobileFooter;
