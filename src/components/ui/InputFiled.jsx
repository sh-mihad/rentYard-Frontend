import Filed from './Filed'

export default function InputFiled({
  name,
  label,
  type = "text",
  placeholder = "",
  register,
  required = false,
  className = "",
}) {
  return (
    <Filed label={label} isRequiredFlag={required}>
        <input
        type={type}
        id={name}
        name={name}
        placeholder={placeholder}
        className={`w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500 ${className}`}
        {...register(name, { required })}
      />
    </Filed>
  )
}
