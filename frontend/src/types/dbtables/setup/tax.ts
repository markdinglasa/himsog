import { Id, Logs } from "../../utils";

export interface TaxTable extends Id, Logs {
  Name: string;
  Description: string | null;
  Rate: number;
  AccountId: number;
  TaxCode: string;
  AccountName?: string;
}
export type TaxTables = TaxTable[];
export const TaxInitial: TaxTable = {
  RecNumber: "",
  Name: "",
  Description: null,
  Rate: 0,
  AccountId: 0,
  CreatedBy: 0,
  DateCreated: new Date(),
  TaxCode: "",
};
