import { Roles, ToastType } from "../types";
import { displayToast } from "./toast";

export const renderPath = (role: Roles) => {
  try {
    switch (role) {
      case Roles.admin:
        return "a";
      default:
        return "/ndx";
    }
  } catch (error: any) {
    displayToast(error.message, ToastType.error);
  }
};
