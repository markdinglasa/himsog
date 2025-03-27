export enum NotificationQuery {
  q001 = "SELECT * FROM `notification` WHERE `UserId` = ?", // get all
  q002 = "SELECT `Id` FROM `notification` WHERE `Id` = ?", // exists
  q003 = "SELECT * FROM `notification` WHERE `Id` = ?", // get
  q004 = "SELECT `Id` FROM `user` WHERE `Id` = ?",
  q005 = "SELECT CASE WHEN COUNT(Id) > 0 THEN TRUE ELSE FALSE END AS `IsNotification` FROM `notification` WHERE UserId = ? AND IsRead = FALSE;",
  q006 = "",
  q007 = "",
  q008 = "",
  q009 = "",
  q010 = "",
}
