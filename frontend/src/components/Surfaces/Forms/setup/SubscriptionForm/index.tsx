import {
  ButtonColor,
  ButtonType,
  FormProps,
  SubscriptionTable,
  InputType,
  SFC,
  ToastType,
} from "../../../../../types";
import * as S from "../../../../../styles";
import { Form, Formik } from "formik";
import { CircleButton, CustomButton, CustomInput } from "../../../../Inputs";
import SaveIcon from "@mui/icons-material/Save";
import { cn, displayToast } from "../../../../../utils";
import Icon from "../../../../../constants/icon";
import { Skeleton } from "../../../../Feedback";
import { memo, useState } from "react";
import { useAuth } from "../../../../../hooks";
import { subscriptionValidator } from "../../../../../validators";
import { AccessControl } from "../../../../DataDisplay";
import API from "../../../../../hooks/api";
import { useParams } from "react-router-dom";

export const SubscriptionForm: SFC<FormProps> = ({
  ClassName,
  Title = "NA",
  IsDetails = true,
}) => {
  const [IsEdit, SetIsEdit] = useState(IsDetails);
  const { Id } = useParams<{ Id: string }>();
  const { auth } = useAuth();
  const { add } = API.Setup.Subscription.Add();
  const { update } = API.Setup.Subscription.Update();
  const { data, isLoading } = API.Setup.Subscription.Get(Number(Id));
  //   console.log("data:", data);
  const InitialValues: SubscriptionTable = {
    Name: data?.Name || "",
    Description: data?.Description || null,
    CreatedBy: data?.CreatedBy || (auth?.user ?? 0),
    UpdatedBy: IsDetails ? auth?.user : null,
    Duration: data?.Duration || 0,
    Price: data?.Price || 0,
  };

  const handleSubmit = async (values: SubscriptionTable) => {
    try {
      // console.log("values:", values);
      if (Id) update(Number(Id), values);
      else add(values);
    } catch (error: any) {
      displayToast(error.message, ToastType.error);
    }
  };

  return (
    <>
      <S.Container className={cn("w-full", ClassName)}>
        <S.Content className="content">
          <S.FormHeader className="flex flex-row items-center justify-between mb-4">
            <S.Span className="text-lg font-medium">{Title}</S.Span>
            <S.Divider>
              <AccessControl OtherCondition={IsDetails}>
                <CircleButton
                  OnClick={() => SetIsEdit(false)}
                  Icon={<Icon.Edit className="text-primary" />}
                  Type={ButtonType.button}
                />
              </AccessControl>
            </S.Divider>
          </S.FormHeader>
          {!isLoading ? (
            <S.Divider>
              <Formik
                initialValues={InitialValues}
                onSubmit={handleSubmit}
                enableReinitialize={true}
                validateOnMount={true}
                validationSchema={subscriptionValidator}
              >
                {({
                  errors,
                  touched,
                  isValid,
                  isSubmitting,
                  handleChange,
                  dirty,
                  values,
                  resetForm,
                }) => (
                  <Form>
                    <S.Divider className="w-full flex flex-col gap-2">
                      <S.Divider className="w-full ">
                        <CustomInput
                          placeholder="e.g. Premium"
                          label="Name"
                          name="Name"
                          errors={errors}
                          touched={touched}
                          value={values.Name}
                          onChange={handleChange}
                          disabled={IsEdit}
                          type={InputType.text}
                        />
                      </S.Divider>
                      <S.Divider className="w-full ">
                        <CustomInput
                          placeholder="e.g. Premium Subscription"
                          label="Description (optional)"
                          name="Description"
                          errors={errors}
                          touched={touched}
                          value={values.Description ?? ""}
                          onChange={handleChange}
                          disabled={IsEdit}
                          type={InputType.text}
                        />
                      </S.Divider>
                      <S.Divider className="w-full flex md:flex-row flex-col gap-4">
                        <S.Divider className="w-full ">
                          <CustomInput
                            placeholder="e.g. 30 days"
                            label="Duration (days)"
                            name="Duration"
                            errors={errors}
                            touched={touched}
                            value={values.Duration.toString()}
                            onChange={handleChange}
                            disabled={IsEdit}
                            type={InputType.number}
                          />
                        </S.Divider>
                        <S.Divider className="w-full">
                          <CustomInput
                            placeholder="e.g. 999"
                            label="Price"
                            name="Price"
                            errors={errors}
                            touched={touched}
                            value={values.Price.toString()}
                            onChange={handleChange}
                            disabled={IsEdit}
                            type={InputType.number}
                          />
                        </S.Divider>
                      </S.Divider>
                    </S.Divider>
                    <AccessControl OtherCondition={!IsEdit}>
                      <S.Divider className="w-full flex justify-end items-center gap-4 mt-1">
                        <CustomButton
                          leftIcon={<Icon.Cancel className="text-primary" />}
                          text="Cancel"
                          onClick={() => {
                            if (IsDetails) SetIsEdit(true);
                            resetForm();
                          }}
                          color={ButtonColor.default}
                          type={ButtonType.button}
                        />
                        <CustomButton
                          leftIcon={
                            <SaveIcon className="text-primary md:text-white" />
                          }
                          disabled={!dirty || !isValid || isSubmitting}
                          text="Save"
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

export default memo(SubscriptionForm);
