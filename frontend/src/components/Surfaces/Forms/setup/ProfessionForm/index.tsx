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
  FormProps,
  InputType,
  ProfessionTable,
  SFC,
  ToastType,
} from "../../../../../types";
import { memo, useRef, useState } from "react";
import { BASE_URL, Error } from "../../../../../shared";
import { useAuth, useAxiosPrivate } from "../../../../../hooks";
import * as S from "../../../../../styles";
import { displayToast } from "../../../../../utils";
import { professionValidator } from "../../../../../validators/";
import API from "../../../../../hooks/api";
import Icon from "../../../../../constants/icon";
import FolderOpenIcon from "@mui/icons-material/FolderOpen";

const ProfessionForm: SFC<FormProps> = ({
  ClassName,
  IsDetails = false,
  RecordId,
  OnClose,
  Title,
}) => {
  const [IsEdit, SetIsEdit] = useState<boolean>(IsDetails);
  const { auth } = useAuth();
  const { add } = API.Setup.Profession.Add();
  const { update } = API.Setup.Profession.Update();
  const { data, isLoading } = API.Setup.Profession.Get(Number(RecordId));
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [imageFile, setImageFile] = useState<File | null>(null);
  const axios = useAxiosPrivate();

  const InitialValues: ProfessionTable = {
    UserId: data?.UserId || (auth?.user ?? 0),
    Title: data?.Title || "",
    LicenseNumber: data?.LicenseNumber || "",
    Issuer: data?.Issuer || "",
    DateIssued: data?.DateIssued || "",
    DateExpired: data?.DateExpired || "",
    Document: data?.Document || null,
  };

  const handleSubmit = async (values: ProfessionTable): Promise<void> => {
    try {
      const formData = new FormData();
      if (imageFile) {
        formData.append("image", imageFile);
      }
      const uploadResponse = await axios.post(
        `${BASE_URL}/utility/upload-image`,
        formData,
        { headers: { "Content-Type": "multipart/form-data" } },
      );
      const uploadedImagePath = uploadResponse.data?.path || null;
      values.Document = uploadedImagePath;
      if (data?.Id) update(Number(data.Id), values);
      else add(values);
      OnClose && OnClose();
    } catch (error: any) {
      displayToast(error.message || Error.m00001, ToastType.error);
    }
  };

  return (
    <S.Container className={ClassName}>
      <S.Content className="flex justify-center items-center w-full flex-col ">
        <AccessControl OtherCondition={IsEdit && IsDetails}>
          <S.FormHeader className="flex flex-row items-center justify-between mb-3">
            <S.Divider className="flex flex-col items-start">
              <S.Span className="text-lg font-medium">{Title}</S.Span>
            </S.Divider>
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
                            placeholder="e.g. Registered Nutritionist-Dietitian"
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
                            placeholder="e.g. RND-199485"
                            name="LicenseNumber"
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
                            label="Issuer"
                            value={values?.Issuer}
                            placeholder="e.g. Professional Regulation Commission (PRC)"
                            name="Issuer"
                            touched={touched}
                            onChange={handleChange}
                            onBlur={handleBlur}
                          />
                        </S.Divider>
                        <S.Divider className="w-full flex md:flex-row flex-col gap-[1rem]">
                          <S.Divider className="w-full py-1">
                            <CustomInput
                              errors={errors}
                              type={InputType.date}
                              label="Date Issued"
                              disabled={IsEdit}
                              value={
                                String(
                                  values.DateIssued?.toString() ?? "",
                                ).split("T")[0]
                              }
                              name="DateIssued"
                              touched={touched}
                              onChange={handleChange}
                              onBlur={handleBlur}
                            />
                          </S.Divider>
                          <S.Divider className="w-full py-1">
                            <CustomInput
                              errors={errors}
                              type={InputType.date}
                              label="Expiry Date"
                              disabled={IsEdit}
                              value={
                                String(
                                  values.DateExpired?.toString() ?? "",
                                ).split("T")[0]
                              }
                              name="DateExpired"
                              touched={touched}
                              onChange={handleChange}
                              onBlur={handleBlur}
                            />
                          </S.Divider>
                        </S.Divider>
                        <S.Divider className="w-full mb-[1rem]">
                          <S.Divider className="w-full border-dashed border-2 border-[#C4C4C4] min-h-[10rem] rounded-md flex flex-col items-center justify-center">
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
                              className="absolute inset-0 opacity-0 cursor-pointer"
                            />
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
                            />
                          </S.Divider>
                        </S.Divider>
                        {/*<AccessControl OtherCondition={IsSetup}>
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
                        </AccessControl>*/}
                        <AccessControl OtherCondition={!IsEdit}>
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

export default memo(ProfessionForm);
