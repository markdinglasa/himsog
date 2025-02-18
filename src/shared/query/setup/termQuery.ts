export const TermQuery = {
  q001: "SELECT * FROM `term`",
  q002: "SELECT `Id` FROM `term` WHERE `Id` = ?",
  q003: "SELECT * FROM `term` WHERE `Id` = ?",
  q004: "SELECT `Id` FROM `term` WHERE `Name` = ?",
  q005: "SELECT `Id` FROM `term` WHERE `Id` <> ? AND `Name` = ?",
  q006: "SELECT `customer`.`Id` FROM `term` LEFT JOIN  `customer` ON `customer`.`TermId` = `term`.`Id` WHERE `term`.`Id` = ?",
  q007: "",
  q008: "",
  q009: "",
  q010: "",
};
