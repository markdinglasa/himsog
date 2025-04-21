import { useCallback, useRef } from "react";
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
  const IdRef = useRef(0);
  const mutation = useMutation({
    mutationFn: async (data: MealTable) => {
      const response = await axios.post(`${APIChannel.MEAL}`, data);
      //console.log(response.data);
      if (response.data.data) IdRef.current = response?.data?.data?.Id ?? 0;
      return response.data.data;
    },
    onSuccess: () => {
      // displayToast(Success.m00002, ToastType.success);
      // console.log("Id", IdRef.current);
      navigate(
        RouteChannel.NUTRITIONIST_MEAL_NEW_DETAILS.replace(
          ":Id",
          String(IdRef.current),
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
