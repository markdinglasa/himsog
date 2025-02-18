export const ItemGroupQuery = {
  q001: "SELECT `item_group`.*, `setting_restaurant_line`.`KitchenReport` AS `KitchenReportName` FROM `item_group` LEFT JOIN `setting_restaurant_line` ON `setting_restaurant_line`.`Id` = `item_group`.`KitchenReport` WHERE `item_group`.`BranchId` = ?",
  q002: "SELECT `Id` FROM `item_group` WHERE `Id` = ?",
  q003: "SELECT * FROM `item_group` WHERE `Id` = ?",
  q004: "SELECT `Id` FROM `item_group` WHERE `Name` = ?",
  q005: "SELECT `Id` FROM `item_group` WHERE `Id` AND `Name` = ?",
  q006: "",
  q007: "",
  q008: "",
  q009: "",
  q010: "",
};
