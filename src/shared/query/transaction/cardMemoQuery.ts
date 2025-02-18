export const CardMemoQuery = {
  q001: "SELECT `card_memo`.`Id`, `card_memo`.`TrnDate`,`p`.`Name` AS `PeriodName`,`card_memo`.`Particulars`, CONCAT('00',p.`Name`, '-', `card_memo`.`RecNumber`) AS `RecNumber` FROM `card_memo` LEFT JOIN `period` AS p ON p.`Id`=`card_memo`.`PeriodId` WHERE `card_memo`.`BranchId` = ?",
  q002: "SELECT * FROM `card_memo` WHERE `Id` = ?",
  q003: "SELECT `Id` FROM `card_memo` WHERE `Id` = ?",
  q004: "SELECT `card_memo`.`Id`, `card_memo`.`TrnDate`,  `card_memo`.`PreparedBy`,`card_memo`.`CheckedBy`,`card_memo`.`ApprovedBy`, `card_memo`.`Particulars`, CONCAT('00',p.`Name`, '-', `card_memo`.`RecNumber`) AS `RecNumber` FROM `card_memo` LEFT JOIN `period` AS p ON p.`Id`=`card_memo`.`PeriodId` WHERE `card_memo`.`Id` = ?",
  q005: "",
  q006: "",
  q007: "",
  q008: "",
  q009: "",
  q010: "",
};
