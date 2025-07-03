import useInformation from '../../../../hooks/useInformation'

export default function PropertyAddress() {
    const {informationState} = useInformation()
    const propertyAddressData = informationState?.propertyAddress
  return (
    <p className='text-md text-gray-500'>
      <span>{propertyAddressData.propertyNameId}</span>, 
      <span> {propertyAddressData.propertyWebsite}</span>,
      <span> Total Unit- {propertyAddressData.totalApartmentUnit}</span>,
      <br />
      <span>{propertyAddressData.street} {propertyAddressData.city} {propertyAddressData.zipCode} {propertyAddressData.state} {propertyAddressData.country}</span>
    </p>
  )
}
