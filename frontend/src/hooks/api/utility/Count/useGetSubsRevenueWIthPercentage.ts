import { Error } from "../../../../shared";
import { APIChannel, QueryKey, ToastType } from "../../../../types";
import { displayToast } from "../../../../utils";
import { useAxiosPrivate } from "../../../useAxiosPrivate";
import { useQuery } from "@tanstack/react-query";

const useGetAdminSusbcriptionMonthlyRevenueWithPercentage = (Year: number) => {
  const axios = useAxiosPrivate();
  const { data, isLoading, error, refetch } = useQuery({
    queryKey: [
      QueryKey.ADMIN_SUBSCRIPTION_MONTHLY_REVENUE_WITH_PERCENTAGE,
      Year,
    ], // Unique key for the query, including the Id
    queryFn: async () => {
      const response = await axios.get(
        `${APIChannel.ADMIN_SUBSCRIPTION_MONTHLY_REVENUE_WITH_PERCENTAGE.replace(":year", Year.toString())}`,
      );
      //console.log("Response:", response);
      return response?.data?.data || [];
    },
    enabled: !!Year,
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
