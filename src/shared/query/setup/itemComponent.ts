export const ItemComponentQuery = {
  q001: "SELECT `item_component`.*, `item`.`Description` AS `ItemDescription`,`unit`.`Name` AS `UnitName`, `component`.`Description` AS `ComponentDescription` FROM `item_component` LEFT JOIN `item` ON `item`.`Id` = `item_component`.`ItemId` LEFT JOIN `item` AS `component` ON `component`.`Id` = `item_component`.`ComponentId` LEFT JOIN `unit` ON `unit`.`Id` = `item_component`.`UnitId` WHERE `item_component`.`ItemId` = ?",
  q002: "SELECT `Id` FROM `item_component` WHERE `Id` = ?",
  q003: "SELECT * FROM `item_component` WHERE `Id` = ?",
  q004: "SELECT `Id` FROM `item_component` WHERE `ItemId` = ? AND `ComponentId` = ?",
  q005: "SELECT `item`.`Id`, `item`.`Description` AS `ItemDescription`, `item`.`IsPackage` AS `IsPackage`, COUNT(`item_component`.`ItemId`) AS `ComponentCount`, COUNT(`package`.`ItemId`) AS `PackageCount` FROM `item` LEFT JOIN `item_component` ON `item_component`.`ComponentId` = `item`.`Id` LEFT JOIN `package` ON `package`.`PackageItemId` = `item`.`Id` WHERE `item`.`IsInventory` = false AND `item`.`BranchId` = ? GROUP BY `item`.`Id`,`item_component`.`ItemId`,`item`.`Description`,`item`.`IsPackage`,`package`.`ItemId`",
  q006: "SELECT `item`.`Id`,`item`.`Description` AS `ItemDescription` FROM `item` LEFT JOIN `item_component` ON `item_component`.`ComponentId` = `item`.`Id` LEFT JOIN `package` ON `package`.`PackageItemId` = `item`.`Id` WHERE `item`.`IsInventory` = true  AND `package`.`ItemId` IS NULL AND `item_component`.`ItemId` IS NULL GROUP BY `item`.`Id`,`item`.`Description`",
  q007: "",
  q008: "",
  q009: "",
  q010: "",
};
