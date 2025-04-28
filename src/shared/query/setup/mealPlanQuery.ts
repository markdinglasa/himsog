export enum MealPlanQuery {
  q001 = "SELECT * FROM `meal_plan` WHERE `UserId` = ?", // GET ALL
  q002 = "SELECT `Id` FROM `meal_plan` WHERE `Id` = ?", // CHECK EXISTENCE
  q003 = "SELECT * FROM `meal_plan` WHERE `Id` = ?", // GET
  q004 = "SELECT `Id` FROM `meal_plan` WHERE `UserId` = ? AND `Name` = ?", // CHECK DUPPLICATE ON CREATE
  q005 = "SELECT `Id` FROM `meal_plan` WHERE `Id` <> ? AND `UserId` = ? AND `Name` = ?", // CHECK DUPPLICATE ON UPDATE
  q006 = "SELECT CASE WHEN JSON_EXTRACT(`MealPlanData`, '$.Status') = true THEN 'Approved' WHEN JSON_EXTRACT(`MealPlanData`, '$.Status') = false THEN 'Pending' ELSE 'NA' END AS `Status`, CASE WHEN mpr.`Id` IS NOT NULL THEN true ELSE false END AS `IsRated`, CASE WHEN ump.`MealPlanId` = p.`MealPlanId` THEN true ELSE false END AS `IsActive` FROM `payment` AS p LEFT JOIN `meal_plan_rating` AS mpr ON mpr.`MealPlanId` = p.`MealPlanId` AND mpr.`CreatedBy` = ? LEFT JOIN `user_meal_plan` AS ump ON ump.`UserId` =  p.`UserId` WHERE p.`UserId` = ? AND p.`MealPlanId` = ? GROUP BY CASE WHEN JSON_EXTRACT(`MealPlanData`, '$.Status') = true THEN 'Approved' WHEN JSON_EXTRACT(`MealPlanData`, '$.Status') = false THEN 'Pending' ELSE 'NA' END, CASE WHEN mpr.Id IS NOT NULL THEN true ELSE false END, CASE WHEN ump.`MealPlanId` = p.`MealPlanId` THEN true ELSE false END", // GET MEAL PLAN STAUS ON PURCHASE
  q007 = "SELECT CASE WHEN EXISTS (SELECT 1 FROM `subscription_line` sl JOIN `subscription` s ON s.`Id` = sl.`SubscriptionId` WHERE sl.`UserId` = ? AND s.`Name` = 'Premium' AND sl.`DateStart` <= CURRENT_DATE() AND (sl.`DateEnd` IS NULL OR sl.`DateEnd` >= CURRENT_DATE()) AND sl.`IsCancelled` = 0) THEN false ELSE ( SELECT COUNT(mp.`Id`) >= 10  FROM `meal_plan` mp WHERE mp.`UserId` = ? ) END AS `Limit`", // SUBSCRIPTION IS PREMIUM - LIMIT ACCESS
  q008 = "",
  q009 = "",
  q010 = "",
}
