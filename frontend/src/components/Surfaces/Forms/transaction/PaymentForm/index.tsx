import {
  ButtonColor,
  ButtonType,
  Currency,
  FormProps,
  InputType,
  PaymentStatus,
  PaymentTable,
  Roles,
  RouteChannel,
  SFC,
  ToastType,
} from "../../../../../types";
import * as S from "../../../../../styles";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Form, Formik } from "formik";
import { AutoComplete, CustomButton, CustomInput } from "../../../../Inputs";

import {
  cn,
  displayToast,
  formatDateForInput,
  renderPath,
} from "../../../../../utils";
import Icon from "../../../../../constants/icon";
import { Skeleton } from "../../../../Feedback";
import { memo } from "react";
import { useAuth } from "../../../../../hooks";
import { subscriptionPaymentValidator } from "../../../../../validators";
import { AccessControl } from "../../../../DataDisplay";
import API from "../../../../../hooks/api";
import { useNavigate, useParams } from "react-router-dom";
import { countryOption } from "../../../../../shared";

export const PaymentForm: SFC<FormProps> = ({ ClassName, Title = "NA" }) => {
  const navigate = useNavigate();

  const { Id } = useParams<{ Id: string }>();
  const { auth } = useAuth();
  const path = `${renderPath(auth?.roles as Roles)}/settings`;
  const { add } = API.Transaction.Payment.Add(path as RouteChannel);
  const { data: subscription, isLoading } = API.Setup.Subscription.GetByName(
    Id ?? "",
  );
  // console.log("Subscription:", subscription);
  const { data: user } = API.Setup.User.Get(Number(auth?.user ?? 0));
  const InitialValues: PaymentTable = {
    TransactionDate: formatDateForInput(new Date().toString()),
    TransactionId: `${auth?.user}${subscription?.Id ?? 0}`,
    UserId: auth?.user || 0,
    SubscriptionId: Number(subscription?.Id),
    Currency: Currency.PHP,
    Amount: parseFloat(subscription?.Price) || 0,
    Method: "Debit/Credit",
    MealPlanId: null,
    IsSubscription: true,
    IsMealPlan: false,
    SubscriptionData: {
      BillingAddress: null,
      Status: PaymentStatus.PAID,
      City: "",
      ZIPCode: 0,
      Country: "Philippines",
      Holder: user?.Fullname || " NA",
      CVCNumber: 0,
      ExpiryMonth: "",
      ExpiryYear: "",
      CardNumber: "",
    },
    MealPlanData: null,
  };

  const handleSubmit = async (values: PaymentTable) => {
    try {
      console.log(values);
      // console.log("values:", values);
      add(values);
    } catch (error: any) {
      displayToast(error.message, ToastType.error);
    }
  };

  return (
    <>
      <S.Container className={cn("w-full", ClassName)}>
        <S.Content className="content">
          <S.Divider className="mb-[1rem]">
            <S.Span className="text-lg font-medium">{Title}</S.Span>
          </S.Divider>

          {!isLoading ? (
            <S.Divider>
              <Formik
                initialValues={InitialValues}
                onSubmit={handleSubmit}
                enableReinitialize={true}
                validateOnMount={true}
                validationSchema={subscriptionPaymentValidator} // is not working as it should
              >
                {({
                  errors,
                  touched,
                  isValid,
                  isSubmitting,
                  handleChange,
                  dirty,
                  resetForm,
                  handleBlur,
                  setFieldValue,
                  values,
                }) => (
                  <Form>
                    <S.Divider className="w-full flex flex-col gap-1">
                      <S.Divider className="w-full mb-2">
                        <CustomInput
                          placeholder="e.g. Ginger"
                          label="Full Name"
                          name="Name"
                          errors={errors}
                          touched={touched}
                          value={user?.Fullname || "NA"}
                          onChange={handleChange}
                          disabled={true}
                          type={InputType.text}
                        />
                      </S.Divider>
                      <S.Divider className="w-full py-1">
                        <CustomInput
                          placeholder="House No., Street, Building "
                          label="Billing Address"
                          name="SubscriptionData.BillingAddress"
                          errors={errors}
                          touched={touched}
                          value={values?.SubscriptionData?.BillingAddress ?? ""}
                          onChange={handleChange}
                          type={InputType.text}
                        />
                      </S.Divider>
                      <S.Divider className="w-full flex md:flex-row flex-col gap-4 mb-2 items-center justify-center ">
                        <S.Divider className="w-full py-1">
                          <CustomInput
                            placeholder="City"
                            label="City"
                            name="SubscriptionData.City"
                            value={values?.SubscriptionData?.City}
                            errors={errors}
                            touched={touched}
                            onChange={handleChange}
                            type={InputType.text}
                          />
                        </S.Divider>
                        <S.Divider className="w-full py-1">
                          <CustomInput
                            placeholder="ZIP Code"
                            label="ZIP Code"
                            name="SubscriptionData.ZIPCode"
                            value={values?.SubscriptionData?.ZIPCode.toString()}
                            errors={errors}
                            touched={touched}
                            onChange={handleChange}
                            type={InputType.text}
                          />
                        </S.Divider>
                      </S.Divider>
                    </S.Divider>
                    <S.Divider className="w-full -mt-2">
                      <AutoComplete
                        Placeholder="Country"
                        Options={countryOption}
                        OptionName="Label"
                        Name="SubscriptionData.Country"
                        Label="Country"
                        Values={values.SubscriptionData?.Country}
                        Errors={errors}
                        Touched={touched}
                        OnBlur={handleBlur}
                        OnChange={(_: any, value: any) => {
                          setFieldValue(
                            "SubscriptionData.Country",
                            value?.Id || 0,
                          );
                          //setTouched({ "SubscriptionData.Country": true });
                        }}
                      />
                    </S.Divider>
                    <S.Divider className="w-full mt-2">
                      <S.Divider className="mb-[1rem]">
                        <S.Span className="text-lg font-medium">
                          Debit/Credit Card Info
                        </S.Span>
                      </S.Divider>
                      <S.Divider className="w-full flex md:flex-row flex-col gap-[1rem]">
                        <S.Divider className="w-full py-1">
                          <CustomInput
                            placeholder="e.g. Juan Dela Cruz"
                            label="Card Holder Name"
                            name="SubscriptionData.Holder"
                            errors={errors}
                            value={values?.SubscriptionData?.Holder}
                            touched={touched}
                            onChange={handleChange}
                            type={InputType.text}
                          />
                        </S.Divider>
                        <S.Divider className="w-full py-1">
                          <CustomInput
                            placeholder="e.g. 123"
                            label="CVC Number"
                            name="SubscriptionData.CVCNumber"
                            value={values?.SubscriptionData?.CVCNumber.toString()}
                            errors={errors}
                            touched={touched}
                            onChange={handleChange}
                            type={InputType.text}
                          />
                        </S.Divider>
                      </S.Divider>

                      <S.Divider className="w-full flex md:flex-row flex-col gap-[1rem]">
                        <S.Divider className="w-full py-1">
                          <CustomInput
                            placeholder="e.g. 01"
                            label="Exp. Month"
                            name="SubscriptionData.ExpiryMonth"
                            value={values?.SubscriptionData?.ExpiryMonth.toString()}
                            errors={errors}
                            touched={touched}
                            onChange={handleChange}
                            type={InputType.text}
                          />
                        </S.Divider>
                        <S.Divider className="w-full py-1">
                          <CustomInput
                            placeholder="e.g. 25"
                            label="Exp. year"
                            name="SubscriptionData.ExpiryYear"
                            value={values?.SubscriptionData?.ExpiryYear.toString()}
                            errors={errors}
                            touched={touched}
                            onChange={handleChange}
                            type={InputType.text}
                          />
                        </S.Divider>
                      </S.Divider>

                      <S.Divider className="w-full py-1">
                        <CustomInput
                          placeholder="e.g. 0000 0000 0000 0000"
                          label="Card Number"
                          name="SubscriptionData.CardNumber"
                          value={values?.SubscriptionData?.CardNumber.toString()}
                          errors={errors}
                          touched={touched}
                          onChange={handleChange}
                          type={InputType.text}
                        />
                      </S.Divider>
                    </S.Divider>
                    <AccessControl OtherCondition={true}>
                      <S.Divider className="w-full flex justify-end items-center gap-4 mt-2 ">
                        <CustomButton
                          leftIcon={<Icon.Cancel className="text-primary" />}
                          text="Cancel"
                          onClick={() => {
                            navigate(path);
                            resetForm();
                          }}
                          color={ButtonColor.default}
                          type={ButtonType.button}
                        />
                        <CustomButton
                          leftIcon={
                            <ShoppingCartIcon className="text-primary md:text-white" />
                          }
                          disabled={!dirty || !isValid || isSubmitting}
                          text="Pay Now"
                          type={ButtonType.submit}
                        />
                      </S.Divider>
                    </AccessControl>
                  </Form>
                )}
              </Formik>
            </S.Divider>
          ) : (
            <Skeleton />
          )}
        </S.Content>
      </S.Container>
    </>
  );
};

export default memo(PaymentForm);
