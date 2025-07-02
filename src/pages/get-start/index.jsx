import CommonLayout from "../../components/CommonLayout";
import Button from "../../components/ui/Button";

export default function GetStartPage() {
  return (
    <CommonLayout
      renderFooterLastButton={
        () => <Button isBg={true} onClick={() => console.log("get started button click")}>Get Started</Button>
      }
      renderTopCornerButton={
        () => <Button onClick={console.log("exit button clicked")}>Exit</Button>
      }
    >
      <div>Get Start page</div>
    </CommonLayout>
  )
}
