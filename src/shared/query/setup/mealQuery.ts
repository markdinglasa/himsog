export enum MealQuery {
  q001 = "SELECT * FROM `meal` WHERE `CreatedBy` = ?",
  q002 = "SELECT `Id` FROM `meal` WHERE `Id` = ?",
  q003 = "SELECT * FROM `meal` WHERE `Id` = ?",
  q004 = "SELECT `Id` FROM `meal` WHERE `Name` = ?",
  q005 = "SELECT `Id` FROM `meal` WHERE `Id` <> ? AND`Name` = ?",
  q006 = "",
  q007 = "",
  q008 = "",
  q009 = "",
  q010 = "",
}
