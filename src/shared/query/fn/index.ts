export enum FnQuery {
  q001 = "",
  q002 = "SELECT u.*, CASE WHEN u.`Role` = 'client' THEN h.`Id` WHEN u.`Role`= 'nutritionist' THEN p.`Id` ELSE 1 END AS `IsSetup` FROM `user` AS u LEFT JOIN `health` AS h ON h.`UserId`=u.`Id` LEFT JOIN `profession` AS p ON p.`UserId`=u.`Id`  WHERE u.`Email`= ?",
  q003 = "SELECT 'Meals' AS `Type`, COUNT(DISTINCT `Id`) AS `Count` FROM `meal` AS m WHERE m.`CreatedBy` = ? UNION ALL SELECT 'MealPlans' AS `Type`, COUNT(DISTINCT `Id`) AS `Count` FROM `meal_plan` AS mp WHERE mp.`UserId` = ? UNION ALL SELECT 'MealPlanRequests' AS `Type`, COUNT(DISTINCT `Id`) AS `Count` FROM `meal_plan_request` AS mpr WHERE mpr.`NutritionistId` = ? UNION ALL SELECT 'Appointments' AS `Type`, COUNT(DISTINCT `Id`) AS `Count` FROM `appointment` AS a WHERE a.`NutritionistId` = ?", // NUTRISTIONIST DASHBOARD COUNTS
  q004 = "",
  q005 = "",
}
