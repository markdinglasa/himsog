export const TerminalQuery = {
  q001: "SELECT * FROM `terminal` WHERE `BranchId` = ?",
  q002: "SELECT `Id` FROM `terminal` WHERE `Id` = ?",
  q003: "SELECT * FROM `terminal` WHERE `Id` = ?",
  q004: "SELECT `Id` FROM `terminal` WHERE `Name` = ?",
  q005: "SELECT `Id` FROM `terminal` WHERE `Id` <> ? AND `Name` = ?",
  q006: "SELECT `collection`.`TerminalId` AS `Id`, `sales`.`TerminalId` AS `Id` FROM `terminal` LEFT JOIN `collection` ON `terminal`.`Id` = `collection`.`TerminalId` LEFT JOIN `sales` ON `terminal`.`Id` = `sales`.`TerminalId` WHERE `terminal`.`Id` =  ?",
  q007: "",
  q008: "",
  q009: "",
  q010: "",
};
