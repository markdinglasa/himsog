export enum ProfessionInstituteQuery {
  q001 = "SELECT * FROM `institute` WHERE `UserId` = ?",
  q002 = "SELECT `Id` FROM `institute` WHERE `Id` = ?",
  q003 = "SELECT * FROM `institute` WHERE `Id` = ?",
  q004 = "SELECT `Id` FROM `institute` WHERE `UserId` = ? AND `Name` = ?",
  q005 = "SELECT `Id` FROM `institute` WHERE `Id` <> ? AND `UserId` = ? AND `Name` = ?",
  q006 = "",
  q007 = "",
  q008 = "",
  q009 = "",
  q010 = "",
}
