import {
  APIChannel,
  ButtonType,
  HeadCell,
  QueryKey,
  RouteChannel,
  SFC,
  userHC,
} from "../../../../../types";
import * as S from "../../../../../styles/Styles";
import {
  PageBreadCrumbs,
  EnhancedTable,
  Skeleton,
  CustomButton,
} from "../../../../../components";
import { useNavigate } from "react-router-dom";
import { Suspense } from "react";
import { cn } from "../../../../../utils";
import Icon from "../../../../../constants/icon";
import API from "../../../../../hooks/api";

export const AdminUserViewPage: SFC = ({ ClassName }) => {
  const navigate = useNavigate();
  const links = [
    {
      Text: "Dashboard",
      OnClick: () => navigate(RouteChannel.ADMIN_DASHBOARD),
    },
  ];
  const { data: users, isLoading } = API.Setup.User.GetAll();
  return (
    <>
      <S.Container className={cn("", ClassName)}>
        <S.PageTopBar className="h-[40px]">
          <PageBreadCrumbs Links={links} Active="Users" />
          <S.Actions>
            <CustomButton
              leftIcon={<Icon.Add className="md:text-white text-primary" />}
              onClick={() => navigate(RouteChannel.ADMIN_USER_NEW)}
              text="New"
              type={ButtonType.button}
            />
          </S.Actions>
        </S.PageTopBar>
        <S.PageContent className="border rounded-md">
          <Suspense fallback={<Skeleton />}>
            <EnhancedTable
              Title="Users"
              Rows={users || []}
              HeadCells={userHC as HeadCell<unknown>[]}
              IsLoading={isLoading}
              OnRecordDelete={() => {}}
              RemoveApiRoute={APIChannel.USER_ID}
              DetailsRoute={RouteChannel.ADMIN_USER_DETAILS}
              ClassName="md:max-h-[calc(100vh-200px)]"
              QueryKey={QueryKey.USER}
            />
          </Suspense>
        </S.PageContent>
      </S.Container>
    </>
  );
};
export default AdminUserViewPage;
