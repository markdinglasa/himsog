export const SupplierQuery = {
  q001: "SELECT * FROM `supplier`",
  q002: "SELECT `Id` FROM `supplier` WHERE `Id` = ?",
  q003: "SELECT * FROM `supplier` WHERE `Id` = ?",
  q004: "SELECT `Id` FROM `supplier` WHERE `Name` = ?",
  q005: "SELECT `Id` FROM `supplier` WHERE `Id` <> ? AND `Name` = ?",
  q006: "SELECT `Id` FROM `purchase_order` WHERE `SupplierId` = ?",
  q007: "",
  q008: "",
  q009: "",
  q010: "",
};
