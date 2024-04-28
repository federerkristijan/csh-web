import React, { useEffect, useState } from "react";
import { getUserLocation } from "@/app/api/userLocation";
import Result from "./Result";
import { isNearbySchoolOrKindergarten } from "@/utils/proximityCheck";
import { FacilitesData } from "@/types/global";

const CheckLocationPage = () => {
  const [locationChecked, setLocationChecked] = useState<boolean>(false);
  const [userLocation, setUserLocation] = useState<{
    latitude: number;
    longitude: number;
  } | null>(null);
  const [canSmoke, setCanSmoke] = useState<boolean>(false);

  useEffect(() => {
    const checkLocation = async () => {
      try {
        const location = await getUserLocation();
        if (location) {
          setUserLocation(location);
          if (typeof window === "undefined") {
            // Dynamically import the server-specific module
            const { fetchSchoolsAndKindergartens } = await import(
              "@/lib/schoolData"
            );
            const facilitiesData = await fetchSchoolsAndKindergartens();
            const facilities = (facilitiesData as FacilitesData[]).map(
              (el) => ({
                latitude: el.latitude,
                longitude: el.longitude,
              })
            );
            const nearby = isNearbySchoolOrKindergarten(
              location.latitude,
              location.longitude,
              facilities
            );
            setCanSmoke(!nearby);
          }
        }
      } catch (error) {
        console.error("Error checking location:", error);
      }
      setLocationChecked(true);
    };

    checkLocation();
  }, []);

  return (
    <div className="flex justify-center items-center h-screen text-gray-800">
    {!locationChecked ? (
      <div className="text-center">
        <p>Checking location...</p>
        {/* https://cssloaders.github.io/ */}
        <span className="loader"></span>
      </div>
    ) : (
      <Result canSmoke={canSmoke} />
    )}
  </div>
  );
};

export default CheckLocationPage;
