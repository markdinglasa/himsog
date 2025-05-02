import { useCallback } from "react";
import { APIChannel, QueryKey, ToastType } from "../../../../types";
import { displayToast } from "../../../../utils";
import { useAxiosPrivate } from "../../../useAxiosPrivate";
import { Success } from "../../../../shared";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const useUpdateUserPhoto = () => {
  const axios = useAxiosPrivate();
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: async ({
      Id,
      data,
    }: {
      Id: number;
      data: { ProfilePhoto: string };
    }) => {
      const response = await axios.patch(
        `${APIChannel.USER_PHOTO.replace(":Id", Id.toString())}`,
        data,
      );
      console.log("response:", response);
      return response.data;
    },
    onSuccess: (_data, variables) => {
      const { Id } = variables;
      queryClient.invalidateQueries({ queryKey: [QueryKey.USER, Id] });
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
    (Id: number = 0, data: { ProfilePhoto: string }) => {
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

export default useUpdateUserPhoto;
