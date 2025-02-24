import { Id, Logs } from "../generic";

export interface EventTable extends Id, Logs {
  Title: string;
  Category: string;
  Type: string;
  Image: string | null;
  Description: string;
  ScheduleDate: string;
  ScheduleTime: string;
  Location: string;
  ContactPerson: string;
  ContactNumber: string;
  ContactEmail: string;
  RegistrationLink: string;
  IsValidated: boolean;
}
export type EventTables = EventTable[];
export const EventInitial: EventTable = {
  Title: "",
  Category: "",
  Type: "",
  Image: null,
  Description: "",
  ScheduleDate: "",
  ScheduleTime: "",
  Location: "",
  ContactPerson: "",
  ContactNumber: "",
  ContactEmail: "",
  RegistrationLink: "",
  IsValidated: false,
};
