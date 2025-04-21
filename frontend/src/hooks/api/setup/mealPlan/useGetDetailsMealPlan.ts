import { Error } from "../../../../shared";
import { APIChannel, QueryKey, ToastType } from "../../../../types";
import { displayToast } from "../../../../utils";
import { useAxiosPrivate } from "../../../useAxiosPrivate";
import { useQuery } from "@tanstack/react-query";

const useGetDetailsMealPlan = (UserId: number, MealPlanId: number) => {
  const axios = useAxiosPrivate();
  const { data, isLoading, error, refetch } = useQuery({
    queryKey: [QueryKey.MEAL_PLAN, UserId, MealPlanId],
    queryFn: async () => {
      ``;
      const response = await axios.get(
        `${APIChannel.MEAL_PLAN_DETAILS.replace(":UserId", UserId.toString()).replace(":MealPlanId", MealPlanId.toString())}`,
      );
      // console.log("Response:", response);
      return response?.data?.data || "Pending";
    },
    enabled: !!UserId && !!MealPlanId,
  });
  if (error) displayToast(data?.data?.message || Error.m00003, ToastType.error);
  return {
    data,
    isLoading,
    error,
    refetch,
  };
};
export default useGetDetailsMealPlan;
