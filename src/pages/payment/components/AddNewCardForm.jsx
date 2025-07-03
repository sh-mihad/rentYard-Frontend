import React from "react";
import { useForm } from "react-hook-form";
import DateField from "../../../components/ui/DateFiled";
import { CloudCog } from "lucide-react";
import InputFiled from "../../../components/ui/InputFiled";

export default function AddNewCardForm({ ref, onSubmit }) {
  const { register, handleSubmit } = useForm();
 
  return (
    <form ref={ref} onSubmit={handleSubmit(onSubmit)}>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 space-y-1">
        <InputFiled
          name="nameOnCard"
          label="Name On Card"
          placeholder="Alex Jones"
          register={register}
          required={true}
        />
        <InputFiled
          name="cardNumber"
          label="Card Number"
          placeholder="0000-0000-0000-0000"
          register={register}
          required={true}
        />
        <DateField
          name="expireDate"
          label="Expire Date"
          placeholder="MM/YY"
          register={register}
          required={false}
        />
        <InputFiled
          name="cvc"
          label="CVC"
          placeholder="123"
          register={register}
          required={true}
        />
      </div>
    </form>
  );
}
