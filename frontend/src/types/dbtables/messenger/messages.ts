import { Id, Logs } from "../../utils";

export interface Message extends Id, Logs {
  ConvoId: number;
  SenderId: number;
  Contends: string;
  IsRead: boolean;
}
export type Messages = Message[];
export const MessageInitial: Message = {
  ConvoId: 0,
  SenderId: 0,
  Contends: "",
  IsRead: false,
};
