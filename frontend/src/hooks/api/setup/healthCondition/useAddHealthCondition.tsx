import { useCallback } from "react";
import { APIChannel, ToastType, HealthConditionTable } from "../../../../types";
import { displayToast } from "../../../../utils";
import { useAxiosPrivate } from "../../../useAxiosPrivate";
import { Success } from "../../../../shared";
import { useMutation } from "@tanstack/react-query";

const useAddHealthCondition = () => {
  const axios = useAxiosPrivate();

  const mutation = useMutation({
    mutationFn: async (data: HealthConditionTable) => {
      const response = await axios.post(`${APIChannel.HEALTH_CONDITION}`, data);
      return response.data;
    },
    onSuccess: () => {
      displayToast(Success.m00002, ToastType.success);
    },
    onError: (error: any) => {
      displayToast(
        error?.response?.data?.message || error.message,
        ToastType.error,
      );
    },
  });

  const add = useCallback(
    (data: HealthConditionTable) => {
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

export default useAddHealthCondition;
