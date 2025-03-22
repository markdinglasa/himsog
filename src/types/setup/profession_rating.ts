import { Id, Logs } from "../generic";

export interface ProfessionRatingTable extends Id, Logs {
  ProfessionId: number;
  Rating: number;
  Remarks: string | null;
}
export type ProfessionRatingTables = ProfessionRatingTable[];
export const ProfessionRatingInitial: ProfessionRatingTable = {
  ProfessionId: 0,
  Rating: 0,
  Remarks: null,
};
