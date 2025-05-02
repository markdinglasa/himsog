export enum ConvoQuery {
  q001 = "SELECT * FROM `convo` WHERE `ChatId` = ?", // GET ALL
  q002 = "SELECT `Id` FROM `convo` WHERE `Id` = ?", // CHECK EXISTENCE
  q003 = "SELECT * FROM `convo` WHERE `Id` = ? ", // GET
  q004 = "SELECT ch.`Id` AS `ChatId`, co.*, u.`ProfilePhoto` AS `Photo`, (SELECT COUNT(*) FROM `message` AS m WHERE m.`ChatId` = ch.`Id`  AND m.`SenderId` <> ? AND m.`IsRead` = false) AS `Unread` FROM `chat` AS ch LEFT JOIN `convo` AS co ON co.`ChatId` = ch.`Id` LEFT JOIN `user` AS u ON u.`Id` = co.`UserId` WHERE ch.`AdvocateId` = ? AND co.`UserId` <> ?", // GET ALL ADVOCATES CONVO
  q005 = "SELECT ch.`Id` AS `ChatId`, co.*, u.`ProfilePhoto` AS `Photo`, (SELECT COUNT(*) FROM `message` AS m WHERE m.`ChatId` = ch.`Id` AND m.`SenderId` <> ? AND m.`IsRead` = false) AS `Unread` FROM `chat` AS ch LEFT JOIN `convo` AS co ON co.`ChatId` = ch.`Id` LEFT JOIN `user` AS u ON u.`Id` = co.`UserId` WHERE ch.`NutritionistId` = ? AND co.`UserId` <> ?", // GET ALL NUTRITIONIST CONOVO
  q006 = "",
  q007 = "",
  q008 = "",
  q009 = "",
  q010 = "",
}
