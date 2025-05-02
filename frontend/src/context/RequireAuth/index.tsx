import { useLocation, Navigate, Outlet } from "react-router-dom";
import { useAuth, useSignOut } from "../../hooks";
import { Roles, SFC } from "../../types";
import { useEffect } from "react";

interface RequireAuthProps {
  allowedRoles: Array<Roles>;
}

export const RequireAuth: SFC<RequireAuthProps> = ({ allowedRoles }) => {
  const { auth } = useAuth();
  const location = useLocation();
  const roles = auth?.roles;
  const { reSignOut } = useSignOut();

  const allowed = Array.isArray(roles)
    ? roles.some((role) => allowedRoles.includes(role))
    : allowedRoles.includes(roles as Roles);

  useEffect(() => {
    const checkToken = () => {
      if (!auth?.accessToken || auth?.accessToken === null) reSignOut();
    };
    checkToken();
  });

  return allowed ? (
    <Outlet />
  ) : auth?.accessToken ? (
    <Navigate to="/unauthorized" state={{ from: location }} replace />
  ) : (
    <Navigate to="/" state={{ from: location }} replace />
  );
};
