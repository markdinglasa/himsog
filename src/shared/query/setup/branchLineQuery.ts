export const BranchLineQuery = {
  q001: "SELECT `branch_line`.*, `branch`.`Name` AS `BranchName`,`user`.`Name` AS `UserName` FROM `branch_line` LEFT JOIN `branch` ON `branch`.`Id`=`branch_line`.`BranchId` LEFT JOIN `user` ON `user`.`Id` = `branch_line`.`UserId` WHERE `branch_line`.`UserId` = ?",
  q002: "SELECT `Id` FROM `branch_line` WHERE `Id` = ?",
  q003: "SELECT * FROM `branch_line` WHERE `Id` = ?",
  q004: "SELECT `Id` FROM `branch_line` WHERE `BranchId` = ? AND `UserId` = ?",
  q005: "",
  q006: "",
  q007: "",
  q008: "",
  q009: "",
  q010: "",
};
