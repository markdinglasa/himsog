export enum MealPlanRequestQuery {
  q001 = "SELECT mpr.*, CONCAT(u.`Firstname`, ' ', u.`Lastname`) AS `UserFullname`, u.`ProfilePhoto` AS `UserPhoto`, mp.`Name` AS `MealPlanName` FROM `meal_plan_request` AS mpr LEFT JOIN `user` AS u ON u.`Id`=mpr.`NutritionistId` LEFT JOIN `meal_plan` AS mp ON mp.`Id` = mpr.`MealPlanId` WHERE mpr.`AdvocateId` = ? ",
  q002 = "SELECT `Id` FROM `meal_plan_request` WHERE `Id` = ?",
  q003 = "SELECT mpr.*, CONCAT(n.`Firstname`, ' ',n.`Lastname`) AS `NutritionistFullname`, n.`ProfilePhoto` AS `NutritionistPhoto`, CONCAT(a.`Firstname`, ' ',a.`Lastname`) AS `AdvocateFullname`, a.`ProfilePhoto` AS `AdvocatePhoto`, mp.`Name` AS `MealPlanName` FROM `meal_plan_request` AS mpr LEFT JOIN `user` AS n ON n.`Id`=mpr.`NutritionistId` LEFT JOIN `user` AS a ON a.`Id`=mpr.`AdvocateId` LEFT JOIN `meal_plan` AS mp ON mp.`Id` = mpr.`MealPlanId` WHERE mpr.`Id` = ?",
  q004 = "SELECT mpr.*, CONCAT(u.`Firstname`, ' ', u.`Lastname`) AS `UserFullname`, u.`ProfilePhoto` AS `UserPhoto`, mp.`Name` AS `MealPlanName` FROM `meal_plan_request` AS mpr LEFT JOIN `user` AS u ON u.`Id`=mpr.`AdvocateId` LEFT JOIN `meal_plan` AS mp ON mp.`Id` = mpr.`MealPlanId` WHERE mpr.`NutritionistId` = ? ",
  q005 = "",
  q006 = "",
  q007 = "",
  q008 = "",
  q009 = "",
  q010 = "",
}
