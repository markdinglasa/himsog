import { Error } from "../../../../shared";
import { APIChannel, QueryKey, ToastType } from "../../../../types";
import { displayToast } from "../../../../utils";
import { useAxiosPrivate } from "../../../useAxiosPrivate";
import { useQuery } from "@tanstack/react-query";

const useGetWithFilterMealPlan = (
  UserId: number,
  Filter: string,
  Page: number = 1,
) => {
  const axios = useAxiosPrivate();
  const { data, isLoading, error, refetch } = useQuery({
    queryKey: [QueryKey.MEAL_PLAN, Filter, UserId],
    queryFn: async () => {
      ``;
      const response = await axios.get(
        `${APIChannel.MEAL_PLAN_FILTER.replace(":user", UserId.toString()).replace(":filter", Filter).replace(":page", Page.toString())}`,
      );
      //console.log("Response:", response);
      return response?.data?.data || [];
    },
    enabled: !!UserId && !!Filter && !!Page,
  });
  if (error) displayToast(data?.data?.message || Error.m00003, ToastType.error);
  return {
    data,
    isLoading,
    error,
    refetch,
  };
};
export default useGetWithFilterMealPlan;
