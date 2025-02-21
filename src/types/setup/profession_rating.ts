import { Id, Logs } from "../generic";

export interface ProfessionRatingTable extends Id, Logs {
  ProfessionId: number;
  Rating: number;
  Remarks: string | null;
}
