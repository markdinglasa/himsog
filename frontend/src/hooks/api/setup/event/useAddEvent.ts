import { useCallback } from "react";
import {
  APIChannel,
  EventTable,
  QueryKey,
  Roles,
  ToastType,
} from "../../../../types";
import { displayToast, renderPath } from "../../../../utils";
import { useAxiosPrivate } from "../../../useAxiosPrivate";
import { useNavigate } from "react-router-dom";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useAuth } from "../../../useAuth";

const useAddEvent = () => {
  const axios = useAxiosPrivate();
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { auth } = useAuth();
  const path = renderPath(auth?.roles as Roles);
  const mutation = useMutation({
    mutationFn: async (data: EventTable) => {
      const response = await axios.post(`${APIChannel.EVENT}`, data);
      return response.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [QueryKey.EVENT],
      });
      displayToast(
        "Event successfully submitted for validation",
        ToastType.success,
      );
      navigate(`${path}/event`);
    },
    onError: (error: any) => {
      displayToast(
        error?.response?.data?.message || error.message,
        ToastType.error,
      );
    },
  });

  const add = useCallback(
    (data: EventTable) => {
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

export default useAddEvent;
