import { useCallback } from "react";
import {
  APIChannel,
  EventInitial,
  EventTable,
  QueryKey,
  Roles,
  ToastType,
} from "../../../../types";
import { displayToast, renderPath } from "../../../../utils";
import { useAxiosPrivate } from "../../../useAxiosPrivate";
import { useNavigate } from "react-router-dom";
import { Success } from "../../../../shared";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useAuth } from "../../../useAuth";

const useUpdateEvent = () => {
  const axios = useAxiosPrivate();
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { auth } = useAuth();
  const path = renderPath(auth?.roles as Roles);

  const mutation = useMutation({
    mutationFn: async ({ Id, data }: { Id: number; data: EventTable }) => {
      const response = await axios.patch(
        `${APIChannel.EVENT_ID.replace(":Id", Id.toString())}`,
        data,
      );
      return response.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [QueryKey.EVENT],
      });
      displayToast(Success.m00004, ToastType.success);
      navigate(`${path}/event`);
    },
    onError: (error: any) => {
      displayToast(
        error?.response?.data?.message || error.message,
        ToastType.error,
      );
    },
  });

  const update = useCallback(
    (Id: number = 0, data: EventTable = EventInitial) => {
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

export default useUpdateEvent;
