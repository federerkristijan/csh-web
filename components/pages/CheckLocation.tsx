import React, { useEffect, useState } from "react";
import { getUserLocation } from "@/lib/getUserLocation";
import Result from "./Result";
import { isNearbySchoolOrKindergarten } from "@/utils/proximityCheck";
import { FacilitiesData } from "@/types/global";

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
          console.log("User Location:", location); // Log user location
          setUserLocation(location);

          // Dynamically import the module that fetches schools and kindergartens data
          const { fetchSchoolsAndKindergartens } = await import('@/lib/schoolData');
          const facilitiesData = await fetchSchoolsAndKindergartens();
          console.log("Schools and Kindergartens Data:", facilitiesData); // Log fetched data

          // Check if there are any facilities to proceed with the map function
          if (facilitiesData.length > 0) {
            const facilities = facilitiesData.map((el: FacilitiesData) => ({
              latitude: el.latitude,
              longitude: el.longitude,
            }));
            const nearby = isNearbySchoolOrKindergarten(
              location.latitude,
              location.longitude,
              facilities
            );
            console.log("Nearest school or kindergarten:", nearby ? "Found nearby facility" : "No nearby facility found");
            setCanSmoke(!nearby);
          } else {
            console.log("No facilities found");
            setCanSmoke(true); // Assume smoking is allowed if no nearby facilities are found
          }
        }
      } catch (error) {
        console.error("Error checking location:", error);
        setCanSmoke(false); // Assume smoking is not allowed if there is an error
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
          {/* Placeholder for loading spinner */}
          <span className="loader"></span>
        </div>
      ) : (
        <Result canSmoke={canSmoke} />
      )}
    </div>
  );
};

export default CheckLocationPage;
