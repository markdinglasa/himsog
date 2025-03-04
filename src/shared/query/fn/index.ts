export enum FnQuery {
  q001 = "",
  q002 = "SELECT u.*, CASE WHEN u.`Role` = 'client' THEN h.`Id` WHEN u.`Role`= 'nutritionist' THEN p.`Id` ELSE 1 END AS `IsSetup` FROM `user` AS u LEFT JOIN `health` AS h ON h.`UserId`=u.`Id` LEFT JOIN `profession` AS p ON p.`UserId`=u.`Id`  WHERE u.`Email`= ?",
  q003 = "",
  q004 = "",
  q005 = "",
}
