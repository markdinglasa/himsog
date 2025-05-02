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
  PayTypeTable,
  SFC,
  ToastType,
} from "../../../../../types";
import { memo, useRef, useState } from "react";
import { Error } from "../../../../../shared";
import { useAuth } from "../../../../../hooks";
import * as S from "../../../../../styles";
import { cn, displayToast } from "../../../../../utils";
import { payTypeValidator } from "../../../../../validators/";
import API from "../../../../../hooks/api";
import Icon from "../../../../../constants/icon";
import FolderOpenIcon from "@mui/icons-material/FolderOpen";
import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import { mdiWalletBifoldOutline } from "@mdi/js";
import UIcon from "@mdi/react";

const PayTypeForm: SFC<FormProps> = ({
  ClassName,
  IsDetails = false,
  RecordId,
  OnClose,
  Title,
}) => {
  const [IsEdit, SetIsEdit] = useState<boolean>(IsDetails);
  const { auth } = useAuth();
  const { add } = API.Setup.PayType.Add();
  const { update } = API.Setup.PayType.Update();
  const { data, isLoading } = API.Setup.PayType.Get(Number(RecordId));
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [imageFile, setImageFile] = useState<File | null>(null);
  const { upload } = API.Utility.UploadImage();
  const InitialValues: PayTypeTable = {
    UserId: data?.UserId || (auth?.user ?? 0),
    Name: data?.Name || "",
    Holder: data?.Holder || "",
    MobileNumber: data?.MobileNumber || "",
    Image: data?.Image || null,
  };

  const handleSubmit = async (values: PayTypeTable): Promise<void> => {
    try {
      // console.log("values:", values);
      const formData = new FormData();
      let imagePath;
      if (imageFile) {
        formData.append("image", imageFile);
        imagePath = await upload(formData);
      }
      values.Image = imagePath || null;

      if (data?.Id) update(Number(data.Id), values);
      else add(values);
      OnClose && OnClose();
    } catch (error: any) {
      displayToast(error.message || Error.m00001, ToastType.error);
    }
  };

  return (
    <S.Container className={cn("overflow-auto", ClassName)}>
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
                  validationSchema={payTypeValidator}
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
                    setFieldValue,
                  }) => {
                    return !isLoading ? (
                      <Form>
                        <S.Divider className="w-full flex md:flex-row flex-col md:gap-2"></S.Divider>
                        <S.Divider className="w-full py-1">
                          <FormControl>
                            <FormLabel
                              id="demo-radio-buttons-group-label"
                              color="success"
                              sx={{
                                fontSize: "small",
                              }}
                            >
                              Online Payment Method
                            </FormLabel>
                            <RadioGroup
                              aria-labelledby="demo-radio-buttons-group-label"
                              name="Name"
                              value={values.Name}
                              onChange={(e) =>
                                setFieldValue("Name", e.target.value)
                              }
                            >
                              <FormControlLabel
                                value="gcash"
                                control={
                                  <Radio
                                    size="small"
                                    sx={{
                                      color: S.colors.primary,
                                      "&.Mui-checked": {
                                        color: S.colors.primary,
                                      },
                                    }}
                                  />
                                }
                                label={
                                  <>
                                    <div className="flex items-center gap-2 justify-center flex-row text-left">
                                      <UIcon
                                        path={mdiWalletBifoldOutline}
                                        size={1}
                                        className="text-blue-400"
                                      />
                                      <span>GCash</span>
                                    </div>
                                  </>
                                }
                              />
                              {/*<FormControlLabel
                                value="maya"
                                control={
                                  <Radio
                                    size="small"
                                    sx={{
                                      color: S.colors.primary,
                                      "&.Mui-checked": {
                                        color: S.colors.primary,
                                      },
                                    }}
                                  />
                                }
                                label={
                                  <>
                                    <div className="flex items-center gap-2 justify-center flex-row text-left">
                                      <UIcon
                                        path={mdiWalletBifoldOutline}
                                        size={1}
                                        className="text-green-400"
                                      />
                                      <span>Maya</span>
                                    </div>
                                  </>
                                }
                              />
                              <FormControlLabel
                                value="gotyme"
                                control={
                                  <Radio
                                    size="small"
                                    sx={{
                                      color: S.colors.primary,
                                      "&.Mui-checked": {
                                        color: S.colors.primary,
                                      },
                                    }}
                                  />
                                }
                                label={
                                  <>
                                    <div className="flex items-center gap-2 justify-center flex-row text-left">
                                      <UIcon
                                        path={mdiWalletBifoldOutline}
                                        size={1}
                                        className="text-green-400"
                                      />
                                      <span>GoTyme</span>
                                    </div>
                                  </>
                                }
                              />*/}
                            </RadioGroup>
                          </FormControl>
                        </S.Divider>
                        <S.Divider className="w-full py-1">
                          <CustomInput
                            errors={errors}
                            type={InputType.text}
                            disabled={IsEdit}
                            label="Holder"
                            value={values?.Holder.toString()}
                            placeholder="e.g. Juan Dela Cruz"
                            name="Holder"
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
                            label="Mobile Number"
                            value={values?.MobileNumber}
                            placeholder="+639 000-000-0000"
                            name="MobileNumber"
                            touched={touched}
                            onChange={handleChange}
                            onBlur={handleBlur}
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
                                  JPG, PNG (max 3MB)
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
                        <AccessControl
                          OtherCondition={
                            typeof data?.Image === "string" &&
                            data?.Image.length > 0 // should display if there is an image
                          }
                        >
                          <S.Divider className="max-w-[10rem] max-h-[10rem] mb-2">
                            <S.Image
                              src={data?.Image ?? ""}
                              className="w-full h-full"
                            />
                          </S.Divider>
                        </AccessControl>
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
                    );
                  }}
                </Formik>
              </S.Divider>
            </S.Divider>
          </S.Divider>
        </S.Divider>
      </S.Content>
    </S.Container>
  );
};

export default memo(PayTypeForm);
