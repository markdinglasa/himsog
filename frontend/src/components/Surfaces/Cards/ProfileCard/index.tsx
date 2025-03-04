import { ButtonColor, ButtonType, SFC, ToastType } from "../../../../types";
import * as S from "../../../../styles";
import { cn, displayToast } from "../../../../utils";
import DefaultImage from "../../../../asset/images/default-image.jpg";
import { memo, useEffect, useState, useRef } from "react";
import { BASE_URL } from "../../../../shared";
import { useAuth, useAxiosPrivate, useToggle } from "../../../../hooks";
import API from "../../../../hooks/api";
import { CustomModal } from "../../../../modals";
import { CustomButton } from "../../../Inputs";
import axios from "axios";

export const ProfileCard: SFC = ({ ClassName }) => {
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

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
      console.error("No image file selected.");
      return;
    }

    console.log("Selected file:", imageFile); // Debugging

    try {
      const formData = new FormData();
      formData.append("Image", imageFile);

      console.log("FormData:", formData.get("Image")); // Debugging

      const uploadResponse = await axios.post(
        `${BASE_URL}/utility/upload-image`,
        formData,
        { headers: { "Content-Type": "multipart/form-data" } },
      );

      const uploadedImagePath = uploadResponse.data?.path || null;
      console.log("ImagePath:", uploadedImagePath);
      //update(auth?.user, { ProfilePhoto: uploadedImagePath });
      toggleDisplay(); // Close the modal after successful upload
    } catch (error: any) {
      console.error("Image upload failed:", error.message);
      // Optionally, show a toast or alert to the user
    }
  };
  const resetImagePreview = () => {
    setImagePreview(null);
    setImageFile(null);
  };

  return (
    <>
      <S.Container className={cn("w-full bg-white p-2 rounded-md", ClassName)}>
        <S.Content className="w-full flex items-center gap-2">
          {/* Profile Image Upload Section */}
          <label className="relative inline-block w-[100px] h-[80px] rounded-md overflow-hidden cursor-pointer border-primary">
            <S.Image
              alt="Profile Image"
              src={data?.ProfilePhoto || DefaultImage}
              className="object-cover w-full h-full"
              onClick={toggleDisplay}
            />
          </label>
          {/* User Details Section */}
          <S.Divider className="flex flex-col h-[80px] justify-center">
            <S.Span className="text-slate-700 text-xl font-bold uppercase">
              {data?.Fullname || "N/A"}
            </S.Span>
            <S.Span className="text-zinc-800 uppercase text-sm">
              {data?.Role || "N/A"}
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
        ClassName="md:w-[500px] w-[80vw]"
      >
        <S.Divider>
          <S.Divider>
            <label className="relative inline-block border-red w-full h-[200px] rounded-md overflow-hidden cursor-pointer border-primary">
              <S.Image
                alt="Profile Image"
                src={imagePreview || DefaultImage}
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
          <S.Divider className=" w-full">
            <CustomButton
              text={"Upload Photo"}
              ClassName="w-full"
              onClick={() => fileInputRef.current?.click()} // Correctly trigger file input
              type={ButtonType.button}
              morph={false}
            />
          </S.Divider>
          <S.Divider className=" w-full flex flex-row gap-2">
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
        </S.Divider>
      </CustomModal>
    </>
  );
};

export default memo(ProfileCard);
