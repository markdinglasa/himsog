export enum UserMealPlanQuery {
  q001 = "SELECT * FROM `user_meal_plan` WHERE `UserId` = ?", // GET ALL By UserId
  q002 = "SELECT `Id` FROM `user_meal_plan` WHERE `Id` = ?", // CHECK EXISTENCE
  q003 = "SELECT * FROM `user_meal_plan` WHERE `Id` = ?", // GET By Id
  q004 = "SELECT * FROM `user_meal_plan` WHERE `UserId` = ? AND `MealPlanId` = ?", // CHECK DUPLICATE
  q005 = "SELECT `Id` FROM `user_meal_plan` WHERE `UserId` = ? AND `MealPlanId` <> ? AND IsActive = true", // CHECK ACTIVE MEAL PLAn
  q006 = "",
  q007 = "",
  q008 = "",
  q009 = "",
  q010 = "",
}
