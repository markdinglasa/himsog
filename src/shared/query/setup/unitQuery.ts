export const UnitQuery = {
  q001: "SELECT * FROM `unit`",
  q002: "SELECT `Id` FROM `unit` WHERE `Id` = ?",
  q003: "SELECT * FROM `unit` WHERE `Id` = ?",
  q004: "SELECT `Id` FROM `unit` WHERE `Name` = ?",
  q005: "SELECT `Id` FROM `unit` WHERE `Id` <> ? AND `Name` = ?",
  q006: "SELECT `item`.`UnitId` AS `Id` FROM `unit` LEFT JOIN `item` ON `unit`.`Id` = `item`.`UnitId` WHERE `unit`.`Id` = ?",
  q007: "",
  q008: "",
  q009: "",
  q010: "",
};
