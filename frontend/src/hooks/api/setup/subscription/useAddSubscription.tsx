import { useCallback } from "react";
import {
  APIChannel,
  RouteChannel,
  SubscriptionTable,
  ToastType,
} from "../../../../types";
import { displayToast } from "../../../../utils";
import { useAxiosPrivate } from "../../../useAxiosPrivate";
import { useNavigate } from "react-router-dom";
import { Success } from "../../../../shared";
import { useMutation } from "@tanstack/react-query";

const useAddSubscription = () => {
  const axios = useAxiosPrivate();
  const navigate = useNavigate();

  const mutation = useMutation({
    mutationFn: async (data: SubscriptionTable) => {
      const response = await axios.post(`${APIChannel.SUBSCRIPTION}`, data);
      return response.data;
    },
    onSuccess: () => {
      displayToast(Success.m00002, ToastType.success);
      navigate(RouteChannel.ADMIN_SUBSCRIPTION);
    },
    onError: (error: any) => {
      displayToast(
        error?.response?.data?.message || error.message,
        ToastType.error,
      );
    },
  });

  const add = useCallback(
    (data: SubscriptionTable) => {
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

export default useAddSubscription;
