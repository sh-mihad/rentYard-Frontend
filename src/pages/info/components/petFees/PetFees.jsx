import { FaRegTrashAlt } from "react-icons/fa";
import { TbEdit } from "react-icons/tb";
import useInformation from "../../../../hooks/useInformation";


export default function PetFees() {
   const {informationState} = useInformation()
      const petInfoData = informationState?.petFees
      const lastIndexNumber = petInfoData.length - 1
  return (
    <>
    {
      petInfoData?.map((item,index)=>(
        <div key={index} className="text-md text-gray-500">
         <div className="flex justify-between items-center">
          <div>
           <p className="py-1">
            {item.petType}, Max weight:{item.maxWeight}lb, Monthly per rent:${item.monthlyPetRent}
          </p>
          <p>
             One time pet fee:${item.monthlyPetRent}, Pet security deposit:${item.petSecurityDeposit}
          </p>
         </div>
         <div className="flex items-center gap-3 text-lg">
           <TbEdit onClick={()=>alert("Under Construction 👷")} className="cursor-pointer text-xl" />
           <FaRegTrashAlt onClick={()=>alert("Ops sorry I can't delete now 🥺")} className="text-red-400 cursor-pointer" />
         </div>
         </div>
          {index !==lastIndexNumber && <hr className="my-2"/>}
        </div>
      ))
    }
    </>
  )
}
