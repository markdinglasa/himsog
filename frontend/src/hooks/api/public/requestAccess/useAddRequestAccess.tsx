import { useCallback } from "react";
import { APIChannel, ToastType, RequestAccessTable } from "../../../../types";
import { displayToast } from "../../../../utils";
import { Success } from "../../../../shared";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";

const useAddRequestAccess = () => {
  const mutation = useMutation({
    mutationFn: async (data: RequestAccessTable) => {
      const response = await axios.post(`${APIChannel.REQUEST_ACCESS}`, data, {
        withCredentials: true,
        headers: { "Content-Type": "application/json" },
      });
      return response.data;
    },
    onSuccess: () => {
      displayToast(Success.m000010, ToastType.success);
    },
    onError: (error: any) => {
      displayToast(
        error?.response?.data?.message || error.message,
        ToastType.error,
      );
    },
  });

  const add = useCallback(
    (data: RequestAccessTable) => {
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

export default useAddRequestAccess;
