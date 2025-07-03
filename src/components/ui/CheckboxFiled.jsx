export default function CheckboxField({
  name,
  label,
  register,
  required = false,
  className = "",
}) {
  return (
    <label className="flex items-center space-x-2">
      <input
        type="checkbox"
        name={name}
        id={name}
        className={`h-4 w-4 border-gray-300 rounded text-blue-600 focus:ring-blue-500 ${className}`}
        {...register(name, { required })}
      />
      <span className="text-sm text-gray-700">{label}</span>
    </label>
  );
}
