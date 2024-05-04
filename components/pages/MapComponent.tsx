// @/components/pages/MapComponent.tsx
import React, { useState } from "react";
import { MapContainer, TileLayer, Marker, Circle } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import EmojiPeopleIcon from "@mui/icons-material/EmojiPeople";
import ReactDOMServer from "react-dom/server";
import { FacilitiesData } from "@/types/global"; // Ensure this type is correctly defined to match the expected facility data structure

// Custom marker using MUI Icon
const createCustomMarkerIcon = () => {
  const iconHtml = ReactDOMServer.renderToString(
    <EmojiPeopleIcon style={{ fontSize: "30px", color: "blue" }} />
  );

  return L.divIcon({
    html: iconHtml,
    iconSize: [30, 30],
    iconAnchor: [15, 15], // Adjust as needed
    className: "", // This removes default extra padding and border
  });
};

interface MapComponentProps {
  userPosition: { lat: number; lng: number } | null;
  facilities: FacilitiesData[];
}

const MapComponent: React.FC<MapComponentProps> = ({
  userPosition,
  facilities,
}) => {
  const userIcon = createCustomMarkerIcon();
  const [locations, setLocations] = useState([
    {
      id: 1,
      type: "school",
      name: "Greenwood Elementary",
      lat: 40.712776,
      lng: -74.005974,
    },
    {
      id: 2,
      type: "kindergarten",
      name: "Happy Kids Kindergarten",
      lat: 40.712216,
      lng: -74.006674,
    },
    { id: 3, type: "user", name: "John Doe", lat: 40.713456, lng: -74.005854 },
  ]);

  if (!userPosition) {
    return <p>Loading map...</p>; // or any other placeholder
  }

  console.log(facilities, "look at me");

  return (
    <MapContainer
      center={{ lat: userPosition.lat, lng: userPosition.lng }}
      zoom={13}
      style={{ height: "100vh", width: "100%" }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={userPosition} icon={userIcon}>
        <Circle
          center={userPosition}
          radius={100}
          color="blue"
          fillOpacity={0.4}
        />
      </Marker>
      {facilities.map((facility, index) => (
        <Circle
          key={index}
          center={{ lat: facility.latitude, lng: facility.longitude }}
          radius={100}
          color="red"
          fillOpacity={0.7}
        />
      ))}
    </MapContainer>
  );
};

export default MapComponent;
