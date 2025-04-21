import { Error } from "../../../../shared";
import { APIChannel, QueryKey, ToastType } from "../../../../types";
import { displayToast } from "../../../../utils";
import { useAxiosPrivate } from "../../../useAxiosPrivate";
import { useQuery } from "@tanstack/react-query";

const useGetAllMyMealPlan = (
  Filter: string,
  Page: number = 1,
  User: number = 0,
) => {
  const axios = useAxiosPrivate();
  const { data, isLoading, error, refetch } = useQuery({
    queryKey: [QueryKey.MY_MEAL_PLAN, Filter, User],
    queryFn: async () => {
      ``;
      const response = await axios.get(
        `${APIChannel.MY_MEAL_PLAN_FILTER.replace(":user", User.toString()).replace(":filter", Filter).replace(":page", Page.toString())}`,
      );
      //console.log("Response:", response);
      return response?.data?.data || [];
    },
    enabled: !!Filter && !!Page && !!User,
  });
  if (error) displayToast(data?.data?.message || Error.m00003, ToastType.error);
  return {
    data,
    isLoading,
    error,
    refetch,
  };
};
export default useGetAllMyMealPlan;
