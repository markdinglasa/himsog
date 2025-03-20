import { Id, Logs } from "../../utils";
import { CertificateTables } from "./certificate";

export interface ProfessionTable extends Id, Logs {
  UserId: number; // FK to UserTable
  Title: string;
  LicenseNumber: string;
  YearsExp: number;
  Description: string;
  Certifications?: CertificateTables; // FK to CertificateTable
  IsVerified: boolean | null;
  Remarks: string | null;
}
export type ProfessionTables = ProfessionTable[];
export const ProfessionInitial: ProfessionTable = {
  UserId: 0,
  Title: "",
  LicenseNumber: "",
  YearsExp: 0,
  Description: "",
  IsVerified: null,
  Remarks: null,
};
