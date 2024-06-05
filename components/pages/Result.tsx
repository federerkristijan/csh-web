'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { ResultProps } from '@/types/global';
import YES from '@/assets/YES.svg';
import NO from '@/assets/NO.svg';
import { YesQuotes, NoQuotes } from '@/lib/quotes';

const Result: React.FC<ResultProps> = ({ canSmoke }) => {
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

  return (
    <div className="result">
      <h2 className="text-white">
        {canSmoke ? (
          <div className="flex flex-col items-center justify-center text-white">
            <Image src={YES} alt="yes" width={100} height={100} />
            <p className="text-[27px] font-bold py-[10px]">Yes, you can smoke here</p>
            <p className="text-[22px] bg-green-600 rounded-xl py-[10px] px-[10px]">{quote}</p>
          </div>
        ) : (
          <div className="flex items-center justify-center text-white">
            <Image src={NO} alt="no" width={100} height={100} />
            <p className="text-[27px] font-bold py-[10px]">You can NOT smoke here</p>
            <p className="text-[22px] bg-red-600 rounded-xl py-[10px] px-[10px]">{quote}</p>
          </div>
        )}
      </h2>
    </div>
  );
};

export default Result;
