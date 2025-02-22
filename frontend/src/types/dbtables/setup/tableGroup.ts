import { Id, Logs } from "../../utils";

export interface TableGroupTable extends Id, Logs {
  Name: string;
}
export type TableGroupTables = TableGroupTable[];
export const TableGroupInitial: TableGroupTable = {
  Name: "",
  CreatedBy: 0,
  DateCreated: new Date(),
};
