// eslint-disable-next-line no-unused-vars
import { motion } from "motion/react";
import { useForm } from 'react-hook-form';
import CustomSelect from '../../../../components/ui/CustomSelect';
import InputFiled from '../../../../components/ui/InputFiled';
import useInformation from '../../../../hooks/useInformation';
import { LEASING_INFO } from '../../../../reducers/informationReducers';
const countryOptions = [
    { label: "Bangladesh", value: 'Bangladesh' },
    { label: "Pakistan", value: 'Pakistan' },
    { label: "USA", value: 'USA' },
]
const stateOptions = [
    { label: "Dhaka", value: 'Dhaka' },
    { label: "Chottogram", value: 'Chottogram' },
    { label: "Khulna", value: 'Khulna' },
]
export default function LeasingInfoForm({ ref, modalRef }) {
    const { informationState, informationDispatch } = useInformation()
    const { register, handleSubmit, watch } = useForm({
        defaultValues: {
            ...informationState.leasingInfo,
            sameAddressAsProperty: true
        }
    })
    const sameAddress = watch("sameAddressAsProperty");
    const onSubmit = (formData) => {
        console.log("formData", formData);
        informationDispatch({ type: LEASING_INFO, data: formData })
        modalRef.current.close()
    }
    return (
        <form ref={ref} onSubmit={handleSubmit(onSubmit)}>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-3 space-y-1'>
                <InputFiled
                    name="leasingManagerName"
                    label="Leasing manager name"
                    placeholder="Alex Johan"
                    register={register}
                    required={true}
                />
                <InputFiled
                    name="phoneNumber"
                    label="Leasing manager phone number"
                    placeholder="+880"
                    register={register}
                    required={true}
                />
                <InputFiled
                    name="leasingManagerEmail"
                    label="Leasing Manager Email"
                    placeholder="leasing@rentyeard.com"
                    register={register}
                    required={true}
                />

                <div className='mt-4 flex justify-start items-center gap-2'>
                    <input id='sameAddressAsProperty'
                        name='sameAddressAsProperty' type='checkbox'
                        {...register("sameAddressAsProperty")}
                    ></input>
                    <label htmlFor="sameAddressAsProperty">Address(same as property)</label>
                </div>
            </div>
            {
                !sameAddress && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                         transition={{ duration: 0.3, ease: "easeOut" }}
                        className='grid grid-cols-1 lg:grid-cols-3 gap-3 space-y-1'>
                        <CustomSelect
                            name="country"
                            label="Country/Region"
                            options={countryOptions}
                            register={register}
                            required={true}
                        />
                        <InputFiled
                            name="street"
                            label="Street address"
                            placeholder="111 Austin Ave"
                            register={register}
                            required={true}
                        />
                        <InputFiled
                            name="unit"
                            label="Apt, suit,unit(if applicable)"
                            placeholder="111 Austin Ave"
                            register={register}
                            required={false}
                        />
                        <InputFiled
                            name="city"
                            label="City/Towns"
                            placeholder="dallas"
                            register={register}
                            required={true}
                        />
                        <CustomSelect
                            name="state"
                            label="State/Territory"
                            options={stateOptions}
                            register={register}
                            required={true}
                        />
                        <InputFiled
                            name="zipCode"
                            label="Zip code"
                            placeholder="75061"
                            register={register}
                            required={true}
                        />
                    </motion.div>
                )
            }

        </form>
    )
}
