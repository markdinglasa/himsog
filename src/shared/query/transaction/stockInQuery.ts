export const StockInQuery = {
  q001: "SELECT si.`Id`, si.`TrnDate`, s.`Name` AS `SupplierName`, CONCAT('00',p.`Name`, '-', si.`RecNumber`) AS `RecNumber`, si.`Remarks`, si.`IsReturn`, SUM(NULLIF(sil.`Amount`,0)) AS `Amount` FROM `stock_in` AS si LEFT JOIN `supplier` AS s ON s.`Id`= si.`SupplierId` LEFT JOIN `period` AS p ON p.`Id`=si.`PeriodId` LEFT JOIN `stock_in_line` AS sil ON sil.`StockInId` = si.`Id` WHERE si.`BranchId` = ? GROUP BY si.`Id`, si.`TrnDate`, s.`Name`, p.`Name`, si.`RecNumber`, si.`Remarks`, si.`IsRefund`",
  q002: "SELECT `Id` FROM `stock_in` WHERE `Id` = ?",
  q003: "SELECT * FROM `stock_in` WHERE `Id` = ?",
  q004: "SELECT si.`Id`, si.`TrnDate`, CONCAT('00',p.`Name`, '-', si.`RecNumber`) AS `RecNumber`, si.`PeriodId`, si.`SupplierId`, si.`PurchaseOrderId`, si.`PreparedBy`, si.`CheckedBy`, si.`PreparedBy`, si.`Remarks`, si.`CreatedBy`,si.`UpdatedBy`, si.`IsReturn`, si.`CollectionId`, si.`SalesId` FROM `stock_in` AS si LEFT JOIN `period` AS p ON p.`Id`=si.`PeriodId` WHERE si.`Id` = ?",
  q005: "",
  q006: "",
  q007: "",
  q008: "",
  q009: "",
  q010: "",
};
