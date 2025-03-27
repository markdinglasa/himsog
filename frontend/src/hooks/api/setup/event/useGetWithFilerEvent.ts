import { Error } from "../../../../shared";
import {
  APIChannel,
  EventFilter,
  QueryKey,
  ToastType,
} from "../../../../types";
import { displayToast } from "../../../../utils";
import { useAxiosPrivate } from "../../../useAxiosPrivate";
import { useQuery } from "@tanstack/react-query";

const useGetAllInvalidatedEvent = (Filter: EventFilter) => {
  const axios = useAxiosPrivate();
  const { data, isLoading, error } = useQuery({
    queryKey: [QueryKey.EVENT, Filter],
    queryFn: async () => {
      const response = await axios.get(
        `${APIChannel.EVENT_FILTER.replace(":Id", Filter)}`,
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
  };
};
export default useGetAllInvalidatedEvent;
