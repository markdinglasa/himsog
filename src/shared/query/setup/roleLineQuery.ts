export const RoleLineQuery = {
  q001: "SELECT `role_line`.*,`role`.`Name` AS `RoleName`, `user`.`Name` AS `UserName`, `branch`.`Name` AS `BranchName` FROM `role_line` LEFT JOIN `user` ON `user`.`Id` = `role_line`.`UserId` LEFT JOIN `role` ON `role`.`Id` = `role_line`.`RoleId` LEFT JOIN `branch` ON `branch`.`Id` = `role_line`.`BranchId` WHERE `role_line`.`RoleId` <> 1 AND `role_line`.`RoleId` = ?",
  q002: "SELECT `Id` FROM `role_line` WHERE `Id` = ?",
  q003: "SELECT * FROM `role_line` WHERE `Id` = ?",
  q004: "SELECT `Id` FROM `role_line` WHERE `RoleId` = ? AND `UserId` = ?",
  q005: "SELECT `Id` FROM `role_line` WHERE Id <> ? AND `RoleId` = ? AND `UserId` = ?",
  q006: "",
  q007: "",
  q008: "",
  q009: "",
  q010: "",
};
