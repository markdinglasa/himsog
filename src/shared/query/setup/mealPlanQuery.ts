export enum MealPlanQuery {
  q001 = "SELECT * FROM `meal_plan` WHERE `UserId` = ?", // GET ALL
  q002 = "SELECT `Id` FROM `meal_plan` WHERE `Id` = ?", // CHECK EXISTENCE
  q003 = "SELECT * FROM `meal_plan` WHERE `Id` = ?", // GET
  q004 = "SELECT `Id` FROM `meal_plan` WHERE `UserId` = ?",
  q005 = "SELECT `Id` FROM `meal_plan` WHERE `Id` <> ? AND `UserId` = ?",
  q006 = "",
  q007 = "",
  q008 = "",
  q009 = "",
  q010 = "",
}
