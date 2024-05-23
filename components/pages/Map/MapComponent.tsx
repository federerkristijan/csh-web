import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

interface MapComponentProps {
  userPosition: { lat: number; lng: number };
  places: any[];
}

const MapComponent: React.FC<MapComponentProps> = ({
  userPosition,
  places,
}) => {
  const mapStyles = {
    height: "35vh",
    width: "100%",
    borderRadius: "1rem",
  };

  const defaultCenter = {
    lat: userPosition.lat,
    lng: userPosition.lng,
  };

  return (
    <LoadScript googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || ""}>
      <GoogleMap mapContainerStyle={mapStyles} zoom={15} center={defaultCenter}>
        <Marker position={defaultCenter} />
        {places.map((place, index) => (
          <Marker
            key={index}
            position={{
              lat: place.geometry.location.lat,
              lng: place.geometry.location.lng,
            }}
          />
        ))}
      </GoogleMap>
    </LoadScript>
  );
};

export default MapComponent;
