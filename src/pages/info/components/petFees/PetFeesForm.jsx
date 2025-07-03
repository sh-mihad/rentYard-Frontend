import { useForm } from "react-hook-form"
import CustomSelect from "../../../../components/ui/CustomSelect"
import InputFiled from "../../../../components/ui/InputFiled"
import useInformation from "../../../../hooks/useInformation"
import { PET_FEES } from "../../../../reducers/informationReducers"
const petOption = [
  { label: "Dog", value: 'Dog' },
  { label: "Cat", value: 'Cat' },
  { label: "Bird", value: 'Bird' },
  { label: "Rat", value: 'Rat' },
]
export default function PetFeesForm({ ref, modalRef }) {
  const { informationDispatch } = useInformation()
  const { register, handleSubmit } = useForm()

  const onSubmit = (formData) => {
    informationDispatch({ type: PET_FEES, data: formData })
    modalRef.current.close()
  }
  return (
    <form ref={ref} onSubmit={handleSubmit(onSubmit)}>
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-3 space-y-1'>
        <CustomSelect
          name="petType"
          label="Pet Type"
          options={petOption}
          register={register}
          required={true}
        />
        <InputFiled
          name="maxWeight"
          label="Max weight(LB)"
          placeholder="100"
          register={register}
          required={true}
        />

      </div>

      <div
        className='mt-3 grid grid-cols-1 lg:grid-cols-3 gap-3 space-y-1'>
        <InputFiled
          name="oneTimePetFee"
          label="One time pet fee"
          placeholder="$ 100"
          register={register}
          required={true}
        />
        <InputFiled
          name="petSecurityDeposit"
          label="One time pet fee"
          placeholder="$ 100"
          register={register}
          required={true}
        />
        <InputFiled
          name="monthlyPetRent"
          label="Monthly Pet Rent"
          placeholder="$ 100"
          register={register}
          required={true}
        />
      </div>


    </form>
  )
}
