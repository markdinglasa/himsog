import {
  APIChannel,
  ButtonColor,
  ButtonType,
  HeadCell,
  paymentHC,
  PaymentTable,
  PaymentTables,
  QueryKey,
  RouteChannel,
  SFC,
} from "../../../../types";
import * as S from "../../../../styles/Styles";
import {
  PageBreadCrumbs,
  Skeleton,
  EnhancedTable,
  AccessControl,
  CustomButton,
} from "../../../../components";
import { useNavigate } from "react-router-dom";
import { memo, Suspense, useState } from "react";
import {
  cn,
  formatDateForInput,
  formatDateToMMDDYY,
  formatNumber,
} from "../../../../utils";
import Icon from "../../../../constants/icon";

import { useAuth, useGlobal } from "../../../../hooks";
import API from "../../../../hooks/api";
import { useToggle } from "react-use";
import { CustomModal } from "../../../../modals";

export const MealPlanPagePayments: SFC = ({ ClassName }) => {
  const navigate = useNavigate();
  const links = [
    {
      Text: "Dashboard",
      OnClick: () => navigate(RouteChannel.NUTRITIONIST_DASHBOARD),
    },
  ];
  const [remarks, setRemarks] = useState<string | null>(null);
  const { auth } = useAuth();
  const { data: Payments, isLoading } =
    API.Transaction.Payment.GetAllMealPlanPayment(Number(auth?.user ?? 0));
  const [isModal, toggleModal] = useToggle(false);
  const [isDisapprove, toggleDisapprove] = useToggle(false);
  const { record } = useGlobal();
  const { update } = API.Transaction.Payment.Update();
  // console.log(record.Record);
  return (
    <>
      <S.Container className={cn("", ClassName)}>
        <S.PageTopBar className="h-[40px]">
          <PageBreadCrumbs Links={links} Active="Meal Plan - Payments" />
          <S.Actions></S.Actions>
        </S.PageTopBar>
        <S.PageContent className="rounded-md border">
          <Suspense fallback={<Skeleton />}>
            <Suspense fallback={<Skeleton />}>
              <EnhancedTable
                Title="Meal Plans - Payments"
                Rows={(Payments as PaymentTables) ?? []}
                HeadCells={paymentHC as HeadCell<unknown>[]}
                IsLoading={isLoading}
                IsModal={true}
                IsRecord={true}
                ToggleModal={toggleModal}
                RemoveApiRoute={APIChannel.MEAL_PLAN_ID}
                DetailsRoute={RouteChannel.NUTRITIONIST_MEAL_PLAN_DETAILS}
                ClassName="md:max-h-[calc(100vh-200px)]"
                QueryKey={QueryKey.MEAL_PLAN}
              />
            </Suspense>
          </Suspense>
        </S.PageContent>
      </S.Container>
      <CustomModal
        close={toggleModal}
        title={"Payment Info"}
        open={isModal}
        ClassName="md:w-[40rem] w-[80vw] max-h-[80vh] h-fit overflow-auto"
      >
        <div className="w-full flex flex-col justify-start">
          <div className=" flex flex-row gap-2 py-1">
            <span className="text-sm ">Transaction Date:</span>
            <span className="text-sm font-medium">
              {formatDateToMMDDYY(record?.Record?.TransactionDate ?? "")}
            </span>
          </div>
          <div className=" flex flex-row gap-2 py-1">
            <span className="text-sm ">User:</span>
            <span className="text-sm font-medium">
              {record?.Record?.UserFullname ?? "NA"}
            </span>
          </div>
          <div className=" flex flex-row gap-2 py-1">
            <span className="text-sm ">Meal Plan:</span>
            <span className="text-sm font-medium">
              {record?.Record?.MealPlanName ?? "NA"}
            </span>
          </div>
          <div className=" flex flex-row gap-2 py-1">
            <span className="text-sm ">Amount:</span>
            <span className="text-sm font-medium">
              {formatNumber(Number(record?.Record?.Amount ?? "0"))}
            </span>
          </div>
          <div className=" flex flex-row gap-2 py-1 mb-[1rem]">
            <span className="text-sm ">Notes:</span>
            <p className="text-sm font-medium">
              {record?.Record?.MealPlanData?.Notes ?? "NA"}
            </p>
          </div>
          <AccessControl
            OtherCondition={
              typeof record?.Record?.MealPlanData?.Image === "string" &&
              record?.Record?.MealPlanData?.Image.length > 0 // should display if there is an image
            }
          >
            <S.Divider className="w-full h-full mb-2 flex items-start justify-center">
              <S.Image src={record?.Record?.MealPlanData?.Image ?? ""} />
            </S.Divider>
          </AccessControl>
          <AccessControl
            OtherCondition={
              String(record?.Record?.Status ?? "NA") === "Pending"
            }
          >
            <div className="w-full flex flex-row items-center gap-[1rem] justify-end mt-2">
              <CustomButton
                leftIcon={<Icon.Close />}
                text="Disapprove"
                color={ButtonColor.red}
                type={ButtonType.button}
                onClick={toggleDisapprove}
              />
              <CustomButton
                leftIcon={<Icon.CheckCircle />}
                text="Approve"
                type={ButtonType.button}
                onClick={() => {
                  const data: PaymentTable = {
                    TransactionDate: formatDateForInput(
                      record?.Record?.TransactionDate,
                    ),
                    TransactionId: record?.Record?.TransactionId,
                    UserId: record?.Record?.UserId,
                    SubscriptionId: null,
                    MealPlanId: record?.Record?.MealPlanId,
                    Currency: record?.Record?.Currency,
                    Amount: record?.Record?.Amount,
                    Method: record?.Record?.Method,
                    IsSubscription: false,
                    IsMealPlan: Boolean(record?.Record?.IsMealPlan),
                    SubscriptionData: null,
                    MealPlanData: {
                      Remark: null,
                      Notes: record?.Record?.MealPlanData?.Notes,
                      Image: record?.Record?.MealPlanData?.Image,
                      Status: true,
                      IsDisapproved: false,
                    },
                  };
                  update(record?.Record?.Id ?? 0, data);

                  toggleModal();
                }}
              />
            </div>
          </AccessControl>
        </div>
      </CustomModal>
      <CustomModal
        close={toggleDisapprove}
        title={"Disapprove Meal Plan - Payment"}
        open={isDisapprove}
        ClassName="md:w-[40rem] w-[80vw] max-h-[80vh] h-fit overflow-auto"
      >
        <div>
          <S.Divider className="w-full mb-2">
            <S.Label className="text-[#666666] font-medium ml-3">
              Remarks
            </S.Label>
            <textarea
              placeholder="Remarks"
              name="Remarks"
              onChange={(e) => setRemarks(e.target.value)}
              className="w-full resize-none p-3 border border-[#C4C4C4] rounded-md"
              aria-setsize={10}
            />
          </S.Divider>
        </div>
        <div className="w-full flex flex-row items-center gap-[1rem] justify-end mt-2">
          <CustomButton
            leftIcon={<Icon.Cancel className="text-primary" />}
            text="Cancel"
            color={ButtonColor.default}
            type={ButtonType.button}
            onClick={toggleDisapprove}
          />
          <CustomButton
            leftIcon={<Icon.CheckCircle />}
            text="Save"
            type={ButtonType.button}
            onClick={() => {
              const data: PaymentTable = {
                TransactionDate: formatDateForInput(
                  record?.Record?.TransactionDate,
                ),
                TransactionId: record?.Record?.TransactionId,
                UserId: record?.Record?.UserId,
                SubscriptionId: null,
                MealPlanId: record?.Record?.MealPlanId,
                Currency: record?.Record?.Currency,
                Amount: record?.Record?.Amount,
                Method: record?.Record?.Method,
                IsSubscription: false,
                IsMealPlan: Boolean(record?.Record?.IsMealPlan),
                SubscriptionData: null,
                MealPlanData: {
                  Remark: remarks,
                  Notes: record?.Record?.MealPlanData?.Notes,
                  Image: record?.Record?.MealPlanData?.Image,
                  Status: false,
                  IsDisapproved: true,
                },
              };
              update(record?.Record?.Id ?? 0, data);
              toggleDisapprove();
              toggleModal();
            }}
          />
        </div>
      </CustomModal>
    </>
  );
};
export default memo(MealPlanPagePayments);
