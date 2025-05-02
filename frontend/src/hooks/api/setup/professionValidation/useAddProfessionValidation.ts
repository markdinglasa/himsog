import { useCallback } from "react";
import {
  APIChannel,
  ToastType,
  ProfessionValidationTable,
} from "../../../../types";
import { displayToast } from "../../../../utils";
import { useAxiosPrivate } from "../../../useAxiosPrivate";
import { Success } from "../../../../shared";
import { useMutation } from "@tanstack/react-query";

const useAddProfessionValidation = () => {
  const axios = useAxiosPrivate();

  const mutation = useMutation({
    mutationFn: async (data: ProfessionValidationTable) => {
      const response = await axios.post(
        `${APIChannel.PROFESSION_VALIDATION}`,
        data,
      );
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
    (data: ProfessionValidationTable) => {
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

export default useAddProfessionValidation;
