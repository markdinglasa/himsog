import { useCallback } from "react";
import {
  APIChannel,
  ToastType,
  ProfessionValidationTable,
  ProfessionValidationInitial,
} from "../../../../types";
import { displayToast } from "../../../../utils";
import { useAxiosPrivate } from "../../../useAxiosPrivate";
import { Success } from "../../../../shared";
import { useMutation } from "@tanstack/react-query";

const useUpdateProfessionValidation = () => {
  const axios = useAxiosPrivate();

  const mutation = useMutation({
    mutationFn: async ({
      Id,
      data,
    }: {
      Id: number;
      data: ProfessionValidationTable;
    }) => {
      const response = await axios.patch(
        `${APIChannel.PROFESSION_VALIDATION_ID.replace(":Id", Id.toString())}`,
        data,
      );
      return response.data;
    },
    onSuccess: () => {
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
    (
      Id: number = 0,
      data: ProfessionValidationTable = ProfessionValidationInitial,
    ) => {
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

export default useUpdateProfessionValidation;
