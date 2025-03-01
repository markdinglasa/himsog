import { SFC } from "../../../types";
import { memo, ReactNode } from "react";
import { hasAccessRight } from "../../../utils";
interface AccessRightProps {
  children: ReactNode;
  AccessRightId?: number[];
  OtherCondition?: boolean;
}
const AccessControl: SFC<AccessRightProps> = ({
  children,
  AccessRightId = [],
  OtherCondition = true,
}) => {
  const allowed =
    AccessRightId.length > 0 ? hasAccessRight(AccessRightId) : true;
  return <>{allowed && OtherCondition && children}</>;
};
export default memo(AccessControl);
