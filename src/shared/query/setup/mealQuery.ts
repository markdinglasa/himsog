export enum MealQuery {
  q001 = "SELECT m.`Id`, m.`Name`, m.`Image`, SUM(nf.`Kilocalorie`) AS `Kilocalorie` FROM `meal` AS m LEFT JOIN `nutrition_fact` AS nf ON nf.`MealId` = m.`Id` WHERE `CreatedBy` = ? GROUP BY m.`Id`, m.`Name`,m.`Image` ",
  q002 = "SELECT `Id` FROM `meal` WHERE `Id` = ?",
  q003 = "SELECT m.`Id`, m.`Name`, m.`Image`, m.`Recipe`, m.`Allergen`, SUM(nf.`Kilocalorie`) AS `Kilocalorie` FROM `meal` AS m LEFT JOIN `nutrition_fact` AS nf ON nf.`MealId` = m.`Id` WHERE m.`Id` = ? GROUP BY m.`Id`, m.`Name`, m.`Image`, m.`Recipe`, m.`Allergen`",
  q004 = "SELECT `Id` FROM `meal` WHERE UserId = ? AND `Name` = ?",
  q005 = "SELECT `Id` FROM `meal` WHERE `Id` <> ? AND UserId = ? AND `Name` = ?",
  q006 = "SELECT CASE WHEN EXISTS (SELECT 1 FROM `subscription_line` sl JOIN `subscription` s ON s.`Id` = sl.`SubscriptionId` WHERE sl.`UserId` = ? AND s.`Name` = 'Premium' AND sl.`DateStart` <= CURRENT_DATE() AND (sl.`DateEnd` IS NULL OR sl.`DateEnd` >= CURRENT_DATE()) AND sl.`IsCancelled` = 0) THEN false ELSE ( SELECT COUNT(m.`Id`) >= 10  FROM `meal` m WHERE m.`CreatedBy` = ? ) END AS `Limit`",
  q007 = "",
  q008 = "",
  q009 = "",
  q010 = "",
}
