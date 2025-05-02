import { useCallback } from "react";
import { APIChannel, ToastType, UserMealPlan } from "../../../../types";
import { displayToast } from "../../../../utils";
import { useAxiosPrivate } from "../../../useAxiosPrivate";
import { Success } from "../../../../shared";
import { useMutation } from "@tanstack/react-query";

const useAddUserMealPlan = () => {
  const axios = useAxiosPrivate();

  const mutation = useMutation({
    mutationFn: async (data: UserMealPlan) => {
      const response = await axios.post(`${APIChannel.USER_MEAL_PLAN}`, data);
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
    (data: UserMealPlan) => {
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
