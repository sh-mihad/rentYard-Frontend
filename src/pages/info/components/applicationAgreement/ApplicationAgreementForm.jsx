import { useForm } from "react-hook-form"
import useInformation from "../../../../hooks/useInformation"
import { RENT_FREQUENCY_AND_PAYMENT_REMINDER } from "../../../../reducers/informationReducers"
import CustomSelect from "../../../../components/ui/CustomSelect"
import DateField from "../../../../components/ui/DateFiled"
import CheckboxField from "../../../../components/ui/CheckboxFiled"
const options = [
  { label: "Monthly", value: 'Monthly' },
  { label: "Daily", value: 'Daily' },
  { label: "Weekly", value: 'Weekly' },
  { label: "Yearly", value: 'Yearly' },
]
export default function ApplicationAgreementForm({ ref, modalRef }) {
  const { informationDispatch } = useInformation()
  const { register, handleSubmit } = useForm()

  const onSubmit = (formData) => {
    informationDispatch({ type: RENT_FREQUENCY_AND_PAYMENT_REMINDER, data: formData })
    modalRef.current.close()
  }
  return (
    <div>hello </div>
    // <form ref={ref} onSubmit={handleSubmit(onSubmit)}>
    //     <p>change korte hobe</p>
    //   <div className='grid grid-cols-1 lg:grid-cols-3 gap-3 space-y-1'>
    //     <CustomSelect
    //       name="rentPaymentFrequency"
    //       label="Rent payment frequency"
    //       options={options}
    //       register={register}
    //       required={true}
    //     />
    //     <DateField
    //       name="statementDate"
    //       label="Rent Reminder/Statement date"
    //       register={register}
    //       required={true}
    //     />
    //     <DateField
    //       name="rentDueDate"
    //       label="Rent due date"
    //       register={register}
    //       required={true}
    //     />
        

    //   </div>



    // </form>
  )
}