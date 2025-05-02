import { Id, Logs } from "../../utils";

export interface ProfessionSpecialistTable extends Id, Logs {
  UserId: number;
  Title: string;
  Description: string | null;
  Experience: number;
}
export type ProfessionSpecialistTables = ProfessionSpecialistTable[];
export const ProfessionSpecialistInitial: ProfessionSpecialistTable = {
  UserId: 0,
  Title: "",
  Description: null,
  Experience: 0,
};
