import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import CommonLayout from "../../components/layouts/CommonLayout";
import Button from "../../components/ui/Button";
import usePropertyInfo from "../../hooks/usePropertyInfo";
import { OTHERS_ADDITIONAL_DATA } from "../../reducers/propertyTypeReduces";
import LandLord from "./components/LandLord";
import PropertyManagement from "./components/PropertyManagement";
import PropertyTypeOption from "./components/PropertyTypeOption";
import Realtor from "./components/Realtor";
import RoleType from "./components/RoleType";

export default function GetStartPage() {
  const formRef = useRef();

  const { propertyState, dispatch } = usePropertyInfo()
  const navigate = useNavigate()

  const handleGetStartedClick = () => {
    formRef.current.requestSubmit()
  }
  const handleFormSubmit = (formData) => {
    dispatch({type:OTHERS_ADDITIONAL_DATA,data:{...formData}})
    navigate("/information")
  }

  return (
    <CommonLayout
      renderFooterLastButton={
        () => <Button onClick={handleGetStartedClick} type="submit" disabled={!propertyState.propertyType || !propertyState.userRole} isBg={true}>Get Started</Button>
      }
      renderTopCornerButton={
        () => <Button onClick={() => console.log("exit button clicked")}>Exit</Button>
      }
    >
      <PropertyTypeOption />
      <RoleType />
      {
        propertyState.userRole === "Landlord" && <LandLord ref={formRef} onSubmit={handleFormSubmit} />
      }
      {
        propertyState.userRole === "Realtor" && <Realtor ref={formRef} onSubmit={handleFormSubmit} />
      }
      {
        propertyState.userRole === "Property management company" && <PropertyManagement ref={formRef} onSubmit={handleFormSubmit} />
      }


    </CommonLayout>
  )
}
