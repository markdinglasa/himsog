import { Id, Logs } from "../generic";

export interface ProfessionSpecialistTable extends Id, Logs {
  UserId: number;
  Title: string;
  Description: string | null;
  Experience: number;
  IsCurrentWork: boolean;
}
export type ProfessionSpecialistTables = ProfessionSpecialistTable[];
export const ProfessionSpecialistInitial: ProfessionSpecialistTable = {
  UserId: 0,
  Title: "",
  Description: "",
  Experience: 0,
  IsCurrentWork: false,
};
