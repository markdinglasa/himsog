import { useCallback } from "react";
import { APIChannel, ToastType, MedicalTable } from "../../../../types";
import { displayToast } from "../../../../utils";
import { useAxiosPrivate } from "../../../useAxiosPrivate";
import { useMutation } from "@tanstack/react-query";
import { Success } from "../../../../shared";

const useAddMedical = () => {
  const axios = useAxiosPrivate();
  let Id = 0;
  const mutation = useMutation({
    mutationFn: async (data: MedicalTable) => {
      const response = await axios.post(`${APIChannel.MEDICAL}`, data);
      // console.log(response.data);
      if (response.data) Id = response.data.Id;
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
    (data: MedicalTable) => {
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

export default useAddMedical;
