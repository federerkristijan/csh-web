/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import Smoker from "@/public/assets/Smoker.svg";
import { MapComponentProps } from "@/types/global";

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

const Circle = dynamic(
  () => import("react-leaflet").then((mod) => mod.Circle),
  { ssr: false }
);

const getOverpassQuery = (userLat: number, userLon: number, radius: number) => `
  [out:json][timeout:1800];
  (
    node["amenity"="school"](around:${radius}, ${userLat}, ${userLon});
    way["amenity"="school"](around:${radius}, ${userLat}, ${userLon});
    relation["amenity"="school"](around:${radius}, ${userLat}, ${userLon});
    node["amenity"="kindergarten"](around:${radius}, ${userLat}, ${userLon});
    way["amenity"="kindergarten"](around:${radius}, ${userLat}, ${userLon});
    relation["amenity"="kindergarten"](around:${radius}, ${userLat}, ${userLon});
    node["amenity"="playground"](around:${radius}, ${userLat}, ${userLon});
    way["amenity"="playground"](around:${radius}, ${userLat}, ${userLon});
    relation["amenity"="playground"](around:${radius}, ${userLat}, ${userLon});
    node["leisure"="sports_centre"](around:${radius}, ${userLat}, ${userLon});
    way["leisure"="sports_centre"](around:${radius}, ${userLat}, ${userLon});
    relation["leisure"="sports_centre"](around:${radius}, ${userLat}, ${userLon});
  );
  out body;
  >;
  out skel qt;
`;

const MapComponent: React.FC<MapComponentProps> = ({
  userPosition,
  onPlacesFetched,
}) => {
  const mapRef = useRef<L.Map | null>(null);
  const [radius] = useState(500); // Default radius
  const [places, setPlaces] = useState<any[]>([]);
  const [initialized, setInitialized] = useState(false);

  const fetchPlaces = async (query: string) => {
    try {
      const response = await fetch(
        `https://overpass-api.de/api/interpreter?data=${encodeURIComponent(
          query
        )}`
      );
      if (!response.ok) {
        throw new Error(`Error fetching data: ${response.statusText}`);
      }
      const data = await response.json();
      setPlaces(data.elements);
      onPlacesFetched(data.elements);
    } catch (error) {
      console.error("Failed to fetch places:", error);
    }
  };

  useEffect(() => {
    if (!initialized) {
      const query = getOverpassQuery(
        userPosition.lat,
        userPosition.lng,
        radius
      );
      fetchPlaces(query);
      setInitialized(true);
    }
  }, [initialized, userPosition, radius]); // Only run when initialized, userPosition, or radius changes

  const handleMapReady = (mapInstance: L.Map) => {
    mapRef.current = mapInstance;
    mapInstance.setView([userPosition.lat, userPosition.lng], 18);
  };

  return (
    <div className="flex justify-center w-full">
      <div
        className="relative"
        style={{ height: "25vh", width: "60%", borderRadius: "10px" }}
      >
        {userPosition.lat && userPosition.lng && (
          <DynamicMapContainer
            center={[userPosition.lat, userPosition.lng]}
            zoom={18}
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
