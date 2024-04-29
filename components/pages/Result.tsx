import React from 'react';
import Image from 'next/image';
import { ResultProps } from '@/types/global';
import YES from '@/assets/yes.svg';
import NO from '@/assets/no.svg';

const Result: React.FC<ResultProps> = ({ canSmoke }) => {
  return (
    <div className="result">
      <h2 className="text-6xl font-bold text-white">
        {canSmoke ? <Image src={YES} alt="yes" width={150} height={150} /> : <Image src={YES} alt="yes" width={150} height={150} />}
      </h2>
    </div>
  );
};

export default Result;
