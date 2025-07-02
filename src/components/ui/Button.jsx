
export default function Button({ isBg = false, onClick, children, disabled = false,type="button" }) {
  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={`${disabled && "bg-[#316ded69]"} cursor-pointer px-6 py-2 rounded-md text-sm ${isBg ? "bg-[#316EED] text-white hover:bg-blue-600" : "text-gray-500 hover:text-gray-700 border border-gray-300"}`}>
      {children}
    </button>
  )
}
