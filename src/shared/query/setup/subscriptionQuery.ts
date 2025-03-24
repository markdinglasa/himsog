export enum SubscriptionQuery {
  q001 = "SELECT * FROM `subscription`",
  q002 = "SELECT `Id` FROM `subscription` WHERE `Id` = ?",
  q003 = "SELECT * FROM `subscription` WHERE `Id` = ?",
  q004 = "SELECT `Id` FROM `subscription` WHERE `Name` = ?",
  q005 = "SELECT `Id` FROM `subscription` WHERE `Id` <> ? AND`Name` = ?",
  q006 = "SELECT `Id` FROM `subscription_line` WHERE `SubscriptionId` = ?",
  q007 = "SELECT * FROM `subscription` WHERE `Name` = ?",
  q008 = "",
  q009 = "",
  q010 = "",
}
