import React from 'react';
import Image from 'next/image';
import CannabisIcon from '@/assets/Cannabis.svg'; // Update with the correct path if necessary

interface AgreeButtonProps {
  onClick: () => void;
}

const AgreeButton: React.FC<AgreeButtonProps> = ({ onClick }) => {
  return (
    <button
      className="flex items-center justify-center gap-2 bg-[#C900A5] text-white px-6 py-4 rounded-full hover:bg-[#A50089]"
      onClick={onClick}
    >
      <span className="font-bold">I agree to T&(H)C</span>
      <Image src={CannabisIcon} alt="Cannabis Icon" width={24} height={24} />
    </button>
  );
};

export default AgreeButton;
