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
    {
      title: "Rate our app",
      // TODO: url rate app
      url: "/",
    },
    {
      title: "Gov rules on Berlin.de",
      // TODO: url gov rules
      url: "/",
    },
  ];

  return (
    <div className="fixed bottom-0 w-full flex justify-center mx-auto">
      <div className="flex gap-4 text-2xl pb-12">
        {items.map((item, index) => (
          <a key={index} href={item.url} className="text-[#C900A5]">
            {item.title}
          </a>
        ))}
      </div>
    </div>
  );
}
