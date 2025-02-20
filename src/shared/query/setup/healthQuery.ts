export enum HealthQuery {
  q001 = "SELECT * FROM `health` WHERE `HealthId` = ?", // GET ALL
  q002 = "SELECT `Id` FROM `health` WHERE `Id` = ?", // CHECK EXISTENCE
  q003 = "SELECT * FROM `health` WHERE `Id` = ? ", // GET
  q004 = "",
  q005 = "",
  q006 = "",
  q007 = "",
  q008 = "",
  q009 = "",
  q010 = "",
}
