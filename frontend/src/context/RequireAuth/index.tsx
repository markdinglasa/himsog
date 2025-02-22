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

  //CHECK USER ACCOUNT BUSINESSTYPE
  // if RETAIL, RESTUARANT, HOTEL, SERVICES
  // Each Bussiness type has different UI/UX redirection
  const userHasAccess = true; // for now set it as true, modify this soon

  const allowed = Array.isArray(roles)
    ? roles.some((role) => allowedRoles.includes(role))
    : allowedRoles.includes(roles as Roles);
  console.log("[RequireAuth] Allowed Role:", allowed);

  useEffect(() => {
    const checkToken = () => {
      if (!auth?.accessToken || auth?.accessToken === null) reSignOut();
    };
    checkToken();
  });

  return userHasAccess ? (
    <Outlet />
  ) : auth?.accessToken ? (
    <Navigate to="/unauthorized" state={{ from: location }} replace />
  ) : (
    <Navigate to="/" state={{ from: location }} replace />
  );
};
