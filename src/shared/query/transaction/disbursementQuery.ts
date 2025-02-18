export const DisbursementQuery = {
  q001: "SELECT `disbursement`.*, CONCAT(p.`Name`, t.`Name`, '-', `disbursement`.`RecNumber`) AS `RecNumber`, `account`.`Name` AS `AccountName` FROM `disbursement` LEFT JOIN `account` ON `account`.`Id` = `disbursement`.`AccountId` LEFT JOIN `terminal` t ON t.`Id` = `disbursement`.`TerminalId` LEFT JOIN `period` p ON p.`Id` = `disbursement`.`PeriodId` WHERE `disbursement`.`BranchId`=?",
  q002: "SELECT `Id` FROM `disbursement` WHERE `Id` = ?",
  q003: "SELECT `disbursement`.*, CONCAT(p.`Name`, t.`Name`, '-', `disbursement`.`RecNumber`) AS `DisbursementNumber` FROM `disbursement` LEFT JOIN `terminal` t ON t.`Id` = `disbursement`.`TerminalId` LEFT JOIN `period` p ON p.`Id` = `disbursement`.`PeriodId` WHERE `disbursement`.`Id` = ?",
  q004: "",
  q005: "",
  q006: "",
  q007: "",
  q008: "",
  q009: "",
  q010: "",
};
