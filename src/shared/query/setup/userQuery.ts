export enum UserQuery {
  q001 = "SELECT *, CONCAT(Firstname, ' ', IFNULL(NULLIF(Middlename, ''), ''), ' ', Lastname) AS `Fullname` FROM user WHERE `Id` <> 1",
  q002 = "SELECT *, CONCAT(Firstname, ' ', IFNULL(NULLIF(Middlename, ''), ''), ' ', Lastname) AS `Fullname` FROM `user` WHERE `Id` =?",
  q003 = "SELECT `Id` FROM user WHERE Email = ?",
  q004 = "SELECT `UserId` FROM `user_log` WHERE `UserId` = ?",
  q006 = "SELECT `Id` FROM `user` WHERE `Id` = ?",
  q007 = "SELECT `Id` FROM `user` WHERE `Role` = ?",
  q008 = "",
}
