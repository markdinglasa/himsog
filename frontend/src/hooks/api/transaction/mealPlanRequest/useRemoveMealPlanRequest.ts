import { useCallback } from "react";
import { Error, Success } from "../../../../shared";
import { APIChannel, QueryKey, ToastType } from "../../../../types";
import { displayToast } from "../../../../utils";
import { useAxiosPrivate } from "../../../useAxiosPrivate";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const useRemoveMealPlanRequest = () => {
  const axios = useAxiosPrivate();
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: async ({ Id }: { Id: number }) => {
      const response = await axios.delete(
        APIChannel.MEAL_PLAN_REQUEST_ID.replace(":Id", Id.toString()),
      );
      // console.log("Response:", response.data);
      return response.data?.data ?? false; // Ensure response is valid
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [QueryKey.MEAL_PLAN_REQUEST],
      });
      displayToast(Success.m00003, ToastType.success);
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

export default useRemoveMealPlanRequest;
