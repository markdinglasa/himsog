import { memo } from "react";
import { SFC } from "../../../../../types";
import { cn } from "../../../../../utils";

export const SubscriptionReportPage: SFC = ({ ClassName }) => {
  return (
    <>
      <div className={cn("w-full", ClassName)}>
        <div></div>
      </div>
    </>
  );
};
export default memo(SubscriptionReportPage);
