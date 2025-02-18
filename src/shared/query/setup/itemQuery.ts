export const ItemQuery = {
  q001: "SELECT `item`.*, `unit`.`Name` AS `UnitName` FROM `item` LEFT JOIN `unit` ON `unit`.`Id` = `item`.`UnitId` WHERE `BranchId` = ? ORDER BY `ItemSKU` ASC",
  q002: "SELECT `Id` FROM `item` WHERE `Id` = ?",
  q003: "SELECT * FROM `item` WHERE `Id` = ?",
  q004: "SELECT `Id` FROM `item` WHERE `BranchId` = ? AND `Description` = ?",
  q005: "SELECT `Id` FROM `item` WHERE `Id` <> ? AND `BranchId` = ? AND `Description` = ?",
  q006: "SELECT `Id` FROM `sales_line` WHERE `ItemId` = ?",
  q007: "SELECT * FROM `item` WHERE `ItemSKU` = ?",
  q008: "",
  q009: "",
  q010: "",
};
