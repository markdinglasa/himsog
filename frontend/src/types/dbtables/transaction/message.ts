import { Id, Logs } from "../../utils";

export interface MessageTable extends Id, Logs {
  ConvoId: number;
  SenderId: number;
  Contents: string;
  IsRead: boolean;
}
export type MessageTables = MessageTable[];
export const MessageInitial: MessageTable = {
  ConvoId: 0,
  SenderId: 0,
  Contents: "",
  IsRead: false,
};
