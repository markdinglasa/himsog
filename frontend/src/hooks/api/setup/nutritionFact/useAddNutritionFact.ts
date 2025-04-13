import { useCallback } from "react";
import {
  APIChannel,
  ToastType,
  NutritionFactTable,
  QueryKey,
} from "../../../../types";
import { displayToast } from "../../../../utils";
import { useAxiosPrivate } from "../../../useAxiosPrivate";
import { Success } from "../../../../shared";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const useAddNutritionFact = () => {
  const axios = useAxiosPrivate();
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: async (data: NutritionFactTable) => {
      const response = await axios.post(`${APIChannel.NUTRITION_FACT}`, data);
      return response.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QueryKey.NUTRITION_FACT] });
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
    (data: NutritionFactTable) => {
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

export default useAddNutritionFact;
