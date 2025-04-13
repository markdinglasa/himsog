export enum MealQuery {
  q001 = "SELECT m.`Id`, m.`Name`, SUM(nf.`Kilocalorie`) AS `Kilocalorie` FROM `meal` AS m LEFT JOIN `nutrition_fact` AS nf ON nf.`MealId` = m.`Id` WHERE `CreatedBy` = ? GROUP BY m.`Id`, m.`Name` ",
  q002 = "SELECT `Id` FROM `meal` WHERE `Id` = ?",
  q003 = "SELECT * FROM `meal` WHERE `Id` = ?",
  q004 = "SELECT `Id` FROM `meal` WHERE UserId = ? AND `Name` = ?",
  q005 = "SELECT `Id` FROM `meal` WHERE `Id` <> ? AND UserId = ? AND`Name` = ?",
  q006 = "",
  q007 = "",
  q008 = "",
  q009 = "",
  q010 = "",
}
