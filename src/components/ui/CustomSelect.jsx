import Filed from "./Filed";

export default function CustomSelect(
    {
        name,
        label,
        options,
        register,
        required = false,
        className = ""
    }
) {
    return (
        <div>
           <Filed label={label} isRequiredFlag={required}>
             <select
                className={`w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500 ${className}`}
                defaultValue=""
                {...register(name, { required })}
            >
                <option value="" disabled>
                    Select {label?.toLowerCase() || "option"}
                </option>
                {options.map((opt) => (
                    <option key={opt.value} value={opt.value}>
                        {opt.label}
                    </option>
                ))}
            </select>
           </Filed>
        </div>
    )
}
