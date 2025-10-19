import React from "react";

interface FilterBarProps {
  regions: string[];
  categories: string[];
  activeRegion: string;
  activeCategory: string;
  onRegionChange: (region: string) => void;
  onCategoryChange: (cat: string) => void;
}

const FilterBar: React.FC<FilterBarProps> = ({
  regions,
  categories,
  activeRegion,
  activeCategory,
  onRegionChange,
  onCategoryChange,
}) => {
  return (
    <div className="flex flex-wrap justify-center gap-4 mb-6">
      <div className="flex items-center gap-2">
        <span className="font-semibold text-sm">Region:</span>
        <div className="flex gap-1">
          {["All", ...regions].map((r) => (
            <button
              key={r}
              onClick={() => onRegionChange(r)}
              className={`px-2 py-1 text-xs rounded-md transition-colors ${
                activeRegion === r ? "bg-blue-500 text-white" : "bg-blue-100 hover:bg-blue-200 text-blue-800"
              }`}
              style={{
                backgroundColor: activeRegion === r ? '#3b82f6' : '#dbeafe',
                color: activeRegion === r ? 'white' : '#1e40af'
              }}
            >
              {r}
            </button>
          ))}
        </div>
      </div>
      <div className="flex items-center gap-2">
        <span className="font-semibold text-sm">Category:</span>
        <div className="flex gap-1">
          {["All", ...categories].map((c) => (
            <button
              key={c}
              onClick={() => onCategoryChange(c)}
              className={`px-2 py-1 text-xs rounded-md transition-colors ${
                activeCategory === c ? "bg-blue-500 text-white" : "bg-blue-100 hover:bg-blue-200 text-blue-800"
              }`}
              style={{
                backgroundColor: activeCategory === c ? '#3b82f6' : '#dbeafe',
                color: activeCategory === c ? 'white' : '#1e40af'
              }}
            >
              {c}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FilterBar;