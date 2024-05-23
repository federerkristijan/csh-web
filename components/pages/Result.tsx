import React from "react";
import Image from "next/image";
import { ResultProps } from "@/types/global";
import YES from "@/assets/YES.svg";
import NO from "@/assets/NO.svg";

const Result: React.FC<ResultProps> = ({ canSmoke }) => {
  return (
    <div className="result">
      <h2 className="text-2xl font-bold text-white">
        {canSmoke ? (
          <div className="flex flex-col items-center justify-center text-white">
            <Image src={YES} alt="yes" width={80} height={80} />
            <p className="text-2xl font-bold py-4">Yes, you can smoke here</p>
            <p className="text-xl bg-green-600 rounded-2xl py-3 px-2">The name is Bong, James Bong</p>
          </div>
        ) : (
          <div className="flex items-center justify-center text-white py-3">
            <Image src={NO} alt="yes" width={80} height={80} />
            <p className="text-2xl font-bold">You can NOT smoke here</p>
            <p className="text-xl bg-red rounded-2xl">You gotta move to stay high-drated</p>
          </div>
        )}
      </h2>
    </div>
  );
};

export default Result;
