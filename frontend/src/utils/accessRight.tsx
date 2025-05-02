import { useAuth } from "../hooks";
import { Roles, ToastType } from "../types";
import { displayToast } from "./toast";

export function hasAccessRight(_AccessRights: number[] = []): boolean {
  try {
    const { auth } = useAuth();
    if (auth.roles === Roles.superuser) {
      return true;
    }
    /*const allowed = Array.isArray(auth.accessRights)
      ? auth.accessRights.some((rights) => AccessRights.includes(rights))
      : auth.accessRights !== undefined &&
        AccessRights.includes(auth.accessRights);
    return allowed;*/
    return false;
  } catch (error: any) {
    displayToast(error.message, ToastType.error);
    return false;
  }
}
