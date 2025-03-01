import { Error } from "../../../../shared";
import { APIChannel, QueryKey, ToastType } from "../../../../types";
import { displayToast } from "../../../../utils";
import { useAxiosPrivate } from "../../../useAxiosPrivate";
import { useQuery } from "@tanstack/react-query";

const useGetReminder = (Id: string) => {
  const axios = useAxiosPrivate();
  const { data, isLoading, error } = useQuery({
    queryKey: [QueryKey.REMINDER, Id], // Unique key for the query, including the Id
    queryFn: async () => {
      const response = await axios.get(
        `${APIChannel.REMINDER_PARENT.replace(":Id", Id.toString())}`,
      );
      //console.log("Response:", response);
      return response?.data?.data || [];
    },
    enabled: !!Id, // Only fetch data if Id is provided
  });
  if (error) displayToast(data?.data?.message || Error.m00003, ToastType.error);
  return {
    data,
    isLoading,
    error,
  };
};
export default useGetReminder;
