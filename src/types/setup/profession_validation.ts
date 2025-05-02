import { Id, Logs } from "../generic";

export interface ProfessionValidationTable extends Id, Logs {
  UserId: number;
  IsValidated: number;
  IsRejected: number;
  Remarks: string | null;
}
export type ProfessionValidationTables = ProfessionValidationTable[];
export const ProfessionValidationInitial: ProfessionValidationTable = {
  UserId: 0,
  IsValidated: 0,
  IsRejected: 0,
  Remarks: null,
};
