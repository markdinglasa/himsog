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
  HealthTable,
  InputType,
  RouteChannel,
  SFC,
  ToastType,
} from "../../../../../types";
import { memo, useState } from "react";
import { Error } from "../../../../../shared";
import { useAuth } from "../../../../../hooks";
import * as S from "../../../../../styles";
import { cn, displayToast } from "../../../../../utils";
import { healthValidator } from "../../../../../validators/";
import API from "../../../../../hooks/api";
import { useNavigate, useParams } from "react-router-dom";
import Icon from "../../../../../constants/icon";

const HealthForm: SFC<FormProps> = ({
  ClassName,
  IsSetup = false,
  IsDetails = false,
  IsDisplay = false,
  Title,
}) => {
  const [IsEdit, SetIsEdit] = useState<boolean>(IsDetails);
  const { auth } = useAuth();
  const { Id: ProfileId } = useParams<{ Id: string }>();
  const Id = IsDisplay ? Number(ProfileId) : parseInt(auth?.user ?? 0);
  const { add } = API.Setup.Health.Add(IsSetup);
  const { update } = API.Setup.Health.Update(IsSetup);
  const { data, isLoading } = API.Setup.Health.Get(Id);
  // console.log("data:", data);
  const navigate = useNavigate();
  const InitialValues: HealthTable = {
    UserId: data?.UserId || (auth?.user ?? 0),
    Weight: data?.Weight || 0,
    Height: data?.Height || 0,
    FitnessGoal: data?.FitnessGoal || "",
    ActivityLevel: data?.ActivityLevel || "",
    PrimaryDiet: data?.PrimaryDiet || "",
  };
  const handleSubmit = async (values: HealthTable): Promise<void> => {
    try {
      if (Object.keys(data).length !== 0) update(Number(data.Id), values);
      else add(values);
    } catch (error: any) {
      displayToast(error.message || Error.m00001, ToastType.error);
    }
  };

  return (
    <S.Container className={cn("", ClassName)}>
      <S.Content className="flex justify-center flex-col items-center w-full ">
        <S.FormHeader className="flex flex-row items-center justify-between">
          <S.Span className="text-lg font-medium">{Title}</S.Span>
          <S.Divider>
            <AccessControl OtherCondition={IsEdit && IsDetails && !IsDisplay}>
              <CircleButton
                OnClick={() => SetIsEdit(false)}
                Icon={<Icon.Edit className="text-primary" />}
                Type={ButtonType.button}
              />
            </AccessControl>
          </S.Divider>
        </S.FormHeader>
        <AccessControl OtherCondition={!IsDisplay}>
          <S.Divider className="w-full text-left mb-3">
            <S.Span className="text-sm text-slate-600">
              Some info may be visible to other people using Himsog services.
              <S.Span className="text-blue-600"> Learn more.</S.Span>
            </S.Span>
          </S.Divider>
        </AccessControl>
        <S.Divider className="flex  w-full  justify-center items-center ">
          <S.Divider className=" w-full">
            <S.Divider className="w-full">
              <S.Divider className="">
                <Formik
                  initialValues={InitialValues}
                  onSubmit={handleSubmit}
                  enableReinitialize={true}
                  validateOnMount={true}
                  validationSchema={healthValidator}
                >
                  {({
                    errors,
                    touched,
                    isSubmitting,
                    handleChange,
                    handleBlur,
                    setFieldValue,
                    values,
                    setTouched,
                    isValid,
                    resetForm,
                  }) =>
                    !isLoading ? (
                      <Form>
                        <S.Divider className="w-full flex md:flex-row flex-col md:gap-2">
                          <S.Divider className="w-full py-1">
                            <CustomInput
                              disabled={IsEdit}
                              errors={errors}
                              type={InputType.number}
                              label="Weight (kg)"
                              value={values?.Weight.toString()}
                              placeholder="Weight"
                              name="Weight"
                              touched={touched}
                              onChange={handleChange}
                              onBlur={handleBlur}
                            />
                          </S.Divider>
                          <S.Divider className="w-full py-1">
                            <CustomInput
                              disabled={IsEdit}
                              errors={errors}
                              type={InputType.number}
                              label="Height (cm)"
                              value={values?.Height.toString()}
                              placeholder="Height"
                              name="Height"
                              touched={touched}
                              onChange={handleChange}
                              onBlur={handleBlur}
                            />
                          </S.Divider>
                        </S.Divider>
                        <S.Divider className="w-full pb-1">
                          <AutoComplete
                            IsEdit={IsEdit}
                            Label={"I want to"}
                            IsTooltip={true}
                            TooltipMessage="Fitness goal Help Description here"
                            Values={values.FitnessGoal}
                            Options={[
                              { Id: "lose fat", Label: "Lose Fat" },
                              {
                                Id: "maintain weight",
                                Label: "Maintain Weight",
                              },
                              { Id: "build muscle", Label: "Build Muscle" },
                            ]}
                            Name="FitnessGoal"
                            OptionName="Label"
                            Placeholder="Fitness Goal"
                            OnChange={(_: any, value: any) => {
                              setFieldValue("FitnessGoal", value?.Id || "");
                              setTouched({ FitnessGoal: true });
                            }}
                            OnBlur={handleBlur}
                            Errors={errors}
                            Touched={touched}
                          />
                        </S.Divider>
                        <S.Divider className="w-full pb-1">
                          <AutoComplete
                            IsEdit={IsEdit}
                            Label="Activity Level"
                            Values={values.ActivityLevel}
                            Options={[
                              { Id: "sedentary", label: "Sedentary" },
                              { Id: "light_activity", label: "Light Activity" },
                              {
                                Id: "moderate_activity",
                                label: "Moderate Activity",
                              },
                              { Id: "high_activity", label: "High Activity" },
                              {
                                Id: "very_high_activity",
                                label: "Very High Activity",
                              },
                              /*{ Id: "muscle_gain", label: "Muscle Gain" },
                              { Id: "weight_loss", label: "Weight Loss" },
                              { Id: "maintenance", label: "Maintenance" },
                              {
                                Id: "endurance_training",
                                label: "Endurance Training",
                              },
                              {
                                Id: "strength_training",
                                label: "Strength Training",
                              },*/
                            ]}
                            Name="ActivityLevel"
                            OptionName="label"
                            Placeholder="Activity Level"
                            OnChange={(_: any, value: any) => {
                              setFieldValue("ActivityLevel", value?.Id || "");
                              setTouched({ ActivityLevel: true });
                            }}
                            OnBlur={handleBlur}
                            Errors={errors}
                            Touched={touched}
                          />
                        </S.Divider>
                        <S.Divider className="w-full pb-1">
                          <AutoComplete
                            IsEdit={IsEdit}
                            Label="PrimaryDiet"
                            Values={values.PrimaryDiet}
                            Options={[
                              { Id: "omnivore", label: "Omnivore" },
                              { Id: "vegetarian", label: "Vegetarian" },
                              { Id: "vegan", label: "Vegan" },
                              { Id: "pescatarian", label: "Pescatarian" },
                              { Id: "flexitarian", label: "Flexitarian" },
                              { Id: "ketogenic", label: "Ketogenic" },
                              { Id: "paleo", label: "Paleo" },
                              { Id: "mediterranean", label: "Mediterranean" },
                              { Id: "low_carb", label: "Low Carb" },
                              { Id: "high_protein", label: "High Protein" },
                              { Id: "gluten_free", label: "Gluten-Free" },
                              { Id: "dairy_free", label: "Dairy-Free" },
                              { Id: "whole_foods", label: "Whole Foods" },
                              { Id: "raw_food", label: "Raw Food" },
                              { Id: "carnivore", label: "Carnivore" },
                            ]}
                            Name="PrimaryDiet"
                            OptionName="label"
                            Placeholder="Primary Diet"
                            OnChange={(_: any, value: any) => {
                              setFieldValue("PrimaryDiet", value?.Id || "");
                              setTouched({ PrimaryDiet: true });
                            }}
                            OnBlur={handleBlur}
                            Errors={errors}
                            Touched={touched}
                          />
                        </S.Divider>
                        <AccessControl OtherCondition={IsSetup && !IsDetails}>
                          <S.Divider className="w-full flex justify-between items-center">
                            <CustomButton
                              text="Back"
                              ClassName=""
                              type={ButtonType.button}
                              color={ButtonColor.default}
                              morph={false}
                              onClick={() =>
                                navigate(RouteChannel.CLIENT_PROFILE_SETUP)
                              }
                            />
                            <CustomButton
                              text="Next"
                              ClassName=""
                              disabled={!isValid || isSubmitting}
                              type={ButtonType.submit}
                              morph={false}
                            />
                          </S.Divider>
                        </AccessControl>
                        <AccessControl OtherCondition={!IsSetup && !IsEdit}>
                          <S.Divider className="w-full flex justify-end items-center gap-3">
                            <CustomButton
                              leftIcon={
                                <Icon.Cancel className="text-primary" />
                              }
                              text="Cancel"
                              ClassName=""
                              color={ButtonColor.default}
                              onClick={() => {
                                SetIsEdit(true);
                                resetForm();
                              }}
                              type={ButtonType.button}
                              morph={false}
                            />
                            <CustomButton
                              leftIcon={<Icon.Save />}
                              text="Save"
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

export default memo(HealthForm);
