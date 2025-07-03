import { FaRegCalendarAlt } from "react-icons/fa";
import Filed from "./Filed";

export default function DateField({
  name,
  label,
  placeholder = "",
  register,
  required = false,
  className = "",
}) {
  return (
    <Filed label={label} isRequiredFlag={required}>
      <div className="relative">
        <input
          type="date"
          id={name}
          name={name}
          placeholder={placeholder}
          className={`w-full border border-gray-300 rounded-md px-3 py-2 pr-10 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500 ${className}`}
          {...register(name, { required })}
        />
      </div>
    </Filed>
  );
}
