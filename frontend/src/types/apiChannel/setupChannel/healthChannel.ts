import { BASE_URL } from "../../../shared";

export const HealthChannel = {
  HEALTH: `${BASE_URL}/setup/health`,
  HEALTH_ID: `${BASE_URL}/setup/health/:Id`,
  HEALTH_PARENT: `${BASE_URL}/setup/health/u?=:Id`,
};
