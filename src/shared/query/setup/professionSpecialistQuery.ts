export enum ProfessionSpecialistQuery {
  q001 = "SELECT * FROM `specialist` WHERE `UserId` = ?",
  q002 = "SELECT `Id` FROM `specialist` WHERE `Id` = ?",
  q003 = "SELECT * FROM `specialist` WHERE `Id` = ?",
  q004 = "SELECT `Id` FROM `specialist` WHERE `UserId` = ? AND `Title` = ?",
  q005 = "SELECT `Id` FROM `specialist` WHERE `Id` <> ? AND `UserId` = ? AND `Title` = ?",
  q006 = "",
  q007 = "",
  q008 = "",
  q009 = "",
  q010 = "",
}
