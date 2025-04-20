import { Avatar } from "@mui/material";
import {
  ButtonType,
  ProfessionSpecialistTable,
  RouteChannel,
  SFC,
  UserTable,
} from "../../../../types";
import { cn } from "../../../../utils";
import API from "../../../../hooks/api";
import { Skeleton } from "../../../Feedback";
import { Fragment } from "react/jsx-runtime";
import { NoRecord } from "../../../DataDisplay";
import { memo } from "react";
import { useNavigate } from "react-router-dom";
import { CircleButton, CustomButton } from "../../../Inputs";
import Icon from "../../../../constants/icon";

export interface ProfessionalCardProps {
  Data: UserTable;
}
export const ProfessionalCard: SFC<ProfessionalCardProps> = ({
  ClassName,
  Data,
}) => {
  const { data: specialist, isLoading } = API.Setup.ProfessionSpecialist.GetAll(
    Number(Data?.Id ?? 0),
  );
  const navigate = useNavigate();
  const expertise = () => {
    if (isLoading) return <Skeleton />;
    return (
      <>
        {specialist && specialist?.length > 0 ? (
          <>
            <div className="w-full flex flex-wrap gap-2 ">
              {specialist.map((record: ProfessionSpecialistTable) => {
                return (
                  <Fragment key={record?.Id?.toString()}>
                    <span className="text-sm border rounded-lg p-2 hover:bg-slate-100/60 duration-300 ease-in-out">
                      {record?.Title ?? "NA"}
                    </span>
                  </Fragment>
                );
              })}
            </div>
          </>
        ) : (
          <div className="w-full flex items-center justify-center h-[calc(100vh-18rem)]">
            <NoRecord Message="No Expertise" />
          </div>
        )}
      </>
    );
  };

  return (
    <div
      onClick={(e) => {
        e.stopPropagation();
        navigate(
          RouteChannel.CLIENT_PROFIFLE.replace(":Id", String(Data?.Id ?? 0)),
        );
      }}
      className={cn(
        "border w-full rounded-md hover:shadow-md h-fit p-[1rem] cursor-pointer hover:shadow-md",
        ClassName,
      )}
    >
      <div className="flex items-center justify-start ">
        <Avatar
          src={Data?.ProfilePhoto ?? ""}
          alt={Data?.Fullname ?? "NA"}
          sx={{
            width: "4rem",
            height: "4rem",
          }}
        />
        <div className="w-full  flex flex-col ml-3">
          <span className="text-md font-medium">{Data?.Fullname ?? "NA"}</span>
          <span className="text-sm text-slate-600">{Data?.Email ?? "NA"}</span>
        </div>
        <div>
          <CircleButton
            Title="Message"
            Icon={<Icon.Send className="text-primary" />}
            Type={ButtonType.button}
            OnClick={() => {
              // creates new contact if not yet connected else would redirect to messenger with Id
              // check contacts if contact exists if not then create new contact then redirect
              // if already exists in contacts then redirect to messenger with the Id
            }}
          />
        </div>
      </div>
      <div className="w-full flex items-start justify-center py-2 h-fit ">
        {expertise()}
      </div>
      {/* displays at the bottom of the card */}
      <div className="w-full relative bottom-0">
        <div className="flex items-center justify-between bottom-0">
          <div className="flex items-center justify-start">
            <CustomButton
              type={ButtonType.button}
              onClick={(e) => {
                e.stopPropagation();
              }}
              text="Request"
            />
          </div>
          <div>
            <div className="flex items-center justify-end">
              <Icon.Star className="text-primary" fontSize="small" />
              <span className="text-sm  ml-1">
                {parseFloat(Data?.Rating?.toString() ?? "0")}/10
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(ProfessionalCard);
