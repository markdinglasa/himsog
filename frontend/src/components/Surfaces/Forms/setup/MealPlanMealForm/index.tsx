import {
  ButtonColor,
  ButtonType,
  FormProps,
  MealPlanLineTable,
  SFC,
  ToastType,
  MealTable,
  RouteChannel,
} from "../../../../../types";
import * as S from "../../../../../styles";
import { Form, Formik } from "formik";
import { AutoComplete, CircleButton, CustomButton } from "../../../../Inputs";
import SaveIcon from "@mui/icons-material/Save";
import { cn, displayToast } from "../../../../../utils";
import Icon from "../../../../../constants/icon";
import { Skeleton } from "../../../../Feedback";
import { memo } from "react";
import { mealPlanLineValidator } from "../../../../../validators";
import { AccessControl } from "../../../../DataDisplay";
import API from "../../../../../hooks/api";
import { useNavigate, useParams } from "react-router-dom";
import { useAuth } from "../../../../../hooks";
import { Checkbox, FormControl, FormControlLabel } from "@mui/material";

export const IngridientForm: SFC<FormProps> = ({
  ClassName,
  IsDetails = false,
  RecordId = 0,
  OnClose,
}) => {
  const navigate = useNavigate();
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
    IsMonday: Boolean(data?.IsMonday) || false,
    IsTuesday: Boolean(data?.IsTuesday) || false,
    IsWednesday: Boolean(data?.IsWednesday) || false,
    IsThursday: Boolean(data?.IsThursday) || false,
    IsFriday: Boolean(data?.IsFriday) || false,
    IsSaturday: Boolean(data?.IsSaturday) || false,
    IsSunday: Boolean(data?.IsSunday) || false,
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
                      <S.Divider className="w-full flex items-center justify-start flex-row gap-[1rem]">
                        <S.Divider className="w-full -mt-2">
                          <AutoComplete
                            Placeholder="Select Meal"
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
                        <S.Divider>
                          <CircleButton
                            Icon={<Icon.Add className="text-primary" />}
                            Type={ButtonType.button}
                            Title="New Meal"
                            OnClick={() =>
                              navigate(RouteChannel.NUTRITIONIST_MEAL_NEW)
                            }
                          />
                        </S.Divider>
                      </S.Divider>
                      <S.Divider className="w-full ">
                        <FormControl>
                          <S.Divider>
                            <S.Span>Meals Schedule</S.Span>
                          </S.Divider>
                          <S.Divider className="flex flex-row">
                            <FormControlLabel
                              name="IsBreakfast"
                              checked={values.IsBreakfast}
                              control={<Checkbox color="success" />}
                              onChange={handleChange}
                              disabled={IsEdit}
                              label="Breakfast"
                            />
                            <FormControlLabel
                              name="IsLunch"
                              checked={values.IsLunch}
                              control={<Checkbox color="success" />}
                              onChange={handleChange}
                              disabled={IsEdit}
                              label="Lunch"
                            />
                            <FormControlLabel
                              name="IsSnack"
                              checked={values.IsSnack}
                              control={<Checkbox color="success" />}
                              onChange={handleChange}
                              disabled={IsEdit}
                              label="Snack"
                            />
                            <FormControlLabel
                              name="IsDinner"
                              checked={values.IsDinner}
                              control={<Checkbox color="success" />}
                              onChange={handleChange}
                              disabled={IsEdit}
                              label="Dinner"
                            />
                          </S.Divider>
                        </FormControl>
                      </S.Divider>
                      <S.Divider className="w-full ">
                        <FormControl>
                          <S.Divider>
                            <S.Span>Week Schedule</S.Span>
                          </S.Divider>
                          <S.Divider className="flex flex-row">
                            <FormControlLabel
                              name="IsMonday"
                              checked={values.IsMonday}
                              control={<Checkbox color="success" />}
                              onChange={handleChange}
                              disabled={IsEdit}
                              label="Mon"
                            />
                            <FormControlLabel
                              name="IsTuesday"
                              checked={values.IsTuesday}
                              control={<Checkbox color="success" />}
                              onChange={handleChange}
                              disabled={IsEdit}
                              label="Tue"
                            />
                            <FormControlLabel
                              name="IsWednesday"
                              checked={values.IsWednesday}
                              control={<Checkbox color="success" />}
                              onChange={handleChange}
                              disabled={IsEdit}
                              label="Wed"
                            />
                            <FormControlLabel
                              name="IsThursday"
                              checked={values.IsThursday}
                              control={<Checkbox color="success" />}
                              onChange={handleChange}
                              disabled={IsEdit}
                              label="Thu"
                            />
                            <FormControlLabel
                              name="IsFriday"
                              checked={values.IsFriday}
                              control={<Checkbox color="success" />}
                              onChange={handleChange}
                              disabled={IsEdit}
                              label="Fri"
                            />
                            <FormControlLabel
                              name="IsSaturday"
                              checked={values.IsSaturday}
                              control={<Checkbox color="success" />}
                              onChange={handleChange}
                              disabled={IsEdit}
                              label="Sat"
                            />
                            <FormControlLabel
                              name="IsSunday"
                              checked={values.IsSunday}
                              control={<Checkbox color="success" />}
                              onChange={handleChange}
                              disabled={IsEdit}
                              label="Sun"
                            />
                          </S.Divider>
                        </FormControl>
                      </S.Divider>
                    </S.Divider>
                    <AccessControl OtherCondition={!IsEdit}>
                      <S.Divider className="w-full flex justify-end items-center gap-4 mt-[1rem]">
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
