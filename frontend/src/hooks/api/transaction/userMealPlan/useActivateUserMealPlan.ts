import { useMutation, useQueryClient } from "@tanstack/react-query";
import { APIChannel, QueryKey, ToastType } from "../../../../types";
import { displayToast } from "../../../../utils";
import { useAxiosPrivate } from "../../../useAxiosPrivate";

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
      if (!UserId || !MealPlanId) {
        throw new Error("Missing required parameters");
      }

      const url = APIChannel.USER_MEAL_PLANS.replace(":user", UserId.toString())
        .replace(":mealplan", MealPlanId.toString())
        .replace(":active", IsActive.toString());

      const response = await axios.patch(url);
      return response.data;
    },
    onSuccess: () => {
      displayToast(
        `Meal plan ${mutation.variables?.IsActive ? "activated" : "deactivated"}`,
        ToastType.success,
      );
      queryClient.invalidateQueries({ queryKey: [QueryKey.USER_MEAL_PLAN] });
    },
    onError: (error: any) => {
      displayToast(
        error?.response?.data?.message || "Failed to update meal plan status",
        ToastType.error,
      );
    },
  });

  return {
    data: mutation.data,
    isLoading: mutation.isPending,
    update: mutation.mutate,
    reset: mutation.reset,
  };
};

export default useActivateUserMealPlan;
