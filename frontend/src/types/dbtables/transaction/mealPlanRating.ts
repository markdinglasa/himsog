import { Id, Logs } from "../../utils";

export interface MealPlanRating extends Id, Logs {
  MealPlanId: number;
  Rate: number;
  Remarks: string | null;
  UserPhoto?: string | null;
  UserFullname?: string;
}
export type MealPlanRatings = MealPlanRating[];
export const MealPlanRatingInitial: MealPlanRating = {
  MealPlanId: 0,
  Rate: 0,
  Remarks: null,
};
