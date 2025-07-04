import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import {
  Search,
  Snowflake,
  Cable,
  Fan,
  ArrowUp,
  Building,
  Refrigerator,
  Trees,
  Zap,
  Home,
  Flame,
  Heart,
  AlertTriangle,
  Maximize,
  Car,
  Shield,
} from "lucide-react";
import useInformation from "../../../../hooks/useInformation";
import { COMMUNITY_IS_AMENITY } from "../../../../reducers/informationReducers";

const amenities = [
  { id: "air-conditioning", label: "Air conditioning", icon: Snowflake },
  { id: "cable-ready", label: "Cable ready", icon: Cable },
  { id: "ceiling-fan", label: "Ceiling fan", icon: Fan },
  { id: "high-ceilings", label: "High ceilings", icon: ArrowUp },
  { id: "private-balcony", label: "Private balcony", icon: Building },
  { id: "refrigerator", label: "Refrigerator", icon: Refrigerator },
  { id: "wooded-views", label: "Wooded views", icon: Trees },
  { id: "wd-hookup", label: "W/D hookup", icon: Zap },
  { id: "hardwood-floor", label: "Hardwood Floor", icon: Home },
  { id: "fireplace", label: "Fireplace", icon: Flame },
  { id: "first-aid-kit", label: "First aid kit", icon: Heart },
  { id: "carbon-monoxide", label: "Carbon monoxide alarm", icon: AlertTriangle },
  { id: "expanded-patios", label: "Expanded patios", icon: Maximize },
  { id: "free-parking", label: "Free parking", icon: Car },
  { id: "fire-extinguisher", label: "Fire extinguisher", icon: Shield },
];

export default function CommunityForm({ ref, modalRef }) {
  const [searchTerm, setSearchTerm] = useState("");
  const { informationState, informationDispatch } = useInformation();

  // ✅ CORRECT defaultValues usage
  const { control, handleSubmit, watch } = useForm({
    defaultValues: {
      selectedAmenities: Array.isArray(informationState.community)
        ? informationState.community
        : [],
    },
  });

  const selectedAmenities = watch("selectedAmenities");

  const filteredAmenities = amenities.filter((a) =>
    a.label.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const onSubmit = (formData) => {
    informationDispatch({ type: COMMUNITY_IS_AMENITY, data: formData });
    modalRef.current.close();
  };

  return (
    <div className="w-full max-w-4xl mx-auto p-6 bg-white rounded-lg shadow">
      <h2 className="text-xl font-bold mb-4">Select Amenities</h2>

      {/* Search */}
      <div className="relative mb-6">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
        <input
          type="text"
          placeholder="Search amenities"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full pl-10 py-2 border rounded-md focus:ring focus:ring-blue-200"
        />
      </div>

      <form onSubmit={handleSubmit(onSubmit)} ref={ref} className="space-y-6">
        <Controller
          name="selectedAmenities"
          control={control}
          render={({ field }) => (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredAmenities.map((amenity) => {
                const Icon = amenity.icon;
                const isSelected = field.value.includes(amenity.id);

                return (
                  <button
                    key={amenity.id}
                    type="button"
                    onClick={() => {
                      const newValue = isSelected
                        ? field.value.filter((id) => id !== amenity.id)
                        : [...field.value, amenity.id];
                      field.onChange(newValue);
                    }}
                    className={`flex items-center gap-3 p-4 rounded-lg border transition ${
                      isSelected
                        ? "bg-blue-50 border-blue-500 text-blue-700"
                        : "bg-white border-gray-200 text-gray-700 hover:border-gray-300"
                    }`}
                  >
                    <Icon
                      className={`h-5 w-5 ${
                        isSelected ? "text-blue-600" : "text-gray-500"
                      }`}
                    />
                    <span className="text-sm font-medium">{amenity.label}</span>
                  </button>
                );
              })}
            </div>
          )}
        />

        {/* Selected Count */}
        {selectedAmenities?.length > 0 && (
          <div className="flex items-center flex-wrap gap-2">
            <span className="text-sm text-gray-600">
              {selectedAmenities.length} selected:
            </span>
            {selectedAmenities.slice(0, 3).map((id) => {
              const a = amenities.find((x) => x.id === id);
              return (
                <span
                  key={id}
                  className="px-2 py-1 text-xs border rounded-full bg-gray-100"
                >
                  {a?.label}
                </span>
              );
            })}
            {selectedAmenities.length > 3 && (
              <span className="px-2 py-1 text-xs border rounded-full bg-gray-100">
                +{selectedAmenities.length - 3} more
              </span>
            )}
          </div>
        )}

        {/* Optional Submit button */}
        <div className="flex justify-end">
          <button
            type="submit"
            className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
          >
            Save Selection
          </button>
        </div>
      </form>
    </div>
  );
}
