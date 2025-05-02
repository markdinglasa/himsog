import { Roles, ToastType } from "../types";
import { displayToast } from "./toast";

export const renderPath = (role: Roles) => {
  try {
    switch (role) {
      case Roles.superuser:
      case Roles.admin:
        return "/a";
      case Roles.client:
        return "/c";
      case Roles.nutritionist:
        return "/n";
      default:
        return "/";
    }
  } catch (error: any) {
    displayToast(error.message, ToastType.error);
    return "/";
  }
};
