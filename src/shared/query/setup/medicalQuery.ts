export enum MedicalQuery {
  q001 = "SELECT * FROM `medical` WHERE `UserId` = ?", // GET ALL
  q002 = "SELECT `Id` FROM `medical` WHERE `Id` = ?", // CHECK EXISTENCE
  q003 = "SELECT * FROM `medical` WHERE `Id` = ? ", // GET
  q004 = "SELECT `Id` FROM `medical` WHERE `UserId` = ?", // CHECK DUPLIDATE
  q005 = "",
  q006 = "",
  q007 = "",
  q008 = "",
  q009 = "",
  q010 = "",
}
