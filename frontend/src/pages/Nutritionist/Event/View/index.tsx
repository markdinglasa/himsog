import { RouteChannel, SFC } from "../../../../types";
import * as S from "../../../../styles";
import { memo } from "react";
import { cn } from "../../../../utils";
import { CustomButton, PageBreadCrumbs } from "../../../../components";
import Icon from "../../../../constants/icon";
import { useNavigate } from "react-router-dom";

import Events from "../../../../components/DataDisplay/Events";

const NutritionistViewPage: SFC = ({ ClassName }) => {
  const navigate = useNavigate();

  const links = [
    {
      Text: "Dashboard",
      OnClick: () => navigate(RouteChannel.NUTRITIONIST_DASHBOARD),
    },
  ];

  return (
    <>
      <S.Container className={cn("w-full ", ClassName)}>
        <S.PageTopBar className="h-[40px]">
          <PageBreadCrumbs Links={links} Active="Events" />
          <S.Actions>
            <CustomButton
              text="New"
              leftIcon={<Icon.Add />}
              onClick={() => navigate(RouteChannel.NUTRITIONIST_EVENT_NEW)}
            />
          </S.Actions>
        </S.PageTopBar>
        <S.Content className="mb-[1rem] border rounded-md p-[1rem] bg-white">
          <Events IsPublic={false} />
        </S.Content>
      </S.Container>
    </>
  );
};

export default memo(NutritionistViewPage);
