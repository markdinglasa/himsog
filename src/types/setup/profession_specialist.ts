import { Id, Logs } from "../generic";

export interface ProfessionSpecialistTable extends Id, Logs {
  UserId: number;
  Title: string;
  Description: string;
  Experience: number;
}
export type ProfessionSpecialistTables = ProfessionSpecialistTable[];
export const ProfessionSpecialistInitial: ProfessionSpecialistTable = {
  UserId: 0,
  Title: "",
  Description: "",
  Experience: 0,
};
