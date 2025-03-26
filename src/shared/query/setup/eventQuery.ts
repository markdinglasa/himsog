export enum EventQuery {
  q001 = "SELECT * FROM `event`", // GET ALL
  q002 = "SELECT `Id` FROM `event` WHERE `Id` = ?", // CHECK EXISTENCE
  q003 = "SELECT * FROM `event` WHERE `Id` = ? ", // GET
  q004 = "SELECT * FROM `event` WHERE `IsValidated` = 0 ", // GET ALL INVALIDATED
  q005 = "SELECT * FROM `event` WHERE `IsValidated` = 1 ", // GET ALL VALIDATED
  q006 = "",
  q007 = "",
  q008 = "",
  q009 = "",
  q010 = "",
}
