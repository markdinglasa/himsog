export const PermissionQuery = {
  q001: "SELECT * FROM `permission` WHERE `RoleId` = ?",
  q002: "SELECT `Id` FROM `permission` WHERE `Id` = ?",
  q003: "SELECT * FROM `permission` WHERE `Id` = ?",
  q004: "SELECT `Id` FROM `permission` WHERE `RoleId` = ? AND `AccessRightId` = ?",
  q005: "SELECT `Id` FROM `permission` WHERE `Id` <> ? `RoleId` = ? AND `AccessRightId` = ?",
  q006: "SELECT `permission`.*, `role`.`Name` AS `RoleName`, `access_right`.`Action` AS `AccessRightName` FROM `permission` LEFT JOIN `role` ON `role`.`Id` = `permission`.`RoleId` LEFT JOIN `access_right` ON `access_right`.`Id`=`permission`.`AccessRightId` WHERE `RoleId` = ?",
  q007: "",
  q008: "",
  q009: "",
  q010: "",
};
