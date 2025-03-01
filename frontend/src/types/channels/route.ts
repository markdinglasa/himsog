export enum RouteChannel {
  //PUBLIC
  INDEX = "/",
  R403 = "/unauthorized",
  R404 = "*",
  FORGOT_PASSWORD = "/forgot-password",
  SIGN_IN = "/sign-in",
  SIGN_UP = "/sign-up",
  ABOUT_US = "/about-us",
  CONTACT_US = "/contact-us",
  EVENT = "/event",
  EVENT_DETIALS = "/event/d/:Id",
  EVENT_NEW = "/event/new?=:Id", // pass access right to params
  ARTICLE = "/article",
  ARTICLE_DETAILS = "/article/d/:Id",
  ARTICLE_NEW = "/article/new?=:Id", // pass access right to params
  FAQ = "/frequent-ask-questions",
  TERMS_AND_CONDITIONS = "/terms-and-conditions",
  PRIVACY_POLICY = "/privacy-policy",
  NO_ACCESS_RIGHT = "no-access-right",
  HOW_IT_WORKS = "/how-it-works",
  PRICING = "/pricing",

  // ADMIN PAGES
  ADMIN_DASHBOARD = "/a",
  ADMIN_NOTIFICATIONS = "/a/notifications",
  ADMIN_PROFIFLE = "/a/profile/:Id",
  ADMIN_UTILITY = "/a/utility/",
  ADMIN_SETTINGS = "/a/settings",
  ADMIN_INGREDIENT = "/a/ingredient",
  ADMIN_INGREDIENT_NEW = "/a/ingredient/new",
  ADMIN_INGREDIENT_DETAILS = "/a/ingredient/d/:Id",
  ADMIN_UNIT = "/a/unit",
  ADMIN_UNIT_NEW = "/a/unit/new",
  ADMIN_UNIT_DETAILS = "/a/unit/d/:Id",
  ADMIN_USER = "/a/user",
  ADMIN_USER_NEW = "/a/user/new",
  ADMIN_USER_DETAILS = "/a/user/d/:Id",
  ADMIN_SUBSCRIPTION = "/a/subscription",
  ADMIN_SUBSCRIPTION_NEW = "/a/subscription/new",
  ADMIN_SUBSCRIPTION_DETAILS = "/a/subscription/d/:Id",
  ADMIN_FEEDBACK = "/a/feedback",
  ADMIN_FEEDBACK_DETAILS = "/a/feedback/d/:id",
  ADMIN_MESSENGER = "/a/messenger/:Id",
  ADMIN_MESSENGER_NEW = "/a/messenger/new",
  ADMIN_REQUEST_ACCESS = "/a/request-access",
  ADMIN_REQUEST_ACCESS_DETAILS = "/a/request-access/d/:Id",
  // CLIENT PAGES
  CLIENT_DASHBOARD = "/c",
  CLIENT_NOTIFICATIONS = "/c/notifications",
  CLIENT_PROFIFLE = "/c/profile/:Id",
  CLIENT_UTILITY = "/c/utility/",
  CLIENT_SETTINGS = "/c/settings",
  CLIENT_HEALTH = "/c/health",
  CLIENT_HEALTH_NEW = "/c/health/new",
  CLIENT_HEALTH_DETAILS = "/c/health/d/:Id",
  CLIENT_APPOINTMENT = "/c/appointment",
  CLIENT_APPOINTMENT_NEW = "/c/appointment/new",
  CLIENT_APPOINTMENT_DETAILS = "/c/appointment/d/:Id",
  CLIENT_MEAL_PLAN = "/c/meal-plan",
  CLIENT_MEAL_PLAN_NEW = "/c/meal-plan/new",
  CLIENT_MEAL_PLAN_DETAILS = "/c/meal-plan/d/:Id",
  CLIENT_SUBSCRIPTION = "/c/susbcription",
  CLIENT_SUBSCRIPTION_NEW = "/c/susbcription/new",
  CLIENT_SUBSCRIPTION_DETAILS = "/subscription/d/:Id",
  CLIENT_REMINDER = "/c/reminder",
  CLIENT_REMIINDER_NEW = "/c/reminder/new",
  CLIENT_REMIINDER_DETAILS = "/c/reminder/d/:Id",
  CLIENT_INGREDIENT = "/c/ingredient",
  CLIENT_INGREDIENT_DETAILS = "/c/ingredient/d/:Id",
  CLIENT_MESSENGER = "/c/messenger/:Id",
  CLIENT_MESSENGER_NEW = "/c/messenger/new",

  // NUTRITIONIST PAGES
  NUTRITIONIST_DASHBOARD = "/n",
  NUTRITIONIST_NOTIFICATIONS = "/n/notifications",
  NUTRITIONIST_PROFIFLE = "/n/profile/:Id",
  NUTRITIONIST_UTILITY = "/n/utility/",
  NUTRITIONIST_SETTINGS = "/n/settings",
  NUTRITIONIST_MEAL = "/n/meal",
  NUTRITIONIST_MEAL_DETAILS = "/n/meal/d/:Id",
  NUTRITIONIST_MEAL_NEW = "/n/meal/new",
  NUTRITIONIST_MEAL_PLAN = "/n/meal-plan",
  NUTRITIONIST_MEAL_PLAN_NEW = "/n/meal-plan/new",
  NUTRITIONIST_MEAL_PLAN_DETAILS = "/n/meal-plan/d/:Id",
  NUTRITIONIST_NUTRITION_FACT = "/n/meal/nutrition-fact",
  NUTRITIONIST_PROFESSION_DETAILS = "/n/profession/:Id",
  NUTRITIONIST_PROFESSION = "/n/profession",
}
