export const StockCountLineQuery = {
  q001: "SELECT scl.*, i.`Description` AS `ItemDescription`, u.`Name` AS `UnitName` FROM `stock_count_line` AS scl LEFT JOIN `item` AS i ON i.`Id`=scl.`ItemId` LEFT JOIN `unit` AS u ON u.`Id`=scl.`UnitId` WHERE scl.`StockCountId` = ?",
  q002: "SELECT `Id` FROM `stock_count_line` WHERE `Id` = ?",
  q003: "SELECT * FROM `stock_count_line` WHERE `Id` = ?",
  q004: "",
  q005: "",
  q006: "",
  q007: "",
  q008: "",
  q009: "",
  q010: "",
};
