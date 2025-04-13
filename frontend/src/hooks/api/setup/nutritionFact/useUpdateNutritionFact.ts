import { useCallback } from "react";
import {
  APIChannel,
  NutritionFactInitial,
  NutritionFactTable,
  QueryKey,
  ToastType,
} from "../../../../types";
import { displayToast } from "../../../../utils";
import { useAxiosPrivate } from "../../../useAxiosPrivate";
import { Success } from "../../../../shared";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const useUpdateNutritionFact = () => {
  const axios = useAxiosPrivate();
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: async ({
      Id,
      data,
    }: {
      Id: number;
      data: NutritionFactTable;
    }) => {
      const response = await axios.patch(
        `${APIChannel.NUTRITION_FACT_ID.replace(":Id", Id.toString())}`,
        data,
      );
      return response.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QueryKey.NUTRITION_FACT] });
      displayToast(Success.m00004, ToastType.success);
    },
    onError: (error: any) => {
      displayToast(
        error?.response?.data?.message || error.message,
        ToastType.error,
      );
    },
  });

  const update = useCallback(
    (Id: number = 0, data: NutritionFactTable = NutritionFactInitial) => {
      if (Id !== 0 && !data) return;
      mutation.mutate({ Id, data });
    },
    [mutation],
  );

  return {
    data: mutation.data,
    isLoading: mutation.status === "pending",
    update,
  };
};

export default useUpdateNutritionFact;
