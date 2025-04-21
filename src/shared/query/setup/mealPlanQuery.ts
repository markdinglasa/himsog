export enum MealPlanQuery {
  q001 = "SELECT * FROM `meal_plan` WHERE `UserId` = ?", // GET ALL
  q002 = "SELECT `Id` FROM `meal_plan` WHERE `Id` = ?", // CHECK EXISTENCE
  q003 = "SELECT * FROM `meal_plan` WHERE `Id` = ?", // GET
  q004 = "SELECT `Id` FROM `meal_plan` WHERE `UserId` = ? AND `Name` = ?", // CHECK DUPPLICATE ON CREATE
  q005 = "SELECT `Id` FROM `meal_plan` WHERE `Id` <> ? AND `UserId` = ? AND `Name` = ?", // CHECK DUPPLICATE ON UPDATE
  q006 = "SELECT CASE WHEN JSON_EXTRACT(`MealPlanData`, '$.Status') = true THEN 'Done' WHEN JSON_EXTRACT(`MealPlanData`, '$.Status') = false THEN 'Pending' ELSE 'NA' END AS Status FROM `payment` WHERE `UserId` = ? AND `MealPlanId` = ? ", // GET MEAL PLAN STAUS ON PURCHASE
  q007 = "",
  q008 = "",
  q009 = "",
  q010 = "",
}
