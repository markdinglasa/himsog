import {
  ButtonColor,
  ButtonType,
  FormProps,
  SFC,
  ToastType,
  MealPlanRequestTable,
} from "../../../../../types";
import * as S from "../../../../../styles";
import { Form, Formik } from "formik";
import { CustomButton } from "../../../../Inputs";
import SaveIcon from "@mui/icons-material/Save";
import { cn, displayToast } from "../../../../../utils";
import Icon from "../../../../../constants/icon";
import { memo } from "react";
import { mealPlanRequestValidator } from "../../../../../validators";
import { AccessControl } from "../../../../DataDisplay";
import API from "../../../../../hooks/api";
import { useAuth } from "../../../../../hooks";

export const MealPlanRequestForm: SFC<FormProps> = ({
  ClassName,
  Title,
  OnClose,
  RecordId = 0,
}) => {
  const { add: addMPRequest } = API.Transaction.MealPlanRequest.Add();
  const { auth } = useAuth();

  const InitialValues: MealPlanRequestTable = {
    AdvocateId: Number(auth?.user ?? 0),
    NutritionistId: Number(RecordId),
    Remarks: null,
    MealPlanId: null,
    CreatedBy: auth?.user ?? 0,
  };

  const handleSubmit = async (values: MealPlanRequestTable) => {
    try {
      addMPRequest(values);
    } catch (error: any) {
      displayToast(error.message, ToastType.error);
    } finally {
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
              validationSchema={mealPlanRequestValidator}
            >
              {({ isSubmitting, handleChange, resetForm, handleBlur }) => (
                <Form>
                  <S.Divider className="w-full mb-2">
                    <S.Label className="text-[#666666] font-medium ml-3">
                      Notes (Optional)
                    </S.Label>
                    <textarea
                      placeholder="Notes"
                      name="Remarks"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className="w-full resize-none p-3 border border-[#C4C4C4] rounded-md"
                      aria-setsize={10}
                    />
                  </S.Divider>

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
                      disabled={isSubmitting}
                      text="Save"
                      type={ButtonType.submit}
                    />
                  </S.Divider>
                </Form>
              )}
            </Formik>
          </S.Divider>
        </S.Content>
      </S.Container>
    </>
  );
};
export default memo(MealPlanRequestForm);
