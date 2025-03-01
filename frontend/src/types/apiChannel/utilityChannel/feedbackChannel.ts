import { BASE_URL } from "../../../shared";

export const FeedbackChannel = {
  FEEDBACK: `${BASE_URL}/transaction/feedback`,
  FEEDBACK_ID: `${BASE_URL}/transaction/feedback/:Id`,
  FEEDBACK_PARENT: `${BASE_URL}/transaction/feedback/u?=:Id`,
};
