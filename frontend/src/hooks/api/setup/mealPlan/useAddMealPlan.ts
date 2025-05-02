import { useCallback, useRef } from "react";
import {
  APIChannel,
  RouteChannel,
  ToastType,
  MealPlanTable,
  QueryKey,
} from "../../../../types";
import { displayToast } from "../../../../utils";
import { useAxiosPrivate } from "../../../useAxiosPrivate";
import { useNavigate } from "react-router-dom";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const useAddMealPlan = () => {
  const axios = useAxiosPrivate();
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const IdRef = useRef(0);
  const mutation = useMutation({
    mutationFn: async (data: MealPlanTable) => {
      const response = await axios.post(`${APIChannel.MEAL_PLAN}`, data);
      if (response.data.data) IdRef.current = response?.data?.data?.Id ?? 0;
      return response.data.data;
    },
    onSuccess: () => {
      navigate(
        RouteChannel.NUTRITIONIST_MEAL_PLAN_NEW_DETAILS.replace(
          ":Id",
          String(IdRef.current),
        ),
      );

      queryClient.invalidateQueries({ queryKey: [QueryKey.MEAL_PLAN] });
    },
    onError: (error: any) => {
      displayToast(
        error?.response?.data?.message || error.message,
        ToastType.error,
      );
    },
  });

  const add = useCallback(
    (data: MealPlanTable) => {
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

export default useAddMealPlan;
