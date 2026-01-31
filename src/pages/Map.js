import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { useEffect, useState } from "react";
import L from "leaflet";

// Fix marker icon issue
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
  iconUrl: require("leaflet/dist/images/marker-icon.png"),
  shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
});

function MapPage() {
  const [location, setLocation] = useState(null);
  const [places, setPlaces] = useState([]);

  // Get user location
  useEffect(() => {
    navigator.geolocation.getCurrentPosition((pos) => {
      const lat = pos.coords.latitude;
      const lon = pos.coords.longitude;
      setLocation([lat, lon]);

      // Fetch nearby hospitals & pharmacies
      fetch(
        `https://nominatim.openstreetmap.org/search?format=json&q=hospital+pharmacy&limit=5&lat=${lat}&lon=${lon}`
      )
        .then((res) => res.json())
        .then((data) => setPlaces(data));
    });
  }, []);

  if (!location) return <h2>Getting your location...</h2>;

  return (
    <div style={{ height: "100vh", width: "100vw" }}>
      <MapContainer center={location} zoom={13} style={{ height: "100%", width: "100%" }}>
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

        {/* User Location Marker */}
        <Marker position={location}>
          <Popup>Your Location</Popup>
        </Marker>

        {/* Nearby Hospitals & Medical Shops */}
        {places.map((p, i) => (
          <Marker key={i} position={[p.lat, p.lon]}>
            <Popup>
              <b>{p.display_name}</b>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}

export default MapPage;
