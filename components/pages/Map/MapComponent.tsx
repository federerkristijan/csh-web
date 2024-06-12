import React, { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import Smoker from "@/public/assets/Smoker.svg";
import { MapComponentProps } from '@/types/global';

// Dynamically import components from react-leaflet
const DynamicMapContainer = dynamic(
  () => import("react-leaflet").then((mod) => mod.MapContainer),
  { ssr: false }
);
const TileLayer = dynamic(
  () => import("react-leaflet").then((mod) => mod.TileLayer),
  { ssr: false }
);
const Marker = dynamic(
  () => import("react-leaflet").then((mod) => mod.Marker),
  { ssr: false }
);

const Circle = dynamic(() => import("react-leaflet").then(mod => mod.Circle), { ssr: false });

const getOverpassQuery = (userLat: number, userLon: number, radius: number) => `
  [out:json][timeout:1800];
  (
    node["amenity"="school"](around:${radius}, ${userLat}, ${userLon});
    way["amenity"="school"](around:${radius}, ${userLat}, ${userLon});
    relation["amenity"="school"](around:${radius}, ${userLat}, ${userLon});
    node["amenity"="kindergarten"](around:${radius}, ${userLat}, ${userLon});
    way["amenity"="kindergarten"](around:${radius}, ${userLat}, ${userLon});
    relation["amenity"="kindergarten"](around:${radius}, ${userLat}, ${userLon});
  );
  out body;
  >;
  out skel qt;
`;

const MapComponent: React.FC<MapComponentProps> = ({ userPosition, onPlacesFetched }) => {
  const mapRef = useRef<L.Map | null>(null);
  const [radius, setRadius] = useState(500); // Default radius
  const [places, setPlaces] = useState<any[]>([]);

  const fetchPlaces = async (query: string) => {
    const response = await fetch(
      `https://overpass-api.de/api/interpreter?data=${encodeURIComponent(
        query
      )}`
    );
    const data = await response.json();
    setPlaces(data.elements);
  };

  useEffect(() => {
    const query = getOverpassQuery(userPosition.lat, userPosition.lng, radius);
    fetchPlaces(query);
  }, [userPosition, radius]);

  useEffect(() => {
    if (places.length > 0) {
      onPlacesFetched(places);
    }
  }, [places, onPlacesFetched]);

  // Use a ref to store the map instance
  const handleMapReady = (mapInstance: L.Map) => {
    mapRef.current = mapInstance;
    mapInstance.setView([userPosition.lat, userPosition.lng], 18);
  };

  return (
    <div className="flex justify-center w-full">
      <div className="relative" style={{ height: "25vh", width: "60%", borderRadius: "10px" }}>
        {userPosition.lat && userPosition.lng && (
          <DynamicMapContainer
            center={[userPosition.lat, userPosition.lng]}
            zoom={18} // Fixed zoom level
            style={{ height: "50%", width: "100%", borderRadius: "10px" }}
            whenReady={() => handleMapReady}
          >
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            <Marker
              position={[userPosition.lat, userPosition.lng]}
              icon={L.icon({
                iconUrl: Smoker.src,
                iconSize: [40, 40],
                iconAnchor: [20, 40],
                popupAnchor: [0, -40],
              })}
            ></Marker>
            {places.map(
              (place) =>
                place.lat &&
                place.lon && (
                  <React.Fragment key={place.id}>
                      <Circle
                        center={[place.lat, place.lon]}
                        radius={100}
                        color="red"
                      />
                  </React.Fragment>
                )
            )}
          </DynamicMapContainer>
        )}
      </div>
    </div>
  );
};

export default MapComponent;
