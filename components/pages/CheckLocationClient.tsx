'use client';

import React, { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import Result from '@/components/pages/Result';
import { getUserLocation } from '@/lib/getUserLocation';
import Image from 'next/image';
import Location from '@/assets/location.svg';
import LocationUpdateTimer from '@/components/ui/LocationUpdateTimer';
import { getNearbySchoolsAndKindergartens } from '@/lib/googleMapsApi';

const MapComponent = dynamic(() => import('./Map/MapComponent'), {
  ssr: false,
});

const CheckLocationClient: React.FC = () => {
  const [locationChecked, setLocationChecked] = useState<boolean>(false);
  const [userLocation, setUserLocation] = useState<{
    latitude: number;
    longitude: number;
  } | null>(null);
  const [places, setPlaces] = useState<any[]>([]);
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
        }
      } catch (error) {
        console.error('Error checking location:', error);
        setLocationChecked(true);
      }
    };

    checkLocation();
  }, []);

  useEffect(() => {
    const fetchNearbyPlaces = async () => {
      if (userLocation) {
        try {
          const places = await getNearbySchoolsAndKindergartens(
            userLocation.latitude,
            userLocation.longitude
          );
          console.log('Fetched places:', places);
          setPlaces(places);
        } catch (error) {
          console.error('Error fetching nearby places:', error);
        }
      }
    };

    fetchNearbyPlaces();
  }, [userLocation]);

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
    <div className="check-location-page flex flex-col items-center gap-6 h-[90vh]">
      <div className="result flex items-center justify-center">
        <Result canSmoke={true} />
      </div>
      <LocationUpdateTimer lastUpdated={lastUpdated} />
      <MapComponent
        userPosition={{
          lat: userLocation.latitude,
          lng: userLocation.longitude,
        }}
        places={places}
      />
    </div>
  );
};

export default CheckLocationClient;
