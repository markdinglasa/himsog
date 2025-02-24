export * from "./Appointment";
export * from "./Health";
export * from "./Ingredient";
export * from "./MealPlan";
export * from "./Profile";
export * from "./Reminder";
export * from "./Subscription";
export * from "./Notification";

import Dashboard from "./Dashboard";
import Appointment from "./Appointment";
import Ingredient from "./Ingredient";
import Health from "./Health";
import MealPlan from "./MealPlan";
import Profile from "./Profile";
import Reminder from "./Reminder";
import Subscription from "./Subscription";
import Notification from "./Notification";

const Client = {
  Dashboard,
  Appointment,
  Ingredient,
  Health,
  MealPlan,
  Profile,
  Reminder,
  Subscription,
  Notification,
};

export default Client;
