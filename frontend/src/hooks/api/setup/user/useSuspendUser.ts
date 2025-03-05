import { useCallback } from "react";
import {
  APIChannel,
  QueryKey,
  ToastType,
  UserSuspend,
} from "../../../../types";
import { displayToast } from "../../../../utils";
import { useAxiosPrivate } from "../../../useAxiosPrivate";
import { Success } from "../../../../shared";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const useUpdateUserSuspend = () => {
  const axios = useAxiosPrivate();
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: async ({ Id, data }: { Id: number; data: UserSuspend }) => {
      const response = await axios.patch(
        `${APIChannel.USER_SUSPEND.replace(":Id", Id.toString())}`,
        data,
      );
      // console.log("response:", response);
      return response.data;
    },
    onSuccess: (data, variables) => {
      const { Id } = variables;
      console.log(data);
      queryClient.invalidateQueries({ queryKey: [QueryKey.USER, Id] });
      displayToast(data?.message || Success.m00000, ToastType.success);
    },
    onError: (error: any) => {
      displayToast(
        error?.response?.data?.message || error.message,
        ToastType.error,
      );
    },
  });

  const update = useCallback(
    (Id: number = 0, data: UserSuspend) => {
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

export default useUpdateUserSuspend;
