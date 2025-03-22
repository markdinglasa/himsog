export enum ProfessionValidationQuery {
  q001 = "SELECT * FROM `profession_validation` WHERE `UserId` = ?", // GET ALL
  q002 = "SELECT `Id` FROM `profession_validation` WHERE `Id` = ?", // CHECK EXISTENCE
  q003 = "SELECT * FROM `profession_validation` WHERE `Id` = ?", // GET
  q004 = "SELECT * FROM `profession_validation` WHERE `UserId` = ?", // GTE BY USER ID
  q005 = "",
  q006 = "",
  q007 = "",
  q008 = "",
  q009 = "",
  q010 = "",
}
