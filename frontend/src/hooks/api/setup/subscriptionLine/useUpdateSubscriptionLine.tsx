import { useCallback } from "react";
import {
  APIChannel,
  SubscriptionLineInitial,
  SubscriptionLineTable,
  ToastType,
} from "../../../../types";
import { displayToast } from "../../../../utils";
import { useAxiosPrivate } from "../../../useAxiosPrivate";
import { Success } from "../../../../shared";
import { useMutation } from "@tanstack/react-query";

const useUpdateSubscriptionLine = () => {
  const axios = useAxiosPrivate();

  const mutation = useMutation({
    mutationFn: async ({
      Id,
      data,
    }: {
      Id: number;
      data: SubscriptionLineTable;
    }) => {
      const response = await axios.patch(
        `${APIChannel.SUBSCRIPTION_LINE_ID.replace(":Id", Id.toString())}`,
        data,
      );
      return response.data;
    },
    onSuccess: () => {
      displayToast(Success.m00004, ToastType.success);
    },
    onError: (error: any) => {
      displayToast(
        error?.response?.data?.message || error.message,
        ToastType.error,
      );
    },
  });

  const update = useCallback(
    (Id: number = 0, data: SubscriptionLineTable = SubscriptionLineInitial) => {
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

export default useUpdateSubscriptionLine;
