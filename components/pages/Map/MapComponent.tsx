import React, { useEffect, useRef } from "react";
import { MapContainer, TileLayer, Marker } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import Image from "next/image";
import Smoker from "@/assets/smoker.svg";

interface MapComponentProps {
  userPosition: { lat: number; lng: number };
}

const MapComponent: React.FC<MapComponentProps> = ({ userPosition }) => {
  const mapRef = useRef<L.Map>(null);

  useEffect(() => {
    if (mapRef.current) {
      const map = mapRef.current;
      map.setView([userPosition.lat, userPosition.lng], 15);
    }
  }, [userPosition]);

  // Dynamically create the OSM URL
  const osmUrl = `https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png`;

  return (
    <div>
      <div style={{ height: "30vh", width: "30vw", borderRadius: "10px", border: "2px solid white" }}>
        <MapContainer
          center={[userPosition.lat, userPosition.lng]}
          zoom={15}
          style={{ height: "100%", width: "100%", borderRadius: "10px" }}
          ref={mapRef}
        >
          <TileLayer
            url={osmUrl}
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          <Marker position={[userPosition.lat, userPosition.lng]} icon={L.icon({
            iconUrl: Smoker.src,
            iconSize: [40, 40],
            iconAnchor: [20, 40],
            popupAnchor: [0, -40]
          })}>
          </Marker>
        </MapContainer>
      </div>
    </div>
  );
};

export default MapComponent;
