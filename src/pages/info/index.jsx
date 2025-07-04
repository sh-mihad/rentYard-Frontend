import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import CommonLayout from "../../components/layouts/CommonLayout";
import Button from "../../components/ui/Button";
import usePropertyInfo from "../../hooks/usePropertyInfo";
import Charges from "./components/charges/Charges";
import ChargesForm from "./components/charges/ChargesForm";
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
import RentFrequency from "./components/rentFrequency/RentFrequency";
import RentFrequencyForm from "./components/rentFrequency/RentFrequencyForm";
import ApplicationAgreementForm from "./components/applicationAgreement/ApplicationAgreementForm";
import ApplicationAgreement from "./components/applicationAgreement/ApplicationAgreement";
import AboutPropertyForm from "./components/AboutProperty/AboutPropertyForm";
import AboutProperty from "./components/AboutProperty/AboutProperty";
import PropertyGallery from "./components/propertyGallery/PropertyGallery";
import CommunityForm from "./components/communitys/CommunitysForm";
import ParkingForm from "./components/parking/ParkingForm";
import NearestEducationForm from "./components/nearestEducation/NearestEducationForm";
import NearestStationForm from "./components/NearestStation/NearestStationForm";
import NearestLandMarkForm from "./components/landMark/NearestLandMarkForm";
import UtilityProviderForm from "./components/utilityProvider/utilityProviderForm";

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
      <section className="max-w-6xl mx-auto  ">
        <h2 className="text-2xl font-semibold text-[#272B35] mb-6">{propertyState?.propertyType} Information</h2>
        <div className="flex flex-col lg:flex-row gap-3">
          {/* left side */}
          <div className="w-full space-y-3">
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
              respectiveDataRenderProps={() => <PropertyAddress />}
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
              respectiveDataRenderProps={() => <LeasingInfo />}
            />
            {/*Charges info*/}
            <InformationItem
              ref={modalRef}
              title="Charges"
              isRequired={true}
              OnAction={handleOnAction}
               propertiesName="charges"
              modalRenderProps={
                () => <ChargesForm ref={formRef} modalRef={modalRef} />
              }
               respectiveDataRenderProps={() => <Charges />}
            />
            {/*Rent frequency & payment reminder*/}
            <InformationItem
              ref={modalRef}
              title="Rent frequency & payment reminder"
              isRequired={true}
              OnAction={handleOnAction}
              modalRenderProps={
                () => <RentFrequencyForm ref={formRef} modalRef={modalRef} />
              }
               respectiveDataRenderProps={() => <RentFrequency />}
            />
            {/*Application agreement*/}
            <InformationItem
              ref={modalRef}
              title="Application agreement"
              OnAction={handleOnAction}
              modalRenderProps={
                () => <ApplicationAgreementForm ref={formRef} modalRef={modalRef} />
              }
               respectiveDataRenderProps={() => <ApplicationAgreement />}
            />
            {/*About the property*/}
            <InformationItem
              ref={modalRef}
              title="About the property"
              OnAction={handleOnAction}
              modalRenderProps={
                () => <AboutPropertyForm ref={formRef} modalRef={modalRef} />
              }
               respectiveDataRenderProps={() => <AboutProperty />}
            />
            {/*Community’s amenity/features*/}
            <InformationItem
              ref={modalRef}
              title="Community’s amenity/features"
              OnAction={handleOnAction}
              optionalMsg="but recommended"
              modalRenderProps={
                () => <CommunityForm ref={formRef} modalRef={modalRef} />
              }
               respectiveDataRenderProps={() => <AboutProperty />}
            />
          </div>


          {/* right side */}
          <div className="w-full space-y-3">
            {/* pet fees*/}
            <InformationItem
              ref={modalRef}
              title="Pet Fees"
              isRequired={false}
              OnAction={handleOnAction}
              propertiesName="petFees"
              optionalMsg=", add fees if you allow pet"
              modalRenderProps={
                () => <PetFeesForm ref={formRef} modalRef={modalRef} />
              }
              respectiveDataRenderProps={() => <PetFees />}
            />
            {/*Parking*/}
            <InformationItem
              ref={modalRef}
              title="Parking(optional)"
              isRequired={false}
              OnAction={handleOnAction}
              modalRenderProps={
                () => <ParkingForm ref={formRef} modalRef={modalRef} />
              }
            />
            {/*Nearest educational institution*/}
            <InformationItem
              ref={modalRef}
              title="Nearest educational institution"
              isRequired={false}
              OnAction={handleOnAction}
              modalRenderProps={
                () => <NearestEducationForm ref={formRef} modalRef={modalRef} />
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
                () => <NearestStationForm ref={formRef} modalRef={modalRef} />
              }
            />
            {/* Nearest landmark*/}
            <InformationItem
              ref={modalRef}
              title="Nearest landmark"
              isRequired={false}
              OnAction={handleOnAction}
              optionalMsg="but recommended"
              modalRenderProps={
                () => <NearestLandMarkForm ref={formRef} modalRef={modalRef} />
              }
            />
            {/* Utilities provider*/}
            <InformationItem
              ref={modalRef}
              title="Utilities provider"
              isRequired={false}
              OnAction={handleOnAction}
              optionalMsg="but recommended"
              modalRenderProps={
                () => <UtilityProviderForm ref={formRef} modalRef={modalRef} />
              }
            />
          </div>
        </div>
        <div className="py-3">
          <PropertyGallery/>
        </div>
      </section>
    </CommonLayout>
  )
}
