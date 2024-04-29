import React, { useEffect, useState } from "react";
import { getUserLocation } from "@/app/api/user-location/route";
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

          // Force fetching schools and kindergartens data
          const { fetchSchoolsAndKindergartens } = await import("@/lib/schoolData");
          const facilitiesData = await fetchSchoolsAndKindergartens();
          console.log("Schools and Kindergartens Data:", facilitiesData); // Log fetched data

          const facilities = (facilitiesData as FacilitiesData[]).map(el => ({
            latitude: el.latitude,
            longitude: el.longitude,
          }));
          const nearby = isNearbySchoolOrKindergarten(
            location.latitude,
            location.longitude,
            facilities
          );
          console.log("Nearest school or kindergarten:", nearby ? "Found nearby facility" : "No nearby facility found"); // Log proximity check result

          setCanSmoke(!nearby);
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
          {/* Loading spinner from CSSLoaders */}
          <span className="loader"></span>
        </div>
      ) : (
        <Result canSmoke={canSmoke} />
      )}
    </div>
  );
};

export default CheckLocationPage;
