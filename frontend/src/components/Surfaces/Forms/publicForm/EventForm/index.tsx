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
  InputType,
  EventTable,
  SFC,
  ToastType,
  FormProps,
} from "../../../../../types";
import FolderOpenIcon from "@mui/icons-material/FolderOpen";
import { memo, useState } from "react";
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
  Title,
  OnClose,
}) => {
  const [IsEdit, SetIsEdit] = useState(false);
  const { add } = API.Setup.Event.Add();
  const { update } = API.Setup.Event.Update();
  const { data, isLoading } = API.Setup.Event.Get(Number(RecordId));

  const InitialValues: EventTable = {
    Title: data?.Title || "",
    Category: data?.Category || "",
    Type: data?.Type || "",
    Image: data?.Image || null,
    Description: data?.Description || null,
    ScheduleDate: data?.Schedule || "",
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
      <S.Content className="flex justify-center items-center w-full flex-col">
        <S.FormHeader className="flex flex-row items-center justify-between mb-4">
          <S.Divider className="flex flex-col w-full">
            <S.Span className="text-lg font-medium">{Title}</S.Span>
            <S.Span className="text-sm ">
              Fill in the details below to create a health and nutrition event.
            </S.Span>
          </S.Divider>
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
        <S.Divider className="flex w-full justify-center items-center">
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
                        <S.Divider className="w-full pt-2 ">
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
                        <S.Divider className="w-full py-1 flex flex-col pb-2">
                          <span className="text-[12px] text-[#666666] ml-3">
                            Description (Optional)
                          </span>
                          <textarea
                            className={`w-full h-[10rem] p-3 outline-none bg-inherit resize-none rounded-md border border-[#C4C4C4] rounded-[4px] ${IsEdit ? "" : "hover:border-[#202020]"}`}
                            placeholder="Leave a Message"
                            name="Message"
                            onChange={handleChange}
                            onBlur={handleBlur}
                          />
                        </S.Divider>
                        <S.Divider className="w-full flex md:flex-row flex-col md:gap-[1rem] ">
                          <S.Divider className="w-full ">
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
                          <S.Divider className="w-full  ">
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
                        <S.Divider className="w-full flex md:flex-row flex-col md:gap-[1rem]">
                          <S.Divider className="w-full py-1 ">
                            <CustomInput
                              errors={errors}
                              type={InputType.date}
                              label="Date"
                              value={values?.ScheduleDate ?? ""}
                              placeholder="Schedule"
                              name="Schedule"
                              touched={touched}
                              onChange={handleChange}
                              onBlur={handleBlur}
                            />
                          </S.Divider>
                          <S.Divider className="w-full flex flex-row gap-[1rem]">
                            <S.Divider className="w-full py-1 ">
                              <CustomInput
                                errors={errors}
                                type={InputType.time}
                                label="Start Time"
                                value={values?.ScheduleTime ?? ""}
                                placeholder="Schedule"
                                name="Schedule"
                                touched={touched}
                                onChange={handleChange}
                                onBlur={handleBlur}
                              />
                            </S.Divider>
                            <S.Divider className="w-full py-1 ">
                              <CustomInput
                                errors={errors}
                                type={InputType.time}
                                label="End Time"
                                value={values?.ScheduleTime ?? ""}
                                placeholder="Schedule"
                                name="Schedule"
                                touched={touched}
                                onChange={handleChange}
                                onBlur={handleBlur}
                              />
                            </S.Divider>
                          </S.Divider>
                        </S.Divider>
                        <S.Divider className="w-full py-1  ">
                          <CustomInput
                            errors={errors}
                            type={InputType.text}
                            label="Location"
                            value={values?.Location ?? ""}
                            placeholder="Location"
                            name="Location"
                            touched={touched}
                            onChange={handleChange}
                            onBlur={handleBlur}
                          />
                        </S.Divider>
                        <S.Divider className="w-full py-1  ">
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
                        <S.Divider className="w-full mb-[1rem] mt-1">
                          <S.Divider className="w-full border-dashed border-2 border-[#C4C4C4] min-h-[10rem] rounded-md flex flex-col items-center justify-center">
                            <S.Span>
                              <FolderOpenIcon className="text-slate-600" />
                            </S.Span>
                            <S.Span className="text-sm text-slate-600 text-center">
                              Drag & drop your supporting document or click the
                              button to browse.
                            </S.Span>
                            <S.Span className="text-sm text-slate-600 mb-3">
                              PDF, JPG, PNG (max 3MB)
                            </S.Span>
                            <CustomButton
                              morph={false}
                              text="Upload Document"
                              color={ButtonColor.default}
                            />
                          </S.Divider>
                        </S.Divider>
                        <AccessControl OtherCondition={!IsEdit}>
                          <S.Divider className="w-full flex justify-end gap-[1rem] items-center ">
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
