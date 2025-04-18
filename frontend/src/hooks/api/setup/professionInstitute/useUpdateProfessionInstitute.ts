import { useCallback } from "react";
import {
  APIChannel,
  ToastType,
  QueryKey,
  ProfessionInstituteTable,
  ProfessionInstituteInitial,
} from "../../../../types";
import { displayToast } from "../../../../utils";
import { useAxiosPrivate } from "../../../useAxiosPrivate";
import { Success } from "../../../../shared";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const useUpdateProfessionInstitute = () => {
  const axios = useAxiosPrivate();
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: async ({
      Id,
      data,
    }: {
      Id: number;
      data: ProfessionInstituteTable;
    }) => {
      const response = await axios.patch(
        `${APIChannel.PROFESSION_INSTITUTE_ID.replace(":Id", Id.toString())}`,
        data,
      );
      return response.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [QueryKey.PROFESSION_INSTITUTE],
      });
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
      data: ProfessionInstituteTable = ProfessionInstituteInitial,
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

export default useUpdateProfessionInstitute;
