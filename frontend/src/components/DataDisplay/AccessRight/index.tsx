import { Roles, SFC } from "../../../types";
import { memo } from "react";
import { useAuth } from "../../../hooks";

interface AccessControlProps {
  children: React.ReactNode;
  UserRoles?: Roles[];
  OtherCondition?: boolean;
}

const AccessControl: SFC<AccessControlProps> = ({
  children,
  UserRoles = [],
  OtherCondition = true,
}) => {
  const { auth } = useAuth();

  // Allow access if the user is a superuser
  if (auth?.roles === Roles.superuser) return <>{children}</>;

  // Determine if the user's role is allowed
  const userRole = auth?.roles ?? Roles.default;
  const allowed = UserRoles.length > 0 ? UserRoles.includes(userRole) : true;

  // Render children only if allowed and OtherCondition is true
  return <>{allowed && OtherCondition && children}</>;
};

export default memo(AccessControl);
