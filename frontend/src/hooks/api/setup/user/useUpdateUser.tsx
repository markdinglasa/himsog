import { useCallback } from "react";
import {
  APIChannel,
  QueryKey,
  RouteChannel,
  ToastType,
  UserInitial,
  UserTable,
} from "../../../../types";
import { displayToast } from "../../../../utils";
import { useAxiosPrivate } from "../../../useAxiosPrivate";
import { useNavigate } from "react-router-dom";
import { Success } from "../../../../shared";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const useUpdateUser = (
  IsSetup: boolean = false,
  Redirect: RouteChannel = RouteChannel.INDEX,
  IsRedirect: boolean = false,
) => {
  const axios = useAxiosPrivate();
  const queryClient = useQueryClient();
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
    onSuccess: (_data, variables) => {
      const { Id } = variables;
      queryClient.invalidateQueries({ queryKey: [QueryKey.USER, Id] });
      if (!IsSetup) {
        displayToast(Success.m00004, ToastType.success);
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
