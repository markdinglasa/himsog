import { Id, Logs } from "../../utils";

export interface CustomerTable extends Id, Logs {
  Name: string;
  Address: string | null;
  ContactPerson: string | null;
  ContactNumber: string | null;
  CreditLimit: number;
  TermId: number;
  TermName?: string;
  TIN: string | null;
  WithReward: boolean;
  RewardConversion: number;
  RewardNumber: string;
  AccountId: number;
  AccountName?: string;
  DefaultPrice: number | null;
}
export type CustomerTables = CustomerTable[];
export const CustomerInitial: CustomerTable = {
  RecNumber: "",
  Name: "",
  Address: null,
  ContactPerson: null,
  ContactNumber: null,
  CreditLimit: 0,
  TermId: 0,
  TIN: null,
  WithReward: false,
  RewardConversion: 0,
  RewardNumber: "",
  AccountId: 0,
  DefaultPrice: 0,
  CreatedBy: 0,
  DateCreated: new Date(),
};
