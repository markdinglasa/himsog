import { Roles } from "../types";

export const renderRole = (Role: Roles) => {
  switch (Role) {
    case Roles.admin:
      return "Administrator";
    case Roles.client:
      return "Health Advocate";
    case Roles.nutritionist:
      return "Health Professional";
    default:
      return "NA";
  }
};
