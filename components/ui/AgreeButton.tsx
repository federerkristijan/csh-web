import React from 'react';
import Image from 'next/image';
import CannabisIcon from '@/public/assets/Cannabis.svg'; // Update with the correct path if necessary
import Button from './Buttons';

interface AgreeButtonProps {
  onClick: () => void;
}

const AgreeButton: React.FC<AgreeButtonProps> = ({ onClick }) => {
  return (
    <Button
      type="primary"
      text="I agree to T&(H)C"
      onClick={onClick}
      icon={CannabisIcon}
    />
  );
};

export default AgreeButton;
