import { useCallback } from "react";
import {
  APIChannel,
  NotificationInitial,
  NotificationTable,
  QueryKey,
  ToastType,
} from "../../../../types";
import { displayToast } from "../../../../utils";
import { useAxiosPrivate } from "../../../useAxiosPrivate";
// import { Success } from "../../../../shared";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const useUpdateNotification = () => {
  const axios = useAxiosPrivate();
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: async ({
      Id,
      data,
    }: {
      Id: number;
      data: NotificationTable;
    }) => {
      const response = await axios.patch(
        `${APIChannel.NOTIFICATION_ID.replace(":Id", Id.toString())}`,
        data,
      );
      return response.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [QueryKey.NOTIFICATION_IS_NOTIFY],
      });
      queryClient.invalidateQueries({
        queryKey: [QueryKey.NOTIFICATION],
      });
      // displayToast(Success.m00004, ToastType.success);
    },
    onError: (error: any) => {
      displayToast(
        error?.response?.data?.message || error.message,
        ToastType.error,
      );
    },
  });

  const update = useCallback(
    (Id: number = 0, data: NotificationTable = NotificationInitial) => {
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

export default useUpdateNotification;
