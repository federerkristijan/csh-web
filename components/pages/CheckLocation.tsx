// @/components/pages/CheckLocation.tsx
import React, { useEffect, useState } from "react";
import { getUserLocation } from "@/lib/getUserLocation";
import Result from "./Result";
import MapComponent from "./MapComponent";
import { isNearbySchoolOrKindergarten } from "@/utils/proximityCheck";
import { FacilitiesData } from "@/types/global";

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

          const { fetchSchoolsAndKindergartens } = await import('@/lib/schoolData');
          const facilitiesData = await fetchSchoolsAndKindergartens();

          if (facilitiesData.length > 0) {
            setFacilities(facilitiesData.map((el: any) => ({
              latitude: el.lat,
              longitude: el.lon,
            })));
            const nearby = isNearbySchoolOrKindergarten(
              location.latitude,
              location.longitude,
              facilities
            );
            setCanSmoke(!nearby);
          } else {
            setCanSmoke(true); // Assume smoking is allowed if no facilities
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
      <div className="text-center">
        <p>Checking location...</p>
        <span className="loader"></span>
      </div>
    );
  } else if (!userLocation) {
    return <p>Error: Unable to fetch user location.</p>; // Handle error state
  }

  return (
    <>
      <MapComponent userPosition={{ lat: userLocation.latitude, lng: userLocation.longitude }} facilities={facilities} />
      <Result canSmoke={canSmoke} />
    </>
  );
};

export default CheckLocationPage;
