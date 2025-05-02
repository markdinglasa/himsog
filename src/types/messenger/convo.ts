import { Id, Logs } from "../generic";

export interface Convo extends Id, Logs {
  ChatId: number;
  UserId: number;
  Name: string;
  LastMessage: string;
}
export type Convos = Convo[];
export const ConvoInitial: Convo = {
  UserId: 0,
  Name: "",
  LastMessage: "",
  ChatId: 0,
};
