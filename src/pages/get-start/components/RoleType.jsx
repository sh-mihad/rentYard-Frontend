import { KeyRound } from "lucide-react";
import usePropertyInfo from "../../../hooks/usePropertyInfo";
import { SELECT_ROLE } from "../../../reducers/propertyTypeReduces";
import permanentJobSvgIcon from "../../../assets/permanent-job.svg"
import managerSvgIcon from "../../../assets/manager.svg"
export default function RoleType() {
  const { propertyState, dispatch } = usePropertyInfo();
  const handleClick = (title) => {
    dispatch({ type: SELECT_ROLE, data: title });
  };
  const options = [
    {
      id: 1,
      title: "Landlord",
      description: "Owner of the property",
      icon: <KeyRound className="" />,
    },
    {
      id: 2,
      title: "Realtor",
      description: "Manage property on behalf on owner",
      icon: <img src={managerSvgIcon}/> ,
    },
    {
      id: 3,
      title: "Property management company",
      description: "For management company",
      icon: <img src={permanentJobSvgIcon}/> ,
    },
  ];
  return (
    <section className="max-w-6xl mx-auto pb-8 ">
      <h2 className="text-xl font-semibold text-[#272B35] mb-6">
        Select your role
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 h-24">
        {options.map((item, index) => (
          <div
            onClick={() => handleClick(item.title)}
            key={index}
            className={`${
              propertyState.userRole === item.title &&
              "border border-blue-400 bg-[#F9FBFF]"
            } border border-[#E0E0E0] rounded-lg px-5 py-4 hover:border-[#316EED] hover:bg-[#F9FBFF] transition cursor-pointer flex items-center space-x-4`}
          >
            <div className="h-14 w-14 bg-[#F9FBFF] rounded flex flex-col items-center justify-center">
              {item.icon}
            </div>
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
