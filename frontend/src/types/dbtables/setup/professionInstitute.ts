import { Id, Logs } from "../../utils";

export interface ProfessionInstituteTable extends Id, Logs {
  UserId: number;
  Name: string;
  Position: string;
  Address: string;
  DateStarted: string;
  DateEnded: string;
  IsCurrentWork: boolean;
}
export type ProfessionInstituteTables = ProfessionInstituteTable[];
export const ProfessionInstituteInitial: ProfessionInstituteTable = {
  Name: "",
  Position: "",
  Address: "",
  DateStarted: "",
  DateEnded: "",
  UserId: 0,
  IsCurrentWork: false,
};
