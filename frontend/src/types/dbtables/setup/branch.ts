import { Id, Logs } from "../../utils";

export interface BranchTable extends Id, Logs {
  Name: string;
  Description: string | null;
}
export type BranchTables = BranchTable[];
export const BranchInitial: BranchTable = {
  Name: "",
  Description: null,
  RecNumber: "",
};
