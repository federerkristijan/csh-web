'use client';

import React, { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import Result from '@/components/pages/Result';
import { getUserLocation } from '@/lib/getUserLocation';
import Image from 'next/image';
import Location from '@/assets/location.svg';
import LocationUpdateTimer from '@/components/ui/LocationUpdateTimer';

const MapComponent = dynamic(() => import('./Map/MapComponent'), {
  ssr: false,
});

interface CheckLocationClientProps {
  initialGeoJsonData: any;
}

const CheckLocationClient: React.FC = () => {
  const [locationChecked, setLocationChecked] = useState<boolean>(false);
  const [userLocation, setUserLocation] = useState<{
    latitude: number;
    longitude: number;
  } | null>(null);
  const [geoJsonData, setGeoJsonData] = useState<any>(null);
  const [lastUpdated, setLastUpdated] = useState<Date | null>(null);

  useEffect(() => {
    const checkLocation = async () => {
      try {
        const location = await getUserLocation();
        if (location) {
          setUserLocation(location);
          setLastUpdated(new Date());
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
    const fetchGeoJsonData = async () => {
      const geoJsonUrl = process.env.NEXT_PUBLIC_GEOJSON_URL;
      if (!geoJsonUrl) {
        console.error('GeoJSON URL is not defined');
        return;
      }
      try {
        const response = await fetch(geoJsonUrl);
        console.log(response.ok, 'Response OK');
        if (!response.ok) {
          console.log('Failed to fetch GeoJSON data:', response.status, response.statusText);
          throw new Error('Failed to fetch GeoJSON data');
        }
        const text = await response.text();
        console.log('Fetched Data:', text);
        try {
          const data = JSON.parse(text);
          console.log('GeoJSON Data:', data);
          setGeoJsonData(data);
        } catch (jsonError) {
          console.error('JSON Parse Error:', jsonError);
        }
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchGeoJsonData();
  }, []);

  if (!locationChecked) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="check-location flex flex-col items-center justify-center text-center w-fit text-2xl bg-black bg-opacity-0 rounded-2xl p-1">
          <Image
            src={Location}
            alt="Checking location"
            width={100}
            height={100}
          />
          <p>Checking location...</p>
        </div>
      </div>
    );
  } else if (!userLocation) {
    return <p>Error: Unable to fetch user location.</p>;
  }

  return (
    <div className="check-location-page flex flex-col items-center justify-center gap-6 h-[90vh]">
      <div className="result flex items-center justify-center">
        <Result canSmoke={true} />
      </div>
      <LocationUpdateTimer lastUpdated={lastUpdated} />
      {geoJsonData && (
        <MapComponent
          userPosition={{
            lat: userLocation.latitude,
            lng: userLocation.longitude,
          }}
          geoJsonData={geoJsonData}
        />
      )}
    </div>
  );
};

export default CheckLocationClient;
