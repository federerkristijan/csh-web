// @/components/pages/CheckLocation.tsx
import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import Result from "./Result";
import { getUserLocation } from "@/lib/getUserLocation";
import { isNearbySchoolOrKindergarten } from "@/utils/proximityCheck";
import { FacilitiesData } from "@/types/global";
import Image from "next/image";
import Location from "@/assets/location.svg";
import LocationUpdateTimer from "@/components/ui/LocationUpdateTimer";

const MapComponent = dynamic(() => import("./Map/MapComponent"), { ssr: false });

const CheckLocationPage: React.FC = () => {
  const [locationChecked, setLocationChecked] = useState<boolean>(false);
  const [userLocation, setUserLocation] = useState<{
    latitude: number;
    longitude: number;
  } | null>(null);
  const [canSmoke, setCanSmoke] = useState<boolean>(false);
  const [facilities, setFacilities] = useState<FacilitiesData[]>([]);
  const [lastUpdated, setLastUpdated] = useState<Date | null>(null);

  useEffect(() => {
    const checkLocation = async () => {
      try {
        const location = await getUserLocation();
        if (location) {
          setUserLocation(location);
          setLastUpdated(new Date());
          console.log(setLastUpdated, 'hihi')

          const { fetchSchoolsAndKindergartens } = await import(
            "@/lib/schoolData"
          );
          const facilitiesData = await fetchSchoolsAndKindergartens();

          if (facilitiesData.length > 0) {
            setFacilities(facilitiesData);
            const nearby = isNearbySchoolOrKindergarten(
              location.latitude,
              location.longitude,
              facilitiesData
            );
            setCanSmoke(!nearby);
          } else {
            setCanSmoke(true);
          }
        }
      } catch (error) {
        console.error("Error checking location:", error);
        setCanSmoke(false);
      }
      setLocationChecked(true);
    };

    checkLocation();
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
          {/* <span className="loader"></span> */}
        </div>
      </div>
    );
  } else if (!userLocation) {
    return <p>Error: Unable to fetch user location.</p>;
  }

  return (
    <div className="check-location-page flex flex-col items-center justify-center gap-6 h-[60vh]">
      <div className="result flex items-center justify-center">
        <Result canSmoke={canSmoke} />
      </div>
      <LocationUpdateTimer lastUpdated={lastUpdated} />
      <MapComponent
        userPosition={{
          lat: userLocation.latitude,
          lng: userLocation.longitude,
        }}
        facilities={facilities}
      />
    </div>
  );
};

export default CheckLocationPage;
