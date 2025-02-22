import { Id, Logs } from "../../utils";

export interface RoleTable extends Id, Logs {
  Name: string;
  Description: string | null;
}
export type RoleTables = RoleTable[];
export const RoleInitial: RoleTable = {
  RecNumber: "",
  Name: "",
  Description: null,
  CreatedBy: 0,
  DateCreated: new Date(),
};
