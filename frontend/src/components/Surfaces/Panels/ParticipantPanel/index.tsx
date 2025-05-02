import { Fragment, memo, Suspense } from "react";
import {
  Chat,
  Convo,
  FormProps,
  Roles,
  SFC,
  UserRole,
} from "../../../../types";
import { cn, renderPath } from "../../../../utils";

import SearchIcon from "@mui/icons-material/Search";
import Card from "../../Cards";
import { Autocomplete, Avatar, TextField } from "@mui/material";
import API from "../../../../hooks/api";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../../hooks";
import { NoRecord } from "../../../DataDisplay";
import { Skeleton } from "../../../Feedback";

export const ParticipantPanel: SFC<FormProps> = ({
  ClassName,
  IsAdvocate = false,
}) => {
  const navigate = useNavigate();
  const { auth } = useAuth();
  const path = renderPath(auth?.roles as Roles);

  const { data: nutritionists } = API.Setup.User.GetAllByRole(
    UserRole.NUTRITIONIST,
    "",
    "all",
    1,
  );
  const { data: advocates } = API.Setup.User.GetAllByRole(
    UserRole.CLIENT,
    "",
    "all",
    1,
  );
  const { add: addNewContact } = API.Messenger.Chat.Add();
  const {
    data: convos,
    isLoading,
    refetch,
  } = API.Messenger.Convo.GetAllByUser(
    Number(auth?.user ?? 0),
    Number(IsAdvocate),
  );

  const { markAsRead } = API.Messenger.Convo.MarkAsRead();
  return (
    <div
      className={cn(
        "w-full md:w-4/12 border  rounded-md p-[1rem] flex flex-col md:h-[calc(100vh-195px)] bg-white",
        ClassName,
      )}
    >
      <div className="header mb-2">
        <span className="w-full text-lg font-medium">
          Chat with {IsAdvocate ? "Health Professionals" : "Advocates"}
        </span>
      </div>
      <div className="mb-2">
        <Autocomplete
          id="free-solo-demo"
          freeSolo
          size="small"
          options={(IsAdvocate ? nutritionists : advocates || [])?.map(
            (option: any) => ({
              Id: option.Id,
              Fullname: option.Fullname,
              ProfilePhoto: option.ProfilePhoto,
            }),
          )}
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
            const newContact: Chat = {
              AdvocateId: IsAdvocate ? auth?.user : value?.Id,
              NutritionistId: IsAdvocate ? value?.Id : auth?.user,
            };

            const record = convos.find(
              (record: Convo) => record.UserId === value?.Id,
            ); // if true then redirect else add new contacty;
            if (record) {
              navigate(`${path}/messenger/${record.ChatId}`);
            } else {
              addNewContact(newContact);
              refetch();
            }
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
        <Suspense fallback={<Skeleton />}>
          {isLoading ? (
            <Skeleton />
          ) : convos?.length > 0 ? (
            convos.map((record: Convo, index: number) => {
              return (
                <Fragment key={index}>
                  <Card.Participant
                    Photo={record?.Photo ?? null}
                    Name={record.Name}
                    LastMessage={record.LastMessage}
                    LastMessageDate={String(record?.DateUpdated ?? new Date())}
                    IsRead={Number(record?.Unread ?? 0) === 0}
                    OnClick={() => {
                      // alert(`ConvoId:${record.Id}`);
                      markAsRead(Number(record?.Id));
                      navigate(`${path}/messenger/${record?.ChatId ?? 0}`);
                    }}
                    ChatId={Number(record?.ChatId ?? 0)}
                    Id={String(record?.Id ?? 0)}
                  />
                </Fragment>
              );
            })
          ) : (
            <NoRecord Message={"No Conversations"} />
          )}
        </Suspense>
      </div>
    </div>
  );
};

export default memo(ParticipantPanel);
