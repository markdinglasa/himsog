export const DiscountQuery = {
  q001: "SELECT * FROM `discount`",
  q002: "SELECT `Id` FROM `discount` WHERE `Id` = ?",
  q003: "SELECT * FROM `discount` WHERE `Id` = ?",
  q004: "SELECT `Name` FROM `discount` WHERE `Name` = ?",
  q005: "SELECT `Id` FROM `discount` WHERE `Id` <> ? AND `Name` = ?",
  q006: "SELECT  `sales`.`Id` AS `Id` FROM `discount` LEFT JOIN `sales` ON `sales`.`DiscountId`= `discount`.`Id` WHERE `discount`.`Id` = ?",
  q007: "",
  q008: "",
  q009: "",
  q010: "",
};
