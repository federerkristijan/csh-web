import React from "react";

type Props = {};

export default function Footer(props: Props) {
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
    <div className="flex fixed bottom-0 w-full justify center">
      <div className="flex lg:text-2xl pb-4 md:text-lg mx-2 font-semibold">
        {items.map((item, index) => (
          <div key={index}>
          <a  href={item.url} className="flex lg:text-[#C900A5] mx-2 w-fit text-center">
            {item.title}
          </a>
          </div>
        ))}
      </div>
    </div>
  );
}
