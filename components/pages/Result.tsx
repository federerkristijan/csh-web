'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { ResultProps } from '@/types/global';
import YES from '@/public/assets/YES.svg';
import NO from '@/public/assets/NO.svg';
import { YesQuotes, NoQuotes } from '@/lib/quotes';

const Result: React.FC<ResultProps> = ({ canSmoke, closestDistance }) => {
  const [quote, setQuote] = useState('');

  useEffect(() => {
    const getQuotes = () => {
      if (canSmoke) {
        const randomYesQuote = YesQuotes[Math.floor(Math.random() * YesQuotes.length)];
        setQuote(randomYesQuote);
      } else {
        const randomNoQuote = NoQuotes[Math.floor(Math.random() * NoQuotes.length)];
        setQuote(randomNoQuote);
      }
    };

    getQuotes();
  }, [canSmoke]);

  useEffect(() => {
    console.log(`Result component received canSmoke: ${canSmoke}`);
  }, [canSmoke]);

  return (
    <div className="result">
      <h2 className="text-white">
        {canSmoke ? (
          <div className="flex flex-col items-center justify-center text-white">
            <Image src={YES} alt="yes" width={100} height={100} />
            <p className="result-text text-[27px] font-bold mt-[5px]">Yes, you can smoke here</p>
            <p className="quote text-[22px] bg-green-600 rounded-xl py-[10px] px-[10px] mt-[30px]">{quote}</p>
            {closestDistance !== null && (
              <p className="distance text-[18px] mt-[10px]">
                Closest restricted area is {Math.round(closestDistance)} meters away.
              </p>
            )}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center text-white">
            <Image src={NO} alt="no" width={100} height={100} />
            <p className="result-text text-[27px] font-bold mt-[5px]">You can NOT smoke here</p>
            <p className="quote text-[22px] bg-red-600 rounded-xl py-[10px] px-[10px] mt-[30px]">{quote}</p>
            {closestDistance !== null && (
              <p className="distance text-[18px] mt-[10px]">
                Closest restricted area is {Math.round(closestDistance)} meters away.
              </p>
            )}
          </div>
        )}
      </h2>
    </div>
  );
};

export default Result;
