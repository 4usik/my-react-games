import { useContext } from "react";
import { HeaderContext } from "../hoc/HeaderProvider";

export function useInfo() {
  return useContext(HeaderContext);
}
