import LocationItem from "./LocationItem";
import data from "../data/location.json";
import { useEffect, useRef } from "react";

export default function LocationList({
  sortOrder = "default",
  searchTerm = "",
  selectedLocation,
  setSelectedLocation,
}) {
  const listRef = useRef(null);

  useEffect(() => {
    if (selectedLocation && listRef.current) {
      const element = listRef.current.querySelector(
        `#loc-${selectedLocation.id}`
      );
      if (element)
        element.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  }, [selectedLocation]);
  
  const filteredLocations = data.filter((loc) =>
    loc.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const sortedLocations = [...filteredLocations].sort((a, b) => {
    if (sortOrder === "asc") return a.rating - b.rating;
    if (sortOrder === "desc") return b.rating - a.rating;
    return 0;
  });

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Location List</h1>
      {sortedLocations.map((loc) => (
        <LocationItem
          key={loc.id}
          location={loc}
          isActive={selectedLocation?.id === loc.id}
          onSelect={() => setSelectedLocation(loc)}
        />
      ))}
    </div>
  );
}
