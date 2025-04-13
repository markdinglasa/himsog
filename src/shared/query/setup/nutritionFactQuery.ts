export enum NutritionFactQuery {
  q001 = "SELECT nf.*, u.`Name` AS `UnitName` FROM `nutrition_fact` AS nf LEFT JOIN `unit` AS u ON u.`Id` = nf.`UnitId` WHERE `MealId` = ?",
  q002 = "SELECT `Id` FROM `nutrition_fact` WHERE `Id` = ?",
  q003 = "SELECT * FROM `nutrition_fact` WHERE `Id` = ?",
  q004 = "SELECT `Id` FROM `nutrition_fact` WHERE `MealId` = ? AND `Name` = ?",
  q005 = "SELECT `Id` FROM `nutrition_fact` WHERE Id <> ? AND `MealId` = ? AND `Name` = ?",
  q006 = "",
  q007 = "",
  q008 = "",
  q009 = "",
  q010 = "",
}
