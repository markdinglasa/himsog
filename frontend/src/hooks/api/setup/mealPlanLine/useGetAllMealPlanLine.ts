import { Error } from "../../../../shared";
import { APIChannel, QueryKey, ToastType } from "../../../../types";
import { displayToast } from "../../../../utils";
import { useAxiosPrivate } from "../../../useAxiosPrivate";
import { useQuery } from "@tanstack/react-query";

const useGetAllMealPlanLine = (
  MealPlanId: number = 0,
  IsActive: number = 0,
) => {
  const axios = useAxiosPrivate();
  const { data, isLoading, error } = useQuery({
    queryKey: [QueryKey.MEAL_PLAN_LINE, MealPlanId, IsActive],
    queryFn: async () => {
      const response = await axios.get(
        `${APIChannel.MEAL_PLAN_LINE_PARENT.replace(":MealPlanId", MealPlanId.toString()).replace(":IsActive", String(IsActive))}`,
      );
      return response?.data?.data || [];
    },
    enabled: !!MealPlanId,
  });
  // console.log("DATA:", data);
  if (error) displayToast(data?.message || Error.m00003, ToastType.error);
  return {
    data,
    isLoading,
    error,
  };
};
export default useGetAllMealPlanLine;
