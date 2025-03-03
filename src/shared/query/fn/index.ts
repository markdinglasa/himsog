export enum FnQuery {
  q001 = "",
  q002 = "SELECT u.*, h.`Id` AS `IsSetup` FROM `user` AS u LEFT JOIN `health` AS h ON h.`UserId`=u.`Id`  WHERE u.`Email`= ?",
  q003 = "",
  q004 = "",
  q005 = "",
}
