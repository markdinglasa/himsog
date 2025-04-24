import { memo } from "react";
import { SFC } from "../../../../../types";
import { cn } from "../../../../../utils";

export const UserReportPage: SFC = ({ ClassName }) => {
  return (
    <>
      <div className={cn("w-full", ClassName)}>
        <div></div>
      </div>
    </>
  );
};
export default memo(UserReportPage);
