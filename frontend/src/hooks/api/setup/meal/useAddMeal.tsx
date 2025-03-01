import { useCallback } from "react";
import {
  APIChannel,
  RouteChannel,
  ToastType,
  MealTable,
} from "../../../../types";
import { displayToast } from "../../../../utils";
import { useAxiosPrivate } from "../../../useAxiosPrivate";
import { useNavigate } from "react-router-dom";
import { Success } from "../../../../shared";
import { useMutation } from "@tanstack/react-query";

const useAddMeal = () => {
  const axios = useAxiosPrivate();
  const navigate = useNavigate();

  const mutation = useMutation({
    mutationFn: async (data: MealTable) => {
      const response = await axios.post(`${APIChannel.MEAL}`, data);
      return response.data;
    },
    onSuccess: () => {
      displayToast(Success.m00002, ToastType.success);
      navigate(RouteChannel.NUTRITIONIST_MEAL);
    },
    onError: (error: any) => {
      displayToast(
        error?.response?.data?.message || error.message,
        ToastType.error,
      );
    },
  });

  const add = useCallback(
    (data: MealTable) => {
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

export default useAddMeal;
