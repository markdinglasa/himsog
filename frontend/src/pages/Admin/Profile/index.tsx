import { RouteChannel, SFC } from "../../../types";
import * as S from "../../../styles/Styles";
import {
  PageBreadCrumbs,
  ProfileCard,
  SettingMenu,
  Skeleton,
  UserForm,
} from "../../../components";
import { useNavigate } from "react-router-dom";
import { Suspense } from "react";
import { mdiAccountCircleOutline, mdiAccountKeyOutline } from "@mdi/js";
import { useAuth, useGetUser } from "../../../hooks";

export const ProfilePage: SFC = ({ ClassName }) => {
  const navigate = useNavigate();

  const links = [
    { Text: "Dashboard", OnClick: () => navigate(RouteChannel.DASHBOARD) },
  ];
  const { auth } = useAuth();
  const { records: user } = useGetUser(auth?.user ?? 0);

  return (
    <>
      <S.Container className={ClassName}>
        <S.PageTopBar className="h-[40px]">
          <PageBreadCrumbs Links={links} Active="Profile" />
          <S.Actions></S.Actions>
        </S.PageTopBar>
        <S.DoubleCol>
          <S.Divider className="hidden md:block md:w-[20%] h-fit rounded-md bg-white p-2 ">
            <SettingMenu
              Icon={mdiAccountCircleOutline}
              Label="Profile Details"
              OnClick={() => {}}
            />
            <SettingMenu
              Icon={mdiAccountKeyOutline}
              Label="Access Rights"
              OnClick={() => {}}
            />
          </S.Divider>
          <S.Divider className="w-full md:w-[80%] h-fit rounded-md ">
            <ProfileCard
              ClassName="mb-2"
              Name={user.Name ?? "NA"}
              RoleName={user.RoleName ?? "NA"}
            />
            <S.PageContent>
              <Suspense fallback={<Skeleton />}>
                <UserForm Title="Profile Details" />
              </Suspense>
            </S.PageContent>
          </S.Divider>
        </S.DoubleCol>
      </S.Container>
    </>
  );
};
