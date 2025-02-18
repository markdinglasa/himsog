export const RoleQuery = {
  q001: "SELECT * FROM `role` WHERE `Id` <> 1",
  q002: "SELECT `Id` FROM `role` WHERE `Id` = ?",
  q003: "SELECT * FROM `role` WHERE `Id` = ?",
  q004: "SELECT `Id` FROM `role` WHERE `Name` = ?",
  q005: "SELECT `Id` FROM `role` WHERE `Id` <> ? AND `Name` = ?",
  q006: "SELECT `role`.`Id` AS `Id` FROM `role` LEFT JOIN `role_line` ON `role_line`.`RoleId` = `role`.`Id` WHERE `role`.`Id` = ?",
  q007: "SELECT * FROM `role` WHERE `Name` = ?",
  q008: "",
  q009: "",
  q010: "",
};
