import { useCallback } from "react";
import {
  APIChannel,
  QueryKey,
  ToastType,
  UserProgress,
} from "../../../../types";
import { displayToast } from "../../../../utils";
import { useAxiosPrivate } from "../../../useAxiosPrivate";
import { Success } from "../../../../shared";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const useAddUserProgress = () => {
  const axios = useAxiosPrivate();
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: async (data: UserProgress) => {
      const response = await axios.post(`${APIChannel.USER_PROGRESS}`, data);
      return response.data;
    },
    onSuccess: () => {
      displayToast(Success.m00000, ToastType.success);
      queryClient.invalidateQueries({ queryKey: [QueryKey.USER_PROGRESS] });
    },
    onError: (error: any) => {
      displayToast(
        error?.response?.data?.message || error.message,
        ToastType.error,
      );
    },
  });

  const add = useCallback(
    (data: UserProgress) => {
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

export default useAddUserProgress;
