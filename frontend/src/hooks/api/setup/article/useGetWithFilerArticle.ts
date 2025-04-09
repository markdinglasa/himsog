import { Error } from "../../../../shared";
import { APIChannel, QueryKey, ToastType } from "../../../../types";
import { displayToast } from "../../../../utils";
import { useAxiosPrivate } from "../../../useAxiosPrivate";
import { useQuery } from "@tanstack/react-query";

const useGetAllValidatedArticle = (
  Filter: string = "all",
  Page: number = 1,
) => {
  const axios = useAxiosPrivate();
  const { data, isLoading, error, refetch } = useQuery({
    queryKey: [QueryKey.ARTICLE, Filter],
    queryFn: async () => {
      ``;
      const response = await axios.get(
        `${APIChannel.ARTICLE_FILTER.replace(":filter", Filter).replace(":page", Page.toString())}`,
      );
      //console.log("Response:", response);
      return response?.data?.data || [];
    },
    enabled: !!Filter && !!Page,
  });
  if (error) displayToast(data?.data?.message || Error.m00003, ToastType.error);
  return {
    data,
    isLoading,
    error,
    refetch,
  };
};
export default useGetAllValidatedArticle;
