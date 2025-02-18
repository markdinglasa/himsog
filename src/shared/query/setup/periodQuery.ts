export const PeriodQuery = {
  q001: "SELECT * FROM `period` WHERE `BranchId` = ?",
  q002: "SELECT `Id` FROM `period` WHERE `Id` = ?",
  q003: "SELECT * FROM `period` WHERE `Id` = ?",
  q004: "SELECT `Id` FROM `period` WHERE `Name` = ?",
  q005: "SELECT `card_memo`.`Id`, `collection`.`Id`, `disbursement`.`Id`, `sales`.`Id`, `stock_count`.`Id`, `stock_in`.`Id`, `stock_out`.`Id` FROM `pay_type` LEFT JOIN `card_memo` ON `card_memo`.`PeriodId` = `pay_type`.`Id` LEFT JOIN `collection` ON `collection`.`PeriodId` = `pay_type`.`Id` LEFT JOIN `disbursement` ON `disbursement`.`PeriodId` = `pay_type`.`Id` LEFT JOIN `sales` ON `sales`.`PeriodId` = `pay_type`.`Id` LEFT JOIN `stock_count` ON `stock_count`.`PeriodId` = `pay_type`.`Id` LEFT JOIN `stock_in` ON `stock_in`.`PeriodId` = `pay_type`.`Id` LEFT JOIN `stock_out` ON `stock_out`.`PeriodId` = `pay_type`.`Id` WHERE `pay_type`.`Id` = ?",
  q006: "",
  q007: "",
  q008: "",
  q009: "",
  q010: "",
};
