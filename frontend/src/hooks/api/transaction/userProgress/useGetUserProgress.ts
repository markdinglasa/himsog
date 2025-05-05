import { Error } from "../../../../shared";
import { APIChannel, QueryKey, ToastType } from "../../../../types";
import { displayToast } from "../../../../utils";
import { useAxiosPrivate } from "../../../useAxiosPrivate";
import { useQuery } from "@tanstack/react-query";

const useGetUserProgress = (Id: number = 0) => {
  const axios = useAxiosPrivate();
  const { data, isLoading, error, refetch } = useQuery({
    queryKey: [QueryKey.USER_PROGRESS, Id], // Unique key for the query, including the Id
    queryFn: async () => {
      const response = await axios.get(
        `${APIChannel.USER_PROGRESS_ID.replace(":Id", Id.toString())}`,
      );
      //console.log("Response:", response);
      return response?.data?.data || {};
    },
    enabled: !!Id, // Only fetch data if Id is provided
  });
  if (error) displayToast(data?.data?.message || Error.m00003, ToastType.error);
  return {
    data,
    isLoading,
    error,
    refetch,
  };
};
export default useGetUserProgress;
