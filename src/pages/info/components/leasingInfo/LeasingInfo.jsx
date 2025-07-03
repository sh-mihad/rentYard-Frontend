import useInformation from "../../../../hooks/useInformation"

export default function LeasingInfo() {
    const {informationState} = useInformation()
    const leasingInfoData = informationState?.leasingInfo
  return (
    <p className='text-md text-gray-700'>
      <span>Leasing Manager: {leasingInfoData.leasingManagerName}</span>, 
      <span> {leasingInfoData.leasingManagerEmail}</span>,
         <br />
      <span> {leasingInfoData.phoneNumber}</span>,
   
      {leasingInfoData.sameAddressAsProperty &&   <span className="text-gray-400"> Address (same as property)</span>} 
    </p>
  )
}
