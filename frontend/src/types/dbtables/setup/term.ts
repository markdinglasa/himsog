import { Id, Logs } from "../../utils";

export interface TermTable extends Id, Logs {
  Name: string;
  NoDays: number;
}

export type TermTables = TermTable[];
export const TermInitial: TermTable = {
  RecNumber: "",
  Name: "",
  NoDays: 0,
  CreatedBy: 0,
  DateCreated: new Date(),
};
