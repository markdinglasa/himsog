import { Error } from "../../../../shared";
import { APIChannel, QueryKey, ToastType } from "../../../../types";
import { displayToast } from "../../../../utils";
import { useAxiosPrivate } from "../../../useAxiosPrivate";
import { useQuery } from "@tanstack/react-query";

const useGetAdminSusbcriptionMonthlyRevenueWithPercentage = () => {
  const axios = useAxiosPrivate();
  const { data, isLoading, error, refetch } = useQuery({
    queryKey: [QueryKey.ADMIN_SUBSCRIPTION_MONTHLY_REVENUE_WITH_PERCENTAGE], // Unique key for the query, including the Id
    queryFn: async () => {
      const response = await axios.get(
        `${APIChannel.ADMIN_SUBSCRIPTION_MONTHLY_REVENUE_WITH_PERCENTAGE}`,
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
export default useGetAdminSusbcriptionMonthlyRevenueWithPercentage;
