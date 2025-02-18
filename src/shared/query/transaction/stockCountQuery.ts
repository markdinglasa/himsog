export const StockCountQuery = {
  q001: "SELECT sc.Id, sc.`TrnDate`, sc.`Remarks`, SUM(NULLIF(scl.`Amount`,0)) AS `Amount`, CONCAT('00',p.`Name`, '-', sc.`RecNumber`) AS `RecNumber` FROM `stock_count` AS sc LEFT JOIN `stock_count_line` AS scl ON scl.`StockCountId`=sc.`Id` LEFT JOIN `period` AS p ON p.`Id`=sc.`PeriodId` WHERE sc.`BranchId` = ? GROUP BY sc.Id, sc.`TrnDate`, sc.`Remarks`, p.`Name`, sc.`RecNumber`",
  q002: "SELECT `Id` FROM `stock_count` WHERE `Id` = ?",
  q003: "SELECT * FROM `stock_count` WHERE `Id` = ?",
  q004: "SELECT sc.`Id`, sc.`TrnDate`, sc.`Remarks`, sc.`PeriodId`, sc.`PreparedBy`, sc.`CheckedBy`, sc.`ApprovedBy`, CONCAT('00',p.`Name`, '-', sc.`RecNumber`) AS `RecNumber` FROM `stock_count` AS sc LEFT JOIN `period` AS p ON p.`Id`=sc.`PeriodId` WHERE sc.`Id` = ? ",
  q005: "",
  q006: "",
  q007: "",
  q008: "",
  q009: "",
  q010: "",
};
