import { useCallback } from "react";
import { Error } from "../../../../shared";
import { APIChannel, QueryKey, Roles, ToastType } from "../../../../types";
import { displayToast, renderPath } from "../../../../utils";
import { useAxiosPrivate } from "../../../useAxiosPrivate";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useAuth } from "../../../useAuth";
import { useNavigate } from "react-router-dom";

const useRemoveChat = () => {
  const axios = useAxiosPrivate();
  const queryClient = useQueryClient();
  const { auth } = useAuth();
  const path = renderPath(auth?.roles as Roles);
  const navigate = useNavigate();
  const mutation = useMutation({
    mutationFn: async ({ Id }: { Id: number }) => {
      const response = await axios.delete(
        APIChannel.CHAT_ID.replace(":Id", Id.toString()),
      );
      // console.log("Response:", response.data);
      return response.data?.data ?? false; // Ensure response is valid
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [QueryKey.CHAT],
      });
      queryClient.invalidateQueries({
        queryKey: [QueryKey.CONVO],
      });
      navigate(`${path}/messenger/0`);
    },
    onError: (error: any) => {
      displayToast(error?.message || Error.m00003, ToastType.error);
    },
  });

  const remove = useCallback(
    (Id: number) => {
      if (Id === 0) return; // Corrected the condition
      mutation.mutate({ Id });
    },
    [mutation],
  );

  return {
    data: mutation.isSuccess,
    isLoading: mutation.isPending, // Corrected mutation status
    remove,
  };
};

export default useRemoveChat;
