export enum MealPlanLineQuery {
  q001 = "SELECT  mpl.`Id`, mpl.`IsBreakfast`, mpl.`IsLunch`, mpl.`IsSnack`, mpl.`IsDinner`, mpl.`MealId`, m.`Name` AS `MealName`, m.`Image` AS `MealImage`, SUM(nf.`Kilocalorie`) AS `MealKilocalorie` FROM `meal_plan_line` AS mpl LEFT JOIN `meal` AS m ON m.`Id` = mpl.`MealId` LEFT JOIN `nutrition_fact` AS nf ON nf.`MealId` = m.`Id` WHERE mpl.`MealPlanId` = ? AND (DAYOFWEEK(CURRENT_DATE()) = 2 AND mpl.`IsMonday` = true) OR (DAYOFWEEK(CURRENT_DATE()) = 3 AND mpl.`IsTuesday` = true) OR (DAYOFWEEK(CURRENT_DATE()) = 4 AND mpl.`IsWednesday` = true) OR (DAYOFWEEK(CURRENT_DATE()) = 5 AND mpl.`IsThursday` = true) OR (DAYOFWEEK(CURRENT_DATE()) = 6 AND mpl.`IsFriday` = true) OR (DAYOFWEEK(CURRENT_DATE()) = 7 AND mpl.`IsSaturday` = true) OR (DAYOFWEEK(CURRENT_DATE()) = 1 AND mpl.`IsSunday` = true) GROUP BY  mpl.Id, m.`Name`, m.`Image`, mpl.`IsBreakfast`,  mpl.`IsLunch`, mpl.`IsSnack`, mpl.`IsDinner`, mpl.`MealId`", // GET ALL
  q002 = "SELECT `Id` FROM `meal_plan_line` WHERE `Id` = ?", // CHECK EXISTENCE
  q003 = "SELECT * FROM `meal_plan_line` WHERE `Id` = ?", // GET
  q004 = "",
  q005 = "",
  q006 = "",
  q007 = "",
  q008 = "",
  q009 = "",
  q010 = "",
}
