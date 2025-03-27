import { BASE_URL } from "../../../shared";

export const EventChannel = {
  EVENT: `${BASE_URL}/setup/event`,
  EVENT_ID: `${BASE_URL}/setup/event/:Id`,
  EVENT_FILTER: `${BASE_URL}/setup/events?filter=:filter&page=:page`,
  EVENT_VALIDATED: `${BASE_URL}/setup/event/validated`,
  EVENT_INVALIDATED: `${BASE_URL}/setup/event/invalidated`,
};
