export const StockOutQuery = {
  q001: "SELECT so.`Id`, so.`TrnDate`,a.`Name` AS `AccountName`, CONCAT('00',p.`Name`, '-', so.`RecNumber`) AS `RecNumber`, SUM(NULLIF(sol.`Amount`,0)) AS `Amount`  FROM `stock_out` AS so LEFT JOIN `stock_out_line` AS sol ON sol.`StockOutId`=so.`Id` LEFT JOIN `period` AS p ON p.`Id`=so.`PeriodId` LEFT JOIN `account` AS a ON a.`Id`=so.`AccountId` WHERE so.`BranchId` = ? GROUP BY so.`Id`, so.`Id`, so.`TrnDate`,a.`Name`,sol.`Amount`",
  q002: "SELECT `Id` FROM `stock_out` WHERE `Id` = ?",
  q003: "SELECT * FROM `stock_out` WHERE `Id` = ?",
  q004: "SELECT so.`Id`, so.`TrnDate`, so.`AccountId`,so.`PeriodId`, so.`PreparedBy`, so.`CheckedBy`, so.`ApprovedBy`, so.`Remarks`, so.`CreatedBy`,so.`UpdatedBy`, CONCAT('00',p.`Name`, '-', so.`RecNumber`) AS `RecNumber` FROM `stock_out` AS so LEFT JOIN `stock_out_line` AS sol ON sol.`StockOutId`=so.`Id` LEFT JOIN `period` AS p ON p.`Id`=so.`PeriodId` WHERE so.`Id` = ? ",
  q005: "",
  q006: "",
  q007: "",
  q008: "",
  q009: "",
  q010: "",
};
