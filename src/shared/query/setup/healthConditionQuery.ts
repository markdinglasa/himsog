export enum HealthConditionQuery {
  q001 = "SELECT * FROM `health_condition` WHERE `HealthId` = ?", // GET ALL
  q002 = "SELECT `Id` FROM `health_condition` WHERE `Id` = ?", // CHECK EXISTENCE
  q003 = "SELECT * FROM `health_condition` WHERE `Id` = ?", // GET
  q004 = "",
  q005 = "",
  q006 = "",
  q007 = "",
  q008 = "",
  q009 = "",
  q010 = "",
}
