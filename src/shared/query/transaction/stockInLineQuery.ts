export const StockInLineQuery = {
  q001: "SELECT sil.*, i.`Description` AS `ItemDescription`, u.`Name` AS `UnitName`, a.`Name` AS `AssetAccountName` FROM `stock_in_line` AS sil LEFT JOIN `item` AS i ON i.`Id`=sil.`ItemId` LEFT JOIN `unit` AS u ON u.`Id`=sil.`UnitId` LEFT JOIN `account` AS a ON a.`Id`=sil.`AssetAccountId` WHERE sil.`StockInId` = ?",
  q002: "SELECT `Id` FROM `stock_in_line` WHERE `Id` = ?",
  q003: "SELECT * FROM `stock_in_line` WHERE `Id` = ?",
  q004: "",
  q005: "",
  q006: "",
  q007: "",
  q008: "",
  q009: "",
  q010: "",
};
