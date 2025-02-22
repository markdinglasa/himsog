import { Id, Logs } from "../../utils";
export interface UserLogTable extends Id, Logs {
  UserId: number; // FK to UserTable
  DateLog: string;
}
export type UserLogTables = UserLogTable[];
export const UserLogInitial: UserLogTable = {
  UserId: 0,
  DateLog: "",
};
