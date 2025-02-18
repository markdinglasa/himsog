export const AccessRightQuery = {
  q001: "SELECT `Action` FROM `access_right` WHERE `Action`=  ? ",
  q002: "SELECT Id FROM `access_right` WHERE `Id`=  ? ",
  q003: "SELECT `access_right`.* FROM `access_right` LEFT JOIN `permission` ON `permission`.`AccessRightId` = `access_right`.`Id` AND `permission`.`RoleId` = ? OR `permission`.`RoleId` IS NULL WHERE `permission`.`AccessRightId` IS NULL",
  q004: "",
  q005: "SELECT `Id` FROM `access_right` WHERE `Id` <> ? AND `Action` = ?",
  q006: "",
  q007: "",
  q008: "",
  q009: "",
  q010: "",
};
