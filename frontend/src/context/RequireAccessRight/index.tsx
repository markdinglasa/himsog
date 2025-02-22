/*import { useLocation, Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../../hooks";
import { Roles, SFC } from "../../types";

interface RequireAccessRightProps {
  accessRightId: Array<number>;
}

export const RequireAccessRight: SFC<RequireAccessRightProps> = ({
  accessRightId,
}) => {
  const { auth } = useAuth();
  const location = useLocation();
  const userRole = auth?.roles ?? "NA";
  const accessRights = auth?.accessRights;

  const userHasAccess =
    userRole === Roles.superuser
      ? true
      : Array.isArray(accessRightId)
        ? accessRightId.some(
            (rights) => accessRights?.includes(rights) ?? false,
          )
        : (accessRights?.includes(accessRightId) ?? false);

  return userHasAccess ? (
    <Outlet />
  ) : auth?.accessToken ? (
    <Navigate to="/unauthorized" state={{ from: location }} replace />
  ) : (
    <Navigate to="/" state={{ from: location }} replace />
  );
};*/
