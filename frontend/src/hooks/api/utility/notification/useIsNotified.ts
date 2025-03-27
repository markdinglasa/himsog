import { Error } from "../../../../shared";
import { APIChannel, QueryKey, ToastType } from "../../../../types";
import { displayToast } from "../../../../utils";
import { useAxiosPrivate } from "../../../useAxiosPrivate";
import { useQuery } from "@tanstack/react-query";

const useIsNotified = (UserId: number = 0) => {
  const axios = useAxiosPrivate();
  const { data, isLoading, error, refetch } = useQuery({
    queryKey: [QueryKey.NOTIFICATION_IS_NOTIFY, UserId], // Unique key for the query, including the Id
    queryFn: async () => {
      const response = await axios.get(
        `${APIChannel.NOTIFICATION_HAS_NOTIFICATION.replace(":Id", UserId.toString())}`,
      );
      //console.log("Response:", response);
      return response?.data?.data || [];
    },
    enabled: !!UserId, // Only fetch data if Id is provided
  });
  if (error) displayToast(data?.data?.message || Error.m00003, ToastType.error);

  return {
    data,
    isLoading,
    error,
    refetch,
  };
};
export default useIsNotified;
