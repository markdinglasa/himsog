import { BASE_URL } from "../../../shared";

export const HealthConditionChannel = {
  HEALTH_CONDITION: `${BASE_URL}/setup/health-condition`,
  HEALTH_CONDITION_ID: `${BASE_URL}/setup/health-condition/:Id`,
  HEALTH_CONDITION_PARENT: `${BASE_URL}/setup/health-condition/health/:Id`,
};
