import { RouteChannel, SFC } from "../../../types";
import * as S from "../../../styles/Styles";
import { PageBreadCrumbs } from "../../../components";
import { useNavigate } from "react-router-dom";
import { memo } from "react";
import { cn } from "../../../utils";
// import API from "../../../../hooks/api";
import Panel from "../../../components/Surfaces/Panels";

export const NutritionistMessengerViewPage: SFC = ({ ClassName }) => {
  const navigate = useNavigate();
  const links = [
    {
      Text: "Dashboard",
      OnClick: () => navigate(RouteChannel.NUTRITIONIST_DASHBOARD),
    },
  ];

  return (
    <>
      <S.Container className={cn("", ClassName)}>
        <S.PageTopBar className="h-[40px]">
          <PageBreadCrumbs Links={links} Active="Messenger" />
          <S.Actions></S.Actions>
        </S.PageTopBar>
        <S.Divider className="flex items-start flex-col md:flex-row justify-center gap-[1rem] mb-[1rem]">
          <Panel.Participant IsAdvocate={false} />
          <Panel.ChatBox IsAdvocate={false} />
        </S.Divider>
      </S.Container>
    </>
  );
};
export default memo(NutritionistMessengerViewPage);
