'use client';

import React, { useState } from "react";
import ShareModal from "../ui/ShareModal";

type Props = {};

export default function Footer(props: Props) {
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
      // TODO: url share app
      url: "/",
    },
    // {
    //   title: "Rate our app",
    //   // TODO: url rate app
    //   url: "/",
    // },
    {
      title: "Rules on Berlin.de",
      // TODO: url gov rules
      url: "/",
    },
  ];

  return (
    <div className="flex fixed bottom-0 w-full justify-center">
       <div className="flex text-[1rem] pb-4 md:text-lg mx-2 ">
          {items.map((item, index) => (
            <div key={index}>
              {item.title === "Share our app" ? (
                <a
                  href={item.url}
                  className="flex lg:text-[#C900A5] mx-2 w-fit text-center"
                  onClick={handleShareClick}
                >
                  {item.title}
                </a>
              ) : (
                <a
                  href={item.url}
                  className="flex lg:text-[#C900A5] mx-2 w-fit text-center"
                >
                  {item.title}
                </a>
              )}
            </div>
          ))}
        </div>
        <ShareModal isOpen={isShareModalOpen} onClose={() => setIsShareModalOpen(false)} />
    </div>
  );
}
