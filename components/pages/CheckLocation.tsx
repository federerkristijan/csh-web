// @/components/pages/CheckLocation.tsx
import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import Result from "./Result";
import { getUserLocation } from "@/lib/getUserLocation";
import { isNearbySchoolOrKindergarten } from "@/utils/proximityCheck";
import { FacilitiesData } from "@/types/global";
import Image from "next/image";
import Location from "@/assets/Location.svg";

const MapComponent = dynamic(() => import("./MapComponent"), { ssr: false });

const CheckLocationPage: React.FC = () => {
  const [locationChecked, setLocationChecked] = useState<boolean>(false);
  const [userLocation, setUserLocation] = useState<{
    latitude: number;
    longitude: number;
  } | null>(null);
  const [canSmoke, setCanSmoke] = useState<boolean>(false);
  const [facilities, setFacilities] = useState<FacilitiesData[]>([]);

  useEffect(() => {
    const checkLocation = async () => {
      try {
        const location = await getUserLocation();
        if (location) {
          setUserLocation(location);

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
        <div className="check-location flex flex-col items-center justify-center text-center w-fit text-2xl">
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
    <div className="check-location-page flex flex-col items-center justify-center gap-6 h-[90vh]">
      <div className="result flex items-center justify-center">
        <Result canSmoke={canSmoke} />
      </div>
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
