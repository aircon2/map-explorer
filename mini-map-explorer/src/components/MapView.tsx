import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import type { Project } from "../types/Projects"

const markerIcon = new L.Icon({
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

interface MapViewProps {
  projects: Project[];
}

const MapView: React.FC<MapViewProps> = ({ projects }) => {
  return (
    <MapContainer
      center={[20, 0]}
      zoom={2}
      className="h-[60vh] w-[80vw] max-w-4xl rounded-xl shadow-lg"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {projects.map((p) => (
        <Marker key={p.id} position={p.coordinates} icon={markerIcon}>
          <Popup>
            <h3 className="font-bold">{p.title}</h3>
            <p className="text-sm text-gray-700">{p.description}</p>
            <p>
              <strong>Category:</strong> {p.category}
              <br />
              <strong>Region:</strong> {p.region}
            </p>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default MapView;