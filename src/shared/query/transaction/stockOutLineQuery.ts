export const StockOutLineQuery = {
  q001: "SELECT `sol`.*, i.`Description` AS `ItemDescription`, u.`Name` AS `UnitName`, a.`Name` AS `AssetAccountName` FROM `stock_out_line` AS sol LEFT JOIN `item` AS i ON i.`Id` = sol.`ItemId` LEFT JOIN `unit` AS u ON u.`Id`=sol.`UnitId` LEFT JOIN `account` AS a ON a.`Id`=sol.`AssetAccountId` WHERE `StockOutId` = ?",
  q002: "SELECT `Id` FROM `stock_out_line` WHERE `Id` = ?",
  q003: "SELECT * FROM `stock_out_line` WHERE `Id` = ?",
  q004: "",
  q005: "",
  q006: "",
  q007: "",
  q008: "",
  q009: "",
  q010: "",
};
