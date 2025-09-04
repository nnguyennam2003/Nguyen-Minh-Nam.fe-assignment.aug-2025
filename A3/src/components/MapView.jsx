import {
  useLoadScript,
  GoogleMap,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";
import { useRef, useEffect, useState } from "react";
import data from "../data/location.json";
import { Loader } from "lucide-react";

const containerStyle = {
  width: "100%",
  height: "100%",
}
const center = { lat: 20.9103, lng: 107.1812 }

export default function MapView({ selectedLocation, setSelectedLocation }) {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyC9IYFY4dmu2ev_PjZT5wvu16BDRkDbamY",
  });

  const [activeMarker, setActiveMarker] = useState(null)
  const mapRef = useRef()

  useEffect(() => {
    if (selectedLocation && mapRef.current) {
      const { lat, lng } = selectedLocation.location
      mapRef.current.panTo({ lat, lng })
      mapRef.current.setZoom(14)
      setActiveMarker(selectedLocation.id)
    }
  }, [selectedLocation]);

  if (!isLoaded) return <div className="flex items-center justify-center w-full"><Loader className="animate-spin" size={30} /></div>;

  return (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={6}
      onLoad={(map) => (mapRef.current = map)}
    >
      {data.map((loc) => (
        <Marker
          key={loc.id}
          position={{ lat: loc.location.lat, lng: loc.location.lng }}
          onClick={() => setSelectedLocation(loc)}
          icon={
            selectedLocation?.id === loc.id
              ? "http://maps.google.com/mapfiles/ms/icons/blue-dot.png"
              : undefined
          }
        >
          {activeMarker === loc.id && (
            <InfoWindow onCloseClick={() => setActiveMarker(null)}>
              <div>
                <h3 className="font-bold text-xl">{loc.name}</h3>
                <p>{loc.description}</p>
                <p>⭐ {loc.rating}</p>
              </div>
            </InfoWindow>
          )}
        </Marker>
      ))}
    </GoogleMap>
  );
}
