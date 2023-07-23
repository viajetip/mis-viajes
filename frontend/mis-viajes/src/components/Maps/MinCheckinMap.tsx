import React from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

const MinCheckinMap = ({ lat = 51.50067, lng = -0.12457 }) => {
  return (
    <MapContainer center={[lat, lng]} zoom={12} scrollWheelZoom={false}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      <Marker position={[lat, lng]}>
        <Popup>London</Popup>
      </Marker>
    </MapContainer>
  );
};

export default MinCheckinMap;
