import {
  ButtonColor,
  ButtonType,
  RouteChannel,
  SFC,
} from "../../../../../types";
import * as S from "../../../../../styles/Styles";
import {
  PageBreadCrumbs,
  Skeleton,
  CustomButton,
  ConfirmationDialog,
} from "../../../../../components";
import { useNavigate, useParams } from "react-router-dom";
import { memo, Suspense } from "react";
import { cn } from "../../../../../utils";
import Icon from "../../../../../constants/icon";
import API from "../../../../../hooks/api";
import { useToggle } from "react-use";
import { CustomModal } from "../../../../../modals";
import Form from "../../../../../components/Surfaces/Forms";
import ArticleDetails from "../../../../../components/DataDisplay/ArticleDetails";

export const ArticleDetailsPage: SFC = ({ ClassName }) => {
  const navigate = useNavigate();
  const links = [
    {
      Text: "Dashboard",
      OnClick: () => navigate(RouteChannel.ADMIN_DASHBOARD),
    },
    {
      Text: "Health Articles",
      OnClick: () => navigate(RouteChannel.ADMIN_ARTICLE),
    },
  ];
  const { Id } = useParams<{ Id: string }>();
  const { data, isLoading } = API.Setup.Article.Get(Number(Id));
  // console.log(data);
  const { update } = API.Setup.Article.Update();
  const [isApprove, toggleApprove] = useToggle(false);
  const [isDisapprove, toggleDisapprove] = useToggle(false);

  return (
    <>
      <S.Container className={cn("", ClassName)}>
        <S.PageTopBar>
          <PageBreadCrumbs Links={links} Active="Article Details" />
          <S.Actions>
            <CustomButton
              leftIcon={<Icon.Back className="md:text-white text-primary" />}
              onClick={() => navigate(RouteChannel.ADMIN_ARTICLE)}
              text="Back"
              type={ButtonType.button}
            />
          </S.Actions>
        </S.PageTopBar>
        <S.PageContent className="w-full border rounded-md ">
          <Suspense fallback={<Skeleton />}>
            <ArticleDetails Data={data} Loading={isLoading} IsPublic={false} />
          </Suspense>
          <S.Divider className="w-full flex flex-row items-center justify-end gap-[1rem]">
            <CustomButton
              leftIcon={<Icon.Close className="md:text-white text-primary" />}
              onClick={toggleDisapprove}
              text="Disapprove"
              type={ButtonType.button}
              color={ButtonColor.red}
            />
            <CustomButton
              leftIcon={
                <Icon.CheckCircle className="md:text-white text-primary" />
              }
              onClick={toggleApprove}
              text="Approve"
              type={ButtonType.button}
            />
          </S.Divider>
        </S.PageContent>
      </S.Container>
      <ConfirmationDialog
        title="Validate Article"
        message="Are you sure you want to Validate this Article?"
        close={toggleApprove}
        open={isApprove}
        confirm={() => {
          // Toggle
          data.IsValidated = true;

          const { Id, ...filtered } = data;

          update(Number(data.Id), filtered);
          toggleApprove();
        }}
      />
      <CustomModal
        close={toggleDisapprove}
        title={"Disapprove Article"}
        open={isDisapprove}
        ClassName="w-[80vw] md:w-[40rem]"
      >
        <Form.Setup.DisapproveArticle />
      </CustomModal>
    </>
  );
};

export default memo(ArticleDetailsPage);
