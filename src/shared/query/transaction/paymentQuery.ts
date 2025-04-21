export enum PaymentQuery {
  q001 = "SELECT * FROM `payment`", // GET ALL
  q002 = "SELECT `Id` FROM `payment` WHERE `Id` = ?", // CHECK EXISTENCE
  q003 = "SELECT * FROM `payment` WHERE `Id` = ?", // GET
  q004 = "SELECT `Id` FROM `subscription_line` WHERE `UserId` = ? AND `IsCancelled` = false", // CHECK ACTIVE SUBSCRIPTION
  q005 = "SELECT `Id` FROM `payment` WHERE UserId = ? AND MealPlanId = ? AND JSON_EXTRACT(MealPlanData, '$.Status') = true", // CHECK DUPPLICATE ON CREATE
  q006 = "",
  q007 = "",
  q008 = "",
  q009 = "",
  q010 = "",
}
