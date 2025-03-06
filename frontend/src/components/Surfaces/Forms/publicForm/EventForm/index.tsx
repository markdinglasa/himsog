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
  InputType,
  EventTable,
  SFC,
  ToastType,
  FormProps,
} from "../../../../../types";
import { memo } from "react";
import { Error } from "../../../../../shared";
import * as S from "../../../../../styles";
import { displayToast } from "../../../../../utils";
import { eventValidator } from "../../../../../validators/";
import API from "../../../../../hooks/api";
import Icon from "../../../../../constants/icon";

const EventForm: SFC<FormProps> = ({
  ClassName,
  IsDetails = false,
  RecordId,
  OnClose,
}) => {
  const { add } = API.Setup.Event.Add();
  const { update } = API.Setup.Event.Update();
  const { data, isLoading } = API.Setup.Event.Get(Number(RecordId));

  const InitialValues: EventTable = {
    Title: data?.Title || "",
    Category: data?.Category || "",
    Type: data?.Type || "",
    Image: data?.Image || null,
    Description: data?.Description || null,
    Schedule: data?.Schedule || "",
    Location: data?.Location || "",
    ContactPerson: data?.ContactPerson || "",
    ContactNumber: data?.ContactNumber || "",
    ContactEmail: data?.ContactEmail || "",
    RegistrationLink: data?.RegistrationLink || null,
    IsValidated: data?.IsValidated || false,
  };
  const handleSubmit = async (values: EventTable): Promise<void> => {
    try {
      if (Number(RecordId) !== 0) update(Number(RecordId), values);
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
                  validationSchema={eventValidator}
                >
                  {({
                    errors,
                    touched,
                    isSubmitting,
                    handleChange,
                    handleBlur,
                    values,
                    resetForm,
                    setFieldValue,
                    setTouched,
                    isValid,
                  }) =>
                    !isLoading ? (
                      <Form>
                        <S.Divider className="w-full py-1 border-red">
                          <CustomInput
                            errors={errors}
                            type={InputType.text}
                            label="Title"
                            value={values?.Title}
                            placeholder="Title"
                            name="Title"
                            touched={touched}
                            onChange={handleChange}
                            onBlur={handleBlur}
                          />
                        </S.Divider>
                        <S.Divider className="w-full flex md:flex-row flex-col md:gap-[1rem] border-red">
                          <S.Divider className="w-full border-red">
                            <AutoComplete
                              Label="Event Category"
                              Values={values.Category}
                              Options={[
                                {
                                  Id: "Fitness Program",
                                  label: "Fitness Program",
                                },
                              ]}
                              Name="Category"
                              OptionName="label"
                              Placeholder="Category"
                              OnChange={(_: any, value: any) => {
                                setFieldValue("Category", value?.Id || "");
                                setTouched({ Category: true });
                              }}
                              OnBlur={handleBlur}
                              Errors={errors}
                              Touched={touched}
                            />
                          </S.Divider>
                          <S.Divider className="w-full  border-red">
                            <AutoComplete
                              Label="Event Type"
                              Values={values.Type}
                              Options={[
                                {
                                  Id: "Free",
                                  label: "Free",
                                },
                                {
                                  Id: "Paid",
                                  label: "Paid",
                                },
                              ]}
                              Name="Type"
                              OptionName="label"
                              Placeholder="Type"
                              OnChange={(_: any, value: any) => {
                                setFieldValue("Type", value?.Id || "");
                                setTouched({ Type: true });
                              }}
                              OnBlur={handleBlur}
                              Errors={errors}
                              Touched={touched}
                            />
                          </S.Divider>
                        </S.Divider>
                        <S.Divider className="w-full py-1 border-red">
                          <CustomInput
                            errors={errors}
                            type={InputType.text}
                            label="Description (Optional)"
                            value={values?.Description ?? ""}
                            placeholder="Description"
                            name="Description"
                            touched={touched}
                            onChange={handleChange}
                            onBlur={handleBlur}
                          />
                        </S.Divider>
                        <S.Divider className="w-full flex md:flex-row flex-col md:gap-[1rem]">
                          <S.Divider className="w-full py-1 border-red">
                            <CustomInput
                              errors={errors}
                              type={InputType.date}
                              label="Date"
                              value={values?.Schedule ?? ""}
                              placeholder="Schedule"
                              name="Schedule"
                              touched={touched}
                              onChange={handleChange}
                              onBlur={handleBlur}
                            />
                          </S.Divider>
                          <S.Divider className="w-full py-1 border-red">
                            <CustomInput
                              errors={errors}
                              type={InputType.time}
                              label="Time"
                              value={values?.Schedule ?? ""}
                              placeholder="Schedule"
                              name="Schedule"
                              touched={touched}
                              onChange={handleChange}
                              onBlur={handleBlur}
                            />
                          </S.Divider>
                        </S.Divider>

                        <S.Divider className="w-full py-1  border-red">
                          <CustomInput
                            errors={errors}
                            type={InputType.text}
                            label="Registration URL (Optional)"
                            value={values?.RegistrationLink ?? ""}
                            placeholder="Registration URL"
                            name="RegistrationLink"
                            touched={touched}
                            onChange={handleChange}
                            onBlur={handleBlur}
                          />
                        </S.Divider>
                        <AccessControl OtherCondition={!IsDetails}>
                          <S.Divider className="w-full flex justify-end gap-[1rem] items-center mt-[1rem]  border-red">
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
                                OnClose && OnClose();
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

export default memo(EventForm);
