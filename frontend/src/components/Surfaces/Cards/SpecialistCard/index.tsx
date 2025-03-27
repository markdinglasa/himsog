import { ProfessionProps, SFC } from "../../../../types";
import { cn } from "../../../../utils";
import { memo } from "react";
import { MoreOption } from "../../DropDown";
import Icon from "@mdi/react";
import { mdiLinkVariant } from "@mdi/js";

export const SpecialistCard: SFC<ProfessionProps> = ({
  ClassName,
  Data,
  OnEdit,
  OnDelete,
}) => {
  return (
    <div
      className={cn(
        "w-full rounded-md border border-slate-300 p-[1rem] hover:bg-slate-100/60 duration-300 ease-in-out",
        ClassName,
      )}
    >
      <div className="w-full flex flex-row">
        <div className="flex items-start justify-center ">
          <div className="rounded-md border bg-green-100 border-green-400 flex items-center justify-center w-12 h-12">
            <Icon path={mdiLinkVariant} size={1} className="text-green-400" />
          </div>
        </div>
        <div className="w-full flex items-start justify-start ml-[1rem]">
          <div className="w-full flex flex-row justify-between">
            <div className="w-full flex items-start flex-col">
              <span className="text-lg font-medium">{Data?.Title ?? ""}</span>
              <span className="text-sm text-slate-600">
                {Data?.Description ?? ""}
              </span>
              <span className="text-sm text-slate-600">
                {parseFloat(Data?.Experience) ?? ""} years of experience
              </span>
            </div>
            <MoreOption
              ClassName="relative text-primary"
              DeleteOnClick={(e: any) => {
                e.stopPropagation();
                OnDelete();
              }}
              EditOnClick={(e: any) => {
                e.stopPropagation();
                OnEdit();
              }}
              IconColor={"text-primary"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(SpecialistCard);
