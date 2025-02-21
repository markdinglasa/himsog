export enum UnitQuery {
  q001 = "SELECT * FROM `unit`",
  q002 = "SELECT `Id` FROM `unit` WHERE `Id` = ?",
  q003 = "SELECT * FROM `unit` WHERE `Id` = ?",
  q004 = "SELECT `Id` FROM `unit` WHERE `Name` = ?",
  q005 = "SELECT `Id` FROM `unit` WHERE `Id` <> ? AND `Name` = ?",
  q006 = "SELECT `Id` FROM `ingredient` WHERE `UnitId` = ?",
  q007 = "",
  q008 = "",
  q009 = "",
  q010 = "",
}
