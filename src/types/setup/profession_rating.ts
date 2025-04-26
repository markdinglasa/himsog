import { Id, Logs } from "../generic";

export interface ProfessionRatingTable extends Id, Logs {
  UserId: number;
  Rate: number;
  Remarks: string | null;
  IsHidden: boolean;
}
export type ProfessionRatingTables = ProfessionRatingTable[];
export const ProfessionRatingInitial: ProfessionRatingTable = {
  UserId: 0,
  Rate: 0,
  Remarks: null,
  IsHidden: false,
};
