import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css'; // Ensure Leaflet CSS is imported
import L from 'leaflet'; // Import Leaflet library

// Import marker icon (adjust path as needed)
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerIconShadow from 'leaflet/dist/images/marker-shadow.png';

// Create a custom marker icon
const customMarkerIcon = new L.Icon({
  iconUrl: markerIcon,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowUrl: markerIconShadow,
  shadowSize: [41, 41],
});

function MyMap() {
  const position = [38.7677, 31.0715]; // Coordinates for your address

  return (
    <MapContainer center={position} zoom={13} style={{ height: '400px' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={position} icon={customMarkerIcon}>
        <Popup>İncili Mahallesi 2008 Sokak No: 10/B<br />Afyon Emirdağ</Popup>
      </Marker>
    </MapContainer>
  );
}

export default MyMap;
