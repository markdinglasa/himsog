import { Logs } from "../../utils";

export interface AuditTrailTable extends Logs {
  UserId: number;
  UserName?: string;
  Table: string;
  Record: number | null;
  Action: string | null;
}
export type AuditTrailTables = AuditTrailTable[];
export const AuditTrailInitial: AuditTrailTable = {
  UserId: 0,
  Table: "",
  Record: null,
  Action: null,
  DateCreated: new Date(),
};
