import { Id, Logs } from "../generic";

export interface ProfessionInstituteTable extends Id, Logs {
  UserId: number;
  Name: string;
  Position: string;
  Address: string;
  DateStarted: string;
  DateEnded: string;
}
export type ProfessionInstituteTables = ProfessionInstituteTable[];
export const ProfessionInstituteInitial: ProfessionInstituteTable = {
  Name: "",
  Position: "",
  Address: "",
  DateStarted: "",
  DateEnded: "",
  UserId: 0,
};
