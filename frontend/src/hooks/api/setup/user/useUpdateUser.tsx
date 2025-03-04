import { useCallback } from "react";
import {
  APIChannel,
  Roles,
  RouteChannel,
  ToastType,
  UserInitial,
  UserTable,
} from "../../../../types";
import { displayToast } from "../../../../utils";
import { useAxiosPrivate } from "../../../useAxiosPrivate";
import { useNavigate } from "react-router-dom";
import { Success } from "../../../../shared";
import { useMutation } from "@tanstack/react-query";

const useUpdateUser = (
  IsSetup: boolean = false,
  Redirect: RouteChannel = RouteChannel.INDEX,
) => {
  const axios = useAxiosPrivate();
  const navigate = useNavigate();
  const mutation = useMutation({
    mutationFn: async ({ Id, data }: { Id: number; data: UserTable }) => {
      const response = await axios.patch(
        `${APIChannel.USER_ID.replace(":Id", Id.toString())}`,
        data,
      );
      console.log("response:", response);
      return response.data;
    },
    onSuccess: () => {
      if (!IsSetup) {
        displayToast(Success.m00004, ToastType.success);
      } else navigate(Redirect);
    },
    onError: (error: any) => {
      displayToast(
        error?.response?.data?.message || error.message,
        ToastType.error,
      );
    },
  });

  const update = useCallback(
    (Id: number = 0, data: UserTable = UserInitial) => {
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

export default useUpdateUser;
