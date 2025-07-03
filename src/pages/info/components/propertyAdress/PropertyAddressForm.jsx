import { useForm } from 'react-hook-form'
import CustomSelect from '../../../../components/ui/CustomSelect'
import InputFiled from '../../../../components/ui/InputFiled'
import useInformation from '../../../../hooks/useInformation'
import { PROPERTY_ADDRESS } from '../../../../reducers/informationReducers'
const countryOptions = [
    { label: "Bangladesh", value: 'Bangladesh' },
    { label: "Pakistan", value: 'Pakistan' },
    { label: "USA", value: 'USA' },
]
const stateOptions = [
    { label: "Dhaka", value: 'Dhaka' },
    { label: "Chottogram", value: 'Chottogram' },
    { label: "Khulna", value: 'Khulna' },
]
export default function PropertyAddressForm({ ref, modalRef }) {
    const { informationState, informationDispatch } = useInformation()
    const { register, handleSubmit} = useForm({
         defaultValues:informationState.propertyAddress
    })
    const onSubmit = (formData) => {
        console.log("formData", formData);
        informationDispatch({ type: PROPERTY_ADDRESS, data: formData })
        modalRef.current.close()
    }
    console.log("informationState", informationState.propertyAddress);
    return (
        <div className=''>
            <form ref={ref} onSubmit={handleSubmit(onSubmit)}>
                <div className='grid grid-cols-1 lg:grid-cols-3 gap-3 space-y-1'>
                    <InputFiled
                        name="propertyNameId"
                        label="Property name as identifier"
                        placeholder="Dallas apartments complex"
                        register={register}
                        required={true}
                    />
                    <InputFiled
                        name="totalApartmentUnit"
                        label="Total Apartment Unit"
                        placeholder="50"
                        register={register}
                        required={true}
                    />
                    <InputFiled
                        name="propertyWebsite"
                        label="Property Website(Optional)"
                        placeholder="https//:"
                        register={register}
                        required={false}
                    />
                    <CustomSelect
                        name="country"
                        label="Country/Region"
                        options={countryOptions}
                        register={register}
                        required={true}
                    />
                    <InputFiled
                        name="street"
                        label="Street address"
                        placeholder="111 Austin Ave"
                        register={register}
                        required={true}
                    />
                    <InputFiled
                        name="unit"
                        label="Apt, suit,unit(if applicable)"
                        placeholder="111 Austin Ave"
                        register={register}
                        required={false}
                    />
                    <InputFiled
                        name="city"
                        label="City/Towns"
                        placeholder="dallas"
                        register={register}
                        required={true}
                    />
                    <CustomSelect
                        name="state"
                        label="State/Territory"
                        options={stateOptions}
                        register={register}
                        required={true}
                    />
                    <InputFiled
                        name="zipCode"
                        label="Zip code"
                        placeholder="75061"
                        register={register}
                        required={true}
                    />

                </div>

            </form>
        </div>
    )
}
