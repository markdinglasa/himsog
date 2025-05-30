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
  EVENT_NEW = "/event/new/:token", // pass access right as a route parameter
  ARTICLE = "/health-article",
  ARTICLE_DETAILS = "/health-article/d/:Id",
  ARTICLE_NEW = "/health-article/new/:token", // pass access right to params
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
  ADMIN_PRIVACY_POLICY = "/a/privacy-policy",
  ADMIN_TERMS_AND_CONDITION = "/a/terms-and-conditions",
  ADMIN_EVENT = "/a/event",
  ADMIN_EVENT_DETAILS = "/a/event/d/:Id",
  ADMIN_ARTICLE = "/a/health-article",
  ADMIN_ARTICLE_DETAILS = "/a/health-article/d/:Id",
  ADMIN_UNIT = "/a/unit",
  ADMIN_UNIT_NEW = "/a/unit/new",
  ADMIN_UNIT_DETAILS = "/a/unit/d/:Id",
  ADMIN_USER = "/a/user",
  ADMIN_USER_NEW = "/a/user/new",
  ADMIN_USER_DETAILS = "/a/user/d/:Id",
  ADMIN_SUBSCRIPTION = "/a/subscription",
  ADMIN_SUBSCRIPTION_NEW = "/a/subscription/new",
  ADMIN_SUBSCRIPTION_DETAILS = "/a/subscription/d/:Id",
  ADMIN_MEAL_PLAN = "/a/mea-plans",
  ADMIN_MEAL_PLAN_DETAILS = "/a/mea-plans/d/:Id",
  ADMIN_FEEDBACK = "/a/feedback",
  ADMIN_FEEDBACK_DETAILS = "/a/feedback/d/:id",
  ADMIN_MESSENGER = "/a/messenger/:Id",
  ADMIN_MESSENGER_NEW = "/a/messenger/new",
  ADMIN_REQUEST_ACCESS = "/a/request-access",
  ADMIN_REQUEST_ACCESS_DETAILS = "/a/request-access/d/:Id",
  ADMIN_REPORT_SUBSCRIPTION = "/a/report/subscription",
  ADMIN_REPORT_USER = "/a/report/user",
  // CLIENT PAGES
  CLIENT_DASHBOARD = "/c",
  CLIENT_TERMS_AND_CONDITIONS = "/c/terms-and-conditions",
  CLIENT_PRIVACY_POLICY = "/c/privacy-policy",
  CLIENT_PROFILE_SETUP = "/c/setup-profile",
  CLIENT_HEALTH_SETUP = "/c/setup-health",
  CLIENT_DIETERY_PREFERENCE_SETUP = "/c/setup-dietery-preference",
  CLIENT_ALLERGEN_SETUP = "/c/setup-allergen",
  CLIENT_NOTIFICATIONS = "/c/notifications",
  CLIENT_PROFIFLE = "/c/profile/:Id",
  CLIENT_UTILITY = "/c/utility/",
  CLIENT_SETTINGS = "/c/settings",
  CLIENT_EVENT = "/c/event",
  CLIENT_EVENT_NEW = "/c/event/new",
  CLIENT_EVENT_DETAILS = "/c/event/d/:Id",

  CLIENT_ARTICLE = "/c/health-article",
  CLIENT_ARTICLE_NEW = "/c/health-article/new",
  CLIENT_ARTICLE_DETAILS = "/c/health-article/d/:Id",
  CLIENT_HEALTH = "/c/health",
  CLIENT_HEALTH_NEW = "/c/health/new",
  CLIENT_HEALTH_DETAILS = "/c/health/d/:Id",
  CLIENT_APPOINTMENT = "/c/appointment",
  CLIENT_APPOINTMENT_NEW = "/c/appointment/new",
  CLIENT_APPOINTMENT_DETAILS = "/c/appointment/d/:Id",
  CLIENT_MEAL_PLAN = "/c/meal-plan",
  CLIENT_MEAL_PLAN_NEW = "/c/meal-plan/new",
  CLIENT_MEAL_PLAN_DETAILS = "/c/meal-plan/d/:Id",
  CLIENT_MEAL_PLAN_PAYMENT = "/c/meal-plan/p/:Id",
  CLIENT_SUBSCRIPTION = "/c/susbcription",
  CLIENT_SUBSCRIPTION_NEW = "/c/susbcription/new",
  CLIENT_SUBSCRIPTION_DETAILS = "/c/subscription/:Id",
  CLIENT_REMINDER = "/c/reminder",
  CLIENT_REMIINDER_NEW = "/c/reminder/new",
  CLIENT_REMIINDER_DETAILS = "/c/reminder/d/:Id",
  CLIENT_INGREDIENT = "/c/ingredient",
  CLIENT_INGREDIENT_DETAILS = "/c/ingredient/d/:Id",
  CLIENT_MESSENGER = "/c/messenger/:Id",
  CLIENT_MESSENGER_NEW = "/c/messenger/new",
  CLIENT_PRESET_MEAL_PLAN = "/c/meal-plan",
  CLIENT_PRESET_MEAL_PLAN_DETAILS = "/c/meal-plan/d/:Id",
  CLIENT_PRESET_MEAL_PLAN_PAYMENT = "/c/meal-plan/p/:Id",
  CLIENT_REQUEST_MEAL_PLAN = "/c/request",
  CLIENT_REQUEST_MEAL_PLAN_NEW = "/c/request/new",
  CLIENT_REQUEST_MEAL_PLAN_DETAILS = "/c/request/d/:Id",
  CLIENT_MY_MEAL_PLAN = "/c/u/meal-plan",
  CLIENT_MY_MEAL_PLAN_DETAILS = "/c/u/meal-plan/d/:Id",
  // NUTRITIONIST PAGES
  NUTRITIONIST_ON_HOLD = "/n/hold",
  NUTRITIONIST_DASHBOARD = "/n",
  NUTRITIONIST_PRIVACY_POLICY = "/n/privacy-policy",
  NUTRITIONIST_TERMS_AND_CONDITIONS = "/n/terms-and-conditions",
  NUTRITIONIST_NOTIFICATIONS = "/n/notifications",
  NUTRITIONIST_PROFILE_SETUP = "/n/setup-profile",
  NUTRITIONIST_PROFESSION_SETUP = "/n/setup-profession",
  NUTRITIONIST_CERTIFICATE_SETUP = "/n/setup-certificate",
  NUTRITIONIST_PROFILE = "/n/profile/:Id",
  NUTRITIONIST_UTILITY = "/n/utility/",
  NUTRITIONIST_SETTINGS = "/n/settings",
  NUTRITIONIST_MEAL = "/n/meal",
  NUTRITIONIST_MEAL_DETAILS = "/n/meal/d/:Id",
  NUTRITIONIST_MEAL_NEW = "/n/meal/new",
  NUTRITIONIST_MEAL_NEW_DETAILS = "/n/meal/new/:Id",
  NUTRITIONIST_MEAL_PLAN = "/n/meal-plan",
  NUTRITIONIST_MEAL_PLAN_NEW = "/n/meal-plan/new",
  NUTRITIONIST_MEAL_PLAN_NEW_DETAILS = "/n/meal-plan/new/:Id",
  NUTRITIONIST_MEAL_PLAN_PAYMENT = "/n/meal-plan/payments",
  NUTRITIONIST_MEAL_PLAN_PAYMENT_DETAILS = "/n/meal-plan/payments/:Id",
  NUTRITIONIST_MEAL_PLAN_REQUEST = "/n/meal-plan-request",
  NUTRITIONIST_MEAL_PLAN_REQUEST_NEW = "/n/meal-plan-request/new",
  NUTRITIONIST_MEAL_PLAN_REQUEST_DETAILS = "/n/meal-plan-request/d/:Id",
  NUTRITIONIST_MEAL_PLAN_DETAILS = "/n/meal-plan/d/:Id",
  NUTRITIONIST_NUTRITION_FACT = "/n/meal/nutrition-fact",
  NUTRITIONIST_PROFESSION_DETAILS = "/n/profession/:Id",
  NUTRITIONIST_PROFESSION = "/n/profession",
  NUTRITIONIST_RECIPE = "/n/recipe",
  NUTRITIONIST_RECIPE_NEW = "/n/recipe/new",
  NUTRITIONIST_RECIPE_DETAILS = "/n/recipe/d/:Id",
  NUTRITIONIST_APPOINTMENT = "/n/appointment",
  NUTRITIONIST_APPOINTMENT_NEW = "/n/appointment/new",
  NUTRITIONIST_APPOINTMENT_DETAILS = "/n/appointment/d/:Id",
  NUTRITIONIST_SUBSCRIPTION = "/n/subscription",
  NUTRITIONIST_SUBSCRIPTION_NEW = "/n/subscription/new",
  NUTRITIONIST_SUBSCRIPTION_DETAILS = "/n/subscription/:Id",
  NUTRITIONIST_INGREDIENT = "/n/ingredient",
  NUTRITIONIST_INGREDIENT_NEW = "/n/ingredient/new",
  NUTRITIONIST_INGREDIENT_DETAILS = "/n/ingredient/d/:Id",
  NUTRITIONIST_ARTICLE = "/n/health-article",
  NUTRITIONIST_ARTICLE_NEW = "/n/health-article/new",
  NUTRITIONIST_ARTICLE_DETAILS = "/n/health-article/d/:Id",
  NUTRITIONIST_EVENT = "/n/event",
  NUTRITIONIST_EVENT_NEW = "/n/event/new",
  NUTRITIONIST_EVENT_DETAILS = "/n/event/d/:Id",
  NUTRITIONIST_MESSENGER = "/n/messenger/:Id",
  NUTRITIONIST_MESSENGER_NEW = "/n/messenger/new",
  NUTRITIONIST_REQUEST = "/n/request",
  NUTRITIONIST_REQUEST_DETAILS = "/n/request/d/:Id",
}
