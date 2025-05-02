import { useCallback } from "react";
import { APIChannel, QueryKey } from "../../../../types";
import { useAxiosPrivate } from "../../../useAxiosPrivate";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const useMarkAsReadConvo = () => {
  const axios = useAxiosPrivate();
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: async ({ Id }: { Id: number }) => {
      const response = await axios.patch(
        `${APIChannel.CONVO_MARK_AS_READ.replace(":Id", Id.toString())}`,
      );
      console.log("mark-as-read-response:", response);
      return response.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [QueryKey.CONVO],
      });
      queryClient.invalidateQueries({
        queryKey: [QueryKey.NOTIFICATION_IS_NOTIFY],
      });
    },
    onError: (error: any) => {
      console.log("mark-as-read error:", error);
      /*displayToast(
        error?.response?.data?.message || error.message,
        ToastType.error,
      );*/
    },
  });

  const markAsRead = useCallback(
    (Id: number = 0) => {
      mutation.mutate({ Id });
    },
    [mutation],
  );

  return {
    data: mutation.data,
    isLoading: mutation.status === "pending",
    markAsRead,
  };
};

export default useMarkAsReadConvo;
