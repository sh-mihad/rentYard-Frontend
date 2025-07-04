import { useForm } from "react-hook-form"
import useInformation from "../../../../hooks/useInformation"
import { RENT_FREQUENCY_AND_PAYMENT_REMINDER } from "../../../../reducers/informationReducers"
import CustomSelect from "../../../../components/ui/CustomSelect"
import DateField from "../../../../components/ui/DateFiled"
import CheckboxField from "../../../../components/ui/CheckboxFiled"
import PdfUpload from "../../../../components/ui/PdfUpload"
const options = [
  { label: "Monthly", value: 'Monthly' },
  { label: "Daily", value: 'Daily' },
  { label: "Weekly", value: 'Weekly' },
  { label: "Yearly", value: 'Yearly' },
]
export default function ApplicationAgreementForm({ ref, modalRef }) {
  const { informationState,informationDispatch } = useInformation()
  const { register, handleSubmit,watch } = useForm({
    defaultValues:informationState.applicationAgreement
  })

  const onSubmit = (formData) => {
    informationDispatch({ type: RENT_FREQUENCY_AND_PAYMENT_REMINDER, data: formData })
    modalRef.current.close()
  }
  return (
    <form ref={ref} onSubmit={handleSubmit(onSubmit)}>
      <div className='grid grid-cols-1 lg:grid-cols-1 space-y-2'>
        <PdfUpload
          name="agreement"
          label="Upload Agreement"
          options={options}
          register={register}
          required={true}
          watch={watch}
        />
        <CheckboxField
        name="agreementPolicy"
        label={"Accept immigrant & international student application"}
        register={register}
        />
        

      </div>



    </form>
  )
}