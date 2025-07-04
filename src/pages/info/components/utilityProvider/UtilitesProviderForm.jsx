import { useForm } from "react-hook-form";
import useInformation from "../../../../hooks/useInformation";
import {
  PARKING,
  RENT_FREQUENCY_AND_PAYMENT_REMINDER,
  UTILITIES_PROVIDER,
} from "../../../../reducers/informationReducers";
import CustomSelect from "../../../../components/ui/CustomSelect";
import DateField from "../../../../components/ui/DateFiled";
import CheckboxField from "../../../../components/ui/CheckboxFiled";
import PdfUpload from "../../../../components/ui/PdfUpload";
import DistanceField from "../../../../components/ui/DistanceFiled";
import InputFiled from "../../../../components/ui/InputFiled";

export default function UtilityProviderForm({ ref, modalRef }) {
  const { informationState, informationDispatch } = useInformation();
  const { register, handleSubmit } = useForm({
    defaultValues: informationState.utilitiesProvider,
  });

  const onSubmit = (formData) => {
    informationDispatch({ type: UTILITIES_PROVIDER, data: formData });
    modalRef.current.close();
  };
  return (
    <form ref={ref} onSubmit={handleSubmit(onSubmit)}>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 space-y-2">


        <CustomSelect
          name="utilityType"
          label="Utility type"
          options={[
            { value: "water", label: "water" },
            { value: "electricity", label: "electricity" },
          ]}
          register={register}
          required={true}
        />
         <InputFiled
          name="providerCompany"
          label="Provider Company Name"
          placeholder="Enter name"
          register={register}
          required={true}
        />
      </div>
     
    </form>
  );
}
