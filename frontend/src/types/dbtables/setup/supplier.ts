import { Id, Logs } from "../../utils";

export interface SupplierTable extends Id, Logs {
  Name: string;
  Address: string | null;
  ContactNumber: string;
  TermId: number;
  TermName?: string;
  TIN: string | null;
  AccountId: number;
  AccountName?: string;
}
export type SupplierTables = SupplierTable[];
export const SupplierInitial: SupplierTable = {
  RecNumber: "",
  Name: "",
  Address: null,
  ContactNumber: "",
  TermId: 0,
  TIN: null,
  AccountId: 0,
  CreatedBy: 0,
  DateCreated: new Date(),
};
