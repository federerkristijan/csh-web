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
      libraries: ["marker"],
    });

    loader.load().then(() => {
      if (mapRef.current) {
        const { Map, Marker, Circle } = google.maps;

        const map = new Map(mapRef.current, {
          center: userPosition,
          zoom: 15,
          mapTypeControl: false,
        });

        // Add the user's location marker
        new Marker({
          map,
          position: userPosition,
          title: "You are here",
        });

        // Add circles for the places
        places.forEach((place: any) => {
          new Circle({
            map,
            center: {
              lat: place.geometry.location.lat,
              lng: place.geometry.location.lng,
            },
            radius: 100, // radius in meters
            strokeColor: "#FF0000",
            strokeOpacity: 0.8,
            strokeWeight: 2,
            fillColor: "#FF0000",
            fillOpacity: 0.35,
          });
        });
      }
    });
  }, [userPosition, places]);

  return <div className="map" ref={mapRef} style={{ height: "40vh", width: "50%", borderRadius: "1rem" }} />;
};

export default MapComponent;
