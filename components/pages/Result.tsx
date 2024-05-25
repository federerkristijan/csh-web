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
      <h2 className="text-2xl font-bold text-white">
        {canSmoke ? (
          <div className="flex flex-col items-center justify-center text-white">
            <Image src={YES} alt="yes" width={80} height={80} />
            <p className="text-2xl font-bold py-4">Yes, you can smoke here</p>
            <p className="text-xl bg-green-600 rounded-2xl py-3 px-2">{quote}</p>
          </div>
        ) : (
          <div className="flex items-center justify-center text-white py-3">
            <Image src={NO} alt="no" width={80} height={80} />
            <p className="text-2xl font-bold">You can NOT smoke here</p>
            <p className="text-xl bg-red-600 rounded-2xl">{quote}</p>
          </div>
        )}
      </h2>
    </div>
  );
};

export default Result;
