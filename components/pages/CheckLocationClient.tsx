'use client';

import React, { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import Result from '@/components/pages/Result';
import { getUserLocation } from '@/lib/getUserLocation';
import Image from 'next/image';
import Location from '@/public/assets/location.svg';
import LocationUpdateTimer from '@/components/ui/LocationUpdateTimer';
import Button from '../ui/Buttons';
import ShareAppButton from '../ui/ShareAppButton';
import Search from '@/public/assets/Search.svg';
import L from 'leaflet';
import { isIOSSafari } from '@/lib/detectIOS';
// import SeedsmanBanner1 from '../global/SeedsmanBanner1';

const MapComponent = dynamic(() => import('./Map/MapComponent'), {
  ssr: false,
});

const CheckLocationClient: React.FC = () => {
  const [locationChecked, setLocationChecked] = useState<boolean>(false);
  const [userLocation, setUserLocation] = useState<{ latitude: number; longitude: number } | null>(null);
  const [lastUpdated, setLastUpdated] = useState<Date | null>(null);
  const [places, setPlaces] = useState<any[]>([]);
  const [canSmoke, setCanSmoke] = useState<boolean>(true);
  const [closestDistance, setClosestDistance] = useState<number | null>(null);
  const [isIOSSafariUser, setIsIOSSafariUser] = useState<boolean>(false);

  useEffect(() => {
    setIsIOSSafariUser(isIOSSafari());

    const checkLocation = async () => {
      try {
        const location = await getUserLocation();
        if (location) {
          setUserLocation(location);
          setLastUpdated(new Date());
          console.log("Location allowed:", location);
          setLocationChecked(true);
          console.log('User location:', location);
        }
      } catch (error) {
        console.error('Error checking location:', error);
        setLocationChecked(true);
      }
    };

    checkLocation();
  }, []);

  useEffect(() => {
    if (places.length > 0 && userLocation) {
      let minDistance = Infinity;
      const isProhibited = places.some(place => {
        if (!place.lat || !place.lon) {
          return false;
        }
        const distance = L.latLng(userLocation.latitude, userLocation.longitude).distanceTo(L.latLng(place.lat, place.lon));
        if (distance < minDistance) {
          minDistance = distance;
        }
        const withinProhibitedZone = distance <= 100;
        console.log(`Place ID: ${place.id}, Distance: ${distance}, Within Prohibited Zone: ${withinProhibitedZone}`);
        return withinProhibitedZone;
      });
      setClosestDistance(minDistance);
      setCanSmoke(!isProhibited);
      console.log('Smoking allowed:', !isProhibited);
    }
  }, [places, userLocation]);

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
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="flex flex-col items-center justify-center text-center w-fit text-2xl bg-black bg-opacity-0 rounded-2xl p-1">
          <Image src={Location} alt="Location error" width={100} height={100} />
          {isIOSSafariUser ? (
            <p>Error: Unable to fetch user location on iOS Safari. Please enable location services or try a different browser.</p>
          ) : (
            <p>Error: Unable to fetch user location.</p>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="check-location-page flex flex-col items-center space-y-[30px] h-min md:h-fit pb-4">
      <div className="result flex items-center justify-center text-center pt-[45px]">
        <Result canSmoke={canSmoke} closestDistance={closestDistance} />
      </div>
      <LocationUpdateTimer lastUpdated={lastUpdated} />
      <Button
        type="primary"
        text="Check again"
        onClick={() => window.location.reload()}
        icon={Search}
      />
      <ShareAppButton />
      <MapComponent
        userPosition={{
          lat: userLocation.latitude,
          lng: userLocation.longitude,
        }}
        onPlacesFetched={setPlaces}
      />
      <Button
        type="primary"
        text="Read more on Berlin.de"
        onClick={() => window.location.href = 'https://www.berlin.de/ba-friedrichshain-kreuzberg/politik-und-verwaltung/service-und-organisationseinheiten/bezirkliche-planung-und-koordinierung/planungs-und-koordinierungsstelle-gesundheit/artikel.243960.php'}
      />
      {/* <SeedsmanBanner1/> */}
    </div>
  );
};

export default CheckLocationClient;
