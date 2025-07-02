import { useContext } from "react";
import { PropertyContext } from "../contexts";

export default function usePropertyInfo() {
  const { propertyState, dispatch } = useContext(PropertyContext);
  return { propertyState, dispatch };
}
