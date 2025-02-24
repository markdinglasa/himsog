import { ButtonType, RouteChannel, SFC } from "../../../../../types";
import * as S from "../../../../../styles/Styles";
import {
  PageBreadCrumbs,
  Skeleton,
  CustomButton,
  UserForm,
} from "../../../../../components";
import { useNavigate } from "react-router-dom";
import { Suspense } from "react";
import { cn } from "../../../../../utils";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

export const AdminUserNewPage: SFC = ({ ClassName }) => {
  const navigate = useNavigate();
  const links = [
    {
      Text: "Dashboard",
      OnClick: () => navigate(RouteChannel.ADMIN_DASHBOARD),
    },
    { Text: "Users", OnClick: () => navigate(RouteChannel.ADMIN_USER) },
  ];

  return (
    <>
      <S.Container className={cn("", ClassName)}>
        <S.PageTopBar>
          <PageBreadCrumbs Links={links} Active="New User" />
          <S.Actions>
            <CustomButton
              leftIcon={
                <ArrowBackIcon className="md:text-white text-primary" />
              }
              onClick={() => navigate(RouteChannel.ADMIN_USER)}
              text="Back"
              type={ButtonType.button}
            />
          </S.Actions>
        </S.PageTopBar>
        <S.PageContent>
          <Suspense fallback={<Skeleton />}>
            <UserForm Title="New User" IsDetails={false} />
          </Suspense>
        </S.PageContent>
      </S.Container>
    </>
  );
};
