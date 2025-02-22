import { Id, Logs } from "../../utils";

export interface AccountTable extends Id, Logs {
  Name: string;
  AccountType: string;
  AccountCode: string;
}
export type AccountTables = AccountTable[];
export const AccountInitial: AccountTable = {
  Name: "",
  AccountType: "",
  RecNumber: "",
  AccountCode: "",
};
