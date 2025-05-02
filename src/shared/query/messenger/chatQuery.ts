export enum ChatQuery {
  q001 = "SELECT * FROM `chat` WHERE `AdvocateId` = ?", // GET ALL
  q002 = "SELECT `Id` FROM `chat` WHERE `Id` = ?", // CHECK EXISTENCE
  q003 = "SELECT c.*, CONCAT(ua.`Firstname`, ' ', ua.`Lastname`) AS `AdvocateFullname`, ua.`ProfilePhoto` AS `AdvocatePhoto`, CONCAT(un.`Firstname`, ' ', un.`Lastname`) AS `NutritionistFullname`, un.`ProfilePhoto` AS `NutritionistPhoto` FROM `chat` AS c LEFT JOIN `user` AS ua ON ua.`Id` = c.`AdvocateId` LEFT JOIN `user` AS un ON un.`Id` = c.`NutritionistId` WHERE c.`Id` = ? ", // GET
  q004 = "SELECT `Id` FROM `chat` WHERE `AdvocateId` = ? AND `NutritionistId` = ?",
  q005 = "",
  q006 = "",
  q007 = "",
  q008 = "",
  q009 = "",
  q010 = "",
}
