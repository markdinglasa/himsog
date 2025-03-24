import { memo } from "react";
import { SFC } from "../../../../types";
import { cn } from "../../../../utils";
import { Avatar } from "@mui/material";

export const ChatBoxPanel: SFC = ({ ClassName }) => {
  return (
    <div
      className={cn(
        "w-full md:w-8/12 border border-slate-300 rounded-md p-[1rem] flex flex-col h-[calc(100vh-195px)] bg-white",
        ClassName,
      )}
    >
      <div className="border-b w-full flex flex-row ">
        <div className="flex flex-row gap-3 items-center justify-center w-fit px-3 p-2 rounded-md duration-300 ease-in-out">
          <Avatar />
          <div className="flex flex-col">
            <span className="text-sm font-medium">Name</span>
            <span className="text-sm ">Role</span>
          </div>
        </div>
      </div>
      <div className="w-full h-full border">Messges</div>
      <div className="w-full h-fit border">Message Input</div>
    </div>
  );
};

export default memo(ChatBoxPanel);
