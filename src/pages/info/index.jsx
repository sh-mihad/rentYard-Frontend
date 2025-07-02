import CommonLayout from "../../components/layouts/CommonLayout";
import Button from "../../components/ui/Button";
import usePropertyInfo from "../../hooks/usePropertyInfo";

export default function InfoPage() {
  const {propertyState}=usePropertyInfo()
  return (
    <CommonLayout
      renderFooterLastButton={
        () => <Button onClick={()=>console.log("click start")} type="submit" isBg={true}>Next</Button>
      }
      renderTopCornerButton={
        () => <Button onClick={() => console.log("exit button clicked")}>Save & Exit</Button>
      }
    >
    <section>
      <h2>{propertyState?.propertyType}</h2>
    </section>
    </CommonLayout>
  )
}
