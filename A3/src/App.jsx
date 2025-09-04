import { useState } from "react";
import Controls from "./components/Controls";
import LocationList from "./components/LocationList";
import MapView from "./components/MapView";

function App() {
  const [sortOrder, setSortOrder] = useState("default")
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedLocation, setSelectedLocation] = useState(null)

  return (
    <div className="h-screen w-full flex">
      <div className="w-[40%] border-r flex flex-col p-6">
        <Controls
          sortOrder={sortOrder}
          setSortOrder={setSortOrder}
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
        />
        <div className="flex-1 overflow-y-auto">
          <LocationList
            sortOrder={sortOrder}
            searchTerm={searchTerm}
            selectedLocation={selectedLocation}
            setSelectedLocation={setSelectedLocation}
          />
        </div>
      </div>
      <MapView
        selectedLocation={selectedLocation}
        setSelectedLocation={setSelectedLocation}
      />
    </div>
  );
}

export default App;
