import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import CommonLayout from "../../components/layouts/CommonLayout";
import Button from "../../components/ui/Button";
import usePropertyInfo from "../../hooks/usePropertyInfo";
import Charges from "./components/Charges";
import InformationItem from "./components/InformationItem";
import LeasingInfo from "./components/leasingInfo/LeasingInfo";
import LeasingInfoForm from "./components/leasingInfo/LeasingInfoForm";
import NearestEducational from "./components/NearestEducational";
import NearestStation from "./components/NearestStation";
import Parking from "./components/Parking";
import PetFees from "./components/petFees/PetFees";
import PetFeesForm from "./components/petFees/PetFeesForm";
import PropertyAddress from "./components/propertyAdress/PropertyAddress";
import PropertyAddressForm from "./components/propertyAdress/PropertyAddressForm";
import RentFrequency from "./components/RentFrequency";

export default function InfoPage() {
  const { propertyState } = usePropertyInfo()
  const modalRef = useRef()
  const formRef = useRef();

  const handleOnAction = () => {
    formRef.current.requestSubmit()
  };
  const navigate = useNavigate()

  return (
    <CommonLayout
      renderFooterLastButton={
        () => <Button onClick={() => navigate("/payment")} type="button" isBg={true}>Next</Button>
      }
      renderTopCornerButton={
        () => <Button onClick={() => console.log("exit button clicked")}>Save & Exit</Button>
      }
    >
      <section className="max-w-6xl mx-auto  py-6">
        <h2 className="text-xl font-semibold text-[#272B35] mb-6">{propertyState?.propertyType}</h2>
        <div className="grid grid-cols-1 gap-3 lg:grid-cols-2">
          <InformationItem
            ref={modalRef}
            title="Property address"
            isRequired={true}
            OnAction={handleOnAction}
            propertiesName="propertyAddress"
            isEdit={true}
            modalRenderProps={
              () => <PropertyAddressForm ref={formRef} modalRef={modalRef} />
            }
            respectiveDataRenderProps={()=><PropertyAddress/>}
          />
          {/* pet fees*/}
          <InformationItem
            ref={modalRef}
            title="Pet Fees"
            isRequired={false}
            OnAction={handleOnAction}
             
            optionalMsg="add fees if you allow pet"
            modalRenderProps={
              () => <PetFeesForm ref={formRef} modalRef={modalRef} />
            }
             respectiveDataRenderProps={()=><PetFees/>}
          />
          {/*leasing info*/}
          <InformationItem
            ref={modalRef}
            title="Leasing Info"
            isRequired={true}
            OnAction={handleOnAction}
            propertiesName="leasingInfo"
            modalRenderProps={
              () => <LeasingInfoForm ref={formRef} modalRef={modalRef} />
            }
             respectiveDataRenderProps={()=><LeasingInfo/>}
          />
          {/*Parking*/}
          <InformationItem
            ref={modalRef}
            title="Parking(optional)"
            isRequired={false}
            OnAction={handleOnAction}
            modalRenderProps={
              () => <Parking ref={formRef} modalRef={modalRef} />
            }
          />
          {/*Charges info*/}
          <InformationItem
            ref={modalRef}
            title="Charges"
            isRequired={true}
            OnAction={handleOnAction}
            modalRenderProps={
              () => <Charges ref={formRef} modalRef={modalRef} />
            }
          />
          {/*Nearest educational institution*/}
          <InformationItem
            ref={modalRef}
            title="Nearest educational institution"
            isRequired={false}
            OnAction={handleOnAction}
            modalRenderProps={
              () => <NearestEducational ref={formRef} modalRef={modalRef} />
            }
          />
          {/*Rent frequency & payment reminder*/}
          <InformationItem
            ref={modalRef}
            title="Rent frequency & payment reminder"
            isRequired={true}
            OnAction={handleOnAction}
            modalRenderProps={
              () => <RentFrequency ref={formRef} modalRef={modalRef} />
            }
          />
          {/* Nearest stations*/}
          <InformationItem
            ref={modalRef}
            title="Nearest stations"
            isRequired={false}
            OnAction={handleOnAction}
            optionalMsg="but recommended"
            modalRenderProps={
              () => <NearestStation ref={formRef} modalRef={modalRef} />
            }
          />
        </div>
      </section>
    </CommonLayout>
  )
}
