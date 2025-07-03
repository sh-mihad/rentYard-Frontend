import { Controller } from "react-hook-form";
import { FaChevronDown } from "react-icons/fa";

export default function DistanceField({
  name,
  unitName,
  label,
  control,
  required = false,
  units = ["Mile", "Km"],
}) {
  return (
    <div className="mb-4">
      <label className="block text-sm font-medium text-gray-700 mb-1">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <div className="relative flex items-center border border-gray-300 rounded-md px-3 py-2">
        <Controller
          name={name}
          control={control}
          rules={{ required }}
          render={({ field }) => (
            <input
              type="number"
              step="any"
              {...field}
              placeholder="0.0"
              className="w-full border-none focus:ring-0 p-0 m-0 text-sm outline-none"
            />
          )}
        />

        <Controller
          name={unitName}
          control={control}
          defaultValue={units[0]}
          render={({ field }) => (
            <div className="flex items-center ml-2 relative">
              <select
                {...field}
                className="appearance-none bg-transparent pr-6 text-sm text-gray-700 focus:outline-none"
              >
                {units.map((unit) => (
                  <option key={unit} value={unit}>
                    {unit}
                  </option>
                ))}
              </select>
              <FaChevronDown className="absolute right-0 text-gray-500 pointer-events-none text-xs" />
            </div>
          )}
        />
      </div>
    </div>
  );
}
