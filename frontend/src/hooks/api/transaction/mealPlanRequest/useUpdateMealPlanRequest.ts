import { useCallback } from "react";
import {
  APIChannel,
  MealPlanRequestInitial,
  MealPlanRequestTable,
  QueryKey,
  ToastType,
} from "../../../../types";
import { displayToast } from "../../../../utils";
import { useAxiosPrivate } from "../../../useAxiosPrivate";
import { Success } from "../../../../shared";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const useUpdateMealPlanRequest = () => {
  const axios = useAxiosPrivate();
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: async ({
      Id,
      data,
    }: {
      Id: number;
      data: MealPlanRequestTable;
    }) => {
      const response = await axios.patch(
        `${APIChannel.MEAL_PLAN_REQUEST_ID.replace(":Id", Id.toString())}`,
        data,
      );
      return response.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QueryKey.MEAL_PLAN_REQUEST] });
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
    (Id: number = 0, data: MealPlanRequestTable = MealPlanRequestInitial) => {
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

export default useUpdateMealPlanRequest;
