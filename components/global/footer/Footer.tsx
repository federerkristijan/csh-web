'use client';

import React, { useState } from "react";
import ShareModal from "../../ui/ShareModal";

type Props = {};

export default function Footer(props: Props) {
  const [isShareModalOpen, setIsShareModalOpen] = useState(false);

  //  TODO: CLEAN code, extract handleShareClick form ShareAppButton.tsx
  const handleShareClick = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    event.preventDefault();
    setIsShareModalOpen(true);
  };

  const items = [
    {
      title: "T&(H)Cs",
      url: "/t&hcs",
    },
    {
      title: "Share our app",
      url: "/",
    },
    // {
    //   title: "Rate our app",
    //   // TODO: url rate app
    //   url: "/",
    // },
    {
      title: "Rules on Berlin.de",
      url: "/https://www.berlin.de/ba-friedrichshain-kreuzberg/politik-und-verwaltung/service-und-organisationseinheiten/bezirkliche-planung-und-koordinierung/planungs-und-koordinierungsstelle-gesundheit/artikel.243960.php",
    },
  ];

  return (
    <footer className="flex sticky bottom-0 w-full justify-center bg-[#060606]">
       <div className="flex text-[16px] py-2 mx-2 ">
          {items.map((item, index) => (
            <div key={index}>
              {item.title === "Share our app" ? (
                <a
                  href={item.url}
                  className="flex lg:text-primary mx-2 w-fit text-center"
                  onClick={handleShareClick}
                >
                  {item.title}
                </a>
              ) : (
                <a
                  href={item.url}
                  className="flex lg:text-primary mx-2 w-fit text-center"
                >
                  {item.title}
                </a>
              )}
            </div>
          ))}
        </div>
        <ShareModal isOpen={isShareModalOpen} onClose={() => setIsShareModalOpen(false)} />
    </footer>
  );
}
