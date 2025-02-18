export const CardMemoLineQuery = {
  q001: "SELECT cml.*, CONCAT(p.`Name`,t.`Name`,'-', s.`RecNumber`) AS `SalesNumber`, a.`Name` AS `AccountName` FROM `card_memo_line` AS cml LEFT JOIN `sales` AS s ON s.`Id` = cml.`SalesId` LEFT JOIN `period` AS p ON p.`Id`=s.`PeriodId` LEFT JOIN `terminal` AS t ON t.`Id`=s.`TerminalId` LEFT JOIN `account` AS a ON a.`Id`= cml.`AccountId` WHERE cml.`CardMemoId` = ?",
  q002: "SELECT `Id` FROM `card_memo_line` WHERE `Id` = ?",
  q003: "SELECT * FROM `card_memo_line` WHERE `Id` = ?",
  q004: "",
  q005: "",
  q006: "",
  q007: "",
  q008: "",
  q009: "",
  q010: "",
};
