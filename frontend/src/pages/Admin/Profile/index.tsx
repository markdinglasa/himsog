import { RouteChannel, SFC } from "../../../types";
import * as S from "../../../styles/Styles";
import { PageBreadCrumbs, Skeleton } from "../../../components";
import { useNavigate } from "react-router-dom";
import { memo, Suspense } from "react";
//import { useAuth } from "../../../hooks";

export const AdminProfilePage: SFC = ({ ClassName }) => {
  const navigate = useNavigate();
  const links = [
    {
      Text: "Dashboard",
      OnClick: () => navigate(RouteChannel.ADMIN_DASHBOARD),
    },
  ];
  //const { auth } = useAuth();
  // const user = UserInitial;
  //const { records: user } = useGetUser(auth?.user ?? 0);

  return (
    <>
      <S.Container className={ClassName}>
        <S.PageTopBar className="h-[40px]">
          <PageBreadCrumbs Links={links} Active="Profile" />
          <S.Actions></S.Actions>
        </S.PageTopBar>
        <S.DoubleCol>
          <S.Divider className="w-full md:w-[80%] h-fit rounded-md ">
            <S.PageContent>
              <Suspense fallback={<Skeleton />}></Suspense>
            </S.PageContent>
          </S.Divider>
        </S.DoubleCol>
      </S.Container>
    </>
  );
};
export default memo(AdminProfilePage);
