export const PurchaseOrderQuery = {
  q001: "SELECT po.`Id`, po.`TrnDate`, CONCAT('00',p.`Name`, '-', po.`RecNumber`) AS `RecNumber`, s.`Name` AS `SupplierName`, SUM(pol.`Amount`) AS `Amount` FROM `purchase_order` AS po LEFT JOIN `supplier` AS s ON s.`Id`= po.`SupplierId` LEFT JOIN `period` AS p ON p.`Id` = po.`PeriodId` LEFT JOIN `purchase_order_line` AS pol ON pol.`PurchaseOrderId` = po.`Id` WHERE po.`BranchId` = ? GROUP BY po.`Id`, po.`TrnDate`, s.`Name`, p.`Name`, po.`RecNumber`",
  q002: "SELECT `Id` FROM `purchase_order` WHERE `Id` = ?",
  q003: "SELECT po.`Id`, po.`TrnDate`, CONCAT('00',p.`Name`, '-', po.`RecNumber`) AS `RecNumber`, po.`PeriodId`, po.`SupplierId`, po.`PreparedBy`, po.`CheckedBy`, po.`ApprovedBy`, po.`RequestedBy`, po.`Remarks`, SUM(pol.`Amount`) AS `Amount`, po.`CreatedBy`, po.`UpdatedBy` FROM `purchase_order` AS po LEFT JOIN `supplier` AS s ON s.`Id`= po.`SupplierId` LEFT JOIN `period` AS p ON p.`Id` = po.`PeriodId` LEFT JOIN `purchase_order_line` AS pol ON pol.`PurchaseOrderId` = po.`Id` WHERE po.`Id` = ? GROUP BY po.`Id`, po.`TrnDate`, p.`Name`, po.`RecNumber`, po.`PeriodId`, po.`SupplierId`, po.`PreparedBy`, po.`CheckedBy`, po.`ApprovedBy`, po.`RequestedBy`, po.`Remarks`",
  q004: "",
  q005: "",
  q006: "",
  q007: "",
  q008: "",
  q009: "",
  q010: "",
};
