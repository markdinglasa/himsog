export enum PaymentQuery {
  q001 = "SELECT * FROM `payment`", // GET ALL
  q002 = "SELECT `Id` FROM `payment` WHERE `Id` = ?", // CHECK EXISTENCE
  q003 = "SELECT * FROM `payment` WHERE `Id` = ?", // GET
  q004 = "SELECT `Id` FROM `subscription_line` WHERE `UserId` = ? AND `IsCancelled` = false", // CHECK ACTIVE SUBSCRIPTION
  q005 = "SELECT `Id` FROM `payment` WHERE UserId = ? AND MealPlanId = ? AND JSON_EXTRACT(MealPlanData, '$.Status') = true", // CHECK DUPPLICATE ON CREATE
  q006 = "SELECT p.*, CASE  WHEN JSON_EXTRACT(`MealPlanData`, '$.IsDisapproved') = true THEN 'Disapproved' WHEN JSON_EXTRACT(`MealPlanData`, '$.Status') = true AND JSON_EXTRACT(`MealPlanData`, '$.IsDisapproved') = false THEN 'Approved' WHEN JSON_EXTRACT(`MealPlanData`, '$.Status') = false THEN 'Pending' ELSE 'NA' END AS Status, CONCAT(u.`Firstname` ,' ', u.`Lastname`) AS `UserFullname`, mp.`Name` AS `MealPlanName`, mp.`Price` AS `MealPlanPrice` FROM `payment` AS p LEFT JOIN `meal_plan` AS mp ON mp.`Id` = p.`MealPlanId` LEFT JOIN `user` AS u ON u.`Id` = p.`UserId` WHERE mp.`UserId` = ? AND p.`IsMealPlan` = true ", // GET ALL MEAL PLAN PAYMENTS
  q007 = "SELECT p.*, CONCAT(u.`Firstname`, ' ', u.`Lastname`) AS `UserFullname` FROM `payment` AS p LEFT JOIN `user` AS u ON u.`Id` = p.`UserId` INNER JOIN `meal_plan` AS mp ON mp.`Id` = p.`MealPlanId` WHERE mp.`UserId` = ? ",
  q008 = "SELECT CASE WHEN EXISTS (SELECT 1 FROM `subscription_line` sl JOIN `subscription` s ON s.`Id` = sl.`SubscriptionId` WHERE sl.`UserId` = ? AND s.`Name` = 'Premium' AND sl.`DateStart` <= CURRENT_DATE() AND (sl.`DateEnd` IS NULL OR sl.`DateEnd` >= CURRENT_DATE()) AND sl.`IsCancelled` = 0) THEN false ELSE ( SELECT COUNT(p.`Id`) >= 10  FROM `payment` p WHERE p.`UserId` = ? ) END AS `Limit`", // SUBSCRIPTION IS PREMIUM - LIMIT ACCESS
  q009 = "",
  q010 = "",
}
