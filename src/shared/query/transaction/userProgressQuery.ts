export enum UserProgressQuery {
  q001 = "SELECT * FROM `user_progress` WHERE `UserMealPlanId` = ?", // GET ALL By UserMealPanId
  q002 = "SELECT `Id` FROM `user_progress` WHERE `Id` = ?", // CHECK EXISTENCE
  q003 = "SELECT * FROM `user_progress` WHERE `Id` = ?", // GET By Id
  q004 = "", //
  q005 = "", //
  q006 = "", //
  q007 = "",
  q008 = "",
  q009 = "",
  q010 = "",
}
