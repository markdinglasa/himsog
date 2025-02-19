export enum CertificateQuery {
  q001 = "SELECT * FROM `certificate` WHERE `ProfessionId` = ?", // GET ALL
  q002 = "SELECT `Id` FROM `certificate` WHERE `Id` = ? ", // CHECK EXISTENCE
  q003 = "SELECT * FROM `certificate` WHERE `Id` = ? ", // GET
  q004 = "SELECT `Id` FROM `certificate` WHERE `CertificateNumber` = ? ", // CHECK DUP ON CREATE
  q005 = "SELECT `Id` FROM `certificate` WHERE `Id` <> ? AND `CertificateNumber` = ? ", // CHECK DUP ON UPDATE
  q006 = "",
  q007 = "",
  q008 = "",
  q009 = "",
  q010 = "",
}
