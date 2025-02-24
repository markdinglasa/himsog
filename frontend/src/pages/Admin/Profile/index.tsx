import { RouteChannel, SFC } from "../../../types";
import * as S from "../../../styles/Styles";
import {
  PageBreadCrumbs,
  ProfileCard,
  Skeleton,
  UserForm,
} from "../../../components";
import { useNavigate } from "react-router-dom";
import { Suspense } from "react";
import { useAuth, useGetUser } from "../../../hooks";

export const AdminProfilePage: SFC = ({ ClassName }) => {
  const navigate = useNavigate();
  const links = [
    {
      Text: "Dashboard",
      OnClick: () => navigate(RouteChannel.ADMIN_DASHBOARD),
    },
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
          <S.Divider className="w-full md:w-[80%] h-fit rounded-md ">
            <ProfileCard
              ClassName="mb-2"
              Name={user.Fullname ?? "NA"}
              RoleName={user.Role ?? "NA"}
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
