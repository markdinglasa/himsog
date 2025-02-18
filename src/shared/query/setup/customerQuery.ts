export const CustomerQuery = {
  q001: "SELECT * FROM `customer`",
  q002: "SELECT `Id` FROM `customer` WHERE `Id` = ?",
  q003: "SELECT * FROM `customer` WHERE `Id` = ?",
  q004: "SELECT `Id` FROM `customer` WHERE `Name` = ?",
  q005: "SELECT `Id` FROM `customer` WHERE `Id` <> ? AND `Name` = ?",
  q006: "SELECT `customer`.`Id` AS `Id` FROM `customer` LEFT JOIN `sales` ON `sales`.`CustomerId` = `customer`.`Id` WHRERE `customer`.`Id`=?",
  q007: "",
  q008: "",
  q009: "",
  q010: "",
};
