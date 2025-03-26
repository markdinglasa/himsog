import { Id, Logs } from "../../utils";
export interface EventTable extends Id, Logs {
  Title: string;
  Category: string;
  Type: string;
  Image: string | null;
  Description: string;
  ScheduleDate: string;
  Location: string;
  ContactPerson: string;
  ContactNumber: string;
  ContactEmail: string;
  RegistrationLink: string;
  IsValidated: boolean;
}
export type EventTables = EventTable[];
export const EventInitial: EventTable = {
  Title: "Event Title",
  Category: "",
  Type: "",
  Image: null,
  Description:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  ScheduleDate: new Date().toString(),
  Location: "Cebu City",
  ContactPerson: "",
  ContactNumber: "",
  ContactEmail: "",
  RegistrationLink: "",
  IsValidated: false,
};
