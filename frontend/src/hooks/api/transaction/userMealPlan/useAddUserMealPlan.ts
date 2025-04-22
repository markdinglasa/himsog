import { useCallback } from "react";
import { APIChannel, MealPlanRating, ToastType } from "../../../../types";
import { displayToast } from "../../../../utils";
import { useAxiosPrivate } from "../../../useAxiosPrivate";
import { Success } from "../../../../shared";
import { useMutation } from "@tanstack/react-query";

const useAddUserMealPlan = () => {
  const axios = useAxiosPrivate();

  const mutation = useMutation({
    mutationFn: async (data: MealPlanRating) => {
      const response = await axios.post(`${APIChannel.MEAL_PLAN_RATING}`, data);
      return response.data;
    },
    onSuccess: () => {
      displayToast(Success.m00000, ToastType.success);
    },
    onError: (error: any) => {
      displayToast(
        error?.response?.data?.message || error.message,
        ToastType.error,
      );
    },
  });

  const add = useCallback(
    (data: MealPlanRating) => {
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

export default useAddUserMealPlan;
