import { Id, Logs } from "../../utils";

export interface NotificationTable extends Id, Logs {
  UserId: number;
  Description: string;
  Link: string;
  IsRead: boolean;
  Subject?: string;
  IsEmail?: boolean;
  HTML?: any;
}
export type NotificationTables = NotificationTable[];
export const NotificationInitial: NotificationTable = {
  RecNumber: "",
  Description: "",
  UserId: 0,
  Link: "",
  IsRead: false,
  DateCreated: new Date(),
};
