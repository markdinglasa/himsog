export enum UserQuery {
  q001 = "SELECT *, CONCAT(Firstname, ' ', IFNULL(NULLIF(Middlename, ''), ''), ' ', Lastname) AS `Fullname` FROM user WHERE `Id` <> 1",
  q002 = "SELECT u.*, TIMESTAMPDIFF(YEAR, u.`BirthDate`, CURDATE()) AS Age, CONCAT(u.Firstname, ' ', IFNULL(NULLIF(u.Middlename, ''), ''), ' ', u.Lastname) AS `Fullname`, vl.`IsValidated` FROM `user` AS u LEFT JOIN `profession_validation` AS vl ON vl.`UserId`=u.`Id` WHERE u.`Id` = ?",
  q003 = "SELECT `Id` FROM user WHERE Email = ?",
  q004 = "SELECT `UserId` FROM `user_log` WHERE `UserId` = ?",
  q006 = "SELECT `Id` FROM `user` WHERE `Id` = ?",
  q007 = "SELECT `Id` FROM `user` WHERE `Role` = ?",
  q008 = "SELECT p.`Id` FROM `payment` AS p LEFT JOIN `meal_plan` AS mp ON mp.`Id`=p.`MealPlanId` WHERE p.`UserId` = ? AND mp.`UserId`= ? AND p.`IsMealPlan` = true",
}
