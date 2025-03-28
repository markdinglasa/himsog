import { useCallback } from "react";
import {
  APIChannel,
  NotificationTable,
  QueryKey,
  ToastType,
} from "../../../../types";
import { displayToast } from "../../../../utils";
import { useAxiosPrivate } from "../../../useAxiosPrivate";
import { Success } from "../../../../shared";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const useAddNotification = () => {
  const axios = useAxiosPrivate();

  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: async (data: NotificationTable) => {
      const response = await axios.post(`${APIChannel.NOTIFICATION}`, data);
      return response.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [QueryKey.NOTIFICATION_IS_NOTIFY],
      });
      queryClient.invalidateQueries({
        queryKey: [QueryKey.NOTIFICATION],
      });
      displayToast(Success.m00002, ToastType.success);
      //navigate(RouteChannel.ADMIN_REQUEST_ACCESS);
    },
    onError: (error: any) => {
      displayToast(
        error?.response?.data?.message || error.message,
        ToastType.error,
      );
    },
  });

  const add = useCallback(
    (data: NotificationTable) => {
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

export default useAddNotification;
