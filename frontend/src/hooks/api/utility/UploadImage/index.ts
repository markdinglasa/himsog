import { useCallback } from "react";
import { ToastType } from "../../../../types";
import { displayToast } from "../../../../utils";
import { useAxiosPrivate } from "../../../useAxiosPrivate";
import { useMutation } from "@tanstack/react-query";
import { BASE_URL } from "../../../../shared";

const useUploadImage = () => {
  const axios = useAxiosPrivate();

  const mutation = useMutation({
    mutationFn: async (data: FormData): Promise<string | null> => {
      const response = await axios.post(
        `${BASE_URL}/utility/upload-image`,
        data,
        { headers: { "Content-Type": "multipart/form-data" } },
      );
      console.log("API Response:", response?.data);
      return response.data?.path || null;
    },
    onSuccess: (imagePath) => {
      console.log("Uploaded Image Path:", imagePath);
    },
    onError: (error: any) => {
      displayToast(
        error?.response?.data?.message || error.message,
        ToastType.error,
      );
    },
  });

  const upload = useCallback(
    async (data: FormData) => {
      if (!data) return;
      return mutation.mutateAsync(data); // Returns the promise to get the path
    },
    [mutation],
  );

  return {
    imagePath: mutation.data, // This holds the returned path
    isLoading: mutation.isPending,
    upload,
  };
};

export default useUploadImage;
