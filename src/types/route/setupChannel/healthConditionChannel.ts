export enum HealthConditionChannel {
  HEALTH_CONDITION_GET = "/setup/health-condition/get/:Id",
  HEALTH_CONDITION_GET_ALL = "/setup/health-condition/get-all/:Id", //UserId
  HEALTH_CONDITION_NEW = "/setup/health-condition/new",
  HEALTH_CONDITION_REMOVE = "/setup/health-condition/remove/:Id",
  HEALTH_CONDITION_UPDATE = "/setup/health-condition/update/:Id",

  HEALTH_CONDITION = "/setup/health-condition",
  HEALTH_CONDITION_ID = "/setup/health-condition/:Id",
  HEALTH_CONDITION_PARENT = "/setup/health-condition/user?=:Id",
}
