import { useCallback, useRef } from "react";
import { APIChannel, Chat, QueryKey, Roles } from "../../../../types";
import { useAxiosPrivate } from "../../../useAxiosPrivate";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { renderPath } from "../../../../utils";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../useAuth";

const useAddChat = () => {
  const navigate = useNavigate();
  const axios = useAxiosPrivate();
  const queryClient = useQueryClient();
  const IdRef = useRef(0);
  const { auth } = useAuth();
  const path = renderPath(auth?.roles as Roles);
  const mutation = useMutation({
    mutationFn: async (data: Chat) => {
      const response = await axios.post(`${APIChannel.CHAT}`, data);
      if (response.data.data) IdRef.current = response?.data?.data?.Id ?? 0;
      return response.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [QueryKey.CHAT],
      });
      queryClient.invalidateQueries({
        queryKey: [QueryKey.CONVO],
      });
      navigate(`${path}/messenger/${IdRef.current}`);
    },
    onError: (error: any) => {
      console.log("chat-error:", error);
      /*displayToast(
        error?.response?.data?.message || error.message,
        ToastType.error,
      );*/
    },
  });

  const add = useCallback(
    (data: Chat) => {
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

export default useAddChat;
