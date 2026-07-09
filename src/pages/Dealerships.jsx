import CountryList from "../components/CountryList";
import Map from "../components/Map";
import "../styles/Dealerships.css";

export default function Dealerships() {
  return (
    <div className="dealership-page">
      <div className="sidebar">
        <CountryList />
      </div>

      <div className="map-area">
        <Map />
      </div>
    </div>
  );
}