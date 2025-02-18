export enum FeedbackChannel {
  FEEDBACK_GET = "/transaction/feedback/get/:Id",
  FEEDBACK_GET_ALL = "/transaction/feedback/get-all/:UserId",
  FEEDBACK_NEW = "/transaction/feedback/new",
  FEEDBACK_REMOVE = "/transaction/feedback/remove/:Id",
  FEEDBACK_UPDATE = "/transaction/feedback/update/:Id",
}
