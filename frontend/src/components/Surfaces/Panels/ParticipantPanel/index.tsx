import { memo, useState } from "react";
import { FormProps, SFC, UserRole } from "../../../../types";
import { cn } from "../../../../utils";

import SearchIcon from "@mui/icons-material/Search";
import Card from "../../Cards";
import { Autocomplete, Avatar, TextField } from "@mui/material";
import API from "../../../../hooks/api";

export const ParticipantPanel: SFC<FormProps> = ({
  ClassName,
  IsAdvocate = false,
}) => {
  const { data: nutritionists } = API.Setup.User.GetAllByRole(
    UserRole.NUTRITIONIST,
    "",
    "all",
    1,
  );

  const [userId, setUserId] = useState<number>();
  console.log("userId:", userId);
  return (
    <div
      className={cn(
        "w-full md:w-4/12 border border-slate-300 rounded-md p-[1rem] flex flex-col h-[calc(100vh-195px)] bg-white",
        ClassName,
      )}
    >
      <div className="header mb-2">
        <span className="w-full text-lg font-medium">Chat with advocates</span>
      </div>
      <div className="mb-2">
        <Autocomplete
          id="free-solo-demo"
          freeSolo
          size="small"
          options={(nutritionists || []).map((option: any) => ({
            Id: option.Id,
            Fullname: option.Fullname,
            ProfilePhoto: option.ProfilePhoto,
          }))}
          getOptionLabel={(option: any) => option["Fullname"]}
          renderOption={(props, option: any) => (
            <li {...props} key={option.Id}>
              <div className="flex flex-row gap-2 items-center">
                <Avatar src={option.ProfilePhoto ?? ""} />
                <span>{option.Fullname}</span>
              </div>
            </li>
          )}
          onChange={(_: any, value: any) => {
            setUserId(value?.Id);
          }}
          renderInput={(params) => (
            <TextField
              color="success"
              {...params}
              InputProps={{
                ...params.InputProps,
                startAdornment: (
                  <>
                    <SearchIcon className="mr-2 text-slate-500/80 rounded-full ml-2 " />
                    {params.InputProps.startAdornment}
                  </>
                ),
              }}
              placeholder={
                IsAdvocate ? "Search Health Professionals" : "Search Advocates"
              }
            />
          )}
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
