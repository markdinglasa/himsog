export enum RecipeQuery {
  q001 = "SELECT * FROM `recipe`",
  q002 = "SELECT `Id` FROM `recipe` WHERE `Id` = ?",
  q003 = "SELECT * FROM `recipe` WHERE `Id` = ?",
  q004 = "SEELCT `Id` FROM `recipe` WHERE `Name` = ?",
  q005 = "SEELCT `Id` FROM `recipe` WHERE `Id` <> ? AND `Name` = ?",
  q006 = "",
  q007 = "",
  q008 = "",
  q009 = "",
  q010 = "",
}
