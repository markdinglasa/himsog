import { ButtonColor, ButtonType, SFC, ToastType } from "../../../../types";
import * as S from "../../../../styles";
import { cn, displayToast, renderRole } from "../../../../utils";
import DefaultImage from "../../../../asset/images/default-image.jpg";
import { memo, useEffect, useState, useRef } from "react";
import { BASE_URL } from "../../../../shared";
import { useAuth, useAxiosPrivate, useToggle } from "../../../../hooks";
import API from "../../../../hooks/api";
import { CustomModal } from "../../../../modals";
import { CustomButton } from "../../../Inputs";
import { AccessControl, Verified } from "../../../DataDisplay";

export const ProfileCard: SFC = ({ ClassName }) => {
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const axios = useAxiosPrivate();
  const { auth } = useAuth();
  const { update } = API.Setup.User.UpdatePhoto();
  const { data } = API.Setup.User.Get(auth?.user ?? 0);
  const [isDisplay, toggleDisplay] = useToggle(false);

  useEffect(() => {
    if (imageFile) {
      const reader = new FileReader();
      reader.onloadend = () => setImagePreview(reader.result as string);
      reader.readAsDataURL(imageFile);
    }
  }, [imageFile]);

  const handleUploadImage = async () => {
    if (!imageFile) {
      displayToast("No image file selected.", ToastType.error);
      return;
    }
    try {
      const formData = new FormData();
      formData.append("image", imageFile);
      const uploadResponse = await axios.post(
        `${BASE_URL}/utility/upload-image`,
        formData,
        { headers: { "Content-Type": "multipart/form-data" } },
      );
      const uploadedImagePath = uploadResponse.data?.path || null;
      update(auth?.user, { ProfilePhoto: uploadedImagePath });
      toggleDisplay(); // Close the modal after successful upload
    } catch (error: any) {
      displayToast(error.message || "No image file selected.", ToastType.error);
    }
  };
  const resetImagePreview = () => {
    setImagePreview(null);
    setImageFile(null);
  };
  // console.log("data:", data);
  const { data: validation } = API.Setup.ProfessionValidtion.GetByUser(
    Number(auth?.user ?? 0),
  );
  return (
    <>
      <S.Container className={cn("w-full bg-white py-3 rounded-md", ClassName)}>
        <S.Content className="w-full flex items-center gap-4">
          {/* Profile Image Upload Section */}
          <label className="relative inline-block w-[100px] h-[100px] rounded-md overflow-hidden cursor-pointer border-primary hover:opacity-90">
            <S.Image
              alt="Profile Image"
              src={data?.ProfilePhoto || DefaultImage}
              className="object-cover w-full h-full"
              onClick={toggleDisplay}
            />
          </label>
          {/* User Details Section */}
          <S.Divider className="flex flex-col h-[80px] justify-center">
            <S.Span className="text-slate-700 text-xl font-bold uppercase flex flex-row gap-2 items-center">
              {data?.Fullname || "N/A"}{" "}
              {(validation?.IsValidated ?? false) ? (
                <Verified ClassName="" />
              ) : null}
            </S.Span>
            <S.Span className="text-zinc-800 uppercase text-sm ">
              {renderRole(data?.Role || "NA")}
            </S.Span>
            <S.Span className="text-zinc-800 text-sm">
              {data?.Email || "N/A"}
            </S.Span>
          </S.Divider>
        </S.Content>
      </S.Container>
      <CustomModal
        close={() => {
          toggleDisplay();
          resetImagePreview();
        }}
        title="Choose profile picture"
        open={isDisplay}
        ClassName="md:w-[30rem] md:h-[30rem] w-[80vw]"
      >
        <S.Divider className="flex flex-col items-center justify-center gap-2">
          <S.Divider className="h-full">
            <label className="relative inline-block border w-full h-[23rem] rounded-md overflow-hidden cursor-pointer ">
              <S.Image
                alt="Profile Image"
                src={imagePreview || (data?.ProfilePhoto ?? DefaultImage)}
                className="object-cover w-full h-full"
                onClick={toggleDisplay}
              />
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
            </label>
          </S.Divider>

          <AccessControl OtherCondition={!imageFile}>
            <S.Divider className="w-full">
              <CustomButton
                text={"Upload Photo"}
                ClassName="w-full"
                onClick={() => fileInputRef.current?.click()} // Correctly trigger file input
                type={ButtonType.button}
                morph={false}
              />
            </S.Divider>
          </AccessControl>
          <AccessControl OtherCondition={imageFile !== null}>
            <S.Divider className=" w-full flex flex-row items-center justify-end gap-2 mb-0">
              <CustomButton
                text="Cancel"
                ClassName="w-full"
                color={ButtonColor.default}
                onClick={() => {
                  toggleDisplay();
                  resetImagePreview();
                }}
                type={ButtonType.button}
                morph={false}
              />
              <CustomButton
                text="Save"
                ClassName="w-full"
                color={ButtonColor.primary}
                onClick={handleUploadImage}
                type={ButtonType.button}
                morph={false}
              />
            </S.Divider>
          </AccessControl>
        </S.Divider>
      </CustomModal>
    </>
  );
};

export default memo(ProfileCard);
