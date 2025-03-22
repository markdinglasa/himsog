import { SFC } from "../../../types";
import { cn } from "../../../utils";
import Icon from "../../../constants/icon";
import { memo } from "react";

interface ActivatedProfessionalProps {
  IsActivated: boolean;
  Remarks: string | null;
}
export const ActivatedProfessional: SFC<ActivatedProfessionalProps> = ({
  ClassName,
  IsActivated = false,
  Remarks = null,
}) => {
  return (
    <div
      className={cn("w-full border rounded-lg bg-white p-[1rem]", ClassName)}
    >
      <div className="w-full">
        <div className="flex flex-col ">
          <span className="text-lg font-medium">Account Status</span>
          <span className="text-sm text-slate-600">
            Your current account status and verification.
          </span>
        </div>
        <div className="flex flex-row w-full justify-between items-center">
          <div className="flex flex-col py-3">
            <span className="text-sm font-medium">Account Verification</span>
            <span className="text-sm text-slate-600">Your current status</span>
          </div>
          <div className="flex items-center">
            {IsActivated ? (
              <span className="px-3 flex items-center justify-center rounded-full bg-green-100 border border-green-400">
                <Icon.CheckCircle className="text-green-500" fontSize="small" />{" "}
                <span className="text-green-500 ml-2">Active</span>
              </span>
            ) : (
              <span className="px-3 flex items-center justify-center rounded-full bg-red-100 border border-red-400">
                <Icon.Close className="text-red-500" fontSize="small" />{" "}
                <span className="text-red-500 ml-2">Inactive</span>
              </span>
            )}
          </div>
        </div>
        <div className="flex flex-row w-full justify-between items-center ">
          {IsActivated ? (
            <div className="w-full flex flex-row border border-green-400 bg-green-100 p-3 rounded-lg">
              <div className="p-3">
                <Icon.CheckCircle className="text-green-500" />
              </div>
              <div className="w-full flex flex-col">
                <span className="text-md text-green-500 font-medium">
                  Account Verification
                </span>
                <span className="text-sm text-green-500">
                  Your account is verified. You have full access to all
                  features.
                </span>
              </div>
            </div>
          ) : (
            <div className="w-full flex flex-row border border-red-400 bg-red-100 p-3 rounded-lg">
              <div className="p-3">
                <Icon.Close className="text-red-500" />
              </div>
              <div className="w-full flex flex-col">
                <span className="text-md text-red-500">
                  Account Verification
                </span>
                <span className="text-sm text-red-500">
                  Your account is unverified. You have limited access.
                </span>
              </div>
            </div>
          )}
        </div>
        {Remarks && (
          <div className="w-full bg-blue-100 p-3 flex flex-col rounded-lg border border-blue-400 mt-[1rem]">
            <span className="text-md font-medium text-blue-500">Remarks</span>
            <span className="text-sm  text-blue-500">{Remarks ?? ""}</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default memo(ActivatedProfessional);
