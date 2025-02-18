import { Logs, Id } from "../generic";

export interface NotificationTable extends Id, Logs {
  UserId: number;
  Description: string;
  Link: string;
  Status: boolean;
  Subject?: string;
  IsEmail?: boolean;
  HTML?: any;
}
export type NotificationTables = NotificationTable[];
export const NotificationInitial: NotificationTable = {
  UserId: 0,
  Description: "",
  Link: "",
  Status: false,
  DateCreated: new Date(),
};
