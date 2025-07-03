import { useForm } from "react-hook-form"
import CustomSelect from "../../../../components/ui/CustomSelect"
import InputFiled from "../../../../components/ui/InputFiled"
import useInformation from "../../../../hooks/useInformation"
import { CHARGES } from "../../../../reducers/informationReducers"
const options = [
    { label: `100       All 18+ applicant`, value: `100       All 18+ applicant` },
    { label: `200       All 18+ applicant`, value: `200       All 18+ applicant` },
  { label: `300       All 18+ applicant`, value: `300       All 18+ applicant` },
]
export default function ChargesForm({ ref, modalRef }) {
  const { informationState, informationDispatch } = useInformation()
  const { register, handleSubmit } = useForm({
    defaultValues: informationState.charges
  })
  const onSubmit = (formData) => {
    informationDispatch({ type: CHARGES, data: formData })
    modalRef.current.close()
  }
  return (
    <form ref={ref} onSubmit={handleSubmit(onSubmit)}>
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-3 space-y-1'>
       
       <CustomSelect
          name="applicationFee"
          label="ApplicationFee(one-time)"
          options={options}
          register={register}
          required={true}
        />

        <InputFiled
          name="adminFee"
          label="Admin Fee (one-time)"
          placeholder="15"
          register={register}
          required={true}
        />
      </div>

    </form>
  )
}
