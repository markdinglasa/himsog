export enum NotificationQuery {
  q001 = "SELECT * FROM `notification` WHERE `UserId` = ? ORDER BY `DateCreated` DESC", // get all
  q002 = "SELECT `Id` FROM `notification` WHERE `Id` = ?", // exists
  q003 = "SELECT * FROM `notification` WHERE `Id` = ?", // get
  q004 = "SELECT `Id` FROM `user` WHERE `Id` = ?",
  q005 = "SELECT TRUE AS `IsNotification`, FALSE AS `IsMessage` FROM `notification` WHERE `UserId` = ? AND IsRead = FALSE UNION ALL SELECT FALSE AS `IsNotification`, TRUE AS `IsMessage` FROM `message` m JOIN `chat` ch ON m.`ChatId` = ch.`Id` WHERE (ch.`AdvocateId` = ? OR ch.`NutritionistId` = ?) AND m.`IsRead` = FALSE LIMIT 1",
  q006 = "",
  q007 = "",
  q008 = "",
  q009 = "",
  q010 = "",
}
