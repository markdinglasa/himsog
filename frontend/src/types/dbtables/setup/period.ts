import { Id, Logs } from "../../utils";

export interface PeriodTable extends Id, Logs {
  Name: string;
  Description: string | null;
  BranchId: number;
}
export type PeriodTables = PeriodTable[];
export const PeriodInitial: PeriodTable = {
  RecNumber: "",
  Name: "",
  Description: null,
  CreatedBy: 0,
  DateCreated: new Date(),
  BranchId: 0,
};
