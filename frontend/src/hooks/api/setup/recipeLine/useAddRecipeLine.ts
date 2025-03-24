import { useCallback } from "react";
import { APIChannel, ToastType, RecipeLineTable } from "../../../../types";
import { displayToast } from "../../../../utils";
import { useAxiosPrivate } from "../../../useAxiosPrivate";
import { Success } from "../../../../shared";
import { useMutation } from "@tanstack/react-query";

const useAddRecipeLine = () => {
  const axios = useAxiosPrivate();

  const mutation = useMutation({
    mutationFn: async (data: RecipeLineTable) => {
      const response = await axios.post(`${APIChannel.RECIPE_LINE}`, data);
      return response.data;
    },
    onSuccess: () => {
      displayToast(Success.m00002, ToastType.success);
    },
    onError: (error: any) => {
      displayToast(
        error?.response?.data?.message || error.message,
        ToastType.error,
      );
    },
  });

  const add = useCallback(
    (data: RecipeLineTable) => {
      if (!data) return;
      mutation.mutate(data);
    },
    [mutation],
  );

  return {
    data: mutation.data,
    isLoading: mutation.status === "pending",
    add,
  };
};

export default useAddRecipeLine;
