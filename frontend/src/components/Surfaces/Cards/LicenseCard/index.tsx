import { ProfessionProps, SFC } from "../../../../types";
import { cn, formatDateToYYMMDD } from "../../../../utils";
import Icon from "@mdi/react";
import { mdiSeal } from "@mdi/js";
import { memo } from "react";
import { MoreOption } from "../../DropDown";
import { useToggle } from "../../../../hooks";
import { CustomModal } from "../../../../modals";

export const LicenseCard: SFC<ProfessionProps> = ({
  ClassName,
  Data,
  OnEdit,
  OnDelete,
}) => {
  const [isDisplay, toggleDisplay] = useToggle(false);
  return (
    <div>
      <div
        onClick={toggleDisplay}
        className={cn(
          "w-full rounded-md border border-slate-300 p-[1rem] cursor-pointer hover:bg-slate-100/60 duration-300 ease-in-out",
          ClassName,
        )}
      >
        <div className="w-full flex flex-row">
          <div className="flex items-start justify-center ">
            <div className="rounded-md border bg-green-100 border-green-400 flex items-center justify-center w-12 h-12">
              <Icon path={mdiSeal} size={1} className="text-green-400" />
            </div>
          </div>
          <div className="w-full flex items-start justify-start ml-[1rem]">
            <div className="w-full flex flex-row justify-between">
              <div className="w-full flex items-start flex-col">
                <span className="text-lg font-medium">{Data?.Title ?? ""}</span>
                <span className="text-sm text-slate-600">
                  License: {Data?.LicenseNumber ?? ""}
                </span>
                <span className="text-sm text-slate-600">
                  Issued By: {Data?.Issuer ?? ""}
                </span>
                <span className="text-sm text-slate-600">
                  Date Issued:{" "}
                  {formatDateToYYMMDD(Data?.DateIssued ?? "") ?? ""}
                </span>
                <span className="text-sm text-slate-600">
                  Expiry Date:{" "}
                  {formatDateToYYMMDD(Data?.DateExpired ?? "") ?? ""}
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
      <CustomModal
        close={toggleDisplay}
        title="Professional License"
        open={isDisplay}
        ClassName="w-full  h-fit "
      >
        <div className="w-full flex items-center justify-center h-full min-w-[40rem] min-h-[20rem]">
          {Data?.Document && (
            <img
              alt="Document"
              src={Data?.Document}
              className="object-cover w-full h-full"
            />
          )}
        </div>
      </CustomModal>
    </div>
  );
};

export default memo(LicenseCard);
