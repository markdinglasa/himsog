import { useCallback } from "react";
import {
  APIChannel,
  ProfessionRatingInitial,
  ProfessionRatingTable,
  ToastType,
} from "../../../../types";
import { displayToast } from "../../../../utils";
import { useAxiosPrivate } from "../../../useAxiosPrivate";
import { Success } from "../../../../shared";
import { useMutation } from "@tanstack/react-query";

const useUpdateProfessionRating = () => {
  const axios = useAxiosPrivate();

  const mutation = useMutation({
    mutationFn: async ({
      Id,
      data,
    }: {
      Id: number;
      data: ProfessionRatingTable;
    }) => {
      const response = await axios.patch(
        `${APIChannel.PROFESSION_RATING_ID.replace(":Id", Id.toString())}`,
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
    (Id: number = 0, data: ProfessionRatingTable = ProfessionRatingInitial) => {
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

export default useUpdateProfessionRating;
