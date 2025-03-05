import { Form, Formik } from "formik";
import {
  AccessControl,
  CircleButton,
  CustomButton,
  CustomInput,
  Skeleton,
} from "../../../../../components";
import {
  ButtonColor,
  ButtonType,
  InputType,
  ProfessionTable,
  RouteChannel,
  SetupForm,
  SFC,
  ToastType,
} from "../../../../../types";
import { memo, useState } from "react";
import { Error } from "../../../../../shared";
import { useAuth } from "../../../../../hooks";
import * as S from "../../../../../styles";
import { displayToast } from "../../../../../utils";
import { professionValidator } from "../../../../../validators/";
import API from "../../../../../hooks/api";
import { useNavigate } from "react-router-dom";
import Icon from "../../../../../constants/icon";

const ProfessionForm: SFC<SetupForm> = ({
  ClassName,
  IsSetup = false,
  Redirect = RouteChannel.INDEX,
  IsRedirect = false,
  IsDetails = false,
  Title,
}) => {
  const [IsEdit, SetIsEdit] = useState<boolean>(IsDetails);
  const { auth } = useAuth();
  const Id = parseInt(auth?.user ?? 0);
  const { add } = API.Setup.Profession.Add(IsSetup, Redirect, IsRedirect);
  const { update } = API.Setup.Profession.Update(IsSetup, Redirect, IsRedirect);
  const { data, isLoading } = API.Setup.Profession.Get(Id);
  // console.log("data:", data);
  const navigate = useNavigate();
  const InitialValues: ProfessionTable = {
    UserId: data?.UserId || (auth?.user ?? 0),
    Title: data?.Title || "",
    LicenseNumber: data?.LicenseNumber || "",
    YearsExp: data?.YearsExp || 0,
    Description: data?.Description || "",
    IsVerified: data?.IsVerified || false,
  };
  const handleSubmit = async (values: ProfessionTable): Promise<void> => {
    try {
      if (Object.keys(data).length !== 0) update(Number(data.Id), values);
      else add(values);
    } catch (error: any) {
      displayToast(error.message || Error.m00001, ToastType.error);
    }
  };

  return (
    <S.Container className={ClassName}>
      <S.Content className="flex justify-center items-center w-full flex-col ">
        <S.FormHeader className="flex flex-row items-center justify-between mb-3">
          <S.Span className="text-lg font-medium">{Title}</S.Span>
          <S.Divider>
            <AccessControl OtherCondition={IsEdit && IsDetails}>
              <CircleButton
                OnClick={() => SetIsEdit(false)}
                Icon={<Icon.Edit className="text-primary" />}
                Type={ButtonType.button}
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
                  validationSchema={professionValidator}
                >
                  {({
                    errors,
                    touched,
                    isSubmitting,
                    handleChange,
                    handleBlur,
                    values,
                    resetForm,
                    isValid,
                  }) =>
                    !isLoading ? (
                      <Form>
                        <S.Divider className="w-full flex md:flex-row flex-col md:gap-2"></S.Divider>
                        <S.Divider className="w-full py-1">
                          <CustomInput
                            errors={errors}
                            type={InputType.text}
                            label="Title"
                            disabled={IsEdit}
                            value={values?.Title.toString()}
                            placeholder="e.g. Nutritionist"
                            name="Title"
                            touched={touched}
                            onChange={handleChange}
                            onBlur={handleBlur}
                          />
                        </S.Divider>
                        <S.Divider className="w-full py-1">
                          <CustomInput
                            errors={errors}
                            type={InputType.text}
                            disabled={IsEdit}
                            label="License Number"
                            value={values?.LicenseNumber.toString()}
                            placeholder="Valid License Number"
                            name="LicenseNumber"
                            touched={touched}
                            onChange={handleChange}
                            onBlur={handleBlur}
                          />
                        </S.Divider>
                        <S.Divider className="w-full py-1">
                          <CustomInput
                            errors={errors}
                            type={InputType.number}
                            disabled={IsEdit}
                            label="Years of Experience"
                            value={values?.YearsExp.toString()}
                            placeholder="e.g. 3 years"
                            name="YearsExp"
                            touched={touched}
                            onChange={handleChange}
                            onBlur={handleBlur}
                          />
                        </S.Divider>
                        <S.Divider className="w-full py-1">
                          <CustomInput
                            errors={errors}
                            type={InputType.text}
                            disabled={IsEdit}
                            label="Description (optional)"
                            value={values?.Description.toString()}
                            placeholder="Description"
                            name="Description"
                            touched={touched}
                            onChange={handleChange}
                            onBlur={handleBlur}
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
                                navigate(
                                  RouteChannel.NUTRITIONIST_PROFILE_SETUP,
                                )
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
                          <S.Divider className="w-full flex justify-end gap-3 items-center">
                            <CustomButton
                              leftIcon={
                                <Icon.Cancel className="text-primary" />
                              }
                              text="Cancel"
                              ClassName=""
                              type={ButtonType.button}
                              color={ButtonColor.default}
                              morph={false}
                              onClick={() => {
                                SetIsEdit(true);
                                resetForm();
                              }}
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

export default memo(ProfessionForm);
