export enum EventChannel {
  EVENT = "/setup/event",
  EVENTS = "/setup/events",
  EVENT_ID = "/setup/event/:Id",
  EVENT_USER = "/setup/event/user/:Id",

  EVENT_VALIDATED = "/setup/event/validated",
  EVENT_INVALIDATED = "/setup/event/invalidated",
}
