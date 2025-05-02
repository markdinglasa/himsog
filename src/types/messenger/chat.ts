import { Id, Logs } from "../generic";

export interface Chat extends Id, Logs {
  AdvocateId: number;
  NutritionistId: number;
}
export type Chats = Chat[];
export const ChatInitial: Chat = {
  AdvocateId: 0,
  NutritionistId: 0,
};
