import {
  APIChannel,
  EventHC,
  HeadCell,
  QueryKey,
  RouteChannel,
  SFC,
} from "../../../../types";
import * as S from "../../../../styles/Styles";
import {
  PageBreadCrumbs,
  EnhancedTable,
  Skeleton,
} from "../../../../components";
import { useNavigate } from "react-router-dom";
import { memo, Suspense } from "react";
import { cn } from "../../../../utils";
import API from "../../../../hooks/api";

export const EventViewPage: SFC = ({ ClassName }) => {
  const navigate = useNavigate();
  const links = [
    {
      Text: "Dashboard",
      OnClick: () => navigate(RouteChannel.ADMIN_DASHBOARD),
    },
  ];
  const { data: events, isLoading } = API.Setup.Event.GetAllInvalidated();
  return (
    <>
      <S.Container className={cn("", ClassName)}>
        <S.PageTopBar className="h-[40px]">
          <PageBreadCrumbs Links={links} Active="Users" />
          <S.Actions></S.Actions>
        </S.PageTopBar>
        <S.PageContent className="border rounded-md">
          <Suspense fallback={<Skeleton />}>
            <EnhancedTable
              Title="Events"
              Rows={events ?? []}
              HeadCells={EventHC as HeadCell<unknown>[]}
              IsLoading={isLoading}
              OnRecordDelete={() => {}}
              RemoveApiRoute={APIChannel.EVENT_ID}
              QueryKey={QueryKey.EVENT_INVALIDATED}
              DetailsRoute={RouteChannel.ADMIN_EVENT_DETAILS}
              ClassName="md:max-h-[calc(100vh-200px)]"
            />
          </Suspense>
        </S.PageContent>
      </S.Container>
    </>
  );
};
export default memo(EventViewPage);
