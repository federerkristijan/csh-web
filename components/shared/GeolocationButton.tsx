'use client'

import { GeolocationButtonProps } from '@/types/global';
import React from 'react';
import Button from '../global/Button';
import handleGeolocationClick from '@/lib/functions/GeolocationCheck';

export const GeolocationButton: React.FC<GeolocationButtonProps> = ({ onClick }) => {


  return (
    <Button onClick={handleGeolocationClick} label="Check your location"/>
  );
};
