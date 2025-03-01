import { Id, Logs } from "../generic";

export interface EventTable extends Id, Logs {
  Title: string;
  Category: string;
  Type: string;
  Image: string | null;
  Description: string;
  Schedule: string;
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

  Location: "",
  ContactPerson: "",
  ContactNumber: "",
  ContactEmail: "",
  RegistrationLink: "",
  IsValidated: false,
  Schedule: "",
};
