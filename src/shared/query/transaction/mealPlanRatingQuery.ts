export enum MealPlanRatingQuery {
  q001 = "SELECT * FROM `meal_plan_rating` WHERE `MealPlanId` = ?", // GET ALL
  q002 = "SELECT `Id` FROM `meal_plan_rating` WHERE `Id` = ?", // CHECK EXISTENCE
  q003 = "SELECT * FROM `meal_plan_rating` WHERE `CreatedBy` = ? AND `MealPlanId` = ?", // GET
  q004 = "SELECT `Id` FROM `meal_plan_rating` WHERE  `CreatedBy` = ? AND `MealPlanId` = ?", // CHECK IF ALREADY RATED
  q005 = "",
  q006 = "",
  q007 = "",
  q008 = "",
  q009 = "",
  q010 = "",
}
