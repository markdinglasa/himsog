import { mdiChevronRight } from "@mdi/js";
import { SFC } from "../../../types";
import MdiIcon from "@mdi/react";

export interface SettingMenuProps {
  Icon: string;
  Label: string;
  OnClick?: any;
}

export const SettingMenu: SFC<SettingMenuProps> = ({
  Icon,
  Label,
  OnClick,
}) => {
  return (
    <div
      onClick={OnClick}
      className="w-full p-2 rounded-md flex flex-row gap-2 items-center cursor-pointer hover:bg-slate-100"
    >
      <MdiIcon path={Icon} size="30px" className="text-primary" />
      <span className="w-full">{Label}</span>
      <MdiIcon path={mdiChevronRight} size="30px" className="text-primary" />
    </div>
  );
};
