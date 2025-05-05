export enum UserProgressQuery {
  q001 = "SELECT * FROM `user_progress` WHERE `UserMealPlanId` = ? ORDER BY `DateCreated` DESC", // GET ALL By UserMealPanId
  q002 = "SELECT `Id` FROM `user_progress` WHERE `Id` = ?", // CHECK EXISTENCE
  q003 = "SELECT * FROM `user_progress` WHERE `Id` = ?", // GET By Id
  q004 = "SELECT CASE WHEN EXISTS (SELECT 1 FROM `user_progress` WHERE `UserMealPlanId` = ?  AND YEARWEEK(`DateCreated`, 1) = YEARWEEK(CURDATE(), 1) ) THEN 1 ELSE 0 END AS `HasSubmittedThisWeek` FROM `user_progress` AS up LEFT JOIN `user_meal_plan` AS usp ON usp.`Id` = up.`UserMealPlanId` LEFT JOIN `meal_plan` AS mp ON mp.`Id` = usp.`MealPlanId` WHERE up.`UserMealPlanId` = ? LIMIT 1;", //
  q005 = "", //
  q006 = "", //
  q007 = "",
  q008 = "",
  q009 = "",
  q010 = "",
}
