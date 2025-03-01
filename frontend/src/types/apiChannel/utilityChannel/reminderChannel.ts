import { BASE_URL } from "../../../shared";

export const ReminderChannel = {
  REMINDER: `${BASE_URL}/transaction/reminder`,
  REMINDER_ID: `${BASE_URL}/transaction/reminder/:Id`,
  REMINDER_PARENT: `${BASE_URL}/transaction/reminder/u?=:Id`,
};
