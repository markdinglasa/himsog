import { Id, Logs } from "../../utils";

export interface NotificationTable extends Id, Logs {
  UserId: number;
  Description: string;
  Link: string;
  IsRead: boolean;
  Subject?: string;
  Email?: string | null;
  IsEmail?: boolean;
  HTML?: any;
}
export type NotificationTables = NotificationTable[];
export const NotificationInitial: NotificationTable = {
  UserId: 0,
  Description: "",
  Link: "",
  IsRead: false,
  DateCreated: new Date(),
};
