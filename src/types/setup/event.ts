import { Id, Logs } from "../generic";

export interface EventTable extends Id, Logs {
  Title: string;
  Category: string;
  Type: string;
  Image: string | null;
  Description: string;
  ScheduleDate: string | Date;
  Location: string;
  ContactPerson: string;
  ContactNumber: string;
  ContactEmail: string;
  RegistrationLink: string;

  TimeStart: string;
  TimeEnd: string;
  Remarks: string | null;
  IsValidated: boolean | null;
}
export type EventTables = EventTable[];
export const EventInitial: EventTable = {
  Title: "",
  Category: "",
  Type: "",
  Image: null,
  Description: "",
  Location: "",
  ContactPerson: "",
  ContactNumber: "",
  ContactEmail: "",
  RegistrationLink: "",

  ScheduleDate: "",
  TimeStart: "",
  TimeEnd: "",
  Remarks: null,
  IsValidated: null,
};
