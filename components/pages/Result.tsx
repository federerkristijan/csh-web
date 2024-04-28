import { ResultProps } from '@/types/global';
import React from 'react';

const Result: React.FC<ResultProps> = ({ canSmoke }) => {
  return (
    <div className="result">
      <h2 className="text-6xl font-bold text-white">
        {canSmoke ? 'You canna smoke here.' : 'No, you canna not smoke here.'}
      </h2>
    </div>
  );
};

export default Result;
