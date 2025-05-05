import { BASE_URL } from "../../../shared";

export const UserProgressChannel = {
  USER_PROGRESS: `${BASE_URL}/transaction/user-progress`,
  USER_PROGRESSES: `${BASE_URL}/transaction/user-progresses?ump=:ump&date=:date`,
  USER_PROGRESS_ID: `${BASE_URL}/transaction/user-progress/:Id`,
  USER_PROGRESS_USER_MEAL_PLAN: `${BASE_URL}/transaction/user-progress/ump/:Id`,
};
