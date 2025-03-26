export enum ArticleQuery {
  q001 = "SELECT * FROM `article`", // GET ALL
  q002 = "SELECT `Id` FROM `article` WHERE `Id` = ?", // CHECK EXISTENCE
  q003 = "SELECT * FROM `article` WHERE `Id` = ? ", // GET
  q004 = "SELECT * FROM `article` WHERE IsValidated = 0", // GET ALL IN-VALIDATED
  q005 = "SELECT * FROM `article` WHERE IsValidated = 1", // GET ALL VALIDATED
  q006 = "",
  q007 = "",
  q008 = "",
  q009 = "",
  q010 = "",
}
