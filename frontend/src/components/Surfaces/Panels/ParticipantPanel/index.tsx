import { memo } from "react";
import { SFC } from "../../../../types";
import { cn } from "../../../../utils";
import { CustomInput } from "../../../Inputs";
import SearchIcon from "@mui/icons-material/Search";
import Card from "../../Cards";
import API from "../../../../hooks/api";

export const ParticipantPanel: SFC = ({ ClassName }) => {
  return (
    <div
      className={cn(
        "w-full md:w-4/12 border border-slate-300 rounded-md p-[1rem] flex flex-col h-[calc(100vh-195px)] bg-white",
        ClassName,
      )}
    >
      <div className="header ">
        <span className="w-full text-lg font-medium">Chat with advocates</span>
      </div>
      <div className="mb-2">
        <CustomInput
          name="Search"
          leftIcon={<SearchIcon className="mr-2 text-slate-500/80" />}
          placeholder="Search Advocate"
          ClassName="rounded-md"
        />
      </div>
      <div className="flex flex-col gap-2 items-start justify-start h-full overflow-auto">
        <Card.Participant
          Photo={null}
          Name={"Juan Dela Cruz"}
          LastMessage="The time you forgot"
          LastMessageDate={"2025-01-01"}
          IsRead={false}
          OnClick={() => alert("new message")}
          Id="1"
        />
      </div>
    </div>
  );
};

export default memo(ParticipantPanel);
