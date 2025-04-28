export enum ProfessionRatingQuery {
  q001 = "SELECT * FROM `profession_rating` WHERE `UserId` = ?", // GET ALL
  q002 = "SELECT `Id` FROM `profession_rating` WHERE `Id` = ?", // CHECK EXISTENCE
  q003 = "SELECT pr.*, CASE WHEN p.`UserId`= pr.`CreatedBy` THEN true ELSE false END AS `IsTransaction` FROM `profession_rating` AS pr LEFT JOIN `meal_plan` AS mp ON mp.`UserId` = pr.`UserId` LEFT JOIN `payment` AS p ON p.`MealPlanId`= mp.`Id` AND p.`UserId`= pr.`CreatedBy` WHERE pr.`UserId` = ? AND pr.`CreatedBy` = ?", // GET, UserId refers to NutritionistId & CreatedBy as for the AdvocateId
  q004 = "",
  q005 = "",
  q006 = "",
  q007 = "",
  q008 = "",
  q009 = "",
  q010 = "",
}
