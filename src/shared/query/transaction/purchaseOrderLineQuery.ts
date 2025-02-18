export const PurchaseOrderLineQuery = {
  q001: "SELECT `purchase_order_line`.*, `item`.`Description` AS `ItemDescription`, `unit`.`Name` AS `UnitName` FROM `purchase_order_line` LEFT JOIN `item` ON `item`.`Id` = `purchase_order_line`.`ItemId` LEFT JOIN `unit` ON `unit`.`Id` = `purchase_order_line`.`UnitId` WHERE `PurchaseOrderId` = ?",
  q002: "SELECT `Id` FROM `purchase_order_line` WHERE `Id` = ?",
  q003: "SELECT * FROM `purchase_order_line` WHERE `Id` = ?",
  q004: "",
  q005: "",
  q006: "",
  q007: "",
  q008: "",
  q009: "",
  q010: "",
};
