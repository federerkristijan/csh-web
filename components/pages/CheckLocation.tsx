"use client";

import React, { useEffect, useState } from 'react';

const CheckLocationPage: React.FC = () => {
  const [locationChecked, setLocationChecked] = useState<boolean>(false);
  const [userLocation, setUserLocation] = useState<{ latitude: number; longitude: number } | null>(null);

  useEffect(() => {
    const checkLocation = async () => {
      if (!userLocation) {
        const location = await getUserLocation();
        setUserLocation(location);
      }

      if (userLocation) {
        const isNearSchool = isNearSchoolOrDaycare(userLocation);
        setLocationChecked(true);
      }
    };

    checkLocation();
  }, [userLocation]);

  const isNearSchoolOrDaycare = (location: { latitude: number; longitude: number }): boolean => {
    // Example: Assuming user is near a school or daycare if latitude is greater than 52.52 (Berlin) and longitude is less than 13.405 (Berlin)
    return location.latitude > 52.52 && location.longitude < 13.405;
  };

  return (
    <div>
      <h1>Check Location Page</h1>
      {!locationChecked ? (
        <p>Checking location...</p>
      ) : (
        <>
          <p>Location checked successfully!</p>
          <p>{isNearSchoolOrDaycare(userLocation!) ? 'You cannot smoke, you are near a school or daycare.' : 'Yes, you canna smoke here, you are not near a school or daycare.'}</p>
        </>
      )}
    </div>
  );
};

const getUserLocation = async (): Promise<{ latitude: number; longitude: number } | null> => {
  return new Promise((resolve, reject) => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const userLocation = {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          };
          console.log(userLocation, "I'm here");
          resolve(userLocation);
        },
        (error) => {
          console.error('Error getting user location:', error);
          reject(null);
        }
      );
    } else {
      console.error('Geolocation is not supported by this browser.');
      reject(null);
    }
  });
};


export default CheckLocationPage;
