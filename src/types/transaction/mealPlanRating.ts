import { Id, Logs } from "../generic";

export interface MealPlanRating extends Id, Logs {
  MealPlanId: number;
  Rate: number;
  Remarks: string | null;
}
export type MealPlanRatings = MealPlanRating[];
export const MealPlanRatingInitial: MealPlanRating = {
  MealPlanId: 0,
  Rate: 0,
  Remarks: null,
};
