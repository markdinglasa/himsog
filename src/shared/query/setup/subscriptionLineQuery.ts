export enum SubscriptionLineQuery {
  q001 = "SELECT sl.*, CONCAT(u.`Firstname`, ' ', u.`Lastname`) AS `UserName`, CASE  WHEN sl.`IsCancelled` = 1 THEN 'Cancelled' WHEN sl.`DateEnd` IS NOT NULL AND sl.`DateEnd` <= NOW() THEN 'Expired' WHEN sl.`DateStart` < sl.`DateEnd` THEN 'Active' ELSE 'Expired' END AS `SubscriptionStatus` FROM `subscription_line` AS sl LEFT JOIN `user` AS u ON u.`Id` = sl.`UserId` WHERE sl.`SubscriptionId` = ? ORDER BY sl.`DateCreated` DESC",
  q002 = "SELECT `Id` FROM `subscription_line` WHERE `Id` = ?",
  q003 = "SELECT * FROM `subscription_line` WHERE `Id` = ?",
  q004 = "SELECT sl.*, CASE WHEN sl.`DateStart` < sl.`DateEnd` THEN 'Active' ELSE 'Expired' END AS `Status`, s.`Name` AS `SubscriptionName`, s.`Description` AS `SubscriptionDescription`, s.`Price` AS `SubscriptionPrice`, s.`Duration` AS `SubscriptionDuration` FROM `subscription_line` AS sl LEFT JOIN `subscription` AS s ON s.`Id` = sl.`SubscriptionId` WHERE `UserId` = ? AND sl.`IsCancelled` = false",
  q005 = "",
  q006 = "",
  q007 = "",
  q008 = "",
  q009 = "",
  q010 = "",
}
