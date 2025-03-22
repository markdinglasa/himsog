import { Id, Logs } from "../../utils";

export interface ProfessionValidationTable extends Id, Logs {
  UserId: number;
  IsValidated: boolean;
  IsRejected: boolean;
  Remarks: string | null;
}
export type ProfessionValidationTables = ProfessionValidationTable[];
export const ProfessionValidationInitial: ProfessionValidationTable = {
  UserId: 0,
  IsValidated: false,
  IsRejected: false,
  Remarks: null,
};
