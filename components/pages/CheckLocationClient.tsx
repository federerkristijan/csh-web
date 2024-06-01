'use client';

import React, { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import Result from '@/components/pages/Result';
import { getUserLocation } from '@/lib/getUserLocation';
import Image from 'next/image';
import Location from '@/assets/location.svg';
import LocationUpdateTimer from '@/components/ui/LocationUpdateTimer';
import Button from '../ui/Buttons';
import ShareAppButton from '../ui/ShareAppButton';

const MapComponent = dynamic(() => import('./Map/MapComponent'), {
  ssr: false,
});

const CheckLocationClient: React.FC = () => {
  const [locationChecked, setLocationChecked] = useState<boolean>(false);
  const [userLocation, setUserLocation] = useState<{ latitude: number; longitude: number } | null>(null);
  const [lastUpdated, setLastUpdated] = useState<Date | null>(null);

  useEffect(() => {
    const checkLocation = async () => {
      try {
        const location = await getUserLocation();
        if (location) {
          setUserLocation(location);
          setLastUpdated(new Date());
          console.log("Location allowed:", location);
          setLocationChecked(true);
          console.log('please Jesus show me where I am', location);
        }
      } catch (error) {
        console.error('Error checking location:', error);
        setLocationChecked(true);
      }
    };

    checkLocation();
  }, []);

  if (!locationChecked) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="check-location flex flex-col items-center justify-center text-center w-fit text-2xl bg-black bg-opacity-0 rounded-2xl p-1">
          <Image src={Location} alt="Checking location" width={100} height={100} />
          <p>Checking location...</p>
        </div>
      </div>
    );
  } else if (!userLocation) {
    return <p>Error: Unable to fetch user location.</p>;
  }

  return (
    <div className="check-location-page flex flex-col items-center gap-2 h-min md:h-[50vh]">
      <div className="result flex items-center justify-center text-center">
        <Result canSmoke={true} />
      </div>
      <LocationUpdateTimer lastUpdated={lastUpdated} />
      <Button
        type="primary"
        text="Check again"
        onClick={() => window.location.reload()}
      />
      <ShareAppButton />
      <MapComponent
        userPosition={{
          lat: userLocation.latitude,
          lng: userLocation.longitude,
        }}
      />
      <Button
        type="primary"
        text="Read more on Berlin.de"
        onClick={() => window.location.href = 'https://www.berlin.de/ba-friedrichshain-kreuzberg/politik-und-verwaltung/service-und-organisationseinheiten/bezirkliche-planung-und-koordinierung/planungs-und-koordinierungsstelle-gesundheit/artikel.243960.php'}
      />
    </div>
  );
};

export default CheckLocationClient;
