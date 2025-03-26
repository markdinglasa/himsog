import { useCallback } from "react";
import {
  APIChannel,
  ToastType,
  SubscriptionLineTable,
  QueryKey,
} from "../../../../types";
import { displayToast } from "../../../../utils";
import { useAxiosPrivate } from "../../../useAxiosPrivate";
import { Success } from "../../../../shared";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const useAddSubscriptionLine = () => {
  const axios = useAxiosPrivate();
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: async (data: SubscriptionLineTable) => {
      const response = await axios.post(`${APIChannel.SUBSCRIPTION}`, data);
      return response.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [QueryKey.SUBSCRIPTION_LINE],
      });
      displayToast(Success.m00002, ToastType.success);
    },
    onError: (error: any) => {
      displayToast(
        error?.response?.data?.message || error.message,
        ToastType.error,
      );
    },
  });

  const add = useCallback(
    (data: SubscriptionLineTable) => {
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

export default useAddSubscriptionLine;
