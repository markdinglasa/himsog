import { Error } from "../../../../shared";
import { APIChannel, QueryKey, ToastType } from "../../../../types";
import { displayToast } from "../../../../utils";
import { useAxiosPrivate } from "../../../useAxiosPrivate";
import { useQuery } from "@tanstack/react-query";

const useGetAllByAdminMealPlan = () => {
  const axios = useAxiosPrivate();
  const { data, isLoading, error, refetch } = useQuery({
    queryKey: [QueryKey.MEAL_PLAN],
    queryFn: async () => {
      const response = await axios.get(`${APIChannel.MEAL_PLAN}`);
      //console.log("Response:", response);
      return response?.data?.data || [];
    },
  });
  // console.log("DATA:", data);
  if (error) displayToast(data?.message || Error.m00003, ToastType.error);

  return {
    data,
    isLoading,
    error,
    refetch,
  };
};
export default useGetAllByAdminMealPlan;
