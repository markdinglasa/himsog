export const CollectionLineQuery = {
  q001: "SELECT `collection_line`.*, `pay_type`.`Name` AS `PayTypeName`, `account`.`Name` AS `AccountName` FROM `collection_line` LEFT JOIN `pay_type` ON `pay_type`.`Id` = `collection_line`.`PayTypeId` LEFT JOIN `account` ON `account`.`Id` = `collection_line`.`AccountId` WHERE `CollectionId` = ?",
  q002: "SELECT `Id` FROM `collection_line` WHERE `Id` = ?",
  q003: "SELECT * FROM `collection_line` WHERE `Id` = ?",
  q004: "",
  q005: "",
  q006: "",
  q007: "",
  q008: "",
  q009: "",
  q010: "",
};
