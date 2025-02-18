export const SalesLineQuery = {
  q001: "SELECT sl.`Id`, sl.`UnitId`, sl.`Price`, sl.`DiscountAmount` AS `DiscountAmountNoRate`,CONCAT('P ', FORMAT(sl.`DiscountAmount`, 2), ' (', CAST(sl.`DiscountRate` AS UNSIGNED), '%)') AS `DiscountAmount`, sl.`NetPrice`, sl.`Amount`, sl.`Quantity`, CONCAT('P ',FORMAT(sl.`TaxAmount`, 2), ' (', CAST(sl.`TaxRate` AS UNSIGNED), '%)') AS `TaxAmount`, sl.`TaxId`, sl.`TaxRate`, sl.`TaxAmount` AS `TaxAmountNoRate`, u.`Name` AS `UnitName`, i.`Description` AS `ItemDescription`, t.`Name` AS `TaxName` FROM `sales_line` AS sl LEFT JOIN `item` AS i ON i.Id=sl.`ItemId` LEFT JOIN `unit` AS u ON u.`Id`=sl.`UnitId` LEFT JOIN `tax` AS t ON t.`Id`=sl.`TaxId` WHERE sl.`SalesId` =?",
  q002: "SELECT `Id` FROM `sales_line` WHERE `Id` = ?",
  q003: "SELECT * FROM `sales_line` WHERE `Id` = ?",
  q004: "",
  q005: "SELECT * FROM `sales_line` WHERE `SalesId` = ?",
  q006: "SELECT `tax`.`Id`, `tax`.`Rate` FROM `item` LEFT JOIN `tax` ON `tax`.`Id` =`item`.`OutTaxId` WHERE `item`.`Id` = ?",
  q007: "",
  q008: "",
  q009: "",
  q010: "",
};
