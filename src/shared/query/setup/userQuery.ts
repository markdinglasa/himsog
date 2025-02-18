export const UserQuery = {
  q001: "SELECT * FROM user WHERE `Id` <> 1",
  q002: "SELECT `user`.*, `role`.`Name` AS `RoleName` FROM `user` LEFT JOIN `role` ON `role`.`Id` = `user`.`RoleId` WHERE `user`.`Id` = ?",
  q003: "SELECT `Id` FROM user WHERE Email = ?",
  q004: "SELECT `UserId` FROM `audit_trail` WHERE `UserId` = ?",
  q006: "SELECT `Id` FROM `user` WHERE `Id` = ?",
  q007: "SELECT `user`.* FROM `user` LEFT JOIN `role_line` ON `role_line`.UserId = `user`.`Id` WHERE `role_line`.UserId IS NULL",
  q008: "SELECT `user`.* FROM `user` LEFT JOIN `role_line` ON `role_line`.UserId = `user`.`Id` WHERE `role_line`.UserId IS NULL OR `role_line`.`UserId` = ?",
};
