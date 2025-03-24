import { Error } from "../../../../shared";
import { APIChannel, QueryKey, ToastType } from "../../../../types";
import { displayToast } from "../../../../utils";
import { useAxiosPrivate } from "../../../useAxiosPrivate";
import { useQuery } from "@tanstack/react-query";

const useGetAllRecipeLine = (RecipeId: number = 0) => {
  const axios = useAxiosPrivate();
  const { data, isLoading, error } = useQuery({
    queryKey: [QueryKey.RECIPE_LINE],
    queryFn: async () => {
      const response = await axios.get(
        `${APIChannel.RECIPE_LINE_PARENT.replace(":Id", RecipeId.toString())}`,
      );
      //console.log("Response:", response);
      return response?.data?.data || [];
    },
    enabled: !!RecipeId,
  });
  // console.log("DATA:", data);
  if (error) displayToast(data?.message || Error.m00003, ToastType.error);
  return {
    data,
    isLoading,
    error,
  };
};
export default useGetAllRecipeLine;
