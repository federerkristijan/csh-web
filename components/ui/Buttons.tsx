import React from 'react';
import Image, { StaticImageData } from 'next/image';

interface ButtonProps {
  type: 'primary' | 'secondary';
  text: string;
  onClick: () => void;
  icon?: StaticImageData;
}

const buttonStyles = {
  primary: {
    normal: 'flex items-center justify-center gap-2 bg-primary text-white px-6 py-4 rounded-full',
    hover: 'hover:bg-secondary',
  },
  secondary: {
    normal: 'flex items-center justify-center gap-2 bg-gray-300 text-black px-6 py-4 rounded-full border-1 border-primary text-primary',
    hover: 'hover:bg-gray-400 hover:border-secondary hover:text-secondary',
  },
};

const Button: React.FC<ButtonProps> = ({ type, text, onClick, icon }) => {
  return (
    <button
      className={`${buttonStyles[type].normal} ${buttonStyles[type].hover}`}
      onClick={onClick}
    >
      <span className="font-bold">{text}</span>
      {icon && <Image src={icon} alt="Icon" width={24} height={24} />}
    </button>
  );
};

export default Button;
