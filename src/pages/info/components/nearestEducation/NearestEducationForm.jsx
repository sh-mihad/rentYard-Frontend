import { useForm } from "react-hook-form";
import useInformation from "../../../../hooks/useInformation";
import {
  NEAREST_EDUCATIONAL_INSTITUTION,
  PARKING,
  RENT_FREQUENCY_AND_PAYMENT_REMINDER,
} from "../../../../reducers/informationReducers";
import CustomSelect from "../../../../components/ui/CustomSelect";
import DateField from "../../../../components/ui/DateFiled";
import CheckboxField from "../../../../components/ui/CheckboxFiled";
import PdfUpload from "../../../../components/ui/PdfUpload";
import DistanceField from "../../../../components/ui/DistanceFiled";
import InputFiled from "../../../../components/ui/InputFiled";

export default function NearestEducationForm({ ref, modalRef }) {
  const { informationState, informationDispatch } = useInformation();
  const { register, handleSubmit, control } = useForm({
    defaultValues: informationState.nearestEducationalInstitute,
  });

  const onSubmit = (formData) => {
    informationDispatch({ type: NEAREST_EDUCATIONAL_INSTITUTION, data: formData });
    modalRef.current.close();
  };
  return (
    <form ref={ref} onSubmit={handleSubmit(onSubmit)}>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 space-y-2">
        <DistanceField
          name="distance"
          unitName="distanceUnit"
          label="Distance"
          control={control}
          required={true}
          units={["Km", "Mile"]}
        />

        <CustomSelect
          name="educationIns"
          label="Educational Institute Type"
          options={[
            { value: "school", label: "school" },
            { value: "college", label: "college" },
          ]}
          register={register}
          required={true}
        />
        
      </div>
      <InputFiled
          name="instituteName"
          label="Educational institute name"
          placeholder="Enter name"
          register={register}
          required={true}
        />
    </form>
  );
}
