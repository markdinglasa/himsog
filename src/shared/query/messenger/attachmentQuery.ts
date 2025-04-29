export enum AttachmentQuery {
  q001 = "SELECT * FROM `attachment` WHERE `ConvoId`", // GET ALL
  q002 = "SELECT `Id` FROM `attachment` WHERE `Id` = ?", // CHECK EXISTENCE
  q003 = "SELECT * FROM `attachment` WHERE `Id` = ? ", // GET
  q004 = "",
  q005 = "",
  q006 = "",
  q007 = "",
  q008 = "",
  q009 = "",
  q010 = "",
}
