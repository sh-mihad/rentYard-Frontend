import { useForm } from 'react-hook-form';
import SectionCardLayout from '../../../components/layouts/SectionCardLayouts';
import CustomSelect from '../../../components/ui/CustomSelect';
import InputFiled from '../../../components/ui/InputFiled';
import PdfUpload from '../../../components/ui/PdfUpload';
import usePropertyInfo from '../../../hooks/usePropertyInfo';
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
export default function PropertyManagement({ref,onSubmit}) {
    const {propertyState}=usePropertyInfo()
    const { register, handleSubmit, watch } = useForm({
        defaultValues: propertyState.othersAdditionalData
    })
   
    return (
        <SectionCardLayout title={"Company & office info"}>
            <form ref={ref} onSubmit={handleSubmit(onSubmit)}>
                <div className='grid grid-cols-1 lg:grid-cols-3 gap-3 space-y-1'>
                    <InputFiled
                        name="companyName"
                        label="Company Name"
                        placeholder="Company Name"
                        register={register}
                        required={true}
                    />
                    <InputFiled
                        name="companyIdentifier"
                        label="Company Identifier (EIN/TIN)"
                        placeholder="Name"
                        register={register}
                        required={true}
                    />
                    <InputFiled
                        name="jobTitle"
                        label="Your Job Title"
                        placeholder="Manager"
                        register={register}
                        required={true}
                    />
                    <PdfUpload
                        name="agreementWithLandOwner"
                        label="Agreement with landlord/owner"
                        register={register}
                        required={true}
                        watch={watch}
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
                        placeholder="3050"
                        register={register}
                        required={false}
                    />
                    <InputFiled
                        name="phoneNumber"
                        label="Phone Number"
                        placeholder="01XXXXXXXXX"
                        register={register}
                        required={true}
                    />
                    <InputFiled
                        name="contactEmail"
                        label="Contact email"
                        type="email"
                        placeholder="majarul2025@gmail.com"
                        register={register}
                        required={true}
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
        </SectionCardLayout>
    )
}
