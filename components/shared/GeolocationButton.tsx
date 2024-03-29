import React from 'react';

const GeolocationButton: React.FC<{ onClick: () => void }> = ({ onClick }) => {
  return (
    <button onClick={onClick}>
      Check Location
    </button>
  );
};

export default GeolocationButton;
