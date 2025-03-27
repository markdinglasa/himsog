import { BASE_URL } from "../../../shared";

export const EventChannel = {
  EVENT: `${BASE_URL}/setup/event`,
  EVENT_ID: `${BASE_URL}/setup/event/:Id`,
  EVENT_FILTER: `${BASE_URL}/setup/event/filter?=:Id`,
  EVENT_VALIDATED: `${BASE_URL}/setup/event/validated`,
};
