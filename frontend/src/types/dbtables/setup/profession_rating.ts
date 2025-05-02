import { Id, Logs } from "../../utils";
export interface ProfessionRatingTable extends Id, Logs {
  UserId: number;
  UserPhoto?: string;
  UserFullname?: string;
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
