import React from "react";
import { MapContainer, TileLayer, Marker, GeoJSON, Circle } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { createUserLocationIcon } from "./UserLocationIcon";
import { LatLngExpression } from "leaflet";

interface MapComponentProps {
  userPosition: { lat: number; lng: number };
  geoJsonData: any;
}

const MapComponent: React.FC<MapComponentProps> = ({
  userPosition,
  geoJsonData,
}) => {
  const userIcon = createUserLocationIcon();

  const renderFacilities = (geoJsonData: any) => {
    return geoJsonData.features.map((feature: any, index: number) => {
      let coordinates: LatLngExpression | null = null;

      if (feature.geometry.type === "Point") {
        coordinates = [feature.geometry.coordinates[1], feature.geometry.coordinates[0]];
      } else if (feature.geometry.type === "Polygon") {
        coordinates = [
          feature.geometry.coordinates[0][0][1],
          feature.geometry.coordinates[0][0][0],
        ];
      } else if (feature.geometry.type === "LineString") {
        coordinates = [
          feature.geometry.coordinates[0][1],
          feature.geometry.coordinates[0][0],
        ];
      }

      if (coordinates) {
        return (
          <Circle
            key={index}
            center={coordinates}
            radius={100}
            color="red"
            fillOpacity={0.7}
          />
        );
      }

      return null;
    });
  };

  return (
    <div className="flex flex-col items-center justify-center w-screen">
      <MapContainer
        center={userPosition}
        zoom={13}
        className="map-container"
        style={{ height: "35vh", borderRadius: "1rem" }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={userPosition} icon={userIcon} />
        {geoJsonData && <GeoJSON data={geoJsonData} />}
        {geoJsonData && renderFacilities(geoJsonData)}
      </MapContainer>
    </div>
  );
};

export default MapComponent;
