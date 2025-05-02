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
import { memo } from "react";
import { useNavigate } from "react-router-dom";
import { CircleButton, CustomButton } from "../../../Inputs";
import Icon from "../../../../constants/icon";
import { Verified } from "../../../DataDisplay/Verified";
import { useToggle } from "react-use";
import { CustomModal } from "../../../../modals";
import Form from "../../Forms";
import MdIcon from "@mdi/react";
import { mdiInvoiceSendOutline } from "@mdi/js";
import { useAuth } from "../../../../hooks";

export interface ProfessionalCardProps {
  Data: UserTable;
}
export const ProfessionalCard: SFC<ProfessionalCardProps> = ({
  ClassName,
  Data,
}) => {
  const { auth } = useAuth();
  const { data: specialist, isLoading } = API.Setup.ProfessionSpecialist.GetAll(
    Number(Data?.Id ?? 0),
  );
  const { data: chat } = API.Messenger.Chat.GetAllByUser(
    Number(auth?.user ?? 0),
  );
  const { add: addNewContact } = API.Messenger.Chat.Add();
  const [isModal, toggleModal] = useToggle(false);
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
          <div className="w-full flex items-center justify-center">
            <span> No Specialization </span>
          </div>
        )}
      </>
    );
  };

  return (
    <>
      <div
        onClick={(e) => {
          e.stopPropagation();
          navigate(
            RouteChannel.CLIENT_PROFIFLE.replace(":Id", String(Data?.Id ?? 0)),
          );
        }}
        className={cn(
          "border w-full min-w-[20rem] rounded-md hover:shadow-md h-fit p-[1rem] cursor-pointer hover:shadow-md",
          ClassName,
        )}
      >
        <div className="flex flex-row items-center justify-start ">
          <div>
            <Avatar
              src={Data?.ProfilePhoto ?? ""}
              alt={Data?.Fullname ?? "NA"}
              sx={{
                width: "4rem",
                height: "4rem",
              }}
            />
          </div>
          <div className="w-full  flex flex-col ml-3">
            <span className="text-md font-medium flex flex-row gap-2 items-center">
              {Data?.Fullname ?? "NA"}
              {(Data?.IsVerified ?? false) ? <Verified ClassName="" /> : null}
            </span>
            <span className="text-sm text-slate-600">
              {Data?.Email ?? "NA"}
            </span>
          </div>
          <div>
            <CircleButton
              Title="Message"
              Icon={<Icon.Send className="text-primary" />}
              Type={ButtonType.button}
              OnClick={(e: any) => {
                e.stopPropagation();
                // creates new contact if not yet connected else would redirect to messenger with Id
                // check contacts if contact exists if not then create new contact then redirect
                // if already exists in contacts then redirect to messenger with the Id
                if (chat?.Id)
                  navigate(
                    RouteChannel.CLIENT_MESSENGER.replace(
                      ":Id",
                      String(chat?.Id ?? 0),
                    ),
                  );
                else
                  addNewContact({
                    AdvocateId: Number(auth?.user ?? 0),
                    NutritionistId: Number(Data?.Id ?? 0),
                  });
              }}
            />
          </div>
        </div>
        <div className="w-full flex items-start justify-center py-2 h-fit ">
          {expertise()}
        </div>
        {/* displays at the bottom of the card */}
        <div className="w-full relative bottom-0">
          <div className="flex items-end justify-between bottom-0">
            <div className="flex items-center justify-start">
              <CustomButton
                type={ButtonType.button}
                onClick={(e) => {
                  e.stopPropagation();
                  toggleModal();
                }}
                text="Request"
                leftIcon={<MdIcon path={mdiInvoiceSendOutline} size={1} />}
                morph={false}
              />
            </div>
            <div className="">
              <div className="flex items-end justify-end ">
                <Icon.Star className="text-orange-300" fontSize="small" />
                <span className="text-sm  ml-1">
                  {parseFloat(Data?.Rating?.toString() ?? "0")}/5
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <CustomModal
        close={toggleModal}
        title={"Meal Plan Request"}
        open={isModal}
        ClassName="md:w-[40rem] w-[80vw] h-fit max-h-[80vh]"
      >
        <Form.Transaction.MealPlanRequest
          RecordId={String(Data?.Id ?? 0)}
          OnClose={toggleModal}
        />
      </CustomModal>
    </>
  );
};

export default memo(ProfessionalCard);
