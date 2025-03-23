export enum PayTypeQuery {
  q001 = "SELECT * FROM `pay_type` WHERE `UserId` = ?",
  q002 = "SELECT `Id` FROM `pay_type` WHERE `Id` = ?",
  q003 = "SELECT * FROM `pay_type` WHERE `Id` = ?",
  q004 = "SELECT `Id` FROM `pay_type` WHERE `UserId` = ? AND `Name` = ? ",
  q005 = "SELECT `Id` FROM `pay_type` WHERE `Id` <> ? AND `UserId` = ? AND `Name` = ?",
  q006 = "",
  q007 = "",
  q008 = "",
  q009 = "",
  q010 = "",
}
