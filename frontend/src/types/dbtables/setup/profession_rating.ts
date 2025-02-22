import { Id, Logs } from "../../utils";
export interface ProfessionRatingTable extends Id, Logs {
  ProfessionId: number;
  Rating: number;
  Remarks: string | null;
}
