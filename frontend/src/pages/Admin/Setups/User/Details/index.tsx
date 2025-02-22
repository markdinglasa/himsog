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

export const UserDetailsPage: SFC = ({ ClassName }) => {
  const navigate = useNavigate();
  const links = [
    { Text: "Dashboard", OnClick: () => navigate(RouteChannel.DASHBOARD) },
    { Text: "Users", OnClick: () => navigate(RouteChannel.USER) },
  ];

  return (
    <>
      <S.Container className={cn("", ClassName)}>
        <S.PageTopBar>
          <PageBreadCrumbs Links={links} Active="User Details" />
          <S.Actions>
            <CustomButton
              icon={<ArrowBackIcon className="md:text-white text-primary" />}
              onClick={() => navigate(RouteChannel.USER)}
              text="Back"
              type={ButtonType.button}
            />
          </S.Actions>
        </S.PageTopBar>
        <S.PageContent>
          <Suspense fallback={<Skeleton />}>
            <UserForm Title="User Details" IsDetails={true} />
          </Suspense>
        </S.PageContent>
      </S.Container>
    </>
  );
};
