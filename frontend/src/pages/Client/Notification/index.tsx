import { HeadCell, notificationHC, RouteChannel, SFC } from "../../../types";
import * as S from "../../../styles/Styles";
import { PageBreadCrumbs, EnhancedTable, Skeleton } from "../../../components";
import { useNavigate } from "react-router-dom";
import { Suspense } from "react";

export const ClientNotificationPage: SFC = ({ ClassName }) => {
  const navigate = useNavigate();
  const links = [
    {
      Text: "Dashboard",
      OnClick: () => navigate(RouteChannel.CLIENT_DASHBOARD),
    },
  ];

  return (
    <>
      <S.Container className={ClassName}>
        <S.PageTopBar className="h-[40px]">
          <PageBreadCrumbs Links={links} Active={"Notifications"} />
          <S.Actions></S.Actions>
        </S.PageTopBar>
        <S.PageContent>
          <Suspense fallback={<Skeleton />}>
            <EnhancedTable
              Title="Notifications"
              Rows={[]}
              HeadCells={notificationHC as HeadCell<unknown>[]}
              IsLoading={false}
              OnRecordDelete={() => {}}
              //RemoveApiRoute={RouteChannel.NOTIFICATION_REMOVE}
              ClassName="md:max-h-[calc(100vh-200px)]"
            />
          </Suspense>
        </S.PageContent>
      </S.Container>
    </>
  );
};

export default ClientNotificationPage;
