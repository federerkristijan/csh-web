'use client';

import React, { useEffect } from "react";

const AdSection = () => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      try {
        (window as any).adsbygoogle = (window as any).adsbygoogle || [];
        (window as any).adsbygoogle.push({});
      } catch (e) {
        console.error("AdSense error:", e);
      }
    }
  }, []);

  return (
    <section className="ad-section bg-gray-700 p-2 text-center opacity-80 border-2 border-red">
      <ins
        className="adsbygoogle"
        style={{ display: "block" }}
        data-ad-client="ca-pub-5001082863117848"
        data-ad-slot="3222260135"
        data-ad-format="auto"
        data-full-width-responsive="true"
      ></ins>
    </section>
  );
};

export default AdSection;
