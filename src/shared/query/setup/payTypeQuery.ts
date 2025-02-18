export const PayTypeQuery = {
  q001: "SELECT `pay_type`.*,`account`.`Name` AS `AccountName` FROM `pay_type` LEFT JOIN `account` ON `account`.`Id` = `pay_type`.`AccountId` WHERE `pay_type`.`BranchId` = ?",
  q002: "SELECT `Id` FROM `pay_type` WHERE `Id` = ?",
  q003: "SELECT * FROM `pay_type` WHERE `Id` = ?",
  q004: "SELECT `Id` FROM `pay_type` WHERE `Name` = ?",
  q005: "SELECT `Id` FROM `pay_type` WHERE `Id` <> ? AND `Name` = ?",
  q006: "SELECT `PayTypeId` FROM `collection_line` WHERE `PayTypeId` = ?",
  q007: "",
  q008: "",
  q009: "",
  q010: "",
};
