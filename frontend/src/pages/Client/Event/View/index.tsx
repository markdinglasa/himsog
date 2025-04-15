import { RouteChannel, SFC } from "../../../../types";
import * as S from "../../../../styles/Styles";
import { CustomButton, PageBreadCrumbs } from "../../../../components";
import { cn } from "../../../../utils";
import { memo } from "react";
import Events from "../../../../components/DataDisplay/Events";
import { useNavigate } from "react-router-dom";
import Icon from "../../../../constants/icon";

export const EventViewPage: SFC = ({ ClassName }) => {
  const navigate = useNavigate();
  const links = [
    {
      Text: "Dashboard",
      OnClick: () => navigate(RouteChannel.CLIENT_DASHBOARD),
    },
  ];
  return (
    <>
      <S.Container className={cn("", ClassName)}>
        <S.PageTopBar className="h-[40px]">
          <PageBreadCrumbs Links={links} Active="Events" />
          <S.Actions>
            <CustomButton
              text="New"
              leftIcon={<Icon.Add />}
              onClick={() => navigate(RouteChannel.CLIENT_EVENT_NEW)}
            />
          </S.Actions>
        </S.PageTopBar>
        <S.PageContent className="border rounded-md">
          <Events IsPublic={false} />
        </S.PageContent>
      </S.Container>
    </>
  );
};
export default memo(EventViewPage);
