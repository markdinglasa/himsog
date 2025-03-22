import {
  ButtonColor,
  ButtonType,
  DialogType,
  ProfessionValidationTable,
  RouteChannel,
  SFC,
  UserRole,
} from "../../../../../types";
import * as S from "../../../../../styles/Styles";
import {
  PageBreadCrumbs,
  Skeleton,
  CustomButton,
  AccessControl,
  ConfirmationDialog,
} from "../../../../../components";
import { useNavigate, useParams } from "react-router-dom";
import { Suspense } from "react";
import { cn, IsBoolean } from "../../../../../utils";
import Icon from "../../../../../constants/icon";
import Form from "../../../../../components/Surfaces/Forms";
import API from "../../../../../hooks/api";
import Certificates from "../../../../../components/DataDisplay/Certificates";
import { useToggle } from "react-use";
import { CustomModal } from "../../../../../modals";
import ActivatedProfessional from "../../../../../components/DataDisplay/Activated";

export const AdminUserDetailsPage: SFC = ({ ClassName }) => {
  const navigate = useNavigate();
  const links = [
    {
      Text: "Dashboard",
      OnClick: () => navigate(RouteChannel.ADMIN_DASHBOARD),
    },
    { Text: "Users", OnClick: () => navigate(RouteChannel.ADMIN_USER) },
  ];

  const { Id } = useParams<{ Id: string }>() ?? {};
  const { update } = API.Setup.User.SuspendUser();
  const { data } = API.Setup.User.Get(Number(Id));
  const [isValidate, toggleValidate] = useToggle(false);
  const [isDeclined, toggleDecline] = useToggle(false);
  const { data: validation } = API.Setup.ProfessionValidtion.GetByUser(
    Number(Id),
  );
  // console.log("validation:", validation);
  const ValidationId: number = parseInt(`${validation?.Id ?? 0}`, 10);
  const { add: AddValidation } = API.Setup.ProfessionValidtion.Add();
  const { update: UpdateValidation } = API.Setup.ProfessionValidtion.Update();

  const IsValidated: boolean = IsBoolean(validation?.IsValidated) ?? false;
  return (
    <>
      <S.Container className={cn("w-full", ClassName)}>
        <S.PageTopBar>
          <PageBreadCrumbs Links={links} Active="User Details" />
          <S.Actions>
            <CustomButton
              leftIcon={<Icon.Back className="md:text-white text-primary" />}
              onClick={() => navigate(RouteChannel.ADMIN_USER)}
              text="Back"
              type={ButtonType.button}
            />
          </S.Actions>
        </S.PageTopBar>
        <S.PageContent className="border rounded-md ">
          <Suspense fallback={<Skeleton />}>
            <Form.Setup.User
              IsSetup={false}
              IsRedirect={false}
              IsDetails={true}
              Title="User Details"
              ClassName="w-full mb-3"
            />
          </Suspense>
          <S.Divider className="w-full flex flex-row items-center justify-end ">
            {(data?.IsSuspended ?? false) ? (
              <CustomButton
                text={"Activate"}
                color={ButtonColor.primary}
                onClick={() => {
                  update(Number(Id), { IsSuspended: false });
                }}
                morph={false}
              />
            ) : (
              <CustomButton
                text={"Suspend"}
                color={ButtonColor.red}
                onClick={() => {
                  update(Number(Id), { IsSuspended: true });
                }}
                morph={false}
              />
            )}
          </S.Divider>
        </S.PageContent>
        <AccessControl OtherCondition={data?.Role === UserRole.NUTRITIONIST}>
          <S.PageContent className="border rounded-md ">
            <Suspense fallback={<Skeleton />}>
              <Form.Setup.Profession
                IsSetup={false}
                IsRedirect={false}
                IsDetails={true}
                Title="Profession Info"
                ClassName="w-full mb-3"
              />
            </Suspense>
          </S.PageContent>
          <S.PageContent className="border rounded-md w-full">
            <Suspense fallback={<Skeleton />}>
              <Certificates IsEdit={false} />
            </Suspense>
          </S.PageContent>

          <S.PageContent className="border rounded-md w-full mb-3">
            <S.Divider className="w-full flex flex-col items-start justify-start mb-4">
              <S.Span className="text-lg font-medium">
                Health Professional Validation
              </S.Span>
              <S.Span className="text-sm text-slate-600">
                description ala lorem ipusm
              </S.Span>
            </S.Divider>
            <S.Divider className="w-full flex flex-row items-center justify-end gap-4">
              <CustomButton
                leftIcon={<Icon.Cancel />}
                text="Disapprove"
                color={ButtonColor.red}
                onClick={toggleDecline}
                morph={false}
              />
              <CustomButton
                leftIcon={<Icon.Check />}
                text="Approved"
                color={ButtonColor.primary}
                onClick={toggleValidate}
                morph={false}
              />
            </S.Divider>
          </S.PageContent>

          <ActivatedProfessional
            ClassName="mb-3"
            IsActivated={IsValidated}
            Remarks={validation?.Remarks ?? null}
          />
        </AccessControl>
      </S.Container>
      <ConfirmationDialog
        title="Approving a Health Profession"
        message="Are you sure to approve this Health Professional?"
        close={toggleValidate}
        open={isValidate}
        confirm={() => {
          // exclude Id on data
          const data: ProfessionValidationTable = {
            UserId: Number(Id),
            Remarks: null,
            IsValidated: true,
            IsRejected: false,
          };
          // console.log("data", data);
          console.log("ValidationId:", ValidationId);
          if (ValidationId < 1) AddValidation(data);
          else UpdateValidation(Number(validation?.Id), data);
          toggleValidate;
        }}
        dialogType={DialogType.confirm}
      />
      <CustomModal
        close={toggleDecline}
        title={"Disapproving a Health Professional"}
        open={isDeclined}
        ClassName="md:w-[40rem] w-[80vw]"
      >
        <S.Divider>
          <Form.Setup.DisapproveProfession OnClose={toggleDecline} />
        </S.Divider>
      </CustomModal>
    </>
  );
};
export default AdminUserDetailsPage;
