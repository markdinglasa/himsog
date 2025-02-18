export enum UserQuery {
  q001 = "SELECT * FROM user WHERE `Id` <> 1",
  q002 = "SELECT `user`.*, `role`.`Name` AS `RoleName` FROM `user` LEFT JOIN `role` ON `role`.`Id` = `user`.`RoleId` WHERE `user`.`Id` = ?",
  q003 = "SELECT `Id` FROM user WHERE Email = ?",
  q004 = "SELECT `UserId` FROM `user_log` WHERE `UserId` = ?",
  q006 = "SELECT `Id` FROM `user` WHERE `Id` = ?",
  q007 = "",
  q008 = "",
}
