export enum NutritionFactQuery {
  q001 = "SELECT * FROM `nutrition_fact` WHERE `MealId` = ?",
  q002 = "SELECT `Id` FROM `nutrition_fact` WHERE `Id` = ?",
  q003 = "SELECT * FROM `nutrition_fact` WHERE `Id` = ?",
  q004 = "SELECT `Id` FROM `nutriction_fact` WHERE `MealId` = ? AND `Name` = ?",
  q005 = "SELECT `Id` FROM `nutriction_fact` WHERE Id <> ? AND `MealId` = ? AND `Name` = ?",
  q006 = "",
  q007 = "",
  q008 = "",
  q009 = "",
  q010 = "",
}
