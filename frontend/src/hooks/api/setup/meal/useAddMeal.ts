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
import { useMutation } from "@tanstack/react-query";

const useAddMeal = () => {
  const axios = useAxiosPrivate();
  const navigate = useNavigate();
  let Id = 0;
  const mutation = useMutation({
    mutationFn: async (data: MealTable) => {
      const response = await axios.post(`${APIChannel.MEAL}`, data);
      console.log(response.data);
      if (response.data) Id = response.data.Id;
      return response.data;
    },
    onSuccess: () => {
      // displayToast(Success.m00002, ToastType.success);
      navigate(
        RouteChannel.NUTRITIONIST_MEAL_NEW_DETAILS.replace(
          ":Id",
          Id.toString(),
        ),
      );
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
