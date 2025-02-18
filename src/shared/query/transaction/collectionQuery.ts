export const CollectionQuery = {
  q001: "SELECT c.`Id`, CONCAT(p.`Name`, t.`Name`, '-', c.`RecNumber`) AS `RecNumber`, c.`TrnDate`, c.`PeriodId`, c.`TerminalId`,  c.`SalesId`, CAST(SUM(cl.`Amount`) AS DECIMAL(10, 2)) AS `Amount`, CONCAT(sp.`Name`, st.`Name`, '-', s.`RecNumber`) AS `SalesNumber`, cu.`Name` AS `CustomerName`, t.`Name` AS `TerminalName` FROM `collection` c LEFT JOIN `customer` cu ON cu.`Id` = c.`CustomerId` LEFT JOIN `terminal` t ON t.`Id` = c.`TerminalId` LEFT JOIN `period` p ON p.`Id` = c.`PeriodId` LEFT JOIN `sales` s ON s.`Id` = c.`SalesId` LEFT JOIN `period` sp ON sp.`Id` = s.`PeriodId` LEFT JOIN `terminal` st ON st.`Id` = s.`TerminalId` LEFT JOIN `collection_line` cl ON cl.`CollectionId` = c.`Id` WHERE c.`BranchId` = ? GROUP BY c.`Id`, c.`RecNumber`, c.`TrnDate`, c.`PeriodId`, c.`TerminalId`, c.`SalesId`, cu.`Name`, t.`Name`,  p.`Name`, sp.`Name`, st.`Name`, s.`RecNumber`",
  q002: "SELECT `Id` FROM `collection` WHERE `Id` = ?",
  q003: "SELECT c.`Id`, CONCAT(p.`Name`, t.`Name`, '-', c.`RecNumber`) AS `RecNumber`, c.`TrnDate`,c.`ORNumber`, c.`PeriodId`,  c.`TerminalId`,c.`SalesId`, c.`PreparedBy`, c.`CheckedBy`,c.`ApprovedBy`,c.`SalesBalanceAmount`, CAST(SUM(cl.`Amount`) AS DECIMAL(10, 2)) AS `Amount`, c.`CustomerId`, c.`BranchId`, c.`CreatedBy`, c.`UpdatedBy`  FROM `collection` c LEFT JOIN `customer` cu ON cu.`Id` = c.`CustomerId` LEFT JOIN `terminal` t ON t.`Id` = c.`TerminalId` LEFT JOIN `period` p ON p.`Id` = c.`PeriodId` LEFT JOIN `sales` s ON s.`Id` = c.`SalesId`  LEFT JOIN `collection_line` cl ON cl.`CollectionId` = c.`Id` WHERE c.`Id` = ? GROUP BY c.`Id`, c.`RecNumber`, c.`TrnDate`, c.`ORNumber`, c.`PeriodId`, c.`TerminalId`, c.`SalesId`, c.`PreparedBy`, c.`CheckedBy`, c.`ApprovedBy`, c.`SalesBalanceAmount`,c.`CustomerId`, c.`BranchId`",
  q004: "",
  q005: "",
  q006: "",
  q007: "",
  q008: "",
  q009: "",
  q010: "",
};
