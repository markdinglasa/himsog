import { memo } from "react";
import { SFC } from "../../../types";
import { cn } from "../../../utils";

export const Convos: SFC = ({ ClassName }) => {
  return (
    <>
      <div className={cn("w-full", ClassName)}>user convos here</div>
    </>
  );
};
export default memo(Convos);
