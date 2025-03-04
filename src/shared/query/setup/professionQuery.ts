export enum ProfessionQuery {
  q001 = "SELECT * FROM `profession`",
  q002 = "SELECT `Id` FROM `profession` WHERE `Id` = ?",
  q003 = "SELECT * FROM `profession` WHERE `UserId` = ?",
  q004 = "SELECT `Id` FROM `profession` WHERE `UserId` = ?",
  q005 = "SELECT `Id` FROM `profession` WHERE `Id` <> ? AND `UserId` = ?",
  q006 = "",
  q007 = "",
  q008 = "",
  q009 = "",
  q010 = "",
}
