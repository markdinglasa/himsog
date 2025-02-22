import { Id, Logs } from "../../utils";

export enum FeedbackType {
  DEFAULT = "",
  EXPERT = "expert",
  MEAL = "meal",
}

export interface FeedbackTable extends Id, Logs {
  UserId: number;
  Type: FeedbackType;
  MealPlanId: number | null;
  Comments: string | null;
  Rating: number;
}
export type FeedbackTables = FeedbackTable[];
export const FeedbackInitial: FeedbackTable = {
  UserId: 0,
  Type: FeedbackType.DEFAULT,
  MealPlanId: null,
  Comments: null,
  Rating: 0,
};
