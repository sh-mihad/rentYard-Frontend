import React from "react";
import useInformation from "../../../../hooks/useInformation";
import { useForm } from "react-hook-form";
import { ABOUT_PROPERTY } from "../../../../reducers/informationReducers";
import Filed from "../../../../components/ui/Filed";

export default function AboutPropertyForm({ ref, modalRef }) {
  const { informationState, informationDispatch } = useInformation();
  const { register, handleSubmit,  } = useForm({
    defaultValues: informationState.aboutProperty,
  });
  const onSubmit = (formData) => {
    informationDispatch({ type: ABOUT_PROPERTY, data: formData });
    modalRef.current.close();
  };
  return (
    <form ref={ref} onSubmit={handleSubmit(onSubmit)}>
      <div className="grid grid-cols-1 lg:grid-cols-1  space-y-2">
      <textarea {...register("aboutProperty")} name="aboutProperty" className="border border-gray-200 p-3 rounded-lg" placeholder="Type message here" rows={6}></textarea>
      </div>
    </form>
  );
}
