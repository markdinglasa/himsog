import { useCallback } from "react";
import { APIChannel, QueryKey, ToastType } from "../../../../types";
import { displayToast } from "../../../../utils";
import { useAxiosPrivate } from "../../../useAxiosPrivate";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const useActivateUserMealPlan = () => {
  const axios = useAxiosPrivate();
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: async ({
      UserId,
      MealPlanId,
      IsActive,
    }: {
      UserId: number;
      MealPlanId: number;
      IsActive: number;
    }) => {
      const response = await axios.patch(
        `${APIChannel.USER_MEAL_PLANS.replace(":user", UserId.toString()).replace(":mealplan", MealPlanId.toString()).replace(":active", IsActive.toString())}`,
      );
      return response.data;
    },
    onSuccess: () => {
      displayToast("Meal plan activated", ToastType.success);
      queryClient.invalidateQueries({ queryKey: [QueryKey.USER_MEAL_PLAN] });
    },
    onError: (error: any) => {
      displayToast(
        error?.response?.data?.message || error.message,
        ToastType.error,
      );
    },
  });

  const update = useCallback(
    (UserId: number = 0, MealPlanId: number = 0, IsActive: number = 0) => {
      if (UserId === 0 && MealPlanId === 0) return;
      mutation.mutate({ UserId, MealPlanId, IsActive });
    },
    [mutation],
  );

  return {
    data: mutation.data,
    isLoading: mutation.status === "pending",
    update,
  };
};

export default useActivateUserMealPlan;
