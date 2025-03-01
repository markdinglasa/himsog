import { useCallback } from "react";
import {
  APIChannel,
  RouteChannel,
  ToastType,
  HealthInitial,
  HealthTable,
} from "../../../../types";
import { displayToast } from "../../../../utils";
import { useAxiosPrivate } from "../../../useAxiosPrivate";
import { useNavigate } from "react-router-dom";
import { Success } from "../../../../shared";
import { useMutation } from "@tanstack/react-query";

const useUpdateHealth = () => {
  const axios = useAxiosPrivate();
  const navigate = useNavigate();

  const mutation = useMutation({
    mutationFn: async ({ Id, data }: { Id: number; data: HealthTable }) => {
      const response = await axios.patch(
        `${APIChannel.HEALTH_ID.replace(":Id", Id.toString())}`,
        data,
      );
      return response.data;
    },
    onSuccess: () => {
      displayToast(Success.m00004, ToastType.success);
      navigate(RouteChannel.CLIENT_HEALTH);
    },
    onError: (error: any) => {
      displayToast(
        error?.response?.data?.message || error.message,
        ToastType.error,
      );
    },
  });

  const update = useCallback(
    (Id: number = 0, data: HealthTable = HealthInitial) => {
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

export default useUpdateHealth;
