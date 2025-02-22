import { Id, Logs } from "../../utils";
export interface UnitTable extends Id, Logs {
  Name: string;
  Description: string | null;
}
export type UnitTables = UnitTable[];
export const UnitInitial: UnitTable = {
  Name: "",
  Description: null,
};
