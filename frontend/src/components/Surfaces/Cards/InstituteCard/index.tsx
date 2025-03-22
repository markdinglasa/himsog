import { ProfessionProps, SFC } from "../../../../types";
import { cn, formatDateToYYMMDD } from "../../../../utils";
import { memo } from "react";
import { MoreOption } from "../../DropDown";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
export const InstituteCard: SFC<ProfessionProps> = ({
  ClassName,
  Data,
  OnEdit,
  OnDelete,
}) => {
  return (
    <div
      className={cn(
        "w-full rounded-md border border-slate-300 p-[1rem]",
        ClassName,
      )}
    >
      <div className="w-full flex flex-row">
        <div className="flex items-start justify-center ">
          <div className="rounded-md border bg-green-100 border-green-400 flex items-center justify-center w-12 h-12">
            <AccountBalanceIcon className="text-green-400" fontSize="small" />
          </div>
        </div>
        <div className="w-full flex items-start justify-start ml-[1rem]">
          <div className="w-full flex flex-row justify-between">
            <div className="w-full flex items-start flex-col">
              <span className="text-lg font-medium">{Data?.Name ?? ""}</span>
              <span className="text-sm text-slate-600">
                Position: {Data?.Position ?? ""}
              </span>
              <span className="text-sm text-slate-600">
                Address: {Data?.Address ?? ""}
              </span>
              <span className="text-sm text-slate-600">
                {formatDateToYYMMDD(Data?.DateStarted ?? "") ?? ""}
                {"-"}
                {Data.IsCurrentWork
                  ? "Present"
                  : (formatDateToYYMMDD(Data?.DateEnded ?? "") ?? "")}
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

export default memo(InstituteCard);
