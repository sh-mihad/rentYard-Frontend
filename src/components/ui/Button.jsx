
export default function Button({ isBg = false, onClick, children }) {
  return (
    <button
      onClick={onClick}
      className={`cursor-pointer px-6 py-2 rounded-md text-sm ${isBg ? "bg-blue-500 text-white hover:bg-blue-600" : "text-gray-500 hover:text-gray-700 border border-gray-300"}`}>
      {children}
    </button>
  )
}
