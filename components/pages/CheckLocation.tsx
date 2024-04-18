"use client";

import React, { useEffect, useState } from 'react';
import scrapeBubatzkarte from '@/app/api/scrape';

const CheckLocationPage: React.FC = () => {
  const [locationChecked, setLocationChecked] = useState<boolean>(false);
  const [userLocation, setUserLocation] = useState<{ latitude: number; longitude: number } | null>(null);

  console.log(scrapeBubatzkarte, "hohoho")

  return (
    <div>
      <h1>Check Location Page</h1>
      {!locationChecked ? (
        <p>Checking location...</p>
      ) : (
        <>
          <p>Location checked successfully!</p>
        </>
      )}
    </div>
  );
};

export default CheckLocationPage;
