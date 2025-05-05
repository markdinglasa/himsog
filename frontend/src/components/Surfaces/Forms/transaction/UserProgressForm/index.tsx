import {
  ButtonColor,
  ButtonType,
  FormProps,
  SFC,
  ToastType,
  InputType,
  UserProgress,
} from "../../../../../types";
import * as S from "../../../../../styles";
import { Form, Formik } from "formik";
import { CustomButton, CustomInput } from "../../../../Inputs";
import SaveIcon from "@mui/icons-material/Save";
import { cn, displayToast } from "../../../../../utils";
import Icon from "../../../../../constants/icon";
import { memo } from "react";
import { userProgressValidator } from "../../../../../validators";
import { AccessControl } from "../../../../DataDisplay";
import API from "../../../../../hooks/api";
import { Skeleton } from "../../../../Feedback";

export const UserProgressForm: SFC<FormProps> = ({
  ClassName,
  Title,
  OnClose,
  IsDisplay = false,
  OnRefetch,
  RecordId = 0, // UserMealPlanId - Active MealPlan
}) => {
  const { add } = API.Transaction.userProgress.Add();
  const { data, isLoading } = API.Transaction.userProgress.Get(Number(1));

  const InitialValues: UserProgress = {
    UserMealPlanId: data?.UserMealPlanId || Number(RecordId ?? 0),
    BMI: 0,
  };

  const handleSubmit = async (values: UserProgress) => {
    try {
      add(values);
    } catch (error: any) {
      displayToast(error.message, ToastType.error);
    } finally {
      OnRefetch && OnRefetch();
      OnClose && OnClose();
    }
  };

  return (
    <>
      <S.Container className={cn("w-full mt-2", ClassName)}>
        <S.Content className="content">
          <S.Divider className="flex flex-row items-center justify-between">
            <AccessControl OtherCondition={Title !== null}>
              <S.Span className="text-lg font-medium">{Title}</S.Span>
            </AccessControl>
            <S.Divider></S.Divider>
          </S.Divider>
          <S.Divider>
            <Formik
              initialValues={InitialValues}
              onSubmit={handleSubmit}
              enableReinitialize={true}
              validateOnMount={true}
              validationSchema={userProgressValidator}
            >
              {({
                isValid,
                isSubmitting,
                handleChange,
                dirty,
                resetForm,
                values,
                errors,
                touched,
              }) =>
                !isLoading ? (
                  <Form>
                    <S.Divider className="w-full mb-2">
                      <CustomInput
                        placeholder="BMI"
                        label="BMI"
                        name="BMI"
                        errors={errors}
                        touched={touched}
                        value={String(values?.BMI ?? 0)}
                        onChange={handleChange}
                        disabled={false}
                        type={InputType.number}
                      />
                    </S.Divider>
                    <AccessControl OtherCondition={!IsDisplay}>
                      <S.Divider className="w-full flex justify-end items-center gap-4 ">
                        <CustomButton
                          leftIcon={<Icon.Cancel className="text-primary" />}
                          text="Cancel"
                          onClick={() => {
                            resetForm();
                            OnClose && OnClose();
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
                ) : (
                  <Skeleton />
                )
              }
            </Formik>
          </S.Divider>
        </S.Content>
      </S.Container>
    </>
  );
};
export default memo(UserProgressForm);
