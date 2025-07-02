import { useState } from "react";
import CommonLayout from "../../components/layouts/CommonLayout";
import Button from "../../components/ui/Button";
import PropertyTypeOption from "./components/PropertyTypeOption";

export default function GetStartPage() {
  const [propertyType,setPropertyType] = useState("")
  return (
    <CommonLayout
      renderFooterLastButton={
        () => <Button isBg={true} onClick={() => console.log("get started button click")}>Get Started</Button>
      }
      renderTopCornerButton={
        () => <Button onClick={()=>console.log("exit button clicked")}>Exit</Button>
      }
    >
     <PropertyTypeOption props={{propertyType,setPropertyType}}/>
     <PropertyTypeOption/>
    
     
    </CommonLayout>
  )
}
