import React, { useEffect, useRef } from "react";
import { Loader } from "@googlemaps/js-api-loader";

interface MapComponentProps {
  userPosition: { lat: number; lng: number };
  places: any[];
}

const MapComponent: React.FC<MapComponentProps> = ({ userPosition, places }) => {
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const loader = new Loader({
      apiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!,
      version: "weekly",
      libraries: ["places"]
    });

    loader.load().then(() => {
      if (mapRef.current) {
        const { Map, Marker } = google.maps;

        const map = new Map(mapRef.current, {
          center: userPosition,
          zoom: 15,
        });

        // Add the user's location marker
        new Marker({
          map,
          position: userPosition,
        });

        // Add markers for the places
        places.forEach((place: any) => {
          new Marker({
            map,
            position: {
              lat: place.geometry.location.lat,
              lng: place.geometry.location.lng,
            },
          });
        });
      }
    });
  }, [userPosition, places]);

  return <div ref={mapRef} style={{ height: "35vh", width: "100%", borderRadius: "1rem" }} />;
};

export default MapComponent;
