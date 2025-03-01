import { useCallback } from "react";
import {
  APIChannel,
  RouteChannel,
  ToastType,
  MealPlanTable,
  MealPlanInitial,
} from "../../../../types";
import { displayToast } from "../../../../utils";
import { useAxiosPrivate } from "../../../useAxiosPrivate";
import { useNavigate } from "react-router-dom";
import { Success } from "../../../../shared";
import { useMutation } from "@tanstack/react-query";

const useUpdateMealPlan = () => {
  const axios = useAxiosPrivate();
  const navigate = useNavigate();

  const mutation = useMutation({
    mutationFn: async ({ Id, data }: { Id: number; data: MealPlanTable }) => {
      const response = await axios.patch(
        `${APIChannel.MEAL_PLAN_ID.replace(":Id", Id.toString())}`,
        data,
      );
      return response.data;
    },
    onSuccess: () => {
      displayToast(Success.m00004, ToastType.success);
      navigate(RouteChannel.NUTRITIONIST_MEAL);
    },
    onError: (error: any) => {
      displayToast(
        error?.response?.data?.message || error.message,
        ToastType.error,
      );
    },
  });

  const update = useCallback(
    (Id: number = 0, data: MealPlanTable = MealPlanInitial) => {
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

export default useUpdateMealPlan;
