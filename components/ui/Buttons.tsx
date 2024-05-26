import React from 'react';
import Image from 'next/image';
import SearchIcon from '@/assets/Search.svg';

interface ButtonProps {
  type: 'primary' | 'secondary';
  text: string;
  onClick: () => void;
}

const buttonStyles = {
  primary: {
    normal: 'flex items-center justify-center gap-2 bg-[#C900A5] text-white px-6 py-4 rounded-full',
    hover: 'hover:bg-[#0BB257]',
  },
  secondary: {
    normal: 'flex items-center justify-center gap-2 bg-gray-300 text-black px-6 py-4 rounded-full border-1 border-[#C900A5] text-[#C900A5]',
    hover: 'hover:bg-gray-400 hover:border-[#0BB257] hover:text-[#0BB257]',
  },
};

const Button: React.FC<ButtonProps> = ({ type, text, onClick }) => {
  return (
    <button
      className={`${buttonStyles[type].normal} ${buttonStyles[type].hover}`}
      onClick={onClick}
    >
      <span className="font-bold">{text}</span>
      <Image src={SearchIcon} alt="Search" width={24} height={24} />
    </button>
  );
};

export default Button;
