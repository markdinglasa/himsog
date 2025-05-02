import { Id, Logs } from "../generic";

export interface ProfessionTable extends Id, Logs {
  UserId: number; // FK to UserTable
  Title: string;
  LicenseNumber: string;
  Description: string;
  Issuer: string;
  DateIssued: string | Date;
  DateExpired: string | Date;
  Document: string | null;
}
export type ProfessionTables = ProfessionTable[];
export const ProfessionInitial: ProfessionTable = {
  UserId: 0,
  Title: "",
  LicenseNumber: "",
  Description: "",
  Issuer: "",
  DateIssued: "",
  DateExpired: "",
  Document: null,
};
