export enum ProfessionRatingQuery {
  q001 = "SELECT * FROM `profession_rating` WHERE `ProfessionId` = ?", // GET ALL
  q002 = "SELECT `Id` FROM `profession_rating` WHERE `Id` = ?", // CHECK EXISTENCE
  q003 = "SELECT * FROM `profession_rating` WHERE `Id` = ?", // GET
  q004 = "",
  q005 = "",
  q006 = "",
  q007 = "",
  q008 = "",
  q009 = "",
  q010 = "",
}
