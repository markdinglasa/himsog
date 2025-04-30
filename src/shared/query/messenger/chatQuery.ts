export enum ChatQuery {
  q001 = "SELECT * FROM `chat` WHERE `AdvocateId` = ?", // GET ALL
  q002 = "SELECT `Id` FROM `chat` WHERE `Id` = ?", // CHECK EXISTENCE
  q003 = "SELECT * FROM `chat` WHERE `Id` = ? ", // GET
  q004 = "SELECT `Id` FROM `chat` WHERE `AdvocateId` = ? AND `NutritionistId` = ?",
  q005 = "",
  q006 = "",
  q007 = "",
  q008 = "",
  q009 = "",
  q010 = "",
}
