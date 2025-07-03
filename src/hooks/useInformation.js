import { useContext } from "react";
import { InformationContext } from "../contexts";

export default function useInformation() {
  const { informationState, informationDispatch } = useContext(InformationContext);
  return { informationState, informationDispatch };
}
