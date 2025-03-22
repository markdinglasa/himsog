import { ProfessionProps, SFC } from "../../../../types";
import { cn } from "../../../../utils";
import Icon from "@mdi/react";
import { mdiSeal } from "@mdi/js";
import { memo } from "react";

export const LicenseCard: SFC<ProfessionProps> = ({
  ClassName,
  Data,
  OnEdit,
  OnDelete,
}) => {
  return (
    <div className={cn("w-full rounded-md", ClassName)}>
      <div className="w-full flex flex-row">
        <div>
          <div className="rounded-md border border-green-400 flex items-center justify-center">
            <Icon path={mdiSeal} size={1} className="text-green-400" />
          </div>
        </div>
        <div className="w-full flex items-start justify-start"> </div>
      </div>
    </div>
  );
};

export default memo(LicenseCard);
