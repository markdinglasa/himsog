import { Id, Logs } from "../../utils";

export interface TerminalTable extends Id, Logs {
  Name: string;
  BranchId: number;
}
export type TerminalTables = TerminalTable[];
export const TerminalInitial: TerminalTable = {
  RecNumber: "",
  Name: "",
  CreatedBy: 0,
  DateCreated: new Date(),
  BranchId: 0,
};
