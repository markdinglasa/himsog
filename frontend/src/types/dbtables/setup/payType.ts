import { Id, Logs } from "../../utils";

export interface PayTypeTable extends Id, Logs {
  Name: string;
  AccountId: number;
  AccountName?: string;
  SortNumber: number | null;
  BranchId: number;
}
export type PayTypeTables = PayTypeTable[];
export const PayTypeInitial: PayTypeTable = {
  RecNumber: "",
  Name: "",
  AccountId: 0,
  SortNumber: null,
  CreatedBy: 0,
  DateCreated: new Date(),
  BranchId: 0,
};
