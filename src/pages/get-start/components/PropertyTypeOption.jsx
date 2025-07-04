import { House } from "lucide-react";
import usePropertyInfo from "../../../hooks/usePropertyInfo";
import { PROPERTY_TYPE } from "../../../reducers/propertyTypeReduces";
import { PiBuildingOfficeLight } from "react-icons/pi";


export default function PropertyTypeOption() {
  const { propertyState, dispatch } = usePropertyInfo();
  const handleClick = (title) => {
    dispatch({ type: PROPERTY_TYPE, data: title });
  };

  const options = [
    {
      id: 1,
      title: "Single House Property",
      description: "Single unit house for single family",
      icon: <House />,
    },
    {
      id: 2,
      title: "Apartments complex",
      description: "Multiple unit house for families",
      icon: (
        <svg
          width={28}
          height={28}
          viewBox="0 0 24 24"
          fill="none"
          stroke="#272B35"
          strokeWidth="1"
          strokeLinecap="round"
          strokeLinejoin="round"
        //   className={className}
        >
          {/* Main building structure */}
          <path d="M3 21h18" />
          <path d="M5 21V7l6-4v18" />
          <path d="M19 21V10l-6-4" />

          {/* Windows/sections on left building */}
          <rect x="7" y="9" width="2" height="2" />
          <rect x="7" y="13" width="2" height="2" />
          <rect x="7" y="17" width="2" height="2" />

          {/* Windows/sections on right building */}
          <rect x="15" y="12" width="2" height="2" />
          <rect x="15" y="16" width="2" height="2" />

          {/* Door */}
          <rect x="11" y="17" width="2" height="4" />
        </svg>
      ),
    },
    {
      id: 3,
      title: "Condominiums",
      description: "Multiple unit house for families",
      icon: <PiBuildingOfficeLight className="h-7 w-7 text-[#272B35]"/>,
    },
  ];
  return (
    <section className="max-w-6xl mx-auto  py-6">
      <h2 className="text-xl font-semibold text-[#272B35] mb-6">
        Property type
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 h-24">
        {options.map((item, index) => (
          <div
            onClick={() => handleClick(item.title)}
            key={index}
            className={`${
              propertyState.propertyType === item.title &&
              "border border-blue-400 bg-[#F9FBFF] "
            } border border-[#E0E0E0] rounded-lg px-5 py-4 hover:border-[#316EED] hover:bg-[#F9FBFF] transition cursor-pointer flex items-center space-x-4`}
          >
            <div className="h-14 w-14 bg-[#F9FBFF] rounded flex flex-col items-center justify-center">{item.icon}</div>
            <div>
              <h3 className="font-semibold text-[#272B35]">{item.title}</h3>
              <p className="text-sm text-[#777980]">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
