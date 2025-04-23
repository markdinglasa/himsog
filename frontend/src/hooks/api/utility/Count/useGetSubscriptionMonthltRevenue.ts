import { Error } from "../../../../shared";
import { APIChannel, QueryKey, ToastType } from "../../../../types";
import { displayToast } from "../../../../utils";
import { useAxiosPrivate } from "../../../useAxiosPrivate";
import { useQuery } from "@tanstack/react-query";

const useGetAdminSusbcriptionMonthlyRevenue = () => {
  const axios = useAxiosPrivate();
  const { data, isLoading, error, refetch } = useQuery({
    queryKey: [QueryKey.ADMIN_SUBSCRIPTION_MONTHLY_REVENUE], // Unique key for the query, including the Id
    queryFn: async () => {
      const response = await axios.get(
        `${APIChannel.ADMIN_SUBSCRIPTION_MONTHLY_REVENUE}`,
      );
      //console.log("Response:", response);
      return response?.data?.data || [];
    },
  });
  if (error) displayToast(data?.data?.message || Error.m00003, ToastType.error);
  return {
    data,
    isLoading,
    error,
    refetch,
  };
};
export default useGetAdminSusbcriptionMonthlyRevenue;
