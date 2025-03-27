import { SFC } from "../../../types";
import { cn } from "../../../utils";

export const Events: SFC = ({ ClassName }) => {
  return <div className={cn("w-full", ClassName)}></div>;
};
