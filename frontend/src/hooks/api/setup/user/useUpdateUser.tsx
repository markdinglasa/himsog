import { useCallback } from "react";
import {
  APIChannel,
  Roles,
  RouteChannel,
  ToastType,
  UserInitial,
  UserTable,
} from "../../../../types";
import { displayToast, renderPath } from "../../../../utils";
import { useAxiosPrivate } from "../../../useAxiosPrivate";
import { useNavigate } from "react-router-dom";
import { Success } from "../../../../shared";
import { useMutation } from "@tanstack/react-query";
import { useAuth } from "../../../useAuth";

const useUpdateUser = (IsSetup: boolean = false) => {
  const axios = useAxiosPrivate();
  const navigate = useNavigate();
  const { auth } = useAuth();
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
        const path = renderPath(auth.roles as Roles);
        displayToast(Success.m00004, ToastType.success);
        navigate(path);
      } else navigate(RouteChannel.CLIENT_HEALTH_SETUP);
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
