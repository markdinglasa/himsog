import { useCallback } from "react";
import {
  APIChannel,
  RouteChannel,
  ToastType,
  ProfessionTable,
} from "../../../../types";
import { displayToast } from "../../../../utils";
import { useAxiosPrivate } from "../../../useAxiosPrivate";
import { useNavigate } from "react-router-dom";
import { Success } from "../../../../shared";
import { useMutation } from "@tanstack/react-query";

const useAddProfession = (
  IsSetup: boolean,
  Redirect: RouteChannel,
  IsRedirect: boolean = false,
) => {
  const axios = useAxiosPrivate();
  const navigate = useNavigate();

  const mutation = useMutation({
    mutationFn: async (data: ProfessionTable) => {
      const response = await axios.post(`${APIChannel.PROFESSION}`, data);
      return response.data;
    },
    onSuccess: () => {
      if (!IsSetup) {
        displayToast(Success.m00002, ToastType.success);
        navigate(RouteChannel.NUTRITIONIST_PROFESSION);
      } else if (IsRedirect) navigate(Redirect);
    },
    onError: (error: any) => {
      displayToast(
        error?.response?.data?.message || error.message,
        ToastType.error,
      );
    },
  });

  const add = useCallback(
    (data: ProfessionTable) => {
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

export default useAddProfession;
