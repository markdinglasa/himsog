export const TaxQuery = {
  q001: "SELECT `tax`.*,`account`.`Name` AS `AccountName` FROM `tax` LEFT JOIN `account` ON `account`.`Id` = `tax`.`AccountId`",
  q002: "SELECT `Id` FROM `tax` WHERE `Id` = ?",
  q003: "SELECT * FROM `tax` WHERE `Id` = ?",
  q004: "SELECT `Id` FROM `tax` WHERE `Name` = ?",
  q005: "SELECT `Id` FROM `tax` WHERE `Id` <> ? AND `Name` = ?",
  q006: "SELECT `InTax`.`InTaxId` AS `Id`, `OutTax`.`OutTaxId` AS `Id`, `sales_line`.`TaxId` AS `Id` FROM `tax` LEFT JOIN `item` AS `InTax` ON `InTax`.`InTaxId` = `tax`.`Id` LEFT JOIN `item` AS `OutTax` ON `OutTax`.`OutTaxId` = `tax`.`Id` LEFT JOIN `sales_line` ON `sales_line`.`TaxId`  = `tax`.`Id`  WHERE `tax`.`Id` = ?", // check transaction
  q007: "",
  q008: "",
  q009: "",
  q010: "",
};
