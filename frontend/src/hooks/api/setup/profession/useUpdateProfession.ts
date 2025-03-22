import { useCallback } from "react";
import {
  APIChannel,
  RouteChannel,
  ToastType,
  ProfessionInitial,
  ProfessionTable,
} from "../../../../types";
import { displayToast } from "../../../../utils";
import { useAxiosPrivate } from "../../../useAxiosPrivate";
import { useNavigate } from "react-router-dom";
import { Success } from "../../../../shared";
import { useMutation } from "@tanstack/react-query";

const useUpdateProfession = (
  IsSetup: boolean,
  Redirect: RouteChannel,
  IsRedirect = false,
) => {
  const axios = useAxiosPrivate();
  const navigate = useNavigate();

  const mutation = useMutation({
    mutationFn: async ({ Id, data }: { Id: number; data: ProfessionTable }) => {
      const response = await axios.patch(
        `${APIChannel.PROFESSION_ID.replace(":Id", Id.toString())}`,
        data,
      );
      return response.data;
    },
    onSuccess: () => {
      if (!IsSetup) {
        displayToast(Success.m00004, ToastType.success);
        if (IsRedirect) navigate(RouteChannel.NUTRITIONIST_PROFESSION);
      } else if (IsRedirect) navigate(Redirect);
    },
    onError: (error: any) => {
      displayToast(
        error?.response?.data?.message || error.message,
        ToastType.error,
      );
    },
  });

  const update = useCallback(
    (Id: number = 0, data: ProfessionTable = ProfessionInitial) => {
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

export default useUpdateProfession;
