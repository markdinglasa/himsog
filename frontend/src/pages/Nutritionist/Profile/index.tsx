import { RouteChannel, SFC } from "../../../types";
import * as S from "../../../styles/Styles";
import { CustomButton, PageBreadCrumbs, Skeleton } from "../../../components";
import { useNavigate, useParams } from "react-router-dom";
import { memo } from "react";
//import { useAuth } from "../../../hooks";
import API from "../../../hooks/api";
import Icon from "../../../constants/icon";
import { Avatar } from "@mui/material";
import { formatDateToMMDDYY } from "../../../utils";
import Form from "../../../components/Surfaces/Forms";
import HealthConditions from "../../../components/DataDisplay/HealthConditions";

export const ProfilePage: SFC = ({ ClassName }) => {
  const navigate = useNavigate();
  const links = [
    {
      Text: "Dashboard",
      OnClick: () => navigate(RouteChannel.NUTRITIONIST_DASHBOARD),
    },
    {
      Text: "Meal Plan - Requests ",
      OnClick: () => navigate(RouteChannel.NUTRITIONIST_MEAL_PLAN_REQUEST),
    },
  ];
  const { Id } = useParams<{ Id: string }>();
  const { data: user, isLoading } = API.Setup.User.Get(Number(Id));
  const userInfo = () => {
    if (isLoading) return <Skeleton />;
    return (
      <>
        <div className="w-full flex items-start justify-between">
          <div className="w-full flex flex-row gap-[1rem] items-center border-b pb-2">
            <Avatar
              src={user?.ProfilePhoto ?? ""}
              alt={user?.Fullname ?? "NA"}
              sx={{
                width: "4rem",
                height: "4rem",
              }}
            />
            <div className="flex flex-col">
              <span className="text-lg font-medium">
                {user?.Fullname ?? "NA"}
              </span>
              <span className="text-sm">Advocate</span>
            </div>
          </div>

          <div className="flex items-center justify-end gap-[1rem]  ">
            <CustomButton
              text="Message"
              leftIcon={<Icon.Send />}
              onClick={() => {}}
            />
          </div>
        </div>
        <div className="w-full  mt-[1rem] flex gap-[1rem] flex-col">
          <div>
            <span className="text-lg font-medium">Basic Info</span>
          </div>
          <div className="w-full flex flex-row gap-[1rem] items-center justify-start">
            <div className="flex flex-col w-full">
              <span className="text-sm">Age</span>
              <span className="text-sm font-medium">
                {user?.Age ?? 0} years old
              </span>
            </div>
            <div className="flex flex-col w-full">
              <span className="text-sm">Gender</span>
              <span className="text-sm font-medium">
                {user?.Gender ?? "NA"}
              </span>
            </div>
          </div>
          <div className="w-full flex flex-row gap-[1rem] items-center justify-start">
            <div className="flex flex-col w-full">
              <span className="text-sm">E-mail Address</span>
              <span className="text-sm font-medium">{user?.Email ?? "NA"}</span>
            </div>
            <div className="flex flex-col w-full">
              <span className="text-sm">Contact Number</span>
              <span className="text-sm font-medium">
                {user?.ContactNumber ?? "NA"}
              </span>
            </div>
          </div>
          <div className="w-full flex flex-row gap-[1rem] items-center justify-start">
            <div className="flex flex-col w-full">
              <span className="text-sm">Date Joined</span>
              <span className="text-sm font-medium">
                {formatDateToMMDDYY(user?.DateCreated ?? "NA")}
              </span>
            </div>
          </div>
        </div>
      </>
    );
  };
  return (
    <>
      <S.Container className={ClassName}>
        <S.PageTopBar className="h-[40px]">
          <PageBreadCrumbs Links={links} Active="Profile" />
          <S.Actions>
            <CustomButton
              text="Back"
              leftIcon={<Icon.Back />}
              onClick={() =>
                navigate(RouteChannel.NUTRITIONIST_MEAL_PLAN_REQUEST)
              }
            />
          </S.Actions>
        </S.PageTopBar>
        <S.PageContent className="border rounded-md">
          <S.Divider className="w-full mb-[1rem]">{userInfo()}</S.Divider>
          <S.Divider className="w-full mb-[1rem]">
            <S.Divider className="w-full">
              <Form.Setup.Health
                IsSetup={false}
                IsDetails={true}
                IsDisplay={true}
                Title="Health Info"
              />
            </S.Divider>
          </S.Divider>
          <S.Divider className="w-full mb-[1rem]">
            <S.Divider className="">
              <S.Span className="text-lg font-medium">
                Dietery Preference
              </S.Span>
            </S.Divider>
            <HealthConditions IsAllergen={false} />
          </S.Divider>
          <S.Divider className="w-full mb-[1rem]">
            <S.Divider className="">
              <S.Span className="text-lg font-medium">Allergies</S.Span>
            </S.Divider>
            <HealthConditions IsAllergen={true} />
          </S.Divider>
          <S.Divider className="w-full mb-[1rem]">
            <Form.Setup.Medical
              ClassName=""
              Title="Medical Info"
              IsDisplay={true}
            />
          </S.Divider>
        </S.PageContent>
      </S.Container>
    </>
  );
};
export default memo(ProfilePage);
