import { useForm } from "react-hook-form";
import useInformation from "../../../../hooks/useInformation";
import {
  NEAREST_LANDMARK,
  NEAREST_STATION,
  PARKING,
  RENT_FREQUENCY_AND_PAYMENT_REMINDER,
} from "../../../../reducers/informationReducers";
import CustomSelect from "../../../../components/ui/CustomSelect";
import DateField from "../../../../components/ui/DateFiled";
import CheckboxField from "../../../../components/ui/CheckboxFiled";
import PdfUpload from "../../../../components/ui/PdfUpload";
import DistanceField from "../../../../components/ui/DistanceFiled";
import InputFiled from "../../../../components/ui/InputFiled";

export default function NearestLandMarkForm({ ref, modalRef }) {
  const { informationState, informationDispatch } = useInformation();
  const { register, handleSubmit, control } = useForm({
    defaultValues: informationState.nearestStation,
  });

  const onSubmit = (formData) => {
    informationDispatch({ type: NEAREST_STATION, data: formData });
    modalRef.current.close();
  };
  return (
    <form ref={ref} onSubmit={handleSubmit(onSubmit)}>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 space-y-2">
       
        <CustomSelect
          name="landMarkType"
          label="Landmark Type"
          options={[
            { value: "Museum", label: "museum" },
            { value: "school", label: "school" },
            { value: "college", label: "college" },
          ]}
          register={register}
          required={true}
        />
         <DistanceField
          name="distance"
          unitName="distanceUnit"
          label="Distance from property"
          control={control}
          required={true}
          units={["Km", "Mile"]}
        />

        
      </div>
      <InputFiled
          name="landmarkName"
          label="Landmark name"
          placeholder="Enter name"
          register={register}
          required={true}
        />
    </form>
  );
}
