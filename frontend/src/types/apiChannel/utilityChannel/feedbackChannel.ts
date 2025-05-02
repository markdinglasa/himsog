import { BASE_URL } from "../../../shared";

export const FeedbackChannel = {
  FEEDBACK: `${BASE_URL}/utility/feedback`,
  FEEDBACK_ID: `${BASE_URL}/utility/feedback/:Id`,
  FEEDBACK_PARENT: `${BASE_URL}/utility/feedback/u?=:Id`,
};
