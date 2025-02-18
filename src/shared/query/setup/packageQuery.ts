export const PackageQuery = {
  q001: "SELECT `package`.*, `unit`.`Name` AS `UnitName`, `item`.`Description` AS `PackageItemName` FROM `package` LEFT JOIN `unit` ON `unit`.`Id` = `package`.`UnitId` LEFT JOIN `item` ON `item`.`Id` = `package`.`PackageItemId` WHERE `ItemId` = ?",
  q002: "SELECT `Id` FROM `package` WHERE `Id` = ?",
  q003: "SELECT * FROM `package` WHERE `Id` = ?",
  q004: "",
  q005: "",
  q006: "",
  q007: "",
  q008: "",
  q009: "",
  q010: "",
};
