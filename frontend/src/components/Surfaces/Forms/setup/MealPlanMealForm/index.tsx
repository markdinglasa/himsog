import {
  ButtonColor,
  ButtonType,
  FormProps,
  MealPlanLineTable,
  SFC,
  ToastType,
  MealTable,
} from "../../../../../types";
import * as S from "../../../../../styles";
import { Form, Formik } from "formik";
import { AutoComplete, CustomButton } from "../../../../Inputs";
import SaveIcon from "@mui/icons-material/Save";
import { cn, displayToast } from "../../../../../utils";
import Icon from "../../../../../constants/icon";
import { Skeleton } from "../../../../Feedback";
import { memo } from "react";
import { mealPlanLineValidator } from "../../../../../validators";
import { AccessControl } from "../../../../DataDisplay";
import API from "../../../../../hooks/api";
import { useParams } from "react-router-dom";
import { useAuth } from "../../../../../hooks";
import { Checkbox, FormControl, FormControlLabel } from "@mui/material";

export const IngridientForm: SFC<FormProps> = ({
  ClassName,
  IsDetails = false,
  RecordId = 0,
  OnClose,
}) => {
  const IsEdit = IsDetails;
  const { auth } = useAuth();
  const { Id } = useParams<{ Id: string }>();
  const { add } = API.Setup.MealPlanLine.Add();
  const { update } = API.Setup.MealPlanLine.Update();
  const { data, isLoading } = API.Setup.MealPlanLine.Get(Number(RecordId));
  const { data: meals } = API.Setup.Meal.GetAll(Number(auth?.user ?? 0));
  // console.log(data);
  const InitialValues: MealPlanLineTable = {
    MealPlanId: data?.MealPlanId || Number(Id),
    MealId: data?.MealId || 0,
    IsBreakfast: Boolean(data?.IsBreakfast) || false,
    IsLunch: Boolean(data?.IsLunch) || false,
    IsSnack: Boolean(data?.IsSnack) || false,
    IsDinner: Boolean(data?.IsDinner) || false,
  };

  const handleSubmit = async (values: MealPlanLineTable) => {
    try {
      if (Number(RecordId) !== 0) update(Number(RecordId), values);
      else add(values);
    } catch (error: any) {
      displayToast(error.message, ToastType.error);
    } finally {
      OnClose && OnClose();
    }
  };

  return (
    <>
      <S.Container className={cn("w-full", ClassName)}>
        <S.Content className="content">
          {!isLoading ? (
            <S.Divider>
              <Formik
                initialValues={InitialValues}
                onSubmit={handleSubmit}
                enableReinitialize={true}
                validateOnMount={true}
                validationSchema={mealPlanLineValidator}
              >
                {({
                  errors,
                  touched,
                  isValid,
                  isSubmitting,
                  dirty,
                  values,
                  resetForm,
                  handleBlur,
                  setFieldValue,
                  setTouched,
                  handleChange,
                }) => (
                  <Form>
                    <S.Divider className="w-full flex flex-col gap-1">
                      <S.Divider className="w-full -mt-2">
                        <AutoComplete
                          Placeholder="Select MEal"
                          Options={meals ?? []}
                          OptionName="Name"
                          Name="MealId"
                          Label="Meal"
                          Values={values.MealId}
                          Errors={errors}
                          Touched={touched}
                          IsEdit={IsEdit}
                          OnBlur={handleBlur}
                          OnChange={(_: any, value: MealTable) => {
                            setFieldValue("MealId", Number(value?.Id) || 0);
                            setTouched({ MealId: true });
                          }}
                        />
                      </S.Divider>
                      <S.Divider className="w-full ">
                        <FormControl>
                          <S.Divider>
                            <S.Span>Meal Schedule</S.Span>
                          </S.Divider>
                          <FormControlLabel
                            name="IsBreakfast"
                            checked={values.IsBreakfast}
                            control={<Checkbox color="success" />}
                            onChange={handleChange}
                            label="Breakfast"
                          />
                          <FormControlLabel
                            name="IsLunch"
                            checked={values.IsLunch}
                            control={<Checkbox color="success" />}
                            onChange={handleChange}
                            label="Lunch"
                          />
                          <FormControlLabel
                            name="IsSnack"
                            checked={values.IsSnack}
                            control={<Checkbox color="success" />}
                            onChange={handleChange}
                            label="Snack"
                          />
                          <FormControlLabel
                            name="IsDinner"
                            checked={values.IsDinner}
                            control={<Checkbox color="success" />}
                            onChange={handleChange}
                            label="Dinner"
                          />
                        </FormControl>
                      </S.Divider>
                    </S.Divider>
                    <AccessControl OtherCondition={!IsEdit}>
                      <S.Divider className="w-full flex justify-end items-center gap-4">
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

export default memo(IngridientForm);
