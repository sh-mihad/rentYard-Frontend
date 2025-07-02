import { useRef } from "react";
import CommonLayout from "../../components/layouts/CommonLayout";
import Button from "../../components/ui/Button";
import usePropertyInfo from "../../hooks/usePropertyInfo";
import InformationItem from "./components/InformationItem";
import PetFees from "./components/PetFees";
import PropertyAddress from "./components/PropertyAddress";

export default function InfoPage() {
  const { propertyState } = usePropertyInfo()
  const modalRef = useRef()
  const formRef = useRef();

  const handleOnAction = () => {
    formRef.current.requestSubmit()
  };

  const onSubmit = (formData) => {
    console.log("formData", formData);
    modalRef.current.close()
  }
  return (
    <CommonLayout
      renderFooterLastButton={
        () => <Button onClick={() => console.log("khaise amare")} type="submit" isBg={true}>Next</Button>
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
            modalRenderProps={
              () => <PropertyAddress ref={formRef} onSubmit={onSubmit} />
            }
          />
          <InformationItem />
          <InformationItem
            ref={modalRef}
            title="Pet fees"
            isRequired={false}
            OnAction={handleOnAction}
            modalRenderProps={
              () => <PetFees />
            }
          />
          <InformationItem />
        </div>
      </section>
    </CommonLayout>
  )
}
