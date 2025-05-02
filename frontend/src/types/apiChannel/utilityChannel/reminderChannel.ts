import { BASE_URL } from "../../../shared";

export const ReminderChannel = {
  REMINDER: `${BASE_URL}/utility/reminder`,
  REMINDER_ID: `${BASE_URL}/utility/reminder/:Id`,
  REMINDER_PARENT: `${BASE_URL}/utility/reminder/u?=:Id`,
};
