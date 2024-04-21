"use client";

import React, { useEffect, useState } from 'react';
import compareLocations from '@/app/api/compareLocations';
import { getUserLocation } from '@/app/api/userLocation';

const CheckLocationPage: React.FC = () => {
  const [locationChecked, setLocationChecked] = useState<boolean>(false);
  const [userLocation, setUserLocation] = useState<{ latitude: number; longitude: number } | null>(null);
  const [locationResult, setLocationResult] = useState<string>('');

  useEffect(() => {
    const checkLocation = async () => {
      try {
        // Get user's current location
        const location = await getUserLocation();
        if (location) {
          setUserLocation(location);
          // Compare user's location with schools
          const result = await compareLocations();
          setLocationResult(result);
          setLocationChecked(true);
        } else {
          setLocationResult('Unable to retrieve user location.');
          setLocationChecked(true);
        }
      } catch (error) {
        console.error('Error checking location:', error);
        setLocationResult('Error checking location.');
        setLocationChecked(true);
      }
    };

    checkLocation();
  }, []);

  return (
    <div>
      <h1>Check Location Page</h1>
      {!locationChecked ? (
        <p>Checking location...</p>
      ) : (
        <>
          <p>Location checked successfully!</p>
          <p>{locationResult}</p>
        </>
      )}
    </div>
  );
};

export default CheckLocationPage;
