import useInformation from "../../../../hooks/useInformation"

export default function Charges() {
   const {informationState} = useInformation()
      const leasingInfoData = informationState?.charges
      const formattingApplicationFee = leasingInfoData.applicationFee.split(" ")
    return (
      <p className='text-md text-gray-700'>
       Application fee: ${formattingApplicationFee[0]}({formattingApplicationFee.slice(0).join(" ")}), Admin Fee: ${leasingInfoData?.adminFee}
      </p>
    )
}
