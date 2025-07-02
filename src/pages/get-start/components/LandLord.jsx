import { useForm } from 'react-hook-form';
import SectionCardLayout from '../../../components/layouts/SectionCardLayouts';
import PdfUpload from '../../../components/ui/PdfUpload';

export default function LandLord({ref,onSubmit}) {
    const { register, handleSubmit, watch } = useForm()

  
    return (
        <SectionCardLayout title={"Prof of ownership"}>
            <form ref={ref} onSubmit={handleSubmit(onSubmit)}>
                <div className='grid grid-cols-1 lg:grid-cols-3 gap-3 space-y-1'>
                    <PdfUpload
                        name="ownershipDoc"
                        label="Ownership doc"
                        register={register}
                        required={true}
                        watch={watch}
                    />
                </div>

            </form>
        </SectionCardLayout>
    )
}
