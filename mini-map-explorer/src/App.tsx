import { useState } from "react";
import { projects as allProjects } from "./data/projects";
import FilterBar from "./components/FilterBar";
import MapView from "./components/MapView";

function App() {
  const [regionFilter, setRegionFilter] = useState("All");
  const [categoryFilter, setCategoryFilter] = useState("All");

  const regions = Array.from(new Set(allProjects.map((p) => p.region)));
  const categories = Array.from(new Set(allProjects.map((p) => p.category)));

  const filteredProjects = allProjects.filter((p) => {
    return (
      (regionFilter === "All" || p.region === regionFilter) &&
      (categoryFilter === "All" || p.category === categoryFilter)
    );
  });

  return (
    <div className="h-screen flex flex-col items-center justify-center p-6">
      <h1 className="text-2xl font-bold text-center mb-4">
        🌍 Global Tech Sustainability Map
      </h1>
      <FilterBar
        regions={regions}
        categories={categories}
        activeRegion={regionFilter}
        activeCategory={categoryFilter}
        onRegionChange={setRegionFilter}
        onCategoryChange={setCategoryFilter}
      />
      <div className="flex justify-center w-full">
        <MapView projects={filteredProjects} />
      </div>
    </div>
  );
}

export default App;