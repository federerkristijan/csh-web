'use client'

import { GeolocationButtonProps } from '@/types/global';
import GeolocationCheck from "@/lib/functions/GeolocationCheck";
import React from 'react';

function GeolocationButton() {

  function handleGeolocationClick() {
    // navigator.geolocation.getCurrentPosition((position) => {
    //   console.log("Latitude is :", position.coords.latitude);
    //   console.log("Longitude is :", position.coords.longitude);
    // });
    console.log('click mother fucker')
  }

  return (
    <button onClick={handleGeolocationClick}>
      Check Location
    </button>
  );
};

export default GeolocationButton;
