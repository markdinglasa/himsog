import { Id, Logs } from "../generic";

export interface Message extends Id, Logs {
  ChatId: number;
  SenderId: number;
  Contents: string;
  IsRead: boolean;
}
export type Messages = Message[];
export const MessageInitial: Message = {
  ChatId: 0,
  SenderId: 0,
  Contents: "",
  IsRead: false,
};
