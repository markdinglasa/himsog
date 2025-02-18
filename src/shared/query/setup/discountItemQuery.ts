export const DiscountItemQuery = {
  q001: "SELECT `discount_item`.*, `item`.`Description` AS `ItemDescription` FROM `discount_item` LEFT JOIN `item` ON `item`.`Id`=`discount_item`.`ItemId` WHERE `discount_item`.`DiscountId` = ?",
  q002: "SELECT `Id` FROM `discount_item` WHERE `Id` = ?",
  q003: "SELECT * FROM `discount_item` WHERE `Id` = ?",
  q004: "SELECT `Id` FROM `discount_item` WHERE `DiscountId` = ? AND `ItemId` = ?",
  q005: "",
  q006: "",
  q007: "",
  q008: "",
  q009: "",
  q010: "",
};
