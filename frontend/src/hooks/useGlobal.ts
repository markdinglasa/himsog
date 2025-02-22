import { useContext } from "react";
import { GlobalStateContext } from "../types";

export const useGlobal = () => {
  const context = useContext(GlobalStateContext);
  if (context === undefined)
    throw new Error("useGlobal must be used within an GlobalStateProvider");
  return context;
};
