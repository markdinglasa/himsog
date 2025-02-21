export enum MealPlanLineQuery {
  q001 = "SELECT * FROM `meal_plan_line` WHERE `MealPlanId` = ?", // GET ALL
  q002 = "SELECT `Id` FROM `meal_plan_line` WHERE `Id` = ?", // CHECK EXISTENCE
  q003 = "SELECT * FROM `meal_plan_line` WHERE `Id` = ?", // GET
  q004 = "",
  q005 = "",
  q006 = "",
  q007 = "",
  q008 = "",
  q009 = "",
  q010 = "",
}
