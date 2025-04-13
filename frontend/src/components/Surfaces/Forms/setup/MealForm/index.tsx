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
  MealTable,
  SetupForm,
  SFC,
  ToastType,
} from "../../../../../types";
import { memo, useRef, useState } from "react";
import { Error } from "../../../../../shared";
import * as S from "../../../../../styles";
import { cn, displayToast } from "../../../../../utils";
import { mealValidator } from "../../../../../validators/";
import API from "../../../../../hooks/api";
import { useParams } from "react-router-dom";
import Icon from "../../../../../constants/icon";
import FolderOpenIcon from "@mui/icons-material/FolderOpen";
import Ingredients from "../../../../DataDisplay/Ingredients";
import { useAuth } from "../../../../../hooks";

const MealForm: SFC<SetupForm> = ({ ClassName, IsDetails = false, Title }) => {
  const [IsEdit, SetIsEdit] = useState<boolean>(IsDetails);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [imageFile, setImageFile] = useState<File | null>(null);
  const { Id } = useParams<{ Id: string }>();
  const { add } = API.Setup.Meal.Add();
  const { update } = API.Setup.Meal.Update();
  const { data, isLoading } = API.Setup.Meal.Get(Number(Id));
  // console.log(data);
  const { auth } = useAuth();
  const { upload } = API.Utility.UploadImage();

  const InitialValues: MealTable = {
    Name: data?.Name || "",
    Image: data?.Image || null,
    Recipe: data?.Recipe || "",
    Allergen: data?.Allergen || null,
    CreatedBy: data?.CreatedBy || (auth?.user ?? 0),
    UpdatedBy: data?.UpdatedBy || (auth?.user ?? 0),
  };

  const handleSubmit = async (values: MealTable): Promise<void> => {
    try {
      const formData = new FormData();
      let imagePath;
      if (imageFile) {
        formData.append("image", imageFile);
        imagePath = await upload(formData);
      }
      values.Image = imagePath || null;
      if (Id) update(Number(data.Id), values);
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
                  validationSchema={mealValidator}
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
                  }) =>
                    !isLoading ? (
                      <Form>
                        <S.Divider className="w-full py-1 ">
                          <CustomInput
                            disabled={IsEdit}
                            errors={errors}
                            type={InputType.text}
                            label="e.g. Oatmeal with Banana and Honey"
                            value={values?.Name}
                            placeholder="Name"
                            name="Name"
                            touched={touched}
                            onChange={handleChange}
                            onBlur={handleBlur}
                          />
                        </S.Divider>
                        <AccessControl OtherCondition={!!Id}>
                          {/* display only when Id exists */}
                          <S.Divider className="w-full">
                            <Ingredients />
                          </S.Divider>
                          <S.Divider className="w-full py-1 flex flex-col pb-3">
                            <span className="text-[12px] text-[#666666] ml-3">
                              Recipe
                            </span>
                            <textarea
                              className={`w-full h-[10rem] p-3 outline-none bg-inherit resize-none rounded-md border border-[#C4C4C4] rounded-[4px] ${IsEdit ? "text-[#666666]" : "hover:border-[#202020]"}`}
                              placeholder="Recipe"
                              name="Recipe"
                              value={values?.Recipe ?? ""}
                              onChange={handleChange}
                              onBlur={handleBlur}
                              disabled={IsEdit}
                            />
                          </S.Divider>
                          <S.Divider className="w-full py-1 flex flex-col pb-3">
                            <span className="text-[12px] text-[#666666] ml-3">
                              Allergen
                            </span>
                            <textarea
                              className={`w-full h-[10rem] p-3 outline-none bg-inherit resize-none rounded-md border border-[#C4C4C4] rounded-[4px] ${IsEdit ? "text-[#666666]" : "hover:border-[#202020]"}`}
                              placeholder="e.g. Contains nuts, dairy, gluten"
                              name="Allergen"
                              value={values?.Allergen ?? ""}
                              onChange={handleChange}
                              onBlur={handleBlur}
                              disabled={IsEdit}
                            />
                          </S.Divider>
                        </AccessControl>
                        <S.Divider className="w-full mb-[1rem]  relative">
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
                                  Drag & drop your image or click the button to
                                  browse.
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
                              text="Upload photo"
                              onClick={() => fileInputRef.current?.click()}
                              type={ButtonType.button}
                              color={ButtonColor.default}
                            />
                          </S.Divider>
                        </S.Divider>
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
                                setImageFile(null);
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

export default memo(MealForm);
