import { Id, Logs } from "../../utils";

export interface UnitTable extends Id, Logs {
  Name: string;
  Description: string | null;
}
export type UnitTables = UnitTable[];
export const UnitInitial: UnitTable = {
  RecNumber: "",
  Name: "",
  Description: null,
  CreatedBy: 0,
  DateCreated: new Date(),
};
