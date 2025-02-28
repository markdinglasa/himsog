import { ButtonType, RouteChannel, SFC } from "../../../../../types";
import * as S from "../../../../../styles/Styles";
import {
  PageBreadCrumbs,
  Skeleton,
  CustomButton,
  UnitForm,
} from "../../../../../components";
import { useNavigate } from "react-router-dom";
import { memo, Suspense } from "react";
import { cn } from "../../../../../utils";
import Icon from "../../../../../constants/icon";

export const AdminUnitNewPage: SFC = ({ ClassName }) => {
  const navigate = useNavigate();
  const links = [
    {
      Text: "Dashboard",
      OnClick: () => navigate(RouteChannel.ADMIN_DASHBOARD),
    },
    { Text: "Units", OnClick: () => navigate(RouteChannel.ADMIN_UNIT) },
  ];

  return (
    <>
      <S.Container className={cn("", ClassName)}>
        <S.PageTopBar>
          <PageBreadCrumbs Links={links} Active="New Unit" />
          <S.Actions>
            <CustomButton
              leftIcon={<Icon.Back className="md:text-white text-primary" />}
              onClick={() => navigate(RouteChannel.ADMIN_UNIT)}
              text="Back"
              type={ButtonType.button}
            />
          </S.Actions>
        </S.PageTopBar>
        <S.PageContent>
          <Suspense fallback={<Skeleton />}>
            <UnitForm Title="New User" IsDetails={false} />
          </Suspense>
        </S.PageContent>
      </S.Container>
    </>
  );
};

export default memo(AdminUnitNewPage);
