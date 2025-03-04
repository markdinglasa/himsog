import { Error } from "../../../../shared";
import {
  APIChannel,
  HealthConditionTables,
  QueryKey,
  ToastType,
} from "../../../../types";
import { displayToast } from "../../../../utils";
import { useAxiosPrivate } from "../../../useAxiosPrivate";
import { useQuery } from "@tanstack/react-query";

const useGetAllHealthCondition = (Id: string) => {
  const axios = useAxiosPrivate();
  const { data, isLoading, error } = useQuery({
    queryKey: [QueryKey.HEALTH_CONDITION],
    queryFn: async () => {
      const response: HealthConditionTables = (
        await axios.get(
          `${APIChannel.HEALTH_CONDITION_PARENT.replace(":Id", Id.toString())}`,
        )
      ).data?.data;
      //console.log("Response:", response);
      return response || [];
    },
    enabled: !!Id,
  });
  // console.log("DATA:", data);
  if (error) displayToast(Error.m00003, ToastType.error);
  return {
    data,
    isLoading,
    error,
  };
};
export default useGetAllHealthCondition;
