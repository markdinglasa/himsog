export const ItemGroupLineQuery = {
  q001: "SELECT igl.*, i.`Description` AS `ItemDescription` FROM `item_group_line` AS igl LEFT JOIN `item` AS i ON i.`Id`=igl.`ItemId` WHERE igl.`ItemGroupId`  = ?",
  q002: "SELECT `Id` FROM `item_group_line` WHERE `Id` = ?",
  q003: "SELECT * FROM `item_group_line` WHERE `Id` = ?",
  q004: "SELECT `Id` FROM `item_group_line` WHERE `ItemId` = ? AND `ItemGroupId` = ?",
  q005: "SELECT `Id` FROM `item_group_line` WHERE `Id` <> ? AND `ItemId` = ? AND `ItemGroupId` = ?",
  q006: "",
  q007: "",
  q008: "",
  q009: "",
  q010: "",
};
