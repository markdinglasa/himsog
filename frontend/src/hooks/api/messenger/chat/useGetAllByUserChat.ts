import { Error } from "../../../../shared";
import { APIChannel, QueryKey, ToastType } from "../../../../types";
import { displayToast } from "../../../../utils";
import { useAxiosPrivate } from "../../../useAxiosPrivate";
import { useQuery } from "@tanstack/react-query";

const useGetAllByUserChat = (UserId: number = 0) => {
  const axios = useAxiosPrivate();
  const { data, isLoading, error } = useQuery({
    queryKey: [QueryKey.CHAT, UserId], // Unique key for the query, including the Id
    queryFn: async () => {
      const response = await axios.get(
        `${APIChannel.CHAT_USER.replace(":Id", UserId.toString())}`,
      );
      //console.log("Response:", response);
      return response?.data?.data || [];
    },
    enabled: !!UserId, // Only fetch data if Id is provided
  });
  if (error) displayToast(data?.data?.message || Error.m00003, ToastType.error);
  return {
    data,
    isLoading,
    error,
  };
};
export default useGetAllByUserChat;
