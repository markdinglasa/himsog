export enum AppointmentQuery {
  q001 = "SELECT * FROM `appointment` WHERE `UserId` = ?",
  q002 = "SELECT `Id` FROM `appointment` WHERE `Id` = ?",
  q003 = "SELECT * FROM `appointment` WHERE `Id` = ?",
  q004 = "SELECT `Id` FROM `appointment` WHERE `Schedule` = ?",
  q005 = "SELECT `Id` FROM `appointment` WHERE `Id` <> ? AND `Schedule` = ?",
  q006 = "",
  q007 = "",
  q008 = "",
  q009 = "",
  q010 = "",
}
