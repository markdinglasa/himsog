export enum UserMealPlanQuery {
  q001 = "SELECT * FROM `user_meal_plan` WHERE `UserId` = ?", // GET ALL By UserId
  q002 = "SELECT `Id` FROM `user_meal_plan` WHERE `Id` = ?", // CHECK EXISTENCE
  q003 = "SELECT * FROM `user_meal_plan` WHERE `Id` = ?", // GET By Id
  q004 = "SELECT * FROM `user_meal_plan` WHERE `UserId` = ? AND `MealPlanId` = ?", // CHECK DUPLICATE
  q005 = "SELECT `Id` FROM `user_meal_plan` WHERE `UserId` = ? AND `MealPlanId` <> ? AND IsActive = true", // CHECK ACTIVE MEAL PLAn
  q006 = `
    SELECT 
      ump.*, 
      CASE 
        WHEN DATEDIFF(ump.DateActivated,NOW()) >= mp.Duration THEN mp.Duration 
        ELSE DATEDIFF(ump.DateActivated,NOW())
      END AS \`Completed\`,
      CASE 
        WHEN DATEDIFF(NOW(), ump.DateActivated) >= mp.Duration THEN 0 
        ELSE mp.Duration- DATEDIFF(ump.DateActivated, NOW())
      END AS \`Incomplete\`,
      mp.Duration AS \`Duration\`
    FROM 
      \`user_meal_plan\` AS ump 
    LEFT JOIN meal_plan AS mp ON mp.Id = ump.MealPlanId
    WHERE 
      ump.\`UserId\` = ? 
      AND ump.\`IsActive\` = true
  `, // GET ACTIVE MEAL PLAN BY USER
  q007 = "",
  q008 = "",
  q009 = "",
  q010 = "",
}
