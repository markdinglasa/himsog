export enum RouteChannel {
  INDEX = "/",
  R403 = "/unauthorized",
  R404 = "*",
  FORGOT_PASSWORD = "/forgot-password",
  SIGN_UP = "/sign-up",
  DASHBOARD = "/a",
  AUDIT_TRAIL = "/a/audit-trail",
  NOTIFICATIONS = "/a/notifications",
  PROFIFLE = "/a/profile/:Id",
  UTILITY = "/a/utility/",
  TERMS_AND_CONDITIONS = "/a/terms-and-conditions",
  PRIVACY_POLICY = "/a/privacy-policy",
  NO_ACCESS_RIGHT = "NO_ACCESS_RIGHT",
  SETTINGS = "/a/settings",

  HEALTH = "/a/health",
  HEALTH_NEW = "/a/health/new",
  HEALTH_DETAILS = "/a/health/d/:Id",
  INGREDIENT = "/a/ingredient",
  INGREDIENT_NEW = "/a/ingredient/new",
  INGREDIENT_DETAILS = "/a/ingredient/d/:Id",
  UNIT = "/a/unit",
  UNIT_NEW = "/a/unit/new",
  UNIT_DETAILS = "/a/unit/d/:Id",
  USER = "/a/user",
  USER_NEW = "/a/user/new",
  USER_DETAILS = "/a/user/d/:Id",
}
