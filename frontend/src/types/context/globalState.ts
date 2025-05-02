import { createContext } from "react";

export interface GlobalStateType {
  record: {
    Records: any[];
    Record: any;
    RecordId: number;
  };
  setRecord: (record: GlobalStateType["record"]) => void;
}

export const GlobalStateContext = createContext(
  <GlobalStateType | undefined>undefined,
);
