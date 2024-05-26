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
    normal: 'flex items-center justify-center gap-2 bg-[#0AB157] text-white px-6 py-4 rounded-full',
    hover: 'hover:bg-[#0A9145]',
  },
  secondary: {
    normal: 'flex items-center justify-center gap-2 bg-gray-300 text-black px-6 py-4 rounded-full',
    hover: 'hover:bg-gray-400',
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
