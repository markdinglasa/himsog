import { SFC } from "../../../../types";
import * as S from "../../../../styles";
import { cn } from "../../../../utils";
import DefaultImage from "../../../../asset/images/default-image.jpg";
import { memo, useEffect, useState } from "react";
import { BASE_URL } from "../../../../shared";
import { useAuth, useAxiosPrivate } from "../../../../hooks";
import API from "../../../../hooks/api";

export const ProfileCard: SFC = ({ ClassName }) => {
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const axios = useAxiosPrivate();
  const { auth } = useAuth();
  const { update } = API.Setup.User.Update(false);
  const { data } = API.Setup.User.Get(auth?.user ?? 0);

  useEffect(() => {
    if (imageFile) {
      const reader = new FileReader();
      reader.onloadend = () => setImagePreview(reader.result as string);
      reader.readAsDataURL(imageFile);
    }
  }, [imageFile]);

  const handleUploadImage = async () => {
    if (!imageFile) return;

    try {
      const formData = new FormData();
      formData.append("image", imageFile);

      const uploadResponse = await axios.post(
        `${BASE_URL}/utility/upload-image`,
        formData,
        { headers: { "Content-Type": "multipart/form-data" } },
      );

      const uploadedImagePath = uploadResponse.data?.path || null;
      update(auth?.user, { ...data, ProfilePhoto: uploadedImagePath });
    } catch (error: any) {
      console.error("Image upload failed:", error.message);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImageFile(file);
      handleUploadImage();
    }
  };

  return (
    <S.Container className={cn("w-full bg-white p-2 rounded-md", ClassName)}>
      <S.Content className="w-full flex items-center gap-2">
        {/* Profile Image Upload Section */}
        <label className="relative inline-block w-[100px] h-[80px] rounded-md overflow-hidden cursor-pointer border-primary">
          <S.Image
            alt="Profile Image"
            src={imagePreview || data?.ProfilePhoto || DefaultImage}
            className="object-cover w-full h-full"
          />
          <input
            type="file"
            accept="image/*"
            name="Image"
            onChange={handleFileChange}
            className="absolute inset-0 opacity-0 cursor-pointer"
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
  );
};

export default memo(ProfileCard);
