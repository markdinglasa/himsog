import {
  ButtonType,
  HeadCell,
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
import AddIcon from "@mui/icons-material/Add";

export const AdminUserViewPage: SFC = ({ ClassName }) => {
  const navigate = useNavigate();
  const links = [
    {
      Text: "Dashboard",
      OnClick: () => navigate(RouteChannel.ADMIN_DASHBOARD),
    },
  ];

  return (
    <>
      <S.Container className={cn("", ClassName)}>
        <S.PageTopBar className="h-[40px]">
          <PageBreadCrumbs Links={links} Active="Users" />
          <S.Actions>
            <CustomButton
              leftIcon={<AddIcon className="md:text-white text-primary" />}
              onClick={() => navigate(RouteChannel.ADMIN_USER_NEW)}
              text="New"
              type={ButtonType.button}
            />
          </S.Actions>
        </S.PageTopBar>
        <S.PageContent>
          <Suspense fallback={<Skeleton />}>
            <EnhancedTable
              Title="Users"
              Rows={[]}
              HeadCells={userHC as HeadCell<unknown>[]}
              IsLoading={false}
              OnRecordDelete={() => {}}
              //RemoveApiRoute={RouteChannel.NO_ACCESS_RIGHT}
              DetailsRoute={RouteChannel.ADMIN_USER_DETAILS}
              ClassName="md:max-h-[calc(100vh-200px)]"
            />
          </Suspense>
        </S.PageContent>
      </S.Container>
    </>
  );
};
export default AdminUserViewPage;
