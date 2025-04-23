import { Form, Formik } from "formik";
import {
  AccessControl,
  AutoComplete,
  CircleButton,
  CustomButton,
  CustomInput,
  Skeleton,
} from "../../../../../components";
import {
  ButtonColor,
  ButtonType,
  FormProps,
  InputType,
  MealPlanTable,
  SFC,
  ToastType,
} from "../../../../../types";
import { memo, useState } from "react";
import { DieteryPreferences, Error } from "../../../../../shared";
import * as S from "../../../../../styles";
import { cn, displayToast } from "../../../../../utils";
import { mealPlanValidator } from "../../../../../validators/";
import API from "../../../../../hooks/api";
import { useParams } from "react-router-dom";
import Icon from "../../../../../constants/icon";
import { useAuth } from "../../../../../hooks";
import {
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import MealPlanMeals from "../../../../DataDisplay/MealPlanMeals";

const MealPlanForm: SFC<FormProps> = ({
  ClassName,
  IsDetails = false,
  Title,
  IsDisplay = false,
}) => {
  const [IsEdit, SetIsEdit] = useState<boolean>(IsDetails);

  const { Id } = useParams<{ Id: string }>();
  const { add } = API.Setup.MealPlan.Add();
  const { update } = API.Setup.MealPlan.Update();
  const { data, isLoading } = API.Setup.MealPlan.Get(Number(Id));
  const { auth } = useAuth();
  // console.log(data);
  const InitialValues: MealPlanTable = {
    Name: data?.Name || "",
    UserId: data?.UserId || (auth?.user ?? 0),
    Type: data?.Type || "",
    Price: data?.Price || 0,
    Description: data?.Description || null,
    Duration: data?.Duration || 0,
    Diet: data?.Diet || "",
  };

  const handleSubmit = async (values: MealPlanTable): Promise<void> => {
    try {
      if (Id) update(Number(data.Id), values);
      else add(values);
    } catch (error: any) {
      displayToast(error.message || Error.m00001, ToastType.error);
    }
  };

  return (
    <S.Container className={cn("w-full", ClassName)}>
      <S.Content className="flex justify-center flex-col items-center w-full ">
        <S.FormHeader className="flex flex-row items-center justify-between ">
          <S.Span className="text-lg font-medium">{Title}</S.Span>
          <S.Divider>
            <AccessControl OtherCondition={IsEdit && !IsDisplay}>
              <CircleButton
                OnClick={() => SetIsEdit(false)}
                Icon={<Icon.Edit className="text-primary" />}
                Type={ButtonType.button}
                Title="Edit"
              />
            </AccessControl>
          </S.Divider>
        </S.FormHeader>
        <S.Divider className="flex  w-full  justify-center items-center ">
          <S.Divider className=" w-full">
            <S.Divider className="w-full">
              <S.Divider className="">
                <Formik
                  initialValues={InitialValues}
                  onSubmit={handleSubmit}
                  enableReinitialize={true}
                  validateOnMount={true}
                  validationSchema={mealPlanValidator}
                >
                  {({
                    errors,
                    touched,
                    isSubmitting,
                    handleChange,
                    handleBlur,
                    values,
                    isValid,
                    resetForm,
                    setFieldValue,
                    setTouched,
                  }) =>
                    !isLoading ? (
                      <Form>
                        <S.Divider className="">
                          <S.Divider className="w-full py-1 ">
                            <CustomInput
                              disabled={IsEdit}
                              errors={errors}
                              type={InputType.text}
                              label="Name"
                              value={values?.Name}
                              placeholder="e.g. Balance High-Protein Diet"
                              name="Name"
                              touched={touched}
                              onChange={handleChange}
                              onBlur={handleBlur}
                            />
                          </S.Divider>
                          <S.Divider className="w-full py-1 flex flex-col pb-3">
                            <span className="text-[12px] text-[#666666] ml-3">
                              Description (Optional)
                            </span>
                            <textarea
                              className={`w-full h-[10rem] overflow-auto p-3 outline-none bg-inherit resize-none rounded-md border border-[#C4C4C4] rounded-[4px] ${IsEdit ? "text-[#666666]" : "hover:border-[#202020]"}`}
                              placeholder="Describe about this meal plan."
                              name="Description"
                              value={values?.Description ?? ""}
                              onChange={handleChange}
                              onBlur={handleBlur}
                              disabled={IsEdit}
                            />
                          </S.Divider>
                          <S.Divider className="w-full -mt-2">
                            <AutoComplete
                              Placeholder="Select the primary diet category that best fits this meal plan"
                              Options={DieteryPreferences}
                              OptionName="Label"
                              Name="Diet"
                              Label="Primary Diet"
                              Values={values.Diet}
                              Errors={errors}
                              Touched={touched}
                              IsEdit={IsEdit}
                              OnBlur={handleBlur}
                              OnChange={(_: any, value: any) => {
                                setFieldValue("Diet", value?.Id || 0);
                                setTouched({ Diet: true });
                              }}
                            />
                          </S.Divider>
                        </S.Divider>
                        <S.Divider className="flex items-center justify-start flex-col md:flex-row gap-[1rem]">
                          <S.Divider className="flex items-center justify-start flex-row gap-[1rem] w-full md:w-8/12">
                            <S.Divider className="w-full md:w-6/12">
                              <FormControl>
                                <S.Span className="text-[13px] text-[#666666] ml-2">
                                  Set your meal plan pricing
                                </S.Span>
                                <RadioGroup
                                  row
                                  aria-labelledby="demo-row-radio-buttons-group-label"
                                  name="Type"
                                >
                                  <FormControlLabel
                                    value="Free"
                                    control={
                                      <Radio
                                        color="success"
                                        name="Type"
                                        checked={values.Type == "Free"}
                                        onChange={handleChange}
                                        disabled={IsEdit}
                                      />
                                    }
                                    label="Free"
                                  />
                                  <FormControlLabel
                                    value="Paid"
                                    control={
                                      <Radio
                                        color="success"
                                        name="Type"
                                        checked={values.Type == "Paid"}
                                        onChange={handleChange}
                                        disabled={IsEdit}
                                      />
                                    }
                                    label="Paid"
                                  />
                                </RadioGroup>
                              </FormControl>
                            </S.Divider>
                            <AccessControl
                              OtherCondition={values.Type === "Paid"}
                            >
                              <S.Divider className="py-1 mt-3 w-full md:w-6/12">
                                <CustomInput
                                  disabled={IsEdit}
                                  errors={errors}
                                  type={InputType.number}
                                  label="Price"
                                  value={values?.Price.toString()}
                                  name="Price"
                                  touched={touched}
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                  ClassName="w-full"
                                />
                              </S.Divider>
                            </AccessControl>
                          </S.Divider>
                          <S.Divider className="py-1 mt-3 w-full ">
                            <CustomInput
                              disabled={IsEdit}
                              errors={errors}
                              type={InputType.number}
                              label="Duration (Days)"
                              value={values?.Duration.toString()}
                              name="Duration"
                              touched={touched}
                              onChange={handleChange}
                              onBlur={handleBlur}
                              ClassName="w-full"
                            />
                          </S.Divider>
                        </S.Divider>
                        <AccessControl OtherCondition={!!Id}>
                          {/* display only when Id exists */}
                          <S.Divider className="w-full border-t pt-[1rem]">
                            <MealPlanMeals IsDetails={IsEdit} />
                          </S.Divider>
                        </AccessControl>
                        <AccessControl OtherCondition={!IsEdit}>
                          <S.Divider className="w-full flex justify-end items-center gap-3">
                            <CustomButton
                              leftIcon={
                                <Icon.Cancel className="text-primary" />
                              }
                              text="Cancel"
                              ClassName=""
                              color={ButtonColor.default}
                              onClick={() => {
                                if (IsDetails) SetIsEdit(true);

                                resetForm();
                              }}
                              type={ButtonType.button}
                              morph={false}
                            />
                            <CustomButton
                              leftIcon={Id ? <Icon.Save /> : <Icon.Forward />}
                              text={Id ? "Save" : "Next"}
                              ClassName=""
                              disabled={!isValid || isSubmitting}
                              type={ButtonType.submit}
                              morph={false}
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
            </S.Divider>
          </S.Divider>
        </S.Divider>
      </S.Content>
    </S.Container>
  );
};

export default memo(MealPlanForm);
