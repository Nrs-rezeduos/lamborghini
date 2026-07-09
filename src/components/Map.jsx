import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

export default function Map() {
  return (
    <MapContainer
      center={[47.5, 8]}
      zoom={5}
      style={{
        width: "100%",
        height: "100%",
      }}
    >
      <TileLayer
        attribution="© OpenStreetMap contributors"
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      <Marker position={[45.4642, 9.19]}>
        <Popup>
          Lamborghini Milan
        </Popup>
      </Marker>

      <Marker position={[48.8566, 2.3522]}>
        <Popup>
          Lamborghini Paris
        </Popup>
      </Marker>

      <Marker position={[51.5072, -0.1276]}>
        <Popup>
          Lamborghini London
        </Popup>
      </Marker>
    </MapContainer>
  );
}