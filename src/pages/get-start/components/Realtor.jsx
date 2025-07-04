import { useForm } from 'react-hook-form';
import SectionCardLayout from '../../../components/layouts/SectionCardLayouts';
import InputFiled from '../../../components/ui/InputFiled';
import PdfUpload from '../../../components/ui/PdfUpload';
import usePropertyInfo from '../../../hooks/usePropertyInfo';

export default function Realtor({ref,onSubmit}) {
    const {propertyState}=usePropertyInfo()
    const { register, handleSubmit, watch } = useForm({
        defaultValues: propertyState.othersAdditionalData
    })
   
    return (
        <SectionCardLayout title={"Realtor verification"}>
            <form ref={ref} onSubmit={handleSubmit(onSubmit)}>
                <div className='grid grid-cols-1 lg:grid-cols-3 gap-3 space-y-1'>
                    <InputFiled
                        name="lenienceNumber"
                        label="Lenience number"
                        placeholder="000000"
                        register={register}
                        required={true}
                    />
                    <PdfUpload
                        name="additionalDocumentsForRealtor"
                        label="Additional Documents for realtor"
                        register={register}
                        required={true}
                        watch={watch}
                    />
                    <PdfUpload
                        name="agreementWitLandlord"
                        label="Agreement with landlord"
                        register={register}
                        required={true}
                        watch={watch}
                    />
                </div>

            </form>
        </SectionCardLayout>
    )
}
