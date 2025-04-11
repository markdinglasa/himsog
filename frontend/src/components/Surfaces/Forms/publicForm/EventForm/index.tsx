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
  EventTable,
  SFC,
  ToastType,
  FormProps,
  RouteChannel,
  APIChannel,
} from "../../../../../types";
import FolderOpenIcon from "@mui/icons-material/FolderOpen";
import { memo, useRef, useState } from "react";
import { BASE_URL, Error } from "../../../../../shared";
import * as S from "../../../../../styles";
import { displayToast } from "../../../../../utils";
import { eventValidator } from "../../../../../validators/";
import API from "../../../../../hooks/api";
import Icon from "../../../../../constants/icon";
import { useNavigate, useParams } from "react-router-dom";
import { useAuth } from "../../../../../hooks";
import axios from "axios";

const EventForm: SFC<FormProps> = ({
  ClassName,
  IsPublic = false,
  IsDetails = false,
  IsDisplay = false,
  RecordId,
  Title,
  OnClose,
}) => {
  const [IsEdit, SetIsEdit] = useState(IsDetails);
  const { add } = API.Setup.Event.Add();
  const { update } = API.Setup.Event.Update();
  const { Id: ParamsId } = useParams<{ Id: string }>();
  const { token: tk } = useParams<{ token: string }>();
  const AccessToken = tk?.replace("token=", "") || "";
  const Id: number = ParamsId ? Number(ParamsId) : Number(RecordId);
  const { data, isLoading } = API.Setup.Event.Get(Id);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [imageFile, setImageFile] = useState<File | null>(null);
  const { auth } = useAuth();
  const navigate = useNavigate();
  const { upload } = API.Utility.UploadImage();

  // console.log("Event:", data);
  const InitialValues: EventTable = {
    Title: data?.Title || "",
    Image: data?.Image || null,
    Description: data?.Description || null,
    ScheduleDate: data?.ScheduleDate || "",
    Location: data?.Location || "",
    TimeStart: data?.TimeStart || "",
    TimeEnd: data?.TimeEnd || "",
    RegistrationLink: data?.RegistrationLink || null,
    IsValidated: data?.Id ? null : data?.IsValidated || null,
    Remarks: data?.Remarks || null,
    CreatedBy: Number(data?.CreatedBy || (auth?.user ?? 1)),
    UpdatedBy: Number(data?.UpdatedBy || (auth?.user ?? 1)),
  };
  // console.log(AccessToken);
  const handleSubmit = async (values: EventTable): Promise<void> => {
    try {
      const formData = new FormData();
      let imagePath;
      if (imageFile) {
        formData.append("image", imageFile);
        if (!IsPublic) imagePath = await upload(formData);
        else {
          // PUBLIC UPLOAD
          const response = await axios.post(
            `${BASE_URL}/utility/upload-image`,
            formData,
            {
              withCredentials: true,
              headers: {
                Authorization: `Bearer ${AccessToken}`,
                "Content-Type": "multipart/form-data",
              },
            },
          );
          //console.log("API Response:", response?.data);
          imagePath = response.data?.path || null;
        }
      }
      values.Image = imagePath || null;

      if (IsPublic) {
        const response = await axios.post(`${APIChannel.EVENT}`, values, {
          withCredentials: true,
          headers: AccessToken
            ? { Authorization: `Bearer ${AccessToken}` }
            : {},
        });
        // console.log("response:", response);
        if (response?.data?.data) {
          displayToast(
            "Event successfully submitted for validation",
            ToastType.success,
          );
          navigate(RouteChannel.EVENT);
        } else
          displayToast(
            "Something went wrong. please try again later",
            ToastType.error,
          );
      } else {
        if (Id) update(Number(Id), values);
        else add(values);
      }
    } catch (error: any) {
      // console.log("error:", error);
      displayToast(
        error?.response?.data?.message || Error.m00001,
        ToastType.error,
      );
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
            <AccessControl OtherCondition={IsEdit && !IsDisplay}>
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
                            disabled={IsEdit}
                          />
                        </S.Divider>

                        {/*<S.Divider className="w-full flex md:flex-row flex-col md:gap-[1rem] ">
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
                              IsEdit={IsEdit}
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
                              IsEdit={IsEdit}
                            />
                          </S.Divider>
                        </S.Divider>*/}
                        <S.Divider className="w-full py-1 flex flex-col pb-3">
                          <span className="text-[12px] text-[#666666] ml-3">
                            Description (Optional)
                          </span>
                          <textarea
                            className={`w-full h-[10rem] p-3 outline-none bg-inherit resize-none rounded-md border border-[#C4C4C4] rounded-[4px] ${IsEdit ? "text-[#666666]" : "hover:border-[#202020]"}`}
                            placeholder="Description"
                            name="Description"
                            value={values?.Description ?? ""}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            disabled={IsEdit}
                          />
                        </S.Divider>
                        {/*<S.Divider className="w-full flex flex-row gap-[1rem]">
                          <S.Divider className="w-full py-1 ">
                            <CustomInput
                              errors={errors}
                              type={InputType.text}
                              label="Contact Person"
                              value={values?.ContactPerson ?? ""}
                              placeholder="Contact Person"
                              name="ContactPerson"
                              touched={touched}
                              onChange={handleChange}
                              onBlur={handleBlur}
                              disabled={IsEdit}
                            />
                          </S.Divider>
                          <S.Divider className="w-full py-1 ">
                            <CustomInput
                              errors={errors}
                              type={InputType.text}
                              label="Contact Number"
                              value={values?.ContactNumber ?? ""}
                              placeholder="Contact Number"
                              name="ContactNumber"
                              touched={touched}
                              onChange={handleChange}
                              onBlur={handleBlur}
                              disabled={IsEdit}
                            />
                          </S.Divider>
                        </S.Divider>
                        <S.Divider className="w-full py-1 ">
                          <CustomInput
                            errors={errors}
                            type={InputType.email}
                            label="Contact Email"
                            value={values?.ContactEmail ?? ""}
                            placeholder="Contact Email"
                            name="ContactEmail"
                            touched={touched}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            disabled={IsEdit}
                          />
                        </S.Divider>*/}
                        <S.Divider className="w-full flex md:flex-row flex-col md:gap-[1rem]">
                          <S.Divider className="w-full py-1 ">
                            <CustomInput
                              errors={errors}
                              type={InputType.date}
                              label="Date"
                              value={
                                String(
                                  values?.ScheduleDate?.toString() ?? "",
                                ).split("T")[0]
                              }
                              placeholder="Schedule"
                              name="ScheduleDate"
                              touched={touched}
                              onChange={handleChange}
                              onBlur={handleBlur}
                              disabled={IsEdit}
                            />
                          </S.Divider>
                          <S.Divider className="w-full flex flex-row gap-[1rem]">
                            <S.Divider className="w-full py-1 ">
                              <CustomInput
                                errors={errors}
                                type={InputType.time}
                                label="Start Time"
                                value={values?.TimeStart ?? ""}
                                placeholder="TimeStart"
                                name="TimeStart"
                                touched={touched}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                disabled={IsEdit}
                              />
                            </S.Divider>
                            <S.Divider className="w-full py-1 ">
                              <CustomInput
                                errors={errors}
                                type={InputType.time}
                                label="End Time"
                                value={values?.TimeEnd ?? ""}
                                placeholder="TimeEnd"
                                name="TimeEnd"
                                touched={touched}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                disabled={IsEdit}
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
                            disabled={IsEdit}
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
                            disabled={IsEdit}
                          />
                        </S.Divider>
                        <S.Divider className="w-full mb-[1rem]">
                          <S.Divider className="w-full relative border-dashed border-2 border-[#C4C4C4] min-h-[10rem] rounded-md flex flex-col items-center justify-center">
                            <label>
                              <input
                                id="upload-image"
                                type="file"
                                accept="image/*"
                                name="Image"
                                ref={fileInputRef}
                                onChange={(e) => {
                                  const file = e.target.files?.[0];
                                  if (file) {
                                    setImageFile(file);
                                  }
                                }}
                                disabled={IsEdit}
                                className="absolute inset-0 opacity-0 cursor-pointer"
                              />
                            </label>
                            <S.Span>
                              <FolderOpenIcon className="text-slate-600" />
                            </S.Span>
                            {!imageFile ? (
                              <>
                                <S.Span className="text-sm text-slate-600 text-center">
                                  Drag & drop your supporting document or click
                                  the button to browse.
                                </S.Span>
                                <S.Span className="text-sm text-slate-600 mb-3">
                                  PDF, JPG, PNG (max 3MB)
                                </S.Span>
                              </>
                            ) : (
                              <S.Divider className="py-5">
                                <span>
                                  {imageFile?.name || "No file selected"}
                                </span>
                              </S.Divider>
                            )}
                            <CustomButton
                              morph={false}
                              text="Upload Document"
                              onClick={() => fileInputRef.current?.click()}
                              type={ButtonType.button}
                              color={ButtonColor.default}
                              disabled={IsEdit}
                            />
                          </S.Divider>
                        </S.Divider>
                        <AccessControl OtherCondition={IsDisplay}>
                          <S.Divider className="w-full overflow-hidden border-red">
                            <S.Divider className="w-full mb-[1rem]">
                              <S.Image
                                src={data?.Image}
                                alt={data?.Title ?? "event-image"}
                                className="w-full"
                              />
                            </S.Divider>
                          </S.Divider>
                        </AccessControl>
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
                                if (!IsPublic) SetIsEdit(true);
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
