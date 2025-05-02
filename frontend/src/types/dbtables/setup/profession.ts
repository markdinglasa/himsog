import { Id, Logs } from "../../utils";

export interface ProfessionTable extends Id, Logs {
  UserId: number; // FK to UserTable
  Title: string;
  LicenseNumber: string;
  Issuer: string;
  DateIssued: string;
  DateExpired: string;
  Document: string | null;
}
export type ProfessionTables = ProfessionTable[];
export const ProfessionInitial: ProfessionTable = {
  UserId: 0,
  Title: "",
  LicenseNumber: "",
  Issuer: "",
  DateIssued: "",
  DateExpired: "",
  Document: null,
};
