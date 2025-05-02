export enum MessageQuery {
  q001 = "SELECT m.* FROM `message` AS m LEFT JOIN `chat` AS c ON c.`Id` = m.`ChatId` WHERE m.`ChatId` = ?", // GET ALL
  q002 = "SELECT `Id` FROM `message` WHERE `Id` = ?", // CHECK EXISTENCE
  q003 = "SELECT * FROM `message` WHERE `Id` = ? ", // GET
  q004 = "SELECT co.`Id` FROM `convo` AS co LEFT JOIN `chat` AS ch ON ch.`Id` = co.`ChatId` WHERE ch.`Id` = ? AND co.`UserId` = ?", // GET CONVO DATA
  q005 = "",
  q006 = "",
  q007 = "",
  q008 = "",
  q009 = "",
  q010 = "",
}
