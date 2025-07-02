import { useState } from "react";
import CommonLayout from "../../components/layouts/CommonLayout";
import Button from "../../components/ui/Button";
import usePropertyInfo from "../../hooks/usePropertyInfo";

export default function InfoPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { propertyState } = usePropertyInfo()

  const handleAction = () => {
    console.log("Action button clicked!");
    setIsModalOpen(false);
  };

  return (
    <CommonLayout
      renderFooterLastButton={
        () => <Button onClick={() => setIsModalOpen(true)} type="submit" isBg={true}>Next</Button>
      }
      renderTopCornerButton={
        () => <Button onClick={() => console.log("exit button clicked")}>Save & Exit</Button>
      }
    >
      <section>
       hello mello
      </section>
    </CommonLayout>
  )
}
