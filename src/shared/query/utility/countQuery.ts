export enum CountQuery {
  q001 = "SELECT s.`Name` AS `Name`, COUNT(p.`SubscriptionId`) AS `NameCount` FROM `payment` AS p INNER JOIN `subscription` AS s ON s.`Id` = p.`SubscriptionId` GROUP BY s.`Name`", // ADMIN - MOST SUBSCRIBE SUBSCRIPTION
  q002 = "SELECT MONTH(p.`DateCreated`) AS `Name`, SUM(s.`Price`) AS `NameCount` FROM `payment` AS p JOIN `subscription` AS s ON p.`SubscriptionId` = s.`Id` WHERE YEAR(p.`DateCreated`) = YEAR(NOW()) GROUP BY MONTH(p.`DateCreated`), MONTHNAME(p.`DateCreated`) ORDER BY MONTH(p.`DateCreated`) ASC", // ADMIN-MONTH REVENUE BY SUBSCRIPTION
  q003 = "",
  q004 = "",
  q005 = "",
  q006 = "",
  q007 = "",
  q008 = "",
  q009 = "",
  q010 = "",
}
