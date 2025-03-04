import { RouteChannel, SFC, UserInitial } from "../../../types";
import * as S from "../../../styles/Styles";
import { PageBreadCrumbs, Skeleton } from "../../../components";
import { useNavigate } from "react-router-dom";
import { memo, Suspense } from "react";
//import { useAuth } from "../../../hooks";

export const ClientProfilePage: SFC = ({ ClassName }) => {
  const navigate = useNavigate();
  const links = [
    {
      Text: "Dashboard",
      OnClick: () => navigate(RouteChannel.CLIENT_DASHBOARD),
    },
  ];
  //const { auth } = useAuth();
  const user = UserInitial;
  const Fullname = `${user?.Firstname ?? "NA"} ${user?.Lastname ?? "NA"}`;
  return (
    <>
      <S.Container className={ClassName}>
        <S.PageTopBar className="h-[40px]">
          <PageBreadCrumbs Links={links} Active="Profile" />
          <S.Actions></S.Actions>
        </S.PageTopBar>
        <S.DoubleCol>
          <S.Divider className="w-full h-fit ">
            <S.PageContent>
              <Suspense fallback={<Skeleton />}></Suspense>
            </S.PageContent>
          </S.Divider>
        </S.DoubleCol>
      </S.Container>
    </>
  );
};
export default memo(ClientProfilePage);
