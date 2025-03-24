import { Id, Logs } from "../../utils";

export interface ConvoTable extends Id, Logs {
  ChatId?: number;
  Name?: string;
  LastMessage: string;
  Date: string | Date;
  Contact?: number;
  ContactImage?: string;
  IsUnread?: number;
}

export type ConvoTables = ConvoTable[];
export const ConvoInitial: ConvoTable = {
  LastMessage: "",
  Date: "",
};
