import { useCallback } from "react";
import {
  APIChannel,
  ArticleTable,
  QueryKey,
  Roles,
  RouteChannel,
  ToastType,
} from "../../../../types";
import { displayToast, renderPath } from "../../../../utils";
import { useAxiosPrivate } from "../../../useAxiosPrivate";
import { useNavigate } from "react-router-dom";
// import { Success } from "../../../../shared";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useAuth } from "../../../useAuth";

const useAddArticle = () => {
  const axios = useAxiosPrivate();
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { auth } = useAuth();
  const path = renderPath(auth.roles as Roles);
  const mutation = useMutation({
    mutationFn: async (data: ArticleTable) => {
      const response = await axios.post(`${APIChannel.ARTICLE}`, data);
      return response.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [QueryKey.ARTICLE],
      });
      displayToast(
        "Health article is submitted for validation.",
        ToastType.success,
      );
      navigate(`${path}${RouteChannel.ARTICLE}`);
    },
    onError: (error: any) => {
      displayToast(
        error?.response?.data?.message || error.message,
        ToastType.error,
      );
    },
  });

  const add = useCallback(
    (data: ArticleTable) => {
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

export default useAddArticle;
