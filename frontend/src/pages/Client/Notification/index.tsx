import { NotificationTable, RouteChannel, SFC } from "../../../types";
import * as S from "../../../styles/Styles";
import { PageBreadCrumbs, Skeleton, NoRecord } from "../../../components";
import { useNavigate } from "react-router-dom";
import { memo } from "react";
import API from "../../../hooks/api";
import { useAuth } from "../../../hooks";
import Card from "../../../components/Surfaces/Cards";
import React from "react";

export const NotificationPage: SFC = ({ ClassName }) => {
  const navigate = useNavigate();
  const links = [
    {
      Text: "Dashboard",
      OnClick: () => navigate(RouteChannel.CLIENT_DASHBOARD),
    },
  ];
  const { auth } = useAuth();
  const { data: notifications, isLoading } = API.Utility.Notification.GetAll(
    Number(auth?.user ?? 0),
  );

  return (
    <>
      <S.Container className={ClassName}>
        <S.PageTopBar className="h-[40px]">
          <PageBreadCrumbs Links={links} Active={"Notifications"} />
          <S.Actions></S.Actions>
        </S.PageTopBar>
        <S.Divider className="flex flex-col items-center justify-start mb-2  h-[calc(100vh-182px)]">
          <S.Divider className="w-full md:w-[40rem] bg-white rounded-md p-3 border border">
            <S.Divider className="w-full text-left mb-2">
              <S.Span className="text-lg font-medium">Notifications</S.Span>
            </S.Divider>
            <div className="w-full flex flex-col gap-2">
              {isLoading ? (
                <Skeleton />
              ) : Array.isArray(notifications) && notifications.length > 0 ? (
                notifications.map((record: NotificationTable) => (
                  <React.Fragment key={record?.Id}>
                    <Card.Notification
                      IsRead={record?.IsRead}
                      Description={record?.Description}
                      Id={String(record?.Id) ?? ""}
                      Date={String(record?.DateCreated)}
                      Link={record?.Link}
                    />
                  </React.Fragment>
                ))
              ) : (
                <div className="w-full md:h-[20rem] flex items-center justify-center">
                  <NoRecord Message={"No Notifications"} />
                </div>
              )}
            </div>
          </S.Divider>
        </S.Divider>
      </S.Container>
    </>
  );
};

export default memo(NotificationPage);
