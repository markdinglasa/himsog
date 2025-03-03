import { Form, Formik } from "formik";
import {
  AccessControl,
  AutoComplete,
  CustomButton,
  CustomInput,
  Skeleton,
} from "../../../../../components";
import {
  ButtonColor,
  ButtonType,
  HealthTable,
  InputType,
  RouteChannel,
  SetupForm,
  SFC,
  ToastType,
} from "../../../../../types";
import { memo } from "react";
import { Error } from "../../../../../shared";
import { useAuth } from "../../../../../hooks";
import * as S from "../../../../../styles";
import { displayToast } from "../../../../../utils";
import { healthValidator } from "../../../../../validators/";
import API from "../../../../../hooks/api";
import { useNavigate } from "react-router-dom";

const HealthForm: SFC<SetupForm> = ({ ClassName, IsSetup }) => {
  const { auth } = useAuth();
  const Id = parseInt(auth?.user ?? 0);
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
    <S.Container className={ClassName}>
      <S.Content className="flex justify-center items-center w-full ">
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
                  }) =>
                    !isLoading ? (
                      <Form>
                        <S.Divider className="w-full flex md:flex-row flex-col md:gap-2">
                          <S.Divider className="w-full py-1">
                            <CustomInput
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
                              { Id: "muscle_gain", label: "Muscle Gain" },
                              { Id: "weight_loss", label: "Weight Loss" },
                              { Id: "maintenance", label: "Maintenance" },
                              {
                                Id: "endurance_training",
                                label: "Endurance Training",
                              },
                              {
                                Id: "strength_training",
                                label: "Strength Training",
                              },
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
                        <AccessControl OtherCondition={IsSetup}>
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
