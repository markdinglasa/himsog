import {
  APIChannel,
  ButtonType,
  HeadCell,
  QueryKey,
  RouteChannel,
  SFC,
  unitHC,
} from "../../../../../types";
import * as S from "../../../../../styles/Styles";
import {
  PageBreadCrumbs,
  EnhancedTable,
  Skeleton,
  CustomButton,
} from "../../../../../components";
import { useNavigate } from "react-router-dom";
import { memo, Suspense } from "react";
import { cn } from "../../../../../utils";
import Icon from "../../../../../constants/icon";
import API from "../../../../../hooks/api";

export const AdminUnitViewPage: SFC = ({ ClassName }) => {
  const navigate = useNavigate();
  const links = [
    {
      Text: "Dashboard",
      OnClick: () => navigate(RouteChannel.ADMIN_DASHBOARD),
    },
  ];
  const { data: units, isLoading } = API.Setup.Unit.GetAll();
  return (
    <>
      <S.Container className={cn("", ClassName)}>
        <S.PageTopBar className="h-[40px]">
          <PageBreadCrumbs Links={links} Active="Units" />
          <S.Actions>
            <CustomButton
              leftIcon={<Icon.Add className="md:text-white text-primary" />}
              onClick={() => navigate(RouteChannel.ADMIN_UNIT_NEW)}
              text="New"
              type={ButtonType.button}
            />
          </S.Actions>
        </S.PageTopBar>
        <S.PageContent className="border rounded-md">
          <Suspense fallback={<Skeleton />}>
            <EnhancedTable
              Title="Units"
              Rows={units ?? []}
              HeadCells={unitHC as HeadCell<unknown>[]}
              IsLoading={isLoading}
              OnRecordDelete={() => {}}
              RemoveApiRoute={APIChannel.UNIT_ID}
              QueryKey={QueryKey.UNIT}
              DetailsRoute={RouteChannel.ADMIN_UNIT_DETAILS}
              ClassName="md:max-h-[calc(100vh-200px)]"
            />
          </Suspense>
        </S.PageContent>
      </S.Container>
    </>
  );
};
export default memo(AdminUnitViewPage);
