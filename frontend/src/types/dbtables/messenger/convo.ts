import { Id, Logs } from "../../utils";

export interface Convo extends Id, Logs {
  ChatId: number;
  Name: string;
  LastMessage: string;
}
export type Convos = Convo[];
export const ConvoInitial: Convo = {
  ChatId: 0,
  Name: "",
  LastMessage: "",
};
